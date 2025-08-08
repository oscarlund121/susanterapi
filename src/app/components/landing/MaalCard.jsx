"use client";
import React from "react";
import StaticButton from "../ui/StaticButton";
import BulletList from "../layout/BulletList";

const MaalCard = ({
  number = "01",
  title,
  description,
  items = [],
  buttonText = "Book samtale",
  buttonHref = "/kontakt"
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white overflow-hidden flex flex-col h-80 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        
        {/* Content område */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Nummer badge øverst */}
          <div className="mb-4">
            <span className="inline-block text-xs px-3 py-2 border border-[#333333] text-[#333333] rounded-bl-full rounded-tr-full rounded-br-full font-medium">
              {number}
            </span>
          </div>
          
          {/* Titel */}
          <h3 className="text-xl font-light text-[#333333] mb-3">
            {title}
          </h3>
          
          {/* 3-4 vigtigste bullet points */}
          <div className="mb-6 flex-1">
            <BulletList 
              items={items.slice(0, 4)} 
              className=""
            />
          </div>
          
          {/* CTA Button */}
          <div className="mt-auto">
            <StaticButton
              text={buttonText}
              href={buttonHref}
              variant="green"
              size="small"
              direction="left"
              iconDirection="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaalCard;
