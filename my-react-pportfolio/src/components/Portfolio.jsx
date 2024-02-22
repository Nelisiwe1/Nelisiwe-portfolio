import React from 'react';
import img1 from '../assets/project2.jpg';
import img2 from '../assets/project3.jpg';
import img3 from '../assets/project4.jpg';
import { FaGithub } from "react-icons/fa";
import '../index.css'; // Import CSS file for styling

const Portfolio = () => {
  return (
    <div className='p-10 md:p-20 flex flex-col items-center justify-center'>
    <h1 className='text-3xl md:text-5xl font-semibold mb-10 md:mb-20 leading-normal uppercase text-black-800'>Projects</h1>
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">
    <div class="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
    <img class="image-container" src={img1} alt="Project 3"/>
    <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="#" class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 1C5.375 1 0 6.375 0 13c0 5.625 3.875 10.375 9.125 12-.625-1.125-1.125-2.5-1.125-4 0-3.125 2.625-5.75 5.75-5.75 1.375 0 2.625.5 3.625 1.25.375-.125.875-.25 1.25-.375C18.375 15.875 20 13.25 20 10c0-6.625-5.375-12-12-12zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.375 0-2.75-.25-4-.75-.5-.125-1-.25-1.5-.375-.375-.125-.875-.25-1.25-.375-2.625-.75-4.75-2.375-5.875-4.5 1.125-2.125 3.25-3.75 5.875-4.5.375-.125.875-.25 1.25-.375.5-.125 1-.25 1.5-.375C9.25 5.25 10.625 5 12 5zm-4.125 2.875c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875z"></path>
            </svg>
            Button 3
        </a>
    </button>
</div>
      <div class="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
    <img class="image-container" src={img2} alt="Project 3"/>
    <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="#" class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 1C5.375 1 0 6.375 0 13c0 5.625 3.875 10.375 9.125 12-.625-1.125-1.125-2.5-1.125-4 0-3.125 2.625-5.75 5.75-5.75 1.375 0 2.625.5 3.625 1.25.375-.125.875-.25 1.25-.375C18.375 15.875 20 13.25 20 10c0-6.625-5.375-12-12-12zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.375 0-2.75-.25-4-.75-.5-.125-1-.25-1.5-.375-.375-.125-.875-.25-1.25-.375-2.625-.75-4.75-2.375-5.875-4.5 1.125-2.125 3.25-3.75 5.875-4.5.375-.125.875-.25 1.25-.375.5-.125 1-.25 1.5-.375C9.25 5.25 10.625 5 12 5zm-4.125 2.875c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875z"></path>
            </svg>
            Button 3
        </a>
    </button>
</div>
      <div class="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
    <img class="image-container" src={img3} alt="Project 3"/>
    <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="#" class="flex items-center">
            <svg class="w-18 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 1C5.375 1 0 6.375 0 13c0 5.625 3.875 10.375 9.125 12-.625-1.125-1.125-2.5-1.125-4 0-3.125 2.625-5.75 5.75-5.75 1.375 0 2.625.5 3.625 1.25.375-.125.875-.25 1.25-.375C18.375 15.875 20 13.25 20 10c0-6.625-5.375-12-12-12zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.375 0-2.75-.25-4-.75-.5-.125-1-.25-1.5-.375-.375-.125-.875-.25-1.25-.375-2.625-.75-4.75-2.375-5.875-4.5 1.125-2.125 3.25-3.75 5.875-4.5.375-.125.875-.25 1.25-.375.5-.125 1-.25 1.5-.375C9.25 5.25 10.625 5 12 5zm-4.125 2.875c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875zm2.75 0c-.5 0-1 .375-1.25.875-.25.5-.25 1.125 0 1.625.25.5.75.875 1.25.875s1-.375 1.25-.875c.25-.5.25-1.125 0-1.625-.25-.5-.75-.875-1.25-.875z"></path>
            </svg>
            Button 3
        </a>
    </button>
</div>



    </div>
  </div>
  
  );
}

export default Portfolio;
