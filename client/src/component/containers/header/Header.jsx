import React from 'react';
import people from '../../assets/people.png';
import ai2 from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className='gradient__text text-xl'>  Unleash your interview skills and Conquer <br />the Job Market</h1>
      <p className='gradient__text2'>Interview preparation can be stressful and time-consuming. <br /> Aire provides a comprehensive suite of personalized tools <br /> to help you interview with confidence.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} />
    </div>
  </div>
);

export default Header;
