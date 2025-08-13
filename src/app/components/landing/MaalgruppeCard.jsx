import React from "react";
import BulletList from "../layout/BulletList";

const MaalgruppeCard = ({ gruppe }) => {
  // Forskellige accent farver for hver card
  const getAccentColor = (number) => {
    const colors = {
      "01": "bg-emerald-500",
      "02": "bg-blue-500", 
      "03": "bg-purple-500",
      "04": "bg-orange-500"
    };
    return colors[number] || colors["01"];
  };

  const accentColor = getAccentColor(gruppe.number);

  return (
    <div className="group cursor-pointer h-full">
      <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-gray-100">
        
        {/* Floating nummer badge - øverst til højre */}
        <div className="absolute -top-3 -right-3 z-10">
          <div className={`${accentColor} text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-xl`}>
            {gruppe.number}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 h-full flex flex-col">
          
          {/* Stor titel med colorful accent */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-bold text-xl leading-tight mb-2">
              {gruppe.title || gruppe.label}
            </h3>
            <div className={`w-16 h-1 ${accentColor} rounded-full`}></div>
          </div>

          {/* Clean spacing før bullet liste */}
          <div className="flex-1">
            <BulletList items={gruppe.items} variant="clean" />
          </div>

          {/* Bottom accent element */}
          <div className="mt-6 flex justify-center">
            <div className={`w-8 h-1 ${accentColor} rounded-full opacity-30`}></div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className={`absolute inset-0 ${accentColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
      </div>
    </div>
  );
};

export default MaalgruppeCard;
