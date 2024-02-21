import React from 'react';
import img1 from '../assets/project2.jpg';
import img2 from '../assets/project3.jpg';
import img3 from '../assets/project4.jpg';

const Experience = () => {
  return (
    <div>
     <div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{backgroundImage: 'url("e-bak.jpg")'}}>
      <div className="bg-black bg-opacity-55 h-full flex items-center justify-center">
        {/* Your content goes here */}
        <div className='p-20 flex flex-col items-center justify-center'>
          <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fruchsia-800'>Projects</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
            <img height={300} width={300} className='"text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"' src={img1} alt="" />
            <img height={300} width={300} className='"text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"' src={img2} alt="" />
            <img height={300} width={300} className='"text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"' src={img3} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
