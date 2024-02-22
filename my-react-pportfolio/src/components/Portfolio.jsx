import React, { useEffect } from 'react';
import img1 from '../assets/project2.jpg';
import img2 from '../assets/project3.jpg';
import img3 from '../assets/project4.jpg';
import AOS from 'aos';
import '../index.css'; // Import CSS file for styling

const Portfolio = () => {

    useEffect(() => {
        AOS.init({
          easing: 'ease-out-quart',
          delay: 0,
          duration: 750
        });
    }, []);

    return (
        <div className='p-10 md:p-20 flex flex-col items-center justify-center'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-10 md:mb-20 leading-normal uppercase text-black-800'>Projects</h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-20">
                <div data-aos='fade-up' className="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
                    <img className="image-container" src={img1} alt="Project 3"/>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="#" className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.284-.01-1.033-.015-2.026-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.088-.743.083-.728.083-.728 1.205.085 1.838 1.238 1.838 1.238 1.07 1.832 2.807 1.302 3.496.997.108-.777.42-1.303.764-1.605-2.67-.3-5.466-1.336-5.466-5.93 0-1.313.468-2.384 1.236-3.223-.124-.3-.536-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.533 11.533 0 0 1 3-.402 11.552 11.552 0 0 1 3 .402c2.292-1.552 3.298-1.23 3.298-1.23.654 1.652.242 2.876.118 3.176.77.839 1.234 1.91 1.234 3.223 0 4.607-2.8 5.625-5.475 5.918.43.37.814 1.102.814 2.218 0 1.605-.015 2.896-.015 3.287 0 .32.215.693.825.575C20.568 21.797 24 17.303 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd"/>
                            </svg>
                            Github
                        </a>
                    </button>
                    <div className="tooltip">Financial Calculator</div>
                </div>
                <div data-aos='fade-left' className="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
                    <img className="image-container" src={img2} alt="Project 3"/>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="#" className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.284-.01-1.033-.015-2.026-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.088-.743.083-.728.083-.728 1.205.085 1.838 1.238 1.838 1.238 1.07 1.832 2.807 1.302 3.496.997.108-.777.42-1.303.764-1.605-2.67-.3-5.466-1.336-5.466-5.93 0-1.313.468-2.384 1.236-3.223-.124-.3-.536-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.533 11.533 0 0 1 3-.402 11.552 11.552 0 0 1 3 .402c2.292-1.552 3.298-1.23 3.298-1.23.654 1.652.242 2.876.118 3.176.77.839 1.234 1.91 1.234 3.223 0 4.607-2.8 5.625-5.475 5.918.43.37.814 1.102.814 2.218 0 1.605-.015 2.896-.015 3.287 0 .32.215.693.825.575C20.568 21.797 24 17.303 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd"/>
                            </svg>
                            GitHub
                        </a>
                    </button>
                    <div className="tooltip">Metric convertor</div>
                </div>
                <div data-aos='fade-right' className="project-container border border-gray-300 rounded-lg p-4 mb-4 b_glow">
                    <img className="image-container" src={img3} alt="Project 3"/>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="#" className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.284-.01-1.033-.015-2.026-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.088-.743.083-.728.083-.728 1.205.085 1.838 1.238 1.838 1.238 1.07 1.832 2.807 1.302 3.496.997.108-.777.42-1.303.764-1.605-2.67-.3-5.466-1.336-5.466-5.93 0-1.313.468-2.384 1.236-3.223-.124-.3-.536-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.533 11.533 0 0 1 3-.402 11.552 11.552 0 0 1 3 .402c2.292-1.552 3.298-1.23 3.298-1.23.654 1.652.242 2.876.118 3.176.77.839 1.234 1.91 1.234 3.223 0 4.607-2.8 5.625-5.475 5.918.43.37.814 1.102.814 2.218 0 1.605-.015 2.896-.015 3.287 0 .32.215.693.825.575C20.568 21.797 24 17.303 24 12c0-6.628-5.372-12-12-12z" clipRule="evenodd"/>
                            </svg>
                            GitHub
                        </a>
                    </button>
                    <div className="tooltip">Tax Calculator</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
