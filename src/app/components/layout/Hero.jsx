"use client";

import Image from "next/image";
import StaticButton from "../ui/StaticButton.jsx";
import BulletList from "./BulletList.jsx";

const HeroElegantMinimal = () => (
  <section className="w-full min-h-screen lg:h-screen rounded-bl-[200px]">
    {/* Content */}
    <div className="h-full">
      {/* Grid Layout - responsivt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-full">
        {/* Left side - Content */}
        <div className="flex items-center lg:items-start order-2 lg:order-1 pb-8 lg:pb-20 md:pb-32 justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-8 lg:pt-20 md:pt-24">
            <div className="max-w-2xl w-full">
              {/* Credibility line - responsiv */}
              <div className="flex flex-wrap text-xs sm:text-sm items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-[#333333]/70">
                <span className="font-medium text-center">
                  20+ erfaring med børn & unge
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block"></span>
                <span className="font-medium text-center">EMDR certificeret</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block"></span>
                <span className="font-medium text-center">Autoriseret psykoterapeut</span>
              </div>

              <div className="mb-6 sm:mb-8 text-center flex flex-col items-center justify-top mt-2 sm:mt-4">
                <div className="mb-3 sm:mb-4">
                  <h1 className="text-[#333333] leading-tight">
                    Find ro og balance
                    <span className="text-[#d3d9e5] block">i hverdagen</span>
                  </h1>
                </div>
                <p className="text-[#333333]/70 max-w-2xl text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
                  Jeg tilbyder professionel psykoterapi til børn, unge og familier. 
                  Min tilgang er empatisk, evidensbaseret og skræddersyet til dine behov.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col w-full sm:flex-row justify-center gap-3 sm:gap-4">
                  <StaticButton
                    href="/kontakt"
                    text="Book gratis konsultation"
                    size="large"
                    variant="green"
                    direction="left"
                    iconDirection="right"
                    textColor="dark"
                  />
                  <button className="px-4 sm:px-6 py-3 text-[#333333] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-light text-sm sm:text-base">
                    Se hvordan det virker
                  </button>
                </div>
              </div>
            </div>
        </div>

        {/* Right side - Image - responsiv */}
        <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2 h-64 sm:h-80 lg:h-full">
            <div className="relative w-full h-full overflow-hidden lg:rounded-bl-[200px]">
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Susan Albertsen - Psykoterapeut"
                fill
                className="object-cover object-[center_30%]"
              />
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroElegantMinimal;
