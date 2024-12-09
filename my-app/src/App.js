// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cuisin from './pages/Cuisin'
import Thrilling from './pages/Thrilling'

import Contact from './pages/ContactUs';

function App() {
  return (
    <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Trilling" element={<Thrilling />} />
            <Route path="/Cuisine" element={<Cuisin />} />
            
          </Routes>
     
        <Footer />
 
    </Router>
  );
}

export default App;
