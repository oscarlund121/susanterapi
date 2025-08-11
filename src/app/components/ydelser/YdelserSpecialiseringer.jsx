"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";

const YdelserSpecialiseringer = ({ ydelser }) => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionHeader
          badge="Mine specialer"
          title="Specialiseringer"
          subtitle="Hver ydelse er tilpasset dine individuelle behov og kan kombineres for at skabe det mest effektive terapiforløb for dig."
          align="center"
        />

        {/* Specialiseringer som cards */}
        <div className="space-y-12 md:space-y-16">
          {ydelser.map((ydelse, index) => (
            <div key={index} className="w-full">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
                {/* Top badge */}
                <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1 border rounded-md text-xs font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-gray-800 mb-2">
                    {ydelse.title}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-lg font-light leading-relaxed">
                    {ydelse.description.length > 200 
                      ? ydelse.description.substring(0, 200) + "..." 
                      : ydelse.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
                      <p>{ydelse.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <BulletList 
                          title="Fokusområder:" 
                          variant="grid"
                          items={ydelse.fokusområder} 
                        />
                      </div>
                      
                      <div>
                        <BulletList 
                          title="Metoder:" 
                          variant="grid"
                          items={ydelse.metoder} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YdelserSpecialiseringer;
