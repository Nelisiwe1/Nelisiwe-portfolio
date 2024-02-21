import React from 'react';
import Homebackground from './Homebackground';

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Text Content */}
      <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-5xl inline-block p-2 border-black border-4 noto-serif mb-4">
          Nelisiwe<span className='text-orange'> Ngqeme</span>
        </h1>
        <p className="noto-serif mb-4">Software developer.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mb-4">
          <img src="insta.png" alt="Instagram" className="w-10 h-10 mr-4" />
          <img src="link.png" alt="LinkedIn" className="w-10 h-10 mr-4" />
          <img src="location.png" alt="Location" className="w-10 h-10" />
        </div>

        {/* Buttons */}
        <div className="flex">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Download CV
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hire Me
          </button>
        </div>
      </div>

      {/* Background Video */}
      <Homebackground />

      {/* Image Overlay */}
      <div className="image-overlay">
        <img src="hero-b.webp" alt="Overlay" className="overlay-image" />
      </div>
    </div>
  );
};

export default Home;
