"use client";

import Image from "next/image";
import StaticButton from "../ui/StaticButton.jsx";
import BulletList from "./BulletList.jsx";

const HeroElegantMinimal = () => (
  <section className="relative w-full h-screen">
    {/* Content */}
    <div className="relative z-10 h-full">
      <div className="h-full">
        {/* Grid Layout - samme som ydelser */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left side - Content */}
          <div className="flex bg-[#fff100]/10 items-start px-6 md:px-12 lg:px-16 pt-20 md:pt-24">
            <div className="max-w-2xl">
              {/* Credibility line */}
              <div className="flex text-sm items-center gap-4 mb-6 text-[#333333]/70 ">
                <span className="font-medium">
                  20+ erfaring med børn & unge
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="font-medium">EMDR certificeret</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="font-medium">Autoriseret psykoterapeut</span>
              </div>

              <div className="mb-8 mt-4 ">
                <div className="mb-4 ">
                  <h1 className="text-[#333333] leading-tight">
                    Find ro og balance
                    <span className="text-[#1cc18e] block">i hverdagen</span>
                  </h1>
                </div>

                <BulletList
                  items={[
                    "Eksamensangst og skoleproblemer",
                    "Social angst og tilbagetrækning",
                    "Traumer og chokoplevelser",
                    "Selvværd og identitetskriser",
                  ]}
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <StaticButton
                    href="/kontakt"
                    text="Book gratis konsultation"
                    size="large"
                    variant="green"
                    direction="left"
                    iconDirection="right"
                    textColor="dark"
                  />
                  <button className="px-6 py-3 text-[#333333] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-light">
                    Se hvordan det virker
                  </button>
                </div>

                {/* Urgency */}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center lg:justify-end h-full">
            <div className="relative w-full h-full overflow-hidden">
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
    </div>
  </section>
);

export default HeroElegantMinimal;
