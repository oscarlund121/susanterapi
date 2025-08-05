"use client";
import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import SectionBadge from "../layout/SectionBadge";
import BulletList from "../layout/BulletList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingOmSusan = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>Din terapeut</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Om mig</h2>
          <div className="w-20 h-0.5 bg-[#1cc18e] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-4xl mx-auto">
            Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut med 20+ års 
            erfaring i arbejdet med børn, unge og familier.
          </p>
        </div>

        {/* Enkelt Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full">
              {/* Top badge */}
              <div className="bg-[#1cc18e]/10 border-b border-[#1cc18e]/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="inline-block px-3 py-1 border rounded-md text-xs font-medium">
                    01
                  </span>
                </div>
                <h4 className="text-xl font-light text-gray-800 mb-2">
                  Min baggrund
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Uddannet psykoterapeut med stor erfaring inden for børn, unge og familier
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-6">
                  <div className="space-y-3 text-gray-700 font-light text-sm leading-relaxed">
                    <p>
                      Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                      Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP),
                      ved Karen Aaes på Essentielt institut i Århus.
                    </p>

                    <p>
                      Jeg har arbejdet i skoleverdenen i næsten 20 år og har derigennem
                      fået stor indblik i børn, unge og familier.
                    </p>

                    <p>
                      Essentielt institut er godkendt af og medlem af EAIP siden 2004.
                    </p>
                  </div>

                  <BulletList 
                    title="Erfaring med:" 
                    items={[
                      "Børn og unge",
                      "Familier", 
                      "Skoleverdenen",
                      "Integrativ terapi"
                    ]} 
                  />

                  <BulletList 
                    title="Specialiseringer:" 
                    items={[
                      "Essentiel Integrativ Psykoterapi",
                      "EMDR (WHO-anerkendt)",
                      "Mentaliserende tilgang", 
                      "Chok- og traumeforløsning"
                    ]} 
                  />

                  <BulletList 
                    title="Funderet i:" 
                    items={[
                      "Jung's analytiske psykologi",
                      "Systemisk tænkning",
                      "NLP metoden",
                      "Intuition og energiarbejde"
                    ]} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[600px]">
            <Image
              src="/images/momma-smile.jpg"
              alt="Susan Albertsen - Psykoterapeut"
              fill
              className="object-cover object-[50%_20%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
