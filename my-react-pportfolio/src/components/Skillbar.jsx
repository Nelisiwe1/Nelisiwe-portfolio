import React from 'react';

const SkillBar = ({ title, percentage }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-24">{title}</div>
      <div className="flex-1 h-4 bg-gray-200 rounded-md">
        <div
          className="h-full bg-blue-500 rounded-md"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div>{percentage}%</div>
    </div>
  );
};

export default SkillBar;
