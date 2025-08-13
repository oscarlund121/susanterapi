import React from "react";

const MaalgruppeButtons = ({ maalgrupper, activeCard, onCardSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {maalgrupper.map((gruppe, index) => (
        <button
          key={index}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
            index === activeCard
              ? 'bg-sage-500 text-white shadow-lg border-sage-500 scale-105'
              : 'bg-white/60 text-text-secondary hover:bg-white/80 border-sage-200/50 hover:border-sage-300/50 hover:scale-102'
          }`}
          onClick={() => onCardSelect(index)}
        >
          {gruppe.label}
        </button>
      ))}
    </div>
  );
};

export default MaalgruppeButtons;


