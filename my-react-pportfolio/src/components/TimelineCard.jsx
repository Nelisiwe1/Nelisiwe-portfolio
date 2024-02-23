import React from 'react';

const TimelineCard = ({ title, date, description }) => {
  return (
    <div className=" card bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
