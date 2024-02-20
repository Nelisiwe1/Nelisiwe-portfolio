import React from 'react';
import img1 from '../assets/project2.jpg';
import img2 from '../assets/project3.jpg';
import img3 from '../assets/project4.jpg';
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center'>
    <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fruchsia-800'>Projects</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <div className="flex flex-col items-center justify-center">
            <img height={300} width={300} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 h-36 w-44 border-2 border-orange-800 b_glow" src={img1} alt=""/>
            <button className="bg-black-500 text-white py-2 px-4 w-44 flex items-center justify-center">
                <FaGithub className="mr-2" />
                Button
            </button>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img height={300} width={300} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 h-36 w-44 border-2 border-orange-800 b_glow" src={img2} alt=""/>
            <button className="bg-black-500 text-white py-2 px-4 w-44 flex items-center justify-center">
                <FaGithub className="mr-2" />
                Button
            </button>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img height={300} width={300} className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 h-36 w-44 border-2 border-orange-800 b_glow" src={img3} alt=""/>
            <button className="bg-black-500 text-white py-2 px-4 w-44 flex items-center justify-center">
                <FaGithub className="mr-2" />
                Button
            </button>
        </div> 
    </div>
</div>

  )
}

export default Portfolio;