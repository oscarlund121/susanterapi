"use client";
import React from "react";

const CardHeader = ({ 
  number = "01", 
  title, 
  description, 
  variant = "green" 
}) => {
  const variants = {
    green: {
      bg: "bg-[#1cc18e]/10",
      border: "border-[#1cc18e]/20",
      text: "text-gray-800"
    },
    yellow: {
      bg: "bg-[#fff100]/10",
      border: "border-[#fff100]/20", 
      text: "text-gray-800"
    },
    light: {
      bg: "bg-[#1cc18e]/10",
      border: "border-[#1cc18e]/20",
      text: "text-gray-800"
    }
  };

  const currentVariant = variants[variant] || variants.green;

  return (
    <div className={`${currentVariant.bg} border-b ${currentVariant.border} p-6`}>
      <div className="flex items-center space-x-3 mb-3">
        <span className={`inline-block px-3 py-1 border rounded-bl-full rounded-tr-full rounded-br-full text-xs font-light ${
          variant === "green" ? "border-white/30 text-white" : "border-gray-800"
        }`}>
          {number}
        </span>
      </div>
      <h4 className={`text-xl font-light mb-2 ${currentVariant.text}`}>
        {title}
      </h4>
      <p className={`text-sm font-light leading-relaxed ${
        variant === "green" ? "text-white/90" : "text-gray-600"
      }`}>
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
