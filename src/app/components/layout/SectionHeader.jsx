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
  showButton = true,
  variant = "default", // "default" or "horizontal"
}) => {
  if (variant === "horizontal") {
    return (
      <div className="mb-8">
        {/* Badge på egen række til venstre */}
        <div className="mb-1">
          <SectionBadge>{badgeText}</SectionBadge>
        </div>

        {/* Responsivt layout - stacked på small/medium, grid på large+ */}
        <div className="lg:grid lg:grid-cols-[3fr_auto_1fr] lg:gap-4">
          {/* Kolonne 1 - Overskrift */}
          <div className="mb-4 lg:mb-0">
            <h2 className="lg:place-items-end lg:justify-center text-[#333333]">
              {title}
            </h2>
          </div>
          
          {/* Kolonne 2 - Beskrivelsestekst */}
          <div className="mb-6 lg:mb-0 lg:flex lg:justify-center lg:place-items-end lg:max-w-md">
            <h6 className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
              {description}
            </h6>
          </div>

          {/* Kolonne 3 - Button */}
          {showButton && (
            <div className="flex justify-start md:justify-center lg:justify-end lg:items-end lg:pb-4">
              <YellowButton
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
    <div className="m-2 md:mb-8">
      {/* Responsivt layout for badge og button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
     
          <SectionBadge>{badgeText}</SectionBadge>
       
        {showButton && (
          <div className="flex justify-end sm:justify-center lg:justify-end">
            <YellowButton
              text={buttonText}
              href={buttonHref}
              size={buttonSize}
              direction={buttonDirection}
              variant={buttonVariant}
            />
          </div>
        )}
      </div>

      <h2 className="text-3xl md:text-4xl font-light text-[#333333] mb-6">
        {title}
      </h2>
      <h6 className=" text-gray-400 max-w-xl mb-6">
        {description}
      </h6>
    </div>
  );
};

export default SectionHeader;
