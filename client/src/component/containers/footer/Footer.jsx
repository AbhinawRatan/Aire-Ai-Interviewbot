import React from 'react';
import gpt3Logo from '../../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text text-center">Step in to the future before others!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Aire - The Interview Bot</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p className="text-justify font-bold">The interview bot of future</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>ratanabhinaw@gmail.com</p>
        <p>+917523817665</p>
        <p>abhinaw.live</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Aire.Licensed under the MIT License.</p>
    </div>
  </div>
);

export default Footer;
