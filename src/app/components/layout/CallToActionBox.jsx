"use client";
import React from "react";
import StaticButton from "../ui/StaticButton";

const CallToActionBox = ({
  title,
  buttonText = "Book en session",
  buttonHref = "/kontakt",
  buttonVariant = "green",
  buttonSize = "small",
  buttonDirection = "left",
  buttonAlwaysOpen = true
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="bg-[#1cc18e]/50 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h4 className="text-base md:text-lg font-light text-white leading-relaxed flex-1">
            {title}
          </h4>
          <div className="flex items-end justify-end flex-shrink-0">
            <StaticButton 
              href={buttonHref}
              text={buttonText}
              variant={buttonVariant}
              size={buttonSize}
              direction={buttonDirection}
              iconDirection="right" 
              alwaysOpen={buttonAlwaysOpen}
              textColor="white"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBox;
