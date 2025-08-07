"use client";
import React from "react";
import Image from "next/image";
import YellowButton from "../ui/YellowButton";

const TilbyderCard = ({
  title,
  image,
  imageAlt,
  variant = "default", // default, rounded, asymmetric
  buttonText = "Læs mere",
  buttonHref = "/ydelser"
}) => {
  // Forskellige hjørne-styles baseret på variant
  const getCardStyles = () => {
    switch (variant) {
      case "rounded":
        return "rounded-2xl";
      case "asymmetric":
        return "rounded-tl-[75px] rounded-tr-xl rounded-bl-xl rounded-br-xl";
      default:
        return "rounded-xl";
    }
  };

  return (
    <div className="group cursor-pointer">
      <div className={`bg-white overflow-hidden flex flex-col h-96 transition-transform duration-300 hover:scale-[1.02] ${getCardStyles()}`}>
        {/* Større billede med action icons */}
        <div className="relative h-66 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
        </div>
        
        {/* Kompakt content område */}
        <div className="p-4 flex-1 flex flex-col">
          <h5 className="text-lg font-light text-[#333333] mb-1 underline-animate">
            {title}
          </h5>
          <div className="mt-auto">
            <YellowButton 
              href={buttonHref}
              text={buttonText}
              variant="green"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilbyderCard;
