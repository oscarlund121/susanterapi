"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import SectionBadge from "../layout/SectionBadge";
import { IoArrowForward } from "react-icons/io5";

const heroImage = "/images/hero-img.jpg";

const HeroElegantMinimal = () => (
  <div className="relative w-full bg-white h-[80vh] md:h-[85vh]">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src={heroImage}
        alt="Susan Albertsen - Psykoterapeut"
        fill
        className="object-cover object-[center_20%]"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Content overlay */}
    <div className="relative z-10 mx-8 px-4">
      <div className="h-[80vh] md:h-[85vh] py-6 md:py-10 flex items-top">
        
        {/* Left side - Content */}
        <div className=" space-y-8">
          <div className="space-y-6">
            <SectionBadge >Velkommen</SectionBadge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Susan Albertsen
            </h1>
            <div className="w-20 h-0.5 bg-[#1cc18e]"></div>
            <p className="text-lg md:text-xl font-light text-white/90 max-w-xl leading-relaxed">
              Psykoterapi for børn, unge og voksne. Specialist i EMDR, 
              mentalisering og chok-forløsning med 20+ års erfaring.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href="/kontakt" 
              className="inline-block group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:bg-[#1cc18e] group-hover:border-[#1cc18e]">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1cc18e] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <IoArrowForward className="text-white group-hover:text-[#1cc18e] transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white group-hover:text-white transition-colors duration-300">
                      Book en session
                    </h3>
                    <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      Klik her for at komme i kontakt
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
