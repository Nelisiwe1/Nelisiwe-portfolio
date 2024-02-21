import React from 'react';
import img from '../assets/about.png';
import '../index.css';

const About = () => {
  return (
    <div id="About">
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-center font-bold text-5xl">About</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        <img
          src={img}
          width={290}
          height={290}
          className="rounded-3xl border-2 p-1 border-fuchsia-500 img_glow mb-8 lg:mb-0"
        />
        <div className="lg:px-10 lg:py-0 py-20 text-center lg:text-start">
          <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
            <p>
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
                <div className="flex space-x-2">
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container rounded-3xl border-2 p-1 border-fuchsia-500 img_glow mb-8 lg:mb-0 mt-4 mt-8 lg:mt-4" style={{ marginTop: '-80px' }}>
        <h1 class='text-center font-bold text-3xl'>Skills</h1>
        <div class="skill-box mt-4">
          <span class="title">HTML</span>
          <div class="skill-bar">
            <span class="skill-per html">
              <span class="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div class="skill-box mt-4">
          <span class="title">CSS</span>
          <div class="skill-bar">
            <span class="skill-per css">
              <span class="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div class="skill-box mt-4">
          <span class="title">JavaScript</span>
          <div class="skill-bar">
            <span class="skill-per javascript">
              <span class="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div class="skill-box mt-4">
          <span class="title">Java</span>
          <div class="skill-bar">
            <span class="skill-per Java">
              <span class="tooltip">40%</span>
            </span>
          </div>
        </div>
        <div class="skill-box mt-4">
          <span class="title">Python</span>
          <div class="skill-bar">
            <span class="skill-per python">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
