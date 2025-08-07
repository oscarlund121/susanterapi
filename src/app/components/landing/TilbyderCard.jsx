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
  buttonHref = "/ydelser",
  // Custom border radius props for image
  imageBorderRadius, // Direkte CSS string f.eks. "rounded-3xl"
  imageTopLeftRadius,   // f.eks. "rounded-tl-[50px]"
  imageTopRightRadius,  // f.eks. "rounded-tr-xl"
  imageBottomLeftRadius, // f.eks. "rounded-bl-xl"
  imageBottomRightRadius // f.eks. "rounded-br-xl"
}) => {
  // Forskellige hjørne-styles for billedet baseret på props
  const getImageStyles = () => {
    // Hvis der er sendt en direkte imageBorderRadius prop
    if (imageBorderRadius) {
      return imageBorderRadius;
    }
    
    // Hvis der er sendt individuelle hjørne-props
    if (imageTopLeftRadius || imageTopRightRadius || imageBottomLeftRadius || imageBottomRightRadius) {
      return `${imageTopLeftRadius || ''} ${imageTopRightRadius || ''} ${imageBottomLeftRadius || ''} ${imageBottomRightRadius || ''}`.trim();
    }
    
    // Ellers brug variant system
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
      <div className="bg-white overflow-hidden flex flex-col h-76  rounded-xl">
        {/* Større billede med custom border radius */}
        <div className={`relative h-66 overflow-hidden ${getImageStyles()}`}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
        </div>
        
        {/* Kompakt content område */}
        <div className="p-4 flex-1 flex h-8 flex-col">
          <h5 className="text-lg font-light text-[#333333]  mb-1 underline-animate">
            {title}
          </h5>
          <div className="mt-auto">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilbyderCard;
