"use client";
import { useState, useEffect } from "react";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroElegantBreathing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    "Chok- & traumeforløsning",
    "Mentalisering", 
    "Psykoterapi"
  ];

  useEffect(() => {
    // Natural breathing rhythm - initial appearance
    const timer = setTimeout(() => setIsVisible(true), 800);
    
    // Service rotation with natural timing
    const serviceTimer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(serviceTimer);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white min-h-screen">
      {/* Fixed margin from header */}
      <div className="relative ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
        <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
          <div
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
              borderBottomLeftRadius: "60px sm:80px lg:100px",
              height: "100%",
              width: "100%",
            }}
          >
            {/* Breathing overlay */}
            <div className="absolute inset-0 bg-black/4"></div>
            
            {/* Naturally breathing content */}
            <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-8 sm:left-12 md:left-16 lg:left-20">
              <div className={`max-w-lg space-y-8 sm:space-y-12 transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                
                {/* Gentle introduction */}
                <div className={`space-y-3 sm:space-y-4 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-8 sm:w-12 h-px bg-white/30 transition-all duration-1000"></div>
                  <p className="text-white/90 text-sm sm:text-base font-light tracking-wider">
                    Velkommen til
                  </p>
                  <h1 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
                    Susan Albertsen
                  </h1>
                </div>
                
                {/* Breathing service display */}
                <div className={`transition-all duration-1000 delay-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="h-12 sm:h-16 flex items-center">
                    <p className={`text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}>
                      {services[currentService]}
                    </p>
                  </div>
                  
                  {/* Breathing indicator dots */}
                  <div className="flex space-x-2 mt-4">
                    {services.map((_, index) => (
                      <div
                        key={index}
                        className={`w-1 h-1 rounded-full transition-all duration-1000 ${
                          index === currentService 
                            ? 'bg-white/80 w-6' 
                            : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Natural call to action */}
                <div className={`space-y-4 transition-all duration-1000 delay-1100 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="group text-white/90 text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:text-white hover:border-white/60 transition-all duration-700">
                    <span className="group-hover:tracking-widest transition-all duration-700">
                      BOOK SESSION
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Breathing accent elements */}
            <div className={`absolute top-8 sm:top-12 right-8 sm:right-12 transition-all duration-2000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-white/30"></div>
            </div>
            
            <div className={`absolute top-1/3 right-1/4 hidden sm:block transition-all duration-2000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroElegantBreathing;
