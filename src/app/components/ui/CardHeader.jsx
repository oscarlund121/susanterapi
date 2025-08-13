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
        isGreen ? "bg-[#1cc18e]/10 " : "bg-gray-800 border-gray-700 text-white"
      }`}
    >
      <div className="mb-3">
        <SectionBadge variant="small">{number}</SectionBadge>
      </div>
      <div className="h-25 md:h-45 flex flex-col justify-end ">
        <h4 className="text-xl mb-2">{title}</h4>
        <p
          className={` ${
            isGreen ? "text-[#333333]" : "text-white/90"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
