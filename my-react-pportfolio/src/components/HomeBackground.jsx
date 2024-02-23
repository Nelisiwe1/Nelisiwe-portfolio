import React from 'react';

export const Homebackground = () => {
  return (
    <div className="relative h-full w-full">
      <video
        className="h-full w-full object-cover absolute top-0 left-0"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        preload="auto"
        style={{ zIndex: -1 }}
      >
        <source src="/home.mp4" type="video/webm" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"></div>
    </div>
  );
};

export default Homebackground;
