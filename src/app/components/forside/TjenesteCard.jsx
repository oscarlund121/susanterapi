import React from 'react';

const TjenesteCard = ({ title, description, index }) => {
  return (
    <div className="group py-12 px-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="inline-block text-xs font-light text-gray-400 tracking-[0.2em] bg-gray-100/60 px-4 py-2">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl lg:text-3xl font-light text-gray-800 leading-tight tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed font-light max-w-md text-[15px] lg:text-base">
          {description}
        </p>
        
        {/* Subtle accent line */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-gray-300 to-transparent transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default TjenesteCard;
