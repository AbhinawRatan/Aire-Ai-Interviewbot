import React from 'react';
import './cta.css';
import { NavLink } from 'react-router-dom';
const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button>
    <NavLink to="/Aire">Get Started</NavLink>
    </button>
    </div>
  </div>
);

export default CTA;
