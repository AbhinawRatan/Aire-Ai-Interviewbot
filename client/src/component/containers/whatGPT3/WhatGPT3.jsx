import React from 'react';
import Feature from '../../feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Aire" text="Aire is a revolutionary platform that combines the power of OpenAI's ChatGPT 3.5 and Langchain to provide a seamless, real-time interview experience. Elevate your skills, engage dynamically, and unlock your potential with Aire's cutting-edge technology." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="OpenAI" text="Our website leverages the power of OpenAI to deliver an exceptional interview preparation platform, empowering users to enhance their skills and excel in job interviews." />
      <Feature title="Pinecone" text="Pinecone powers the intelligent search capabilities on our website, enabling users to efficiently navigate through vast interview question databases with lightning-fast results" />
      <Feature title="GPT 3.5" text="ChatGPT 3.5 Turbo drives the interactive conversation experience on our website, allowing users to engage in dynamic and natural interview simulations with intelligent responses." />
    </div>
  </div>
);

export default WhatGPT3;
