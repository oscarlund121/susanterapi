"use client";
import React from "react";
import Image from "next/image";

const YdelserHeroCard = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 relative h-64 lg:h-auto">
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Healing journey"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800">
                Mine ydelser
              </h1>
              <p className="text-lg font-light text-gray-600">
                Jeg tilbyder psykoterapi der integrerer krop, sind og sjæl gennem 
                evidensbaserede metoder kombineret med intuitive tilgange.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400"></div>
                </div>
                <span className="text-sm font-light text-gray-500">Holistisk healing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YdelserHeroCard;
