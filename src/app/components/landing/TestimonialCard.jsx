"use client";
import React from "react";
import Image from "next/image";

const TestimonialCard = ({ testimonial, onReadMore }) => {
  // Stjerne rating komponent med varmere farve
  const StarRating = ({ rating = 5 }) => (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-sage-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div 
      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-sage-200/50 hover:shadow-lg hover:bg-white/80 transition-all duration-300 cursor-pointer h-full flex flex-col group"
      onClick={() => onReadMore(testimonial)}
    >
      {/* Billede/kategori badge øverst */}
      <div className="flex justify-between items-start mb-6">
        <div className="bg-sage-100/60 text-sage-700 px-3 py-1 rounded-full text-xs font-medium">
          {testimonial.category}
        </div>
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-sage-100/60 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={`Billede relateret til ${testimonial.name}s historie`}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Stjerner */}
      <StarRating rating={testimonial.rating || 5} />

      {/* Quote tekst - elegantere styling */}
      <div className="flex-1 flex flex-col justify-center">
        <blockquote className="text-text-secondary font-fraunces leading-relaxed mb-6 relative">
          <span className="text-3xl text-sage-300 absolute -top-2 -left-2 font-serif">"</span>
          <span className="relative z-10 text-base">{testimonial.preview}</span>
          <span className="text-3xl text-sage-300 absolute -bottom-4 -right-2 font-serif">"</span>
        </blockquote>
      </div>

      {/* Navn og info nederst */}
      <div className="pt-4 border-t border-sage-200/30">
        <div className="font-semibold text-text-primary mb-1 font-archivo">
          {testimonial.name}
        </div>
        <div className="text-sm text-text-muted mb-4">
          {testimonial.age && `${testimonial.age} år`}
        </div>
        
        {/* Læs mere knap - varmere design */}
        <button className="flex items-center gap-2 text-sm text-sage-600 hover:text-sage-700 font-medium transition-all duration-200 group-hover:gap-3">
          Læs hele historien 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
