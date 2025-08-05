"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";

const YdelserSpecialiseringer = ({ ydelser }) => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* VÆLG EN AF DISSE HEADER DESIGNS - FJERN KOMMENTARER FRA DEN DU VIL BRUGE */}

        {/* NUVÆRENDE HEADER - Elegant med citat-stil */}
        {/* <div className="mb-16 border-l-4 border-[#1cc18e] pl-8 py-2">
          <SectionBadge>Mine specialer</SectionBadge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 mt-2">
            Specialiseringer
          </h2>
          <div className="flex gap-4 items-center mb-6">
            <span className="text-4xl text-[#1cc18e] opacity-30">"</span>
            <h6 className="text-base md:text-lg font-light text-gray-600 leading-relaxed">
              Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
              for at skabe det mest effektive terapiforløb for dig.
            </h6>
            <span className="text-4xl text-[#1cc18e] opacity-30">"</span>
          </div>
        </div> */}

        {/* VARIANT 1: Original venstrejusteret header
        <div className="flex flex-col items-start mb-2 md:mb-6">
          <SectionBadge>Mine specialer</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Specialiseringer</h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-xl leading-relaxed">
            Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
            for at skabe det mest effektive terapiforløb for dig.
          </h6>
          <div className="w-20 h-0.5 bg-[#1cc18e] mb-8"></div>
        </div>
        */}

        {/* VARIANT 2: Centreret header med større dekorativ linje
        <div className="flex flex-col items-center text-center mb-12">
          <SectionBadge>Mine specialer</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-6">Specialiseringer</h2>
          <h6 className="text-base md:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
            for at skabe det mest effektive terapiforløb for dig.
          </h6>
          <div className="w-32 h-0.5 bg-[#1cc18e] mt-8"></div>
        </div>
        */}

        {/* VARIANT 3: Delt header med titel til venstre og beskrivelse til højre
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-end items-start">
            <SectionBadge>mine specialer</SectionBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1cc18e] mt-2">
              Specialiseringer
            </h2>
          </div>
          <div className="flex items-center">
            <h6 className="text-base md:text-lg font-light text-gray-600 leading-relaxed">
              Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
              for at skabe det mest effektive terapiforløb for dig. Min tilgang 
              er holistisk, og jeg arbejder med hele mennesket - krop, sind og sjæl.
            </h6>
          </div>
        </div> */}
       

   
        <div className="relative mb-20 py-12">
          <div className="absolute inset-0 bg-[#1cc18e]/5 skew-y-1 -z-10 rounded-lg"></div>
          <div className="max-w-4xl mx-auto text-center">
            <SectionBadge>Mine specialer</SectionBadge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 mt-6 mb-8">
              Specialiseringer
            </h2>
            <div className="h-px w-16 bg-[#1cc18e] mx-auto mb-8"></div>
            <h6 className="text-base md:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
              for at skabe det mest effektive terapiforløb for dig.
            </h6>
          </div>
        </div>
       

        {/* VARIANT 5: Moderne header med accentfarvet overskrift
        <div className="mb-16">
          <div className="flex flex-col max-w-4xl">
            <SectionBadge>Mine specialer</SectionBadge>
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1cc18e]">
                Special<span className="text-gray-800">iseringer</span>
              </h2>
              <div className="hidden md:block w-full h-0.5 bg-gray-200 mb-4"></div>
            </div>
            <h6 className="text-base md:text-lg font-light text-gray-600 max-w-3xl leading-relaxed mb-8">
              Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
              for at skabe det mest effektive terapiforløb for dig. Alle metoder er baseret på 
              evidensbaseret praksis og mange års erfaring.
            </h6>
          </div>
        </div>
        */}

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
