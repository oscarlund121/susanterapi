"use client";
import React from "react";
import Image from "next/image";
import SectionBadge from "../layout/SectionBadge";

const TestimonialCard = ({ testimonial, onReadMore }) => {
  // Forskellige hjørne-styles for billedet baseret på props (kopieret fra TilbyderCard)
  const getImageStyles = () => {
    // Hvis der er sendt en direkte imageBorderRadius prop
    if (testimonial.imageBorderRadius) {
      return testimonial.imageBorderRadius;
    }
    
    // Hvis der er sendt individuelle hjørne-props
    if (testimonial.imageTopLeftRadius || testimonial.imageTopRightRadius || testimonial.imageBottomLeftRadius || testimonial.imageBottomRightRadius) {
      return `${testimonial.imageTopLeftRadius || ''} ${testimonial.imageTopRightRadius || ''} ${testimonial.imageBottomLeftRadius || ''} ${testimonial.imageBottomRightRadius || ''}`.trim();
    }
    
    // Default fallback
    return "rounded-xl";
  };

  // Kun én version med billede - følger TilbyderCard design
  return (
    <div className="group cursor-pointer h-full">
      <div className="overflow-hidden flex flex-col rounded-xl md:h-96">
        {/* SectionBadge til venstre uden baggrund */}
        <div className="p-4">
          <SectionBadge variant="small">{testimonial.category || "Klientoplevelse"}</SectionBadge>
        </div>
        
        {/* Content område som i TilbyderCard - mindre spacing */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Badge mellem billede og indhold - udkommenteret */}
          {/*
          <div className="mb-2">
            <span className="inline-block text-xs px-3 py-1 border-black border-1 rounded-bl-full rounded-tr-full rounded-br-full font-light">
              Klientoplevelse
            </span>
          </div>
          */}
          
          {/* Preview tekst */}
          <blockquote className="text-sm italic mb-2 line-clamp-2 !border-l-0 !pl-0">
            "{testimonial.preview}"
          </blockquote>
          
          {/* Navn og alder - større og gray-300 */}
          <div className="text-sm text-gray-400 mb-1">
            <strong>{testimonial.name}</strong>
            {testimonial.age && <span>, {testimonial.age} år</span>}
          </div>
          
          {/* Læs mere knap - tættere på */}
          <div className="mt-1">
            <div className="flex justify-end">
              <button
                onClick={() => onReadMore(testimonial)}
                className="text-xs underline-animate hover:underline"
              >
                Læs hele oplevelsen →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
