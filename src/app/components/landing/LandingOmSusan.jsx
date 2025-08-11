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
          title="Om mig"
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
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
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
                      Mit navn er Susan Albertsen og jeg er uddannet
                      psykoterapeut hos Essentiel integrativ essens, psyke, krop
                      og helbredsterapi (EIP), ved Karen Aaes på Essentielt
                      institut i Århus.
                    </p>

                    <p>
                      Jeg har arbejdet i skoleverdenen i næsten 20 år og har
                      derigennem fået stor indblik i børn, unge og familier.
                    </p>

                    <p>
                      Essentielt institut er godkendt af og medlem af EAIP siden
                      2004.
                    </p>
                  </div>

                  <BulletList
                    title="Erfaring med:"
                    items={[
                      "Børn & unge",
                      "Familier",
                      "Skoleverdenen",
                      "Integrativ terapi",
                    ]}
                  />

                  <div className="mt-6 space-y-4">
                    <SimpleAccordion title="Specialiseringer">
                      <BulletList
                        items={[
                          "Essentiel Integrativ Psykoterapi",
                          "EMDR (WHO-anerkendt)",
                          "Mentaliserende tilgang",
                          "Chok- og traumeforløsning",
                        ]}
                      />
                    </SimpleAccordion>

                    <SimpleAccordion title="Teoretisk fundament">
                      <BulletList
                        items={[
                          "Jung's analytiske psykologi",
                          "Systemisk tænkning",
                          "NLP metoden",
                          "Intuition og energiarbejde",
                        ]}
                      />
                    </SimpleAccordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <blockquote className="font-light text-[#333333] leading-relaxed mb-8 italic">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør
                det ud fra ren ubetinget kærlighed. Essens i terapien er at være
                helhjertet – at have hele hjertet med."
              </blockquote>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-8 h-px bg-gray-300"></div>
                <cite className="text-gray-500 font-light not-italic tracking-wide text-sm">
                  Karen Aaes, Essentielt Institut
                </cite>
                <div className="w-8 h-px bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
