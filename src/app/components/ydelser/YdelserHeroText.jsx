"use client";
import React from "react";

const YdelserHeroText = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding text-center">
        <div className="space-y-8">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800">
              Mine ydelser
            </h1>
            <div className="flex justify-center items-center space-x-6">
              <div className="w-20 h-px bg-[#1cc18e]"></div>
              <div className="w-20 h-px bg-[#1cc18e]"></div>
            </div>
          </div>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En holistisk tilgang til healing der kombinerer evidensbaserede metoder 
            med intuitive og spirituelle elementer for dyb transformation.
          </p>
          
          <blockquote className="text-lg font-light text-gray-500 italic max-w-2xl mx-auto">
            "Sammen skaber vi et trygt rum for din indre visdom at blomstre"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default YdelserHeroText;
