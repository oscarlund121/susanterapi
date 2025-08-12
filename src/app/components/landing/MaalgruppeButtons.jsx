import React from "react";

const MaalgruppeButtons = ({ maalgrupper, activeCard, onCardSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {maalgrupper.map((gruppe, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            index === activeCard
              ? 'bg-[#1cc18e] text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
