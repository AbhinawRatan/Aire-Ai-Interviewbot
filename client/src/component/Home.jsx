import React from 'react'
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers'
import CTA from './cta/CTA';
import Brand from './brand/Brand'
import Navbar from './navbar/Navbar'


import '../App.css';


const Home = () => (
  <div className="Home">
    <div className=" gradient-05">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Footer />
  </div>
);

export default Home;
