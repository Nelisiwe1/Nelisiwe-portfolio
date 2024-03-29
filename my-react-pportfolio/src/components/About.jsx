import React, { useEffect } from 'react';
import img from '../assets/about.png'; // Importing image asset
import AOS from 'aos'; // Importing AOS library for animations
import '../index.css'; // Importing CSS file for styling

const About = () => {
  // Initialize AOS animation library on component mount
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart', // Animation easing type
      delay: 0, // Animation delay
      duration: 750 // Animation duration
    });
  }, []);

  return (
    <div id="About" style={{ background: 'linear-gradient(90deg, #CCCCCC 0%, #E0E0E0 100%)' }}>
      {/* Section Title */}
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-center font-bold text-5xl">About</h1>
      </div>
      
      {/* Content Section */}
      <div data-aos='fade-up' className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
      <img
  src={img} // Image source
  width={290}
  height={290}
  className="rounded-3xl border-2 p-1 border-grey-300 img_glow mb-8 lg:mb-0 mt-4 lg:mt-0" // Added mt-4 for small screens and mt-0 for larger screens
  alt="About" // Image alt text
/>

        
        {/* Text Section */}
        <div className="lg:px-10 lg:py-0 py-20 text-center lg:text-start">
          <div data-aos='fade in' className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
            {/* About Text */}
            <p className='1xl'>
              I'm Nelisiwe Ngqeme, an IT enthusiast currently pursuing an
              advanced diploma in App Development after completing my IT
              diploma. I find immense joy in turning ideas into functional
              applications and am deeply passionate about learning and growing
              in this dynamic field. While I'm not yet a seasoned professional,
              my journey so far has equipped me with a strong foundation in app
              development, problem-solving, and a commitment to continuous
              learning. I'm excited about the possibilities this advanced
              diploma offers, focusing on mastering programming languages and
              exploring cutting-edge methodologies. Outside the IT world, I enjoy
              staying curious about technology's impact on society. Let's
              connect on LinkedIn to explore opportunities and share insights
              on our tech journeys
            </p>
            <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container rounded-3xl border-2 p-1 border-white-500 img_glow mb-8 lg:mb-0 mt-4 lg:mt-4" style={{ marginTop: '-80px' }}>
        <h1 className='text-center font-bold text-3xl'>Skills</h1>
        {/* Individual Skill Boxes */}
        <div className="skill-box mt-4">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box mt-4">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box mt-4">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box mt-4">
          <span className="title">Java</span>
          <div className="skill-bar">
            <span className="skill-per Java">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div className="skill-box mt-4">
          <span className="title">Python</span>
          <div className="skill-bar">
            <span className="skill-per python">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
