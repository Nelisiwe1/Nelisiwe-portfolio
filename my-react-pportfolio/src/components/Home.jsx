import React from 'react';
import Homebackground from './Homebackground';

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Text Content */}
      <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-5xl inline-block p-2">
          <span className="border-black border-4 noto-serif">Nelisiwe Ngqeme</span>
        </h1>
        <p className="noto-serif">Software developer.</p>
        {/* Add your social media icons here if needed */}
      </div>

      {/* Background Video */}
      <Homebackground />

      {/* Image Overlay */}
      <div className="image-overlay">
        <img src="hero-image.webp" alt="Overlay" className="overlay-image" />
      </div>
    </div>
  );
};

export default Home;
