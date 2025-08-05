"use client";
import React from "react";
import YellowButton from "../ui/YellowButton";

const YellowButtonVariants = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-light text-gray-800 mb-8">Button Varianter</h2>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Standard (Gul)</h3>
          <div className="flex gap-4 items-center">
            <YellowButton size="small" text="Lille" />
            <YellowButton text="Medium" />
            <YellowButton size="large" text="Stor" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Grøn Variant</h3>
          <div className="flex gap-4 items-center">
            <YellowButton variant="green" size="small" text="Lille" />
            <YellowButton variant="green" text="Medium" />
            <YellowButton variant="green" size="large" text="Stor" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Kun Ikon</h3>
          <div className="flex gap-4 items-center">
            <YellowButton iconOnly={true} size="small" />
            <YellowButton iconOnly={true} variant="green" size="small" />
            <YellowButton iconOnly={true} />
            <YellowButton iconOnly={true} variant="green" />
            <YellowButton iconOnly={true} size="large" />
            <YellowButton iconOnly={true} variant="green" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowButtonVariants;
