"use client";
import React from "react";
import BulletList from "../layout/BulletList";
import CardHeader from "../ui/CardHeader";
import YellowButton from "../ui/YellowButton";

const LandingMaalCard = ({ 
  title, 
  items, 
  description,
  buttonText = "Læs mere", 
  buttonSize = "medium",
  href = "/ydelser"
}) => {
  
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border  hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Elegant header with gradient */}
      <CardHeader 
        number="01"
        title={title}
        description={description}
        variant="light"
      />
      
      {/* Content area with organized sections */}
      <div className="p-8 space-y-8">
        {/* Main content with better spacing */}
        <div className="space-y-6">
          <BulletList 
            items={items}
            variant="clean"
          />
        </div>
        
        {/* Call to action area */}
        <div className="flex justify-between items-center pt-6 border-t ">
          <div className="text-sm  font-light">
            Specialiseret vejledning
          </div>
          <YellowButton 
            text={buttonText}
            href={href}
            size={buttonSize}
            variant="green"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingMaalCard;
