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
  buttonSize = "small",
  showButton = true,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full">
      {/* Billede som baggrund med bullet list overlay */}
      {image && (
        <div className="relative h-48 sm:h-56 md:h-64">
          <Image src={image} alt={title} fill className="object-cover" />
          
          {/* Bullet list overlay på billedet */}
          {items && items.length > 0 && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
              <div className="text-white">
                <BulletList 
                  items={items}
                  variant="simple"
                  className="text-white"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Overskrift under billedet */}
      <CardHeader
        number="01"
        title={title}
        description={description}
        variant="light"
      />

      {/* Content area med button */}
      <div className="p-4 sm:p-6 md:p-8">
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
