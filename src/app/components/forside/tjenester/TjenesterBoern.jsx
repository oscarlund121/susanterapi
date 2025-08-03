"use client";
import React from "react";
import Image from "next/image";

const TjenesterBoern = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="relative h-64">
        <Image
          src="/images/flower.jpg"
          alt="Børn og unge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <span className="text-sm font-light text-gray-500 tracking-wider uppercase">
            Målgruppe
          </span>
          <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mt-2">
            Børn & Unge
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Børn og unge gennemgår konstant udvikling og forandring. Nogle gange 
            kan denne rejse være udfordrende og kræve ekstra støtte.
          </p>

          <div className="space-y-4">
            <h4 className="font-light text-gray-800">Typiske udfordringer:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Angst og bekymringer</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Skolefravær og læringsvanskeligheder</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Sociale udfordringer og mobning</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Familieproblemer og skilsmisse</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 font-light leading-relaxed text-sm">
            Gennem legende og alderssvarende tilgang hjælper jeg børn og unge 
            med at forstå deres følelser og udvikle sunde copingstrategier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TjenesterBoern;
