"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroProfessional = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Fixed margin from header - consistent with site design */}
    <div className="relative ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
      <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
        <div
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderBottomLeftRadius: "50px sm:70px md:90px lg:100px",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Minimal zen layout */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20">
            
            {/* Top: Gentle introduction */}
            <div className="pt-8 sm:pt-12">
              <div className="max-w-sm">
                <p className="text-white/80 text-sm sm:text-base font-light tracking-widest mb-3 sm:mb-4">
                  01
                </p>
                <h1 className="text-white font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
                  Velkommen til
                </h1>
                <h1 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
                  Susan Albertsen
                </h1>
              </div>
            </div>

            {/* Center: Understated services */}
            <div className="flex-1 flex items-center">
              <div className="w-full max-w-2xl">
                <p className="text-white/60 text-sm sm:text-base font-light tracking-widest mb-6 sm:mb-8">
                  02
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="border-l border-white/20 pl-6 sm:pl-8">
                    <h3 className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-2">
                      Chok- & traumeforløsning
                    </h3>
                    <p className="text-white/60 text-sm font-light">
                      EMDR metode
                    </p>
                  </div>

                  <div className="border-l border-white/20 pl-6 sm:pl-8">
                    <h3 className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-2">
                      Mentalisering
                    </h3>
                    <p className="text-white/60 text-sm font-light">
                      Følelser og tanker
                    </p>
                  </div>

                  <div className="border-l border-white/20 pl-6 sm:pl-8">
                    <h3 className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-2">
                      Psykoterapi
                    </h3>
                    <p className="text-white/60 text-sm font-light">
                      Professionel samtale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Subtle call to action */}
            <div className="pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
                <div className="max-w-xs">
                  <p className="text-white/60 text-sm font-light tracking-widest mb-3 sm:mb-4">
                    03
                  </p>
                  <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
                    Klar til det første skridt?
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button className="text-white/90 text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:text-white hover:border-white/60 transition-all duration-500">
                    BOOK SESSION
                  </button>
                  <button className="text-white/70 text-sm font-light tracking-wider border-b border-white/20 pb-1 hover:text-white/90 hover:border-white/40 transition-all duration-500">
                    LÆS MERE
                  </button>
                </div>
              </div>
            </div>

            {/* Zen accent line */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-px h-24 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroProfessional;
