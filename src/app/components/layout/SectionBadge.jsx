"use client";
import React from "react";

const SectionBadge = ({ children, className = "", variant = "default" }) => {
  const isSmall = variant === "small";
  
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 bg-sage-100/60 text-sage-700 border border-sage-200/50 rounded-full backdrop-blur-sm ${
      isSmall 
        ? "text-xs font-normal" 
        : "text-sm font-medium"
    } ${className}`}>
      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
      {children}
    </span>
  );
};

export default SectionBadge;
