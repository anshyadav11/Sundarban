import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router'; // Import 'Routes' and 'Route' from 'react-router'
import Home from './Home';
import InteractiveStory from './InteractiveStory';
import Questions from './Questions';
import Gallery from './Gallery';
import About from './About';
import Navbar from './Navbar';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactive-story" element={<InteractiveStory />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
