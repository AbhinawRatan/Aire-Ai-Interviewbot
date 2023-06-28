import React from 'react';
import Feature from '../../feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '1.Introduce yourself to Aire',
    text: 'Start the conversation with th Aire bot by introducing yourself your background and the job role you are preparing for.',
  },
  {
    title: '2.Explain the Job Role to AI',
    text: 'Explain the details of any job role you are preparing for Aire will use his huge set of database to currate a set of question for you.',
  },
  {
    title: '3.Set up an unique experience ',
    text: 'Aire will ask for your Resume to make set of customised question according to your work experience and porfolio using powerfull GPT 3.5 model.',
  },
  {
    title: '4.Get a Review of your existing skills',
    text: 'After having a healthy mock interview session with Aire get a set of score from your performance. Aire will give tips to improve and will also provide Resources to study',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
    <h1 className="gradient__text">Harness the Power of Aire to Navigate Your Path to <br /> Success.</h1>    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
