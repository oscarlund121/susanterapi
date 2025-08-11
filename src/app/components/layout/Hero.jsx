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
          <div className="flex items-center px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="space-y-2 mb-4">
                <h1 className="text-2xl md:text-3xl font-light text-[#333333]">Susan Albertsen</h1>
                <h2 className="text-xl md:text-2xl text-[#1cc18e] font-light">
                  Psykoterapi
                </h2>

                <div className="mb-6">
                  <p className="text-lg font-light text-[#333333] leading-relaxed pt-4">
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

              <div className="flex flex-col justify-start items-start sm:flex-row gap-4">
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
                src="/images/hand-on-chest.jpg"
                alt="Susan Albertsen - Psykoterapeut"
                fill
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroElegantMinimal;
