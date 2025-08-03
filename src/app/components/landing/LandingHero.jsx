"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const LandingHero = () => {
  return (
    <section className="relative h-[85vh] flex items-center">
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
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
              Susan Albertsen
            </h1>
            <div className="flex justify-center">
              <div className="bg-white/50 text-gray-800 px-8 py-4 text-lg md:text-xl font-light">
                PSYKOTERAPI
              </div>
            </div>
          </div>

          {/* Vision statement */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center items-center space-x-6">
              <div className="w-24 h-px bg-white/30"></div>
              <div className="w-24 h-px bg-white/30"></div>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-extralight">
              "Min vision er, sammen med klienten at skabe en ønsket forandring, 
              med mere glæde, frihed og lethed i livet og gøre det ansvarligt, 
              kærligt og anerkendende, med respekt for klientens behov."
            </blockquote>
            
            <div className="flex justify-center items-center space-x-6">
              <div className="w-24 h-px bg-white/30"></div>
              <div className="w-24 h-px bg-white/30"></div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-12">
            <Button variant="primary" size="large" href="/kontakt">
              Book en samtale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
