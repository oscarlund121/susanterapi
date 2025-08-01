"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroElegantFlow = () => (
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
          {/* Minimal zen overlay */}
          <div className="absolute inset-0 bg-black/3"></div>
          
          {/* Vertical flow guide line */}
          <div className="absolute right-16 sm:right-20 md:right-24 lg:right-32 top-1/4 bottom-1/4 hidden sm:block">
            <div className="w-px h-full bg-white/20"></div>
          </div>
          
          {/* Right-aligned content with vertical flow */}
          <div className="absolute right-8 sm:right-12 md:right-16 lg:right-20 xl:right-24 top-1/2 -translate-y-1/2">
            <div className="max-w-xs lg:max-w-sm text-right space-y-8 sm:space-y-12">
              
              {/* Welcome section */}
              <div className="space-y-3 sm:space-y-4">
                <div className="w-8 h-px bg-white/40 ml-auto mb-4"></div>
                <p className="text-white/90 text-sm sm:text-base font-light tracking-widest">
                  VELKOMMEN
                </p>
                <h1 className="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Susan<br />
                  Albertsen
                </h1>
              </div>
              
              {/* Services flow */}
              <div className="space-y-6 sm:space-y-8">
                <div className="border-r-2 border-white/20 pr-4 sm:pr-6">
                  <p className="text-white/80 text-xs sm:text-sm font-light tracking-wide mb-1">
                    01
                  </p>
                  <p className="text-white/90 text-sm sm:text-base font-light">
                    Chok- & traumeforløsning
                  </p>
                </div>
                
                <div className="border-r border-white/15 pr-4 sm:pr-6">
                  <p className="text-white/80 text-xs sm:text-sm font-light tracking-wide mb-1">
                    02
                  </p>
                  <p className="text-white/90 text-sm sm:text-base font-light">
                    Mentalisering
                  </p>
                </div>
                
                <div className="border-r border-white/10 pr-4 sm:pr-6">
                  <p className="text-white/80 text-xs sm:text-sm font-light tracking-wide mb-1">
                    03
                  </p>
                  <p className="text-white/90 text-sm sm:text-base font-light">
                    Psykoterapi
                  </p>
                </div>
              </div>
              
              {/* Action flow */}
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 h-px bg-white/30 ml-auto"></div>
                <div className="space-y-3">
                  <button className="block w-full text-right text-white/90 text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:text-white hover:border-white/60 transition-all duration-500">
                    BOOK SESSION
                  </button>
                  <button className="block w-full text-right text-white/70 text-sm font-light tracking-wider border-b border-white/20 pb-1 hover:text-white/90 hover:border-white/40 transition-all duration-500">
                    LÆS MERE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantFlow;
