"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import YellowButton from "../ui/YellowButton";
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
            <SectionBadge>Velkommen</SectionBadge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Susan Albertsen
            </h1>
            <h2>Psykoterapi</h2>
            <div className="w-20 h-0.5 bg-[#1cc18e]"></div>
            <p className="text-lg md:text-xl font-light shadow-black shadow-2xl text-white/90 max-w-xl leading-relaxed">
              Psykoterapi for børn, unge og voksne. Specialist i EMDR,
              mentalisering og chok-forløsning med 20+ års erfaring.
            </p>
          </div>

          <div className="space-y-4 mt-8 px-6">
            <YellowButton
              href="/kontakt"
              text="Book en session"
              size="large"
              className="shadow-black shadow-2xl "
              variant="green"
              direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
