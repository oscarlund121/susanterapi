"use client";
import React from "react";

const SectionBadge = ({ children, className = "" }) => {
  return (
    <span className={`inline-block px-2 py-1 text-[#333333] border-[#333333]  border-2 rounded-br-full rounded-tr-full rounded-bl-full text-xs font-sm ${className}`}>
      {children}
    </span>
  );
};

export default SectionBadge;
