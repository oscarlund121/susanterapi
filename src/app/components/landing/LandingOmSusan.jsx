"use client";
import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingOmSusan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10 ">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src="/images/momma-smile.jpg"
            alt="Susan Albertsen - Psykoterapeut"
            fill
            className="object-cover object-[50%_20%] shadow"
          />
          <div className="absolute -bottom-8 -right-8 bg-white/50 rounded-2xl shadow-sm p-6 ">
            <div className="text-center">
              <div className="text-2xl font-light mb-2">20+ år</div>
              <div className="text-base  font-light">
                erfaring med børn, unge og familier
              </div>
            </div>
          </div>
        </div>

        {/* Indhold */}
        <div className="flex flex-col">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
                Om mig
              </h2>
              <div className="w-16 h-px bg-black mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-700 font-light leading-relaxed">
              <p className="text-lg">
                Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                Essentiel integrativ essens, psyke, krop og helbredsterapi
                (EIP), ved Karen Aaes på Essentielt institut i Århus.
              </p>

              <p>
                Jeg har arbejdet i skoleverdenen i næsten 20 år og har
                derigennem fået stor indblik i børn, unge og familier. Det er
                her jeg har erhvervet mine erfaringer teoretisk og i praksis med
                mentalisering.
              </p>

              <p>
                Essentielt institut er godkendt af og medlem af EAIP (European
                Association for Integrative Psychotherapy) siden 2004. De
                metoder jeg bruger i terapien er anerkendt både i Danmark og i
                udlandet.
              </p>
            </div>

            {/* Metoder */}
            <div className="max-h-96 overflow-y-auto">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="specialiseringer" className="border-gray-100">
                  <AccordionTrigger className="text-left hover:no-underline py-3">
                    <span className="text-base font-medium text-white">Specialiseringer</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <ul className="space-y-2 px-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Essentiel Integativ Psykoterapi</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">EMDR (WHO-anerkendt)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Mentaliserende tilgang</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Chok- og traumeforløsning</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fundament" className="border-gray-100">
                  <AccordionTrigger className="text-left hover:no-underline py-3">
                    <span className="text-base font-medium text-white">Teoretisk fundament</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Jung's analytiske psykologi</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Systemisk tænkning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">NLP metoden</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IoCheckmark className="text-green-600" size={14} />
                        </div>
                        <span className="text-base text-black">Intuition og energiarbejde</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingOmSusan;
