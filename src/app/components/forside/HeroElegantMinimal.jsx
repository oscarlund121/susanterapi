"use client";

import Image from 'next/image';
import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroElegantMinimal = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Billedet fylder hele griddet */}
    <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
      <div className="relative overflow-hidden" style={{ borderBottomLeftRadius: "60px sm:80px lg:100px", height: "100%", width: "100%" }}>
        {/* Next.js Image component for optimal loading */}
        <Image
          src={heroImage}
          alt="Susan Albertsen - Psykoterapi"
          fill
          priority
          className="object-cover object-center"
          style={{ borderBottomLeftRadius: "60px sm:80px lg:100px" }}
        />
        
        {/* Bedre overlay for tekst-læsbarhed */}
        <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Centered minimal content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              
              {/* Pure essence - just the name */}
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div>
                  <h1 className="text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap drop-shadow-lg">
                    Susan Albertsen
                  </h1>
                </div>
                
                {/* Single focus point */}
                <div>
                  <p className="text-black bg-white/50 text-lg sm:text-xl md:text-2xl font-light tracking-widest inline-block py-6 px-8 drop-shadow-md">
                    PSYKOTERAPI
                  </p>
                </div>
                
                {/* Flere dekorative elementer */}
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 sm:w-12 md:w-16 h-px bg-white/40"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-16 sm:w-20 md:w-24 h-px bg-white/40"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-8 sm:w-12 md:w-16 h-px bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Single, focused call to action */}
          <div className="absolute bottom-32 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2">
            <button className="text-white/90 text-sm sm:text-base font-light tracking-widest border border-white/30 px-8 sm:px-12 py-3 sm:py-4 hover:bg-white/10 hover:border-white/60 transition-all duration-700 drop-shadow-lg">
              BOOK EN SESSION
            </button>
          </div>
          
          {/* Flere dekorative hjørne-accenter */}
          <div className="absolute top-8 sm:top-12 right-8 sm:right-12">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-white/40"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12">
            <div className="flex flex-col items-end space-y-2">
              <div className="w-12 h-px bg-white/30"></div>
              <div className="w-6 h-px bg-white/40"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
