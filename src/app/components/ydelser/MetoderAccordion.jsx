"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import CheckIcon from "../ui/CheckIcon";

const MetoderAccordion = ({ ydelser }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Mine metoder i detaljer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Udforsk de forskellige terapeutiske tilgange jeg anvender og lær om hvordan de kan hjælpe dig
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {ydelser.map((ydelse, index) => (
            <AccordionItem
              key={index}
              value={`ydelse-${index}`}
              className="border border-gray-200 bg-white shadow-sm"
            > 
                value={`ydelse-${index}`}
                className="border border-gray-200 bg-white shadow-sm"
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-gray-600 font-light text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-800">
                      {ydelse.title}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {ydelse.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">
                        Fokusområder:
                      </h4>
                      <div className="space-y-2">
                        {ydelse.fokusområder.map((område, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckIcon />
                            <span className="text-sm text-gray-600">{område}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">
                        Metoder:
                      </h4>
                      <div className="space-y-2">
                        {ydelse.metoder.map((metode, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckIcon />
                            <span className="text-sm text-gray-600">{metode}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default MetoderAccordion;
