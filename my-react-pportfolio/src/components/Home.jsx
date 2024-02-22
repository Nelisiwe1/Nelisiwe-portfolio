import React from 'react';
import Homebackground from './Homebackground';

const Home = () => {
  return (
    <div>
    <div className="relative h-screen">
      {/* Text Content */}
      <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-5xl inline-block p-2 noto-serif mb-4">
          Nelisiwe<span className='text-orange'> Ngqeme</span>
        </h1>
        <p className="noto-serif mb-4">Software developer.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mb-4">
  <a href="https://www.instagram.com">
    <img src="insta.png" alt="Instagram" className="w-10 h-10 mr-4" />
  </a>
  <a href="www.linkedin.com/in/nelisiwe-ngqeme-90373b225">
    <img src="link.png" alt="LinkedIn" className="w-10 h-10 mr-4" />
  </a>
  <a href="https://github.cohttps://github.com/Nelisiwe1?tab=repositoriesm">
    <img src="git.png" alt="GitHub" className="w-10 h-10" />
  </a>
</div>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2">
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
    </div>
  );
};

export default Home;
