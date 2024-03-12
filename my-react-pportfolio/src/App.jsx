import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import AOS from 'aos';

function App() {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    });
  }, []);

  // State to manage sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sample data for education timeline
  const educationData = [
    {
      title: 'Advanced Diploma in ICT in Application Development',
      date: '2023 - present',
      description: 'Cape Peninsula University of Technology',
    },
    {
      title: 'National Diploma in Information Technology',
      date: '2019 - 2022',
      description: 'Vaal University of Technology',
    },
    {
      title: 'Matric',
      date: '2015 - 2018',
      description: 'Dinoto Technical Secondary School',
    },
  ];

  // Sample data for experience timeline
  const experienceData = [
    {
      title: 'Junior Software developer',
      date: '2024 - Present',
      description: 'Younglings Africa',
    },
    {
      title: 'Exhibition Volunteer',
      date: 'Summer 2023',
      description: 'SAIS23',
    },
    {
      title: 'Software Development Intern',
      date: '2023 - 2024',
      description: 'CapaCiti Tech Accelerator(UVU Africa).',
    },
  ];

  return (
    <>
      <Router>
        <div className="App">
          {/* Button to toggle sidebar */}
          
  <button className="openbtn" onClick={toggleSidebar}>
    <FontAwesomeIcon icon={faBars} size="2x" />
  </button>
          {/* Sidebar component */}
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          {/* Main content area */}
          <div className="content">
            {/* Define routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* Route for Timeline component */}
              <Route
                path="/timeline"
                element={
                 
<div class="background-image">
 <div class="float-right w-1/3 mt-8">
  <img src="ex.webp" alt="Experience pic" class="w-full h-auto"/>
</div>


    <h1 className="text-4xl font-bold mb-8 text-center">My Timeline</h1>
    {/* Timeline component */}
    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {/* Render Education and Experience timelines */}
    <Timeline title="Education" data={educationData} />
    <Timeline title="Experience" data={experienceData} />
  </div>
</div>

</div>

 }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
