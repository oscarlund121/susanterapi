"use client";
import React from "react";
import Image from "next/image";

const TestimonialCard = ({ testimonial, onReadMore }) => {
  // Stjerne rating komponent
  const StarRating = ({ rating = 5 }) => (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
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
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => onReadMore(testimonial)}
    >
      {/* Avatar/billede øverst */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Stjerner */}
      <StarRating rating={testimonial.rating || 5} />

      {/* Quote tekst - centreret og større */}
      <div className="flex-1 flex flex-col justify-center">
        <blockquote className="text-center text-gray-700 font-light leading-relaxed mb-6 relative">
          <span className="text-4xl text-green-200 absolute -top-2 -left-2">"</span>
          <span className="relative z-10">{testimonial.preview}</span>
          <span className="text-4xl text-green-200 absolute -bottom-4 -right-2">"</span>
        </blockquote>
      </div>

      {/* Navn og info nederst */}
      <div className="text-center pt-4 border-t border-gray-100">
        <div className="font-semibold text-gray-900 mb-1">
          {testimonial.name}
        </div>
        <div className="text-sm text-gray-500">
          {testimonial.age && `${testimonial.age} år`}
          {testimonial.age && testimonial.category && " • "}
          {testimonial.category}
        </div>
        
        {/* Læs mere knap - mindre prominent */}
        <button className="mt-4 text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
          Læs hele oplevelsen →
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
