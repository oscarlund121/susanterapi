"use client";
import React from "react";
import Image from "next/image";
import BulletList from "../layout/BulletList";

const YdelseCard = ({ ydelse, index }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-64">
        <Image
          src={ydelse.image}
          alt={ydelse.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#1cc18e] text-white flex items-center justify-center text-sm font-medium rounded">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-light text-gray-800">{ydelse.title}</h3>
            </div>
            <p className="text-gray-600 font-light leading-relaxed">{ydelse.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-auto">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Fokusområder:
              </h4>
              <BulletList items={ydelse.fokusområder.slice(0, 4)} />
              {ydelse.fokusområder.length > 4 && (
                <div className="text-sm text-gray-500 mt-2">
                  + {ydelse.fokusområder.length - 4} flere områder
                </div>
              )}
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Metoder:
              </h4>
              <BulletList items={ydelse.metoder.slice(0, 4)} />
              {ydelse.metoder.length > 4 && (
                <div className="text-sm text-gray-500 mt-2">
                  + {ydelse.metoder.length - 4} flere metoder
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YdelseCard;
