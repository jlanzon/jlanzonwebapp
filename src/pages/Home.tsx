// src/pages/Home.tsx
import React from 'react';
import 'daisyui/dist/full.css';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to my Web Application!</h1>
      <p className="text-lg mb-4">
        This is the home page of the website. Feel free to browse around and explore the amazing content we've prepared for you.
      </p>
      <button className="btn btn-primary disabled">Learn More</button>
    </div>
  );
};

export default Home;
