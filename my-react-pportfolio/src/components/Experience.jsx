import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import backgroundImage from '../assets/e-bak.jpg'



const Experience = () => {
  return (
    <div className="experience bg-cover bg-center bg-no-repeat bg-fixed h-screen relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center' }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center h-full">

    <div className="experience" >
    <h1 className='text-center font-bold text-4xl' style={{ color: '#fff' }}>Education & Experience</h1>
      <div className="vertical-timeline-container">
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - present"
            iconStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
           
          >
            <h3 className="vertical-timeline-element-title">Advanced Diploma in ICT App dev</h3>
            <h4 className="vertical-timeline-element-subtitle">CPUT</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2022"
            iconStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
           
          >
            <h3 className="vertical-timeline-element-title">Vaal Unviversity of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">National Diploma in IT</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - present"
            iconStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
           
          >
            <h3 className="vertical-timeline-element-title">Younglings Africa</h3>
            <h4 className="vertical-timeline-element-subtitle">Software development intern</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - 2024"
            iconStyle={{ background: "rgb(255,165,0)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">CapaCiTi(UVU Africa)</h3>
            <h4 className="vertical-timeline-element-subtitle">Software development intern</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Experience;
