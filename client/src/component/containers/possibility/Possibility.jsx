import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get Started with Aire</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p className='text_format'>Practice, iterate, and improve your interview skills with Aire, the ultimate tool for interview success. Engage in realistic mock interviews, receive expert feedback, and refine your responses.</p>
      <h4>Ignite your interview skills with Aire</h4>
    </div>
  </div>
);

export default Possibility;
