"use client";
import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";
import BulletList from "../layout/BulletList";
import CardHeader from "../ui/CardHeader";
import SimpleAccordion from "../ui/SimpleAccordion";

const LandingOmSusan = () => {
  return (
    <section className="section-padding relative">
      {/* Gul baggrund - fylder 50% til højre og 60% af højden */}

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <SectionHeader
          badgeText="Din terapeut"
          title="Mød Susan"
          showButton={false}
        />

        {/* Enkelt Card */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-full min-h-[600px]">
            <Image
              src="/images/momma-smile.jpg"
              alt="Susan Albertsen - Psykoterapeut"
              fill
              className="object-cover object-[50%_20%] rounded-l-xl"
            />
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden h-full">
              {/* Top badge */}
              <CardHeader
                number="01"
                title="Min baggrund"
                description="Uddannet psykoterapeut med stor erfaring inden for børn, unge og familier"
                variant="green"
              />

              {/* Content */}
              <div className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3 text-[#333333] font-light text-sm leading-relaxed">
                    <p>
                      Uddannet psykoterapeut med næsten 20 års erfaring fra skoleverdenen. 
                      Specialiseret i børn, unge og familier gennem Essentiel integrativ terapi.
                    </p>
                  </div>

                  <BulletList
                    title="Specialer:"
                    items={[
                      "EMDR & traumeforløsning (WHO-anerkendt)",
                      "Børn & unge (5-25 år)",
                      "Familie- og parterapi",
                      "Angst og eksamensangst",
                    ]}
                  />

                  <div className="mt-6">
                    <SimpleAccordion title="Uddannelse & certificeringer">
                      <BulletList
                        items={[
                          "Essentiel Integrativ Psykoterapi (EIP)",
                          "EMDR certificering",
                          "Essentielt Institut, Århus (EAIP medlem)",
                          "Mentaliserende tilgang",
                        ]}
                      />
                    </SimpleAccordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact quote section */}
        <div className="mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-light text-[#333333] leading-relaxed italic text-lg">
              "Essens i terapien er at være helhjertet – at have hele hjertet med."
            </blockquote>
            <cite className="text-gray-500 font-light not-italic text-sm mt-3 block">
              Karen Aaes, Essentielt Institut
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
