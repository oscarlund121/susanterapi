"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TilbyderCard = ({
  number = "01", // Nyt prop for nummer
  title,
  image,
  imageAlt,
  variant = "default", // default, rounded, asymmetric
  buttonText = "Se mere",
  buttonHref = "/ydelser",
  showButton = true, // Ny prop til at vise/skjule button
  // Custom border radius props for image
  imageBorderRadius, // Direkte CSS string f.eks. "rounded-3xl"
  imageTopLeftRadius, // f.eks. "rounded-tl-[50px]"
  imageTopRightRadius, // f.eks. "rounded-tr-xl"
  imageBottomLeftRadius, // f.eks. "rounded-bl-xl"
  imageBottomRightRadius, // f.eks. "rounded-br-xl"
}) => {
  // Forskellige hjørne-styles for billedet baseret på props
  const getImageStyles = () => {
    // Hvis der er sendt en direkte imageBorderRadius prop
    if (imageBorderRadius) {
      return imageBorderRadius;
    }

    // Hvis der er sendt individuelle hjørne-props
    if (
      imageTopLeftRadius ||
      imageTopRightRadius ||
      imageBottomLeftRadius ||
      imageBottomRightRadius
    ) {
      return `${imageTopLeftRadius || ""} ${imageTopRightRadius || ""} ${
        imageBottomLeftRadius || ""
      } ${imageBottomRightRadius || ""}`.trim();
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
    <Link href={buttonHref} className="block group cursor-pointer">
      <div className="transition-all duration-300 hover:-translate-y-2">
        {/* Større billede uden borders - mere prominent */}
        <div className={`relative h-64 md:h-72 overflow-hidden rounded-2xl mb-6 ${getImageStyles()}`}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Subtil gradient overlay kun i bunden */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
          
          {/* Nummer badge - mere elegant placering */}
          <div className="absolute top-6 left-6">
            <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary font-bold text-base shadow-lg">
              {number}
            </div>
          </div>

          {/* Flydende titel på billedet */}
          <div className="absolute bottom-6 left-6 right-6">
            <h5 className="text-white text-xl font-semibold leading-tight drop-shadow-lg">
              {title}
            </h5>
          </div>
        </div>

        {/* Minimalistisk call-to-action under billedet */}
        <div className="px-2">
          <div className="flex items-center gap-3 text-sage-600 group-hover:text-sage-700 font-medium transition-all duration-300 group-hover:gap-4">
            <span className="text-base">Læs mere om behandlingen</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TilbyderCard;
