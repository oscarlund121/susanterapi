"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const SimpleAccordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-lg bg-white overflow-hidden transition-all duration-200 hover:shadow-sm" style={{ borderColor: '#1cc18e' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 text-left flex items-center justify-between bg-white transition-colors duration-200 group"
        style={{ 
          '--hover-bg': '#1cc18e'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1cc18e'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
      >
        <span className="text-gray-700 font-semibold text-sm group-hover:text-white transition-colors duration-200">
          {title}
        </span>
        <IoChevronDown
          className={`transition-all duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: '#1cc18e' }}
          size={18}
        />
      </button>
      {isOpen && (
        <div className="px-5 pt-4 pb-6 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default SimpleAccordion;
