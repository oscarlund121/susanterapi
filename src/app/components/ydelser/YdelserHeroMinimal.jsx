"use client";
import React from "react";
import Image from "next/image";
import StaticButton from "../ui/StaticButton";
import BulletList from "../layout/BulletList";

const YdelserHeroMinimal = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px]">
      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="h-full">
          {/* Grid Layout - samme som forsiden */}
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Content */}
            <div className="flex items-center px-6 md:px-12 lg:px-16 bg-gray-50/20">
              <div className="max-w-2xl">
                <div className="space-y-2 mb-4">
                  <h1 className="text-2xl md:text-3xl font-light text-[#333333]">Mine ydelser</h1>
                  <h2 className="text-xl md:text-2xl text-[#1cc18e] font-light">
                    Holistisk psykoterapi
                  </h2>

                  <div className="mb-6">
                    <p className="text-lg font-light text-[#333333] leading-relaxed pt-4">
                      Jeg tilbyder en holistisk tilgang til psykoterapi, hvor vi arbejder med hele mennesket:
                    </p>
                  </div>
                  <BulletList
                    items={[
                      "Essentiel Integrativ Psykoterapi",
                      "EMDR - Chok og traumeforløsning", 
                      "Mentaliserende tilgang til relationer",
                      "Meditation og spirituel udvikling",
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/tree-touch.jpg"
                  alt="Healing touch - naturens kraft i terapeutisk arbejde"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YdelserHeroMinimal;
