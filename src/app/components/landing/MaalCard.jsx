"use client";
import React from "react";
import Image from "next/image";
import StaticButton from "../ui/StaticButton";
import BulletList from "../layout/BulletList";
import SectionBadge from "../layout/SectionBadge";

const MaalCard = ({
  number = "01",
  title,
  description,
  items = [],
  buttonText = "Book samtale",
  buttonHref = "/kontakt",
  image,
  imageAlt
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden flex flex-col h-96
       w-84.   ">
        
        {/* Billede som baggrund med TilbyderCard styling - mere kvadratisk */}
        {image && (
          <div className="relative h-56 flex-shrink-0 overflow-hidden rounded-tl-[75px] rounded-tr-xl rounded-bl-xl rounded-br-xl">
            <Image src={image} alt={imageAlt || title} fill className="object-cover" />
            
            {/* Hover-responsive bullet list overlay - venstrejusteret */}
            {items && items.length > 0 && (
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-start p-6">
                <div className="text-white text-left">
                  <BulletList 
                    items={items.slice(0, 4)}
                    variant="hover-expand"
                    className="text-white"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* SectionBadge mellem billede og titel */}
        <div className="px-6 pt-4 pb-2">
          <SectionBadge 
            text={`0${number}`}
            className="inline-block"
          />
        </div>
        
        {/* Content område under SectionBadge */}
        <div className="px-6 pb-6 flex-1 flex flex-col">
          {/* Nummer badge hvis intet billede */}
          {!image && (
            <div className="mb-4">
              <SectionBadge 
                text={`0${number}`}
                className="inline-block"
              />
            </div>
          )}
          
          {/* Titel */}
          <h5 className="text-xl font-light text-[#333333] mb-3">
            {title}
          </h5>
          
          {/* Bullet list hvis intet billede */}
          {!image && items && items.length > 0 && (
            <div className="mb-6 flex-1">
              <BulletList 
                items={items.slice(0, 4)} 
                variant="hover-expand"
                className=""
              />
            </div>
          )}
          
          {/* CTA Button - højre placeret med direction right */}
          <div className="mt-auto flex justify-end">
            <StaticButton
              text={buttonText}
              href={buttonHref}
              variant="green"
              size="small"
              direction="right"
              iconDirection="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaalCard;
