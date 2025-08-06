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
      <div className="flex justify-between items-center ">
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
      
      <h2 className=" font-light text-gray-800 mb-6">
        {title}
      </h2>
      <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed mb-6">
        {description}
      </h6>
    
    </div>
  );
};

export default SectionHeader;
