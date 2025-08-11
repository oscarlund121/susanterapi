"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";

const CardHeader = ({
  number = "01",
  title,
  description,
  variant = "green",
}) => {
  const isGreen = variant === "green";

  return (
    <div
      className={`p-6 border-b ${
        isGreen
          ? "bg-[#1cc18e]/30 border-[#1cc18e]/20"
          : "bg-gray-800 border-gray-700 text-white"
      }`}
    >
      <div className="mb-3">
        <SectionBadge variant="small">{number}</SectionBadge>
      </div>
      <div className="h-25 md:h-40  flex flex-col">
        <h4 className="text-xl mb-2 underline-animate">{title}</h4>
        <div className="flex-1 flex items-start">
          <h6
            className={`text-base font-normal flex justify-end items-end ${
              isGreen ? "text-gray-600" : "text-white/90"
            }`}
          >
            {description}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
