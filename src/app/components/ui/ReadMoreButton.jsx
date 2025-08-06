"use client";
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const ReadMoreButton = ({
  href = "/ydelser",
  text = "Læs mere",
  variant = "green", // "green", "greenLight", "yellow"
  size = "medium" // "small", "medium", "large"
}) => {
  const variants = {
    green: {
      bg: "bg-[#1cc18e]",
      text: "text-white",
      hover: "hover:bg-[#159e7e]",
      iconColor: "text-white"
    },
    greenLight: {
      bg: "bg-[#1cc18e]/10",
      text: "text-[#333333]", 
      hover: "hover:bg-[#1cc18e]/20",
      iconColor: "text-[#333333]"
    },
    yellow: {
      bg: "bg-[#fff100]",
      text: "text-[#333333]",
      hover: "hover:bg-[#fff100]/80",
      iconColor: "text-[#333333]"
    }
  };

  const sizes = {
    small: {
      padding: "px-3 py-1.5",
      text: "text-xs",
      icon: "text-xs"
    },
    medium: {
      padding: "px-4 py-2", 
      text: "text-sm",
      icon: "text-sm"
    },
    large: {
      padding: "px-6 py-3",
      text: "text-base", 
      icon: "text-base"
    }
  };

  const currentVariant = variants[variant] || variants.green;
  const currentSize = sizes[size] || sizes.medium;

  return (
    <Link 
      href={href}
      className={`
        inline-flex items-center space-x-3 
        ${currentVariant.bg} ${currentVariant.text} ${currentVariant.hover}
        ${currentSize.padding} ${currentSize.text}
        rounded-full font-base 
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1cc18e]
      `}
    >
      <span>{text}</span>
      <FaChevronRight 
        className={`${currentSize.icon} ${currentVariant.iconColor} transition-transform duration-300 group-hover:translate-x-1`}
      />
    </Link>
  );
};

export default ReadMoreButton;
