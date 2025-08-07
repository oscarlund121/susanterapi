"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";

const LandingUdtalelser = () => {
  const testimonials = [
    {
      name: "Dorte Toft",
      text: "Jeg oplever Susan som utrolig tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde. Susan har hjulpet både mig og mine børn gennem årene. Det er svært at forklare, hvordan terapien er, men det giver SÅ MEGET mening. Man får en bevidstgørelse af, hvordan psyke, krop, og det fysiske hænger sammen."
    },
    {
      name: "Birthe Høll Petersen",
      text: "Jeg har haft psoriasis siden jeg var 14 år - jeg er i dag 57 år. Jeg har forsøgt rigtig mange ting, men intet har hjulpet. Da Susan og jeg fandt frem til hvilke chok der var skyld i min psoriasis og fik det bearbejdet, gik der ikke lang tid før jeg var fri for denne sygdom. Jeg kan kun varmt anbefale Susan."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <SectionHeader 
          badgeText="Anbefalinger"
          title="Hvad siger klienterne"
          description="Her kan du læse hvad tidligere klienter siger om deres oplevelse med terapien."
          showButton={false}
        />

        {/* Testimonials */}
        <div className="space-y-16 md:space-y-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <div className="text-center">
                <blockquote className="text-base md:text-lg font-light text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 h-px bg-gray-300"></div>
                  <cite className="text-gray-600 font-light not-italic tracking-wide">
                    {testimonial.name}
                  </cite>
                  <div className="w-8 h-px bg-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="space-y-8">
            <p className="text-lg font-light  max-w-2xl mx-auto">
              En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
              det du ønsker at arbejde med, så du i eget tempo kommer hen til det du ønsker.
            </p>
            <button className="bg-gray-800 text-white px-12 py-4 text-lg font-light tracking-wider hover:bg-gray-700 transition-colors duration-300">
              BOOK DIN FØRSTE SAMTALE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingUdtalelser;
