"use client";
import React from "react";
import Image from "next/image";
import BulletList from "../layout/BulletList";
import CardHeader from "../ui/CardHeader";
import ReadMoreButton from "../ui/ReadMoreButton";
import YellowButton from "../ui/YellowButton";

const LandingMaalCard = ({
  title,
  items,
  description,
  image,
  buttonText = "Book en samtale",
  buttonHref = "/kontakt",
  buttonVariant = "green",
  buttonDirection = "left",
  buttonSize = "large",
  showButton = true,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full">
      {/* Billede header hvis billede er givet */}
      {image && (
        <div className="relative h-48  sm:h-56 md:h-64">
          <Image src={image} alt={title} fill className="object-cover" />
          
        </div>
      )}

      {/* Elegant header with gradient */}
      <CardHeader
        number="01"
        title={title}
        description={description}
        variant="light"
      />

      {/* Content area with organized sections */}
      <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 md:space-y-8">
        {/* Main content with better spacing */}
     
        {/* Call to action area */}
      
        
          <YellowButton
            text={buttonText}
            href={buttonHref}
            size={buttonSize}
            direction={buttonDirection}
            variant={buttonVariant}
          />
      
      </div>
    </div>
  );
};

export default LandingMaalCard;
