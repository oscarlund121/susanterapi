"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";

const TestimonialCard = ({ testimonial, onReadMore }) => {
  // Kort version (kun text property)
  if (testimonial.text) {
    return (
      <div className="h-full">
        <div className="text-center bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col justify-center">
          <blockquote className="text-sm md:text-base font-light text-gray-700 leading-relaxed mb-6 italic">
            "{testimonial.text}"
          </blockquote>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-6 h-px bg-gray-300"></div>
            <cite className="text-gray-600 font-light not-italic tracking-wide text-sm">
              {testimonial.name}
            </cite>
            <div className="w-6 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  // Lang version (preview + læs mere)
  return (
    <div className="h-full">
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-200 h-full flex flex-col">
        {testimonial.category && (
          <div className="mb-4">
            <SectionBadge>{testimonial.category}</SectionBadge>
          </div>
        )}
        
        <blockquote className="text-gray-700 leading-relaxed mb-6 italic flex-1 text-sm">
          "{testimonial.preview}"
        </blockquote>
        
        <div className="flex justify-between items-center">
          <cite className="text-gray-600 font-light not-italic tracking-wide text-sm">
            — {testimonial.name}
          </cite>
          <button
            onClick={() => onReadMore(testimonial)}
            className="text-xs font-medium hover:underline"
            style={{ color: '#1cc18e' }}
          >
            Læs hele oplevelsen →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
