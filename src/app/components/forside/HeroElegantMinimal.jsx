"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroElegantMinimal = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Fixed margin from header */}
    <div className="relative ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
      <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
        <div
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderBottomLeftRadius: "60px sm:80px lg:100px",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Ultra-minimal overlay */}
          <div className="absolute inset-0 bg-black/2"></div>
          
          {/* Centered minimal content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              
              {/* Pure essence - just the name */}
              <div className="space-y-8 sm:space-y-8 md:space-y-12">
                <div>
                  <h1 className="text-white bg-black/50 font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-4 px-8">
                    Susan Albertsen
                  </h1>
                </div>
                
                {/* Single focus point */}
                <div>
                  <p className="text-black bg-white/50 text-lg sm:text-xl md:text-2xl font-light tracking-widest inline-block px-4 py-2">
                    PSYKOTERAPI
                  </p>
                </div>
                
                {/* Minimal accent */}
                <div className="flex justify-center">
                  <div className="w-16 sm:w-20 md:w-24 h-px bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Single, focused call to action */}
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2">
            <button className="text-white/90 text-sm sm:text-base font-light tracking-widest border border-white/30 px-8 sm:px-12 py-3 sm:py-4 hover:bg-white/10 hover:border-white/60 transition-all duration-700">
              BOOK EN SESSION
            </button>
          </div>
          
          {/* Subtle corner accent */}
          <div className="absolute top-8 sm:top-12 right-8 sm:right-12">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
