"use client";
import React from "react";
import Image from "next/image";

const YdelseCard = ({ ydelse, index }) => {
  return (
    <div className="bg-white shadow-sm overflow-hidden">
      <div className="relative h-64">
        <Image
          src={ydelse.image}
          alt={ydelse.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-800/50 text-white flex items-center justify-center text-sm font-light">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-2xl font-light text-gray-800">{ydelse.title}</h3>
          </div>
          <p className="text-gray-600 font-light">{ydelse.description}</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-light text-gray-800">Hvad vi arbejder med:</h4>
          <div className="space-y-2">
            {ydelse.fokusområder.map((område, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                <div className="text-gray-600 text-sm">{område}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-light text-gray-800">Metoder:</h4>
          <div className="space-y-2">
            {ydelse.metoder.map((metode, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                <div className="text-gray-600 text-sm">{metode}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YdelseCard;
