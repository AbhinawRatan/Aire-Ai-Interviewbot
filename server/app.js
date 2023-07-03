const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  const data = {
    model: 'gpt-3.5-turbo',
    stream: true,
    stop: ['\n', '[DONE]'],
    temperature: 0.9,
    messages: [
      {
        role: 'system',
        content:
          'You are currently Aire the interview bot. Your first three inquiries will concern the candidate name, the job function they are preparing for, and their resume. You will then ask questions using this information in accordance with the following rules: Ask just one question at a time, and never, I repeat, never, ask a string of questions all at once, to create a realistic interview experience. After the interview, rate the applicant on a scale of 1 to 5 and make recommendations for improvement. Make an introduction first.',
      },
      {
        role: 'user',
        content:
          'You are currently Aire the interview bot. Your first three inquiries will concern the candidate name, the job function they are preparing for, and their resume. You will then ask questions using this information in accordance with the following rules: Ask just one question at a time, and never, I repeat, never, ask a string of questions all at once, to create a realistic interview experience. After the interview, rate the applicant on a scale of 1 to 5 and make recommendations for improvement. Make an introduction first.',
      },
    ],
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        messages: [...data.messages, ...messages],
      }),
    });

    response.body.on('data', (data) => {
      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
      for (const line of lines) {
        const message = line.replace(/^data: /, '');
        if (message === '[DONE]') {
          return res.end();
        }
        const { choices } = JSON.parse(message);
        const { content } = choices[0].delta || {};

        if (content) {
          res.write(content);
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.post('/api/title', async (req, res) => {
  try {
    const { title } = req.body;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        prompt: `Write a 3 words title for the following prompt: ${title}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const title = data?.choices?.[0]?.text;
      res.status(200).json({ title });
    } else {
      throw new Error('Failed to retrieve title');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
server.timeout = 3000000; // Set the server timeout to 3000000 milliseconds (50 minutes)