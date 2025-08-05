"use client";
import React from "react";
import SectionBadge from "./SectionBadge";
import YellowButton from "../ui/YellowButton";

const SectionHeader = ({ 
  badgeText, 
  title, 
  description,
  buttonText = "Book en samtale",
  buttonHref = "/kontakt",
  buttonVariant = "green",
  buttonDirection = "left",
  buttonSize = "large",
  showButton = true
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <SectionBadge>{badgeText}</SectionBadge>
        {showButton && (
          <YellowButton 
            text={buttonText} 
            href={buttonHref} 
            size={buttonSize}
            direction={buttonDirection}
            variant={buttonVariant}
          />
        )}
      </div>
      
      <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
        {title}
      </h2>
      <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed mb-6">
        {description}
      </h6>
      <div className="w-20 h-0.5 bg-[#1cc18e] mb-4"></div>
    </div>
  );
};

export default SectionHeader;
