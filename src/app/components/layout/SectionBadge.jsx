"use client";
import React from "react";

const SectionBadge = ({ children, className = "" }) => {
  return (
    <span className={`inline-block px-4 py-2 text-gray-800 border-gray-800  border-2 rounded-br-full rounded-tr-full rounded-bl-full text-xs font-sm mb-10 ${className}`}>
      {children}
    </span>
  );
};

export default SectionBadge;
