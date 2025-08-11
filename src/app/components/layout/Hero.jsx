"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import StaticButton from "../ui/StaticButton.jsx";
import SectionBadge from "./SectionBadge.jsx";
import BulletList from "./BulletList.jsx";
import { IoArrowForward } from "react-icons/io5";

const HeroElegantMinimal = () => (
  <div className="relative w-full h-screen">
    {/* Content */}
    <div className="relative z-10 h-full">
      <div className="h-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left side - Content */}
          <div className="flex items-center px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="space-y-2 mb-4">
                <h1 className="font-light text-[#333333]">Susan Albertsen</h1>
                <h2 className="text-2xl md:text-3xl text-[#1cc18e]">
                  Psykoterapi
                </h2>

                <div className="mb-6">
                  <p className="text-lg md:text-xl font-light text-[#333333] leading-relaxed pt-4">
                    Jeg hjælper dig med at skabe ønsket forandring med:
                  </p>
                </div>
                <BulletList
                  items={[
                    "Mere glæde, frihed og lethed i livet",
                    "Særlig støtte til unge og studerende",
                    "Terapi for børn, familier og voksne",
                    "Chok-forløsning og EMDR behandling",
                  ]}
                />
              </div>

              <div className="flex flex-col justify-start items-end sm:flex-row gap-4 md:gap-8">
                <StaticButton
                  href="/kontakt"
                  text="Book en session"
                  size="large"
                  variant="green"
                  direction="left"
                  iconDirection="right"
                  textColor="dark"
                  className="mt-6"
                />
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center lg:justify-end h-full">
            <div className="relative w-full h-full overflow-hidden animate-fade-in-down">
              <Image
                src="/images/hero-img-hd.jpg"
                alt="Susan Albertsen - Psykoterapeut"
                width={1920}
                height={1080}
                className="object-cover object-[center_40%] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
