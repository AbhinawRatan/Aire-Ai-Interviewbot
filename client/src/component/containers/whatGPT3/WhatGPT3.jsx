import React from 'react';
import Feature from '../../feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Aire" text="Aire transforms the way businesses conduct interviews. Our platform streamlines the interview process, providing a seamless experience that saves time and resources. With Aire, you can elevate your hiring strategy, uncover true talent, and make data-driven decisions." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title=" Interview Solutions" text="Our advanced interview platform is designed to cater to the unique needs of different corporate sectors. Whether it’s tech, finance, healthcare, or education, Aire provides tailored interview scenarios that resonate with your industry’s standards and requirements" />
      <Feature title="Candidate Engagement" text="Engage candidates with a dynamic interview experience that goes beyond traditional methods. Aire’s platform fosters a two-way interaction, allowing for a more in-depth understanding of the candidate's capabilities and fit for your corporate culture." />
      <Feature title="Insightful Analytics" text="Make informed hiring decisions with Aire’s comprehensive analytics. Gain insights into candidate performance, strengths, and areas for improvement. Our analytics help you identify the ideal candidates for your organization." />
    </div>
  </div>
);

export default WhatGPT3;
