"use client";
import React from "react";
import Image from "next/image";

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-img.jpg"
          alt="Susan Albertsen - Psykoterapi"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="space-y-8 md:space-y-12">
          {/* Navn og titel */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
              Susan Albertsen
            </h1>
            <div className="flex justify-center">
              <div className="bg-white/90 text-gray-800 px-8 py-4 text-lg md:text-xl font-light tracking-widest">
                PSYKOTERAPI & CHOK-FORLØSNING
              </div>
            </div>
          </div>

          {/* Vision statement */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-px bg-white/60 mx-auto"></div>
            <blockquote className="text-lg md:text-xl font-light leading-relaxed">
              "Min vision er, sammen med klienten at skabe en ønsket forandring, 
              med mere glæde, frihed og lethed i livet og gøre det ansvarligt, 
              kærligt og anerkendende, med respekt for klientens behov."
            </blockquote>
            <div className="w-16 h-px bg-white/60 mx-auto"></div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="bg-white/10 border border-white/30 text-white px-12 py-4 text-lg font-light tracking-wider hover:bg-white/20 transition-all duration-300">
              BOOK EN SAMTALE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
