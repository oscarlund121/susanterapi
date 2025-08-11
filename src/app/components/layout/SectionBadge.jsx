"use client";
import React from "react";

const SectionBadge = ({ children, className = "", variant = "default" }) => {
  const isSmall = variant === "small";
  
  return (
    <span className={`inline-block px-2 py-1 text-[#333333] border-[#333333] rounded-br-full rounded-tr-full rounded-bl-full ${
      isSmall 
        ? "border text-xs font-normal" 
        : "border-2 text-xs font-sm"
    } ${className}`}>
      {children}
    </span>
  );
};

export default SectionBadge;
