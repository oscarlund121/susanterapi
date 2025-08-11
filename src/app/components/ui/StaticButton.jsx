"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

const StaticButton = ({
  href = '/kontakt', 
  className = 'inline-block',
  text = 'Book tid nu',
  size = 'medium',
  variant = 'green', // 'yellow' eller 'green'
  direction = 'right', // 'right' eller 'left' - layout direction
  iconDirection = 'right', // 'right' eller 'left' - icon direction (uafhængig af layout)
  textColor = 'dark' // 'dark' (#333333) eller 'white'
}) => {
  
  // Størrelse-konfiguration
  const sizeClasses = {
    small: {
      text: 'text-xs',
      circle: 'w-6 h-6',
      icon: 'text-xs',
      gap: 'gap-1'
    },
    medium: {
      text: 'text-base',
      circle: 'w-10 h-10',
      icon: 'text-sm',
      gap: 'gap-1'
    },
    large: {
      text: 'text-lg',
      circle: 'w-12 h-12',
      icon: 'text-base',
      gap: 'gap-1'
    },
  };

  // Farve-konfiguration for den runde knap
  const variantClasses = {
    yellow: {
      bg: 'bg-[#F18805] hover:bg-white',
      iconColor: 'text-[#333333]',
    },
    green: {
      bg: 'bg-[#1cc18e] hover:bg-white',
      iconColor: 'text-white hover:text-[#333333]',
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.medium;
  const currentVariant = variantClasses[variant] || variantClasses.green;
  
  // Text farve baseret på textColor prop
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-[#333333]';

  return (
    <Link 
      href={href} 
      className={`inline-flex items-center ${currentSize.gap} ${className} group`}
    >
      {/* Tekst - altid synlig med transparent baggrund */}
      {direction === 'right' && (
        <button className={`${textColorClass} bg-transparent underline-animate transition-all duration-300`}>
          {text}
        </button>
      )}
      
      {/* Rund knap med ikon */}
      <div 
        className={`
          ${currentSize.circle} rounded-full flex items-center justify-center
          ${currentVariant.bg} ${currentVariant.iconColor}
          transition-all duration-300 ease-in-out
        `}
      >
        {iconDirection === 'left' ? (
          <HiOutlineChevronLeft className={currentSize.icon} />
        ) : (
          <HiOutlineChevronRight className={currentSize.icon} />
        )}
      </div>

      {/* Tekst til venstre når direction er 'left' */}
      {direction === 'left' && (
        <button className={`${textColorClass} bg-transparent underline-animate transition-all duration-300`}>
          {text}
        </button>
      )}
    </Link>
  );
};

export default StaticButton;
