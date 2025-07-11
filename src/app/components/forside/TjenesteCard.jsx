import React from 'react';

const TjenesteCard = ({ title, description, index }) => {
  return (
    <div className="group py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-light text-gray-400 tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl lg:text-3xl font-light text-gray-800 leading-tight">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed font-light max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TjenesteCard;
