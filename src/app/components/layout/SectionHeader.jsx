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
        <div className="mb-6">
          <SectionBadge>{badgeText}</SectionBadge>
        </div>

        {/* Overskrift, tekst og button på samme række */}
        <div className="grid grid-cols-[3fr_auto_1fr] gap-4 ">
          {/* Kolonne 1 - Overskrift */}
          <div>
            <h2 className="place-items-end justify-center   text-gray-800 ">
              {title}
            </h2>
          </div>
          
          {/* Kolonne 2 - Beskrivelsestekst */}
          <div className="flex justify-center place-items-end max-w-md">
            <h6 className="text-base md:text-lg font-light  text-gray-400 leading-relaxed">
              {description}
            </h6>
          </div>

          {/* Kolonne 3 - Button (fast bredde) */}
          {showButton && (
            <div className="flex justify-end items-end pb-4">
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
    <div className="mb-8">
      <div className="flex justify-between items-center">
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
      <h6 className="text-base md:text-lg font-light text-gray-400 max-w-xl leading-relaxed mb-6">
        {description}
      </h6>
    </div>
  );
};

export default SectionHeader;
