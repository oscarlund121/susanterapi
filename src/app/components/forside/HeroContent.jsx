"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const HeroContent = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Fixed margin from header */}
    <div className="relative ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
      <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
        <div
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderBottomLeftRadius: "40px sm:60px md:80px lg:100px",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Zen-inspired floating content card */}
          <div className="absolute top-1/2 left-8 sm:left-12 md:left-16 lg:left-20 -translate-y-1/2">
            <div className="bg-white/95 backdrop-blur-sm rounded-none p-8 sm:p-10 md:p-12 shadow-2xl max-w-md border-l-2 border-gray-200">
              {/* Minimal header */}
              <div className="mb-8 sm:mb-10">
                <div className="w-8 h-px bg-gray-300 mb-4"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-1">
                  Susan Albertsen
                </h1>
                <p className="text-sm sm:text-base text-gray-500 font-light tracking-wider">
                  Psykoterapi
                </p>
              </div>
              
              {/* Clean services list */}
              <div className="mb-10 sm:mb-12">
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
                      Chok- & traumeforløsning
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
                      Mentalisering
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
                      Psykoterapi
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Zen-style call to action */}
              <div className="space-y-4">
                <button className="w-full text-left text-gray-700 text-sm font-light tracking-wide border-b border-gray-200 pb-2 hover:text-gray-900 hover:border-gray-400 transition-all duration-500">
                  BOOK SESSION
                </button>
                <button className="w-full text-left text-gray-500 text-sm font-light tracking-wide border-b border-gray-100 pb-2 hover:text-gray-700 hover:border-gray-300 transition-all duration-500">
                  LÆS MERE
                </button>
              </div>
              
              {/* Subtle decorative element */}
              <div className="mt-8 sm:mt-10">
                <div className="w-12 h-px bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroContent;
