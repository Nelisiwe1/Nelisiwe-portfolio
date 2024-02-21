import React from 'react'

const Portfolio = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center'>
        <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fruchsia-800'>Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            <h2 className="text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">css</h2>
            <h2 className="text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">html</h2>
            <h2 className="text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">java</h2>
            <h2 className="text-[26px] flex items-center justify-center font-semi bold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">python</h2>


        </div>
    </div>
  )
}

export default Portfolio;