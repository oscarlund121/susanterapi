"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import YellowButton from "../ui/YellowButton.jsx";
import SectionBadge from "./SectionBadge.jsx";
import { IoArrowForward } from "react-icons/io5";

const HeroElegantMinimal = () => (
  <div className="relative w-full h-[85vh] md:h-[90vh] ">
    {/* Background Image */}
    <div className="absolute inset-0  overflow-hidden animate-fade-in-down">
      <Image
        src="/images/hero-img-hd.jpg"
        alt="Susan Albertsen - Psykoterapeut"
        width={1920}
        height={1080}
        className="object-cover  object-[center_40%] w-full h-full"
      />
  
    </div>

    {/* Content overlay */}
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Top section with badge aligned to menu */}

        <div className="h-[85vh] md:h-[95vh] py-8 md:py-12 flex items-top ">
          {/* Left side - Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
           

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                Susan Albertsen
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-800">
                Psykoterapi
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-800 max-w-2xl leading-relaxed">
                Psykoterapi for børn, unge og voksne. Specialist i EMDR,
                mentalisering og chok-forløsning med 20+ års erfaring.
              </p>
            </div>

            <div className="flex flex-col justify-top sm:flex-row gap-4 md:gap-8">
              <YellowButton
                href="/kontakt"
                text="Book en session"
                size="large"
                variant="green"
                direction="left"
              />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
