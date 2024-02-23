import React from 'react';
import TimelineCard from './TimelineCard';

const Timeline = ({ data, title }) => {
  
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid gap-4">
      {data && data.map((item, index) => (
        <TimelineCard
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
    </div>
  );
};

export default Timeline;
