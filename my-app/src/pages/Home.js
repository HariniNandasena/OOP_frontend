import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Secone from './homePagesec/Secone';
import Sectwo from './homePagesec/Sectwo';
// import Secthree from './homePagesec/Secthree';

function Home() {
  const [bgIndex, setBgIndex] = useState(0);



  return (
    <>
      <Navbar />
        {/* First Section - Background Image Carousel */}
        <Secone/>

        {/* Second Section - About Section */}
        <Sectwo />

        {/* Services Section */}
        {/* <Secthree/> */}


  
    </>
  );
}

export default Home;
