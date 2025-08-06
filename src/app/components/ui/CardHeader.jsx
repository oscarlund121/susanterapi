"use client";
import React from "react";

const CardHeader = ({ 
  number = "01", 
  title, 
  description, 
  variant = "green",
  size = "standard", // "compact", "standard", "large"
  icon = null // optional icon
}) => {
  const variants = {
    green: {
      bg: "bg-[#1cc18e]/10",
      border: "border-[#1cc18e]/20",
      text: "text-[#333333]",
      numberStyle: "border-gray-800"
    },
    yellow: {
      bg: "bg-[#fff100]/10",
      border: "border-[#fff100]/20", 
      text: "text-[#333333]",
      numberStyle: "border-gray-800"
    },
    light: {
      bg: "bg-[#1cc18e]/10",
      border: "border-[#1cc18e]/20",
      text: "text-[#333333]",
      numberStyle: "border-gray-800"
    },

    dark: {
      bg: "bg-gray-800",
      border: "border-gray-700",
      text: "text-white",
      numberStyle: "border-white/30 text-white"
    }
  };

  const sizes = {
    compact: {
      padding: "p-4",
      titleSize: "text-lg",
      descSize: "text-sm",
      numberSize: "text-xs px-2 py-1"
    },
    standard: {
      padding: "p-6", 
      titleSize: "text-xl",
      descSize: "text-large",
      numberSize: "text-xs px-3 py-1"
    },
    large: {
      padding: "p-8",
      titleSize: "text-2xl",
      descSize: "text-lg", 
      numberSize: "text-sm px-4 py-2"
    }
  };

  const currentVariant = variants[variant] || variants.green;
  const currentSize = sizes[size] || sizes.standard;

  return (
    <div className={`${currentVariant.bg} border-b ${currentVariant.border} ${currentSize.padding}`}>
      <div className="flex items-center space-x-3 mb-3">
        {icon && (
          <div className={`${currentVariant.text} text-lg`}>
            {icon}
          </div>
        )}
        <span className={`inline-block ${currentSize.numberSize} border rounded-bl-full rounded-tr-full rounded-br-full font-light ${currentVariant.numberStyle}`}>
          {number}
        </span>
      </div>
      <h4 className={`${currentSize.titleSize} font-light mb-2 ${currentVariant.text}`}>
        {title}
      </h4>
      <span className={`${currentSize.descSize} font-bold leading-relaxed ${
        variant === "dark" ? "text-white/90" : "text-gray-600"
      }`}>
        {description}
      </span>
    </div>
  );
};

export default CardHeader;
