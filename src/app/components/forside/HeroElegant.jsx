"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroElegant = () => (
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
          {/* Minimal zen overlay - very subtle */}
          <div className="absolute inset-0 bg-black/5"></div>
          
          {/* Clean, minimal text placement */}
          <div className="absolute bottom-12 left-8 sm:bottom-16 sm:left-12 md:bottom-20 md:left-16 lg:bottom-24 lg:left-20">
            <div className="max-w-lg space-y-6 sm:space-y-8">
              {/* Elegant typography with zen simplicity */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-white/90 text-sm sm:text-base font-light tracking-wider">
                  Velkommen til
                </p>
                <h1 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
                  Susan Albertsen
                </h1>
              </div>
              
              {/* Minimal services list */}
              <div className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base font-light">
                <p className="tracking-wide">Chok- & traumeforløsning</p>
                <p className="tracking-wide">Mentalisering</p>
                <p className="tracking-wide">Psykoterapi</p>
              </div>
            </div>
          </div>

          {/* Subtle zen-inspired accent line */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16">
            <div className="w-16 h-px bg-white/30 sm:w-20 md:w-24"></div>
          </div>

          {/* Minimalist buttons */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="text-white/90 text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:text-white hover:border-white/60 transition-all duration-500">
                LÆS MERE
              </button>
              <button className="text-white/90 text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:text-white hover:border-white/60 transition-all duration-500">
                BOOK SESSION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegant;
