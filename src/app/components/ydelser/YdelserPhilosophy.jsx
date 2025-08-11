"use client";
import React from "react";
import Card from "../ui/Card";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";

const YdelserPhilosophy = () => {
  return (
    <section className="section-padding bg-gray-50/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <SectionHeader
          badge="Min tilgang"
          title="Min filosofi"
          subtitle="Grundlaget for mit terapeutiske arbejde bygger på respekt, tillid og troen på hvert menneskes indre helende kraft."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg p-8 md:p-12">
            <div className="text-center space-y-8">
              <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed">
                "Jeg tror på, at hvert menneske har en indre visdom og helende kraft. 
                Min rolle er at skabe et trygt rum, hvor denne kraft kan blomstre, 
                og guide dig tilbage til din autentiske selv - fuld af glæde, frihed og kærlighed."
              </blockquote>
              
              <div className="flex justify-center items-center space-x-6">
                <div className="w-16 h-px bg-[#1cc18e]"></div>
                <div className="text-[#1cc18e] text-xs font-medium tracking-wider">
                  SUSAN ALBERTSEN
                </div>
                <div className="w-16 h-px bg-[#1cc18e]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YdelserPhilosophy;
