"use client";
import React from "react";
import SectionBadge from "./SectionBadge";
import StaticButton from "../ui/StaticButton";

const SectionHeader = ({
  badgeText,
  title,
  description,
  buttonText = "Book en samtale",
  buttonHref = "/kontakt",
  buttonVariant = "green",
  buttonDirection = "right",
  buttonSize = "large",
  showButton = true,
  variant = "default", // "default" or "horizontal"
}) => {
  if (variant === "horizontal") {
    return (
      <div className="mb-8">
        {/* Badge på egen række til venstre */}
        <div className="mb-2 ">
          <SectionBadge>{badgeText}</SectionBadge>
        </div>

        {/* Responsivt layout - stacked på small/medium, grid på large+ */}
        <div className="lg:grid lg:grid-cols-[3fr_auto_1fr] lg:gap-4">
          {/* Kolonne 1 - Overskrift */}
          <div className="mb-0">
            <h2 className="lg:place-items-start lg:justify-end text-[#333333]">
              {title}
            </h2>
          </div>

          {/* Kolonne 2 - Beskrivelsestekst */}
          <div className="mb-2 lg:mb-0 lg:flex lg:justify-center lg:place-items-end lg:max-w-md">
            <h6 className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
              {description}
            </h6>
          </div>

          {/* Kolonne 3 - Button */}
          {showButton && (
            <div className="flex justify-start  md:justify-end lg:items-end lg:pb-4">
              <StaticButton
                text={buttonText}
                href={buttonHref}
                size={buttonSize}
                direction={buttonDirection}
                variant={buttonVariant}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant (original layout)
  return (
    <div className="mb-8">
      {/* Badge */}
      <div className="mb-4">
        <SectionBadge>{badgeText}</SectionBadge>
      </div>
      
      {/* Titel */}
      <h2 className="text-3xl md:text-4xl font-light text-[#333333] mb-6">
        {title}
      </h2>
      
      {/* Beskrivelse og Button på samme linje */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h6 className="text-gray-400 max-w-xl leading-relaxed">
          {description}
        </h6>
        
        {showButton && (
          <div className="flex-shrink-0">
            <StaticButton
              text={buttonText}
              href={buttonHref}
              size={buttonSize}
              direction={buttonDirection}
              variant={buttonVariant}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
