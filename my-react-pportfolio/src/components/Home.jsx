import React, { useState } from 'react';
import Homebackground from './HomeBackground';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <Homebackground/>

     

      

        {/* Text Content */}
        <div className="text-center text-white">
  <h1 className="text-5xl inline-block p-2">
    <span className="border-black border-4 noto-serif">Nelisiwe Ngqeme</span>
  </h1>
  <p className="noto-serif">Software developer.</p>
  <div className='img'>
  <img src="insta.png" alt=""/>
  <img src="git.png" alt=""/>
  <img src="link.png" alt=""/>
  </div>
</div>



      </div>

  );
};

export default Home;
