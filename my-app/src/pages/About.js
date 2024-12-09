import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import AboutOne from './aboutPageSec/AboutOne';
import AboutTwo from './aboutPageSec/AboutTwo';
import AboutThree from './aboutPageSec/AboutThree';

function About() {
  return (
    <>
      <Navbar />
   
        <AboutOne/>
        <AboutTwo/>
        <AboutThree/>



       
  
    </>
  );
}

export default About;
