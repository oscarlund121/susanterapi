"use client";
import React from "react";
import YellowButton from "../ui/YellowButton";

const CallToActionBox = ({
  title,
  buttonText = "Kontakt mig",
  buttonHref = "/kontakt",
  buttonVariant = "yellow",
  buttonSize = "small",
  buttonDirection = "left",
  buttonAlwaysOpen = true
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="bg-[#333333] px-6 py-4 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h4 className="text-base md:text-lg font-light text-white leading-relaxed flex-1">
            {title}
          </h4>
          <div className="flex items-end justify-end flex-shrink-0">
            <YellowButton 
              href={buttonHref}
              text={buttonText}
              variant={buttonVariant}
              size={buttonSize}
              direction={buttonDirection}
              alwaysOpen={buttonAlwaysOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBox;
