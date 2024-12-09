import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Cuisin from './CuisinPage/Cuisin';
import CuisinTwo from './CuisinPage/CuisinTwo';
import CuisinThree from './CuisinPage/CuisinThree';

function About() {


    return (
        <>
            <Navbar />
        
                <Cuisin />
                <CuisinTwo/>
                <CuisinThree/>


     
        </>
    );
}

export default About;
