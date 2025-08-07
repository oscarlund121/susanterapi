"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";



const YellowButton = ({
  href = '/kontakt', 
  className = 'inline-block',
  text = 'Book tid nu',
  size = 'medium',
  iconOnly = false,
  variant = 'yellow', // 'yellow' eller 'green'
  direction = 'right' // Ny prop - 'right' eller 'left'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Størrelse-konfiguration
  const sizeClasses = {
    small: {
      button: isHovered ? 'pl-2 pr-3 py-1' : 'pl-2 pr-3 py-1 sm:p-1', // Åben på små skærme
      icon: 'text-xs',
    },
    medium: {
      button: isHovered ? 'pl-3 pr-4 py-1.5' : 'pl-3 pr-4 py-1.5 sm:p-1.5', // Åben på små skærme
      icon: 'text-sm',
    },
    large: {
      button: isHovered ? 'pl-4 pr-5 py-2' : 'pl-4 pr-5 py-2 sm:p-2', // Åben på små skærme
      icon: 'text-base',
    },
  };

  // Farve-konfiguration baseret på variant
  const variantClasses = {
    yellow: {
      bg: 'bg-[#fff100]',
      text: 'text-black',
      iconColor: 'text-black',
    },
    green: {
      bg: 'bg-[#1cc18e]',
      text: 'text-white',
      iconColor: 'text-white',
    }
  };

  // Vælg det relevante størrelsessæt og farvesæt
  const currentSize = sizeClasses[size] || sizeClasses.medium;
  const currentVariant = variantClasses[variant] || variantClasses.yellow;

  return (
    <Link 
      href={href} 
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="inline-block">
      <div 
        className={`
          group flex items-center transition-all duration-600 ease-in-out 
          ${currentVariant.bg} ${currentVariant.text} font-medium text-sm
          ${currentSize.button}
          ${isHovered 
            ? 'rounded-full' 
            : 'rounded-full'
          }
          `}
      >
        
        {/* Pil til venstre, når direction er 'left' */}
        {/* Tekst i midten */}
        {!iconOnly && (
          <button 
            className={`
              overflow-hidden  whitespace-nowrap transition-all duration-600 ease-in-out
              ${isHovered 
                ? 'max-w-[200px] opacity-100 mx-3 underline' 
                : 'max-w-[200px] opacity-100 mx-3 sm:max-w-0 sm:opacity-0 sm:mx-0'
              }
            `}
            >
            {text}
          </button>
        )}
        {direction === 'left' && (
          <HiOutlineChevronLeft 
            className={`${currentVariant.iconColor} ${currentSize.icon} transform transition-transform duration-600 ${isHovered ? 'translate-x-0' : ''}`} 
          />
        )}
        
        
        {/* Pil til højre, når direction er 'right' (standard) */}
        {direction === 'right' && (
          <HiOutlineChevronRight 
            className={`${currentVariant.iconColor} ${currentSize.icon} transform transition-transform duration-600 ${isHovered ? 'translate-x-0' : ''}`} 
          />
        )}
      </div>
      </div>
    </Link>
  );
};

// Eksempel på brug:
// <YellowButton />                        - Standard gul knap med pil til højre
// <YellowButton direction="left" />       - Gul knap med pil til venstre
// <YellowButton variant="green" />        - Grøn knap med hvid tekst og ikon
// <YellowButton variant="green" direction="left" /> - Grøn knap med venstre-pil
// <YellowButton text="Læs mere" />        - Knap med tilpasset tekst
// <YellowButton size="small" />           - Mindre knap
// <YellowButton size="large" />           - Større knap 
// <YellowButton iconOnly={true} />        - Kun ikon, ingen tekst ved hover
// <YellowButton href="/om-mig" />         - Tilpasset link destination
// <YellowButton variant="green" size="large" direction="left" text="Tilbage" /> - Kombination

export default YellowButton;
