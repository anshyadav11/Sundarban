import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import './Home.css';
import bgv from './content/production_id_5079225 (1080p).mp4';


const Home = () => {
  return (
      <div className="home">
      <video src={bgv} autoPlay muted loop className="bgvi"/>

      <Card to="/interactive-story" text="Interactive Story" />
      <Card to="/questions" text="Questions" />
      <Card to="/Gallery" text="Gallery" />
      <Card to="/about" text="About" />
    </div>
  );
};

const Card = ({ to, text }) => {
  return (
    <a href={to} className="card">
      <div className="blob"></div>
      <div className="bg">
        {text}
      </div>
    </a>
  );
};

export default Home;

