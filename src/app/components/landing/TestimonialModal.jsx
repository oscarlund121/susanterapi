"use client";
import React from "react";
import CardHeader from "../ui/CardHeader";
import { IoClose } from "react-icons/io5";

const TestimonialModal = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: 'rgba(28, 193, 142, 0.2)' }}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        {/* CardHeader for modal */}
        <div className="relative">
          <CardHeader
            number="✨"
            title={testimonial.name}
            description={testimonial.category}
            variant="green"
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-10"
          >
            <IoClose size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="prose prose-gray max-w-none">
            {testimonial.fullText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
