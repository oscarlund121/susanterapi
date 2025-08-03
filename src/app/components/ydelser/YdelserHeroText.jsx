"use client";
import React from "react";

const YdelserHeroText = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800">
              Mine ydelser
            </h1>
            <div className="flex justify-center items-center space-x-6">
              <div className="w-16 h-px bg-gray-300"></div>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
          </div>
          
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
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
