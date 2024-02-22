import React from 'react';
import img1 from '../assets/project2.jpg';
import img2 from '../assets/project3.jpg';
import img3 from '../assets/project4.jpg';
import { FaGithub } from "react-icons/fa";
import '../index.css'; // Import CSS file for styling

const Portfolio = () => {
  return (
    <div className='p-10 md:p-20 flex flex-col items-center justify-center'>
    <h1 className='text-3xl md:text-5xl font-semibold mb-10 md:mb-20 leading-normal uppercase text-pink-800'>Projects</h1>
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">
      <div className="project-container">
        <img className="image-container" src={img1} alt="Project 1"/>
        <a href="#" className="project-button">
          <FaGithub className="mr-2" />
          Button 1
        </a>
      </div>
      <div className="project-container">
        <img className="image-container" src={img2} alt="Project 2"/>
        <a href="#" className="project-button">
          <FaGithub className="mr-2" />
          Button 2
        </a>
      </div>
      <div className="project-container">
        <img className="image-container" src={img3} alt="Project 3"/>
        <a href="#" className="project-button">
          <FaGithub className="mr-2" />
          Button 3
        </a>
      </div>
    </div>
  </div>
  
  );
}

export default Portfolio;
