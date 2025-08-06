"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import YellowButton from "../ui/YellowButton";
import SectionBadge from "../layout/SectionBadge";
import { IoArrowForward } from "react-icons/io5";

const HeroElegantMinimal = () => (
  <div className="relative w-full bg-white h-[85vh] md:h-[90vh]">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-bl-[200px] overflow-hidden">
      <Image
        src="/images/hero-img-hd.jpg"
        alt="Susan Albertsen - Psykoterapeut"
        width={1920}
        height={1080}
        className="object-cover object-[center_20%] w-full h-full"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Content overlay */}
    <div className="relative z-10">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Top section with badge aligned to menu */}

        <div className="h-[85vh] md:h-[90vh] py-8 md:py-12 flex items-center ">
          {/* Left side - Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <SectionBadge>Velkommen</SectionBadge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                Susan Albertsen
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-white/90">
                Psykoterapi
              </h2>
              <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl leading-relaxed">
                Psykoterapi for børn, unge og voksne. Specialist i EMDR,
                mentalisering og chok-forløsning med 20+ års erfaring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <YellowButton
                href="/kontakt"
                text="Book en session"
                size="large"
                variant="green"
                direction="right"
              />
              <YellowButton
                href="/ydelser"
                text="Se mine ydelser"
                size="large"
                variant="outline-white"
                direction="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
