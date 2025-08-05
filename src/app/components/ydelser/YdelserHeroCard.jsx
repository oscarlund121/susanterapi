"use client";
import React from "react";
import Image from "next/image";

const YdelserHeroCard = () => {
  return (
    <section className="section-padding bg-gray-50/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-96">
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Healing journey"
                fill
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800">
                  Mine ydelser
                </h1>
                <div className="w-20 h-0.5 bg-[#1cc18e]"></div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Jeg tilbyder psykoterapi der integrerer krop, sind og sjæl gennem 
                  evidensbaserede metoder kombineret med intuitive tilgange.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#1cc18e]/50 rounded-full"></div>
                  <div className="w-2 h-2 bg-[#1cc18e]/30 rounded-full"></div>
                </div>
                <span className="text-sm font-light text-gray-500 tracking-wider">
                  HOLISTISK HEALING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YdelserHeroCard;
