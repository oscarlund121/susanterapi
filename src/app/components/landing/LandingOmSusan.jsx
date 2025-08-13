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
    <section className="section-padding bg-gradient-to-br from-soft-peach-100 via-warm-beige-50 to-sage-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-soft-peach-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-warm-beige-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Varmere header */}
        <SectionHeader
          badgeText="Din terapeut"
          title="Mød Susan"
          description="Erfaren psykoterapeut med passion for at hjælpe børn, unge og familier til at finde balance og trivsel i hverdagen."
          showButton={false}
        />

        {/* Hovedlayout - mere holistisk design */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Venstre side - Personligt portræt */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Hovedbillede */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
                <Image
                  src="/images/momma-smile-no-bg.png"
                  alt="Susan Albertsen - Din psykoterapeut"
                  fill
                  className="object-cover"
                />
                {/* Subtil overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-600/20 via-transparent to-transparent"></div>
              </div>

              {/* Personlig intro-boks */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 -mt-16 relative z-10 border border-sage-200/30">
                <div className="text-center">
                  <h3 className="text-text-primary mb-3">Susan Albertsen</h3>
                  <p className="text-sage-600 font-medium mb-4">Autoriseret Psykoterapeut</p>
                  <div className="flex justify-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      20+ års erfaring
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      EMDR certificeret
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Højre side - Indhold og kompetencer */}
          <div className="lg:col-span-3 space-y-8">
            {/* Personlig historie */}
            <div>
              <h4 className="text-text-primary mb-4">Min tilgang til terapi</h4>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Med næsten 20 års erfaring fra skoleverdenen har jeg udviklet en dyb forståelse for, 
                  hvordan børn, unge og familier navigerer i livets udfordringer. Min tilgang bygger på 
                  respekt, empati og en ægte tro på, at alle har ressourcer til at vokse og hele.
                </p>
                <p>
                  Jeg specialiserer mig i Essentiel Integrativ Psykoterapi - en metode der arbejder 
                  holistisk med både krop, sind og sjæl. Det handler om at skabe et trygt rum, hvor 
                  du kan udforske dine følelser og opbygge nye, sunde mønstre.
                </p>
              </div>
            </div>

            {/* Specialiseringer */}
            <div>
              <h5 className="text-text-primary mb-4">Mine specialiseringer</h5>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "EMDR & Traumeterapi", desc: "WHO-anerkendt behandling af traumer" },
                  { title: "Børn & Unge", desc: "Specialiseret i aldersgruppen 5-25 år" },
                  { title: "Familie- & Parterapi", desc: "Systemisk arbejde med relationer" },
                  { title: "Angst & Stress", desc: "Herunder eksamensangst og sociale udfordringer" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-sage-200/30">
                    <h6 className="text-text-primary font-semibold mb-2">{item.title}</h6>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Uddannelse accordion */}
            <div>
              <SimpleAccordion title="Uddannelse & Certificeringer">
                <div className="space-y-3">
                  {[
                    "Essentiel Integrativ Psykoterapi (EIP)",
                    "EMDR certificering",
                    "Essentielt Institut, Århus (EAIP medlem)",
                    "Mentaliserende tilgang"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </SimpleAccordion>
            </div>
          </div>
        </div>

        {/* Inspirerende quote - mere prominent */}
        <div className="mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-sage-200/30">
            <div className="mb-6">
              <svg className="w-12 h-12 text-sage-300 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M12 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.1 0 2-.9 2-2s-.9-2-2-2c-2.2 0-4-1.8-4-4s1.8-4 4-4c.6 0 1.1.1 1.6.4.4.2.8.1 1.1-.2.3-.3.4-.7.2-1.1C13.9 8.4 13 8 12 8zM24 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.1 0 2-.9 2-2s-.9-2-2-2c-2.2 0-4-1.8-4-4s1.8-4 4-4c.6 0 1.1.1 1.6.4.4.2.8.1 1.1-.2.3-.3.4-.7.2-1.1C25.9 8.4 25 8 24 8z"/>
              </svg>
            </div>
            <blockquote className="text-text-primary text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "Essens i terapien er at være helhjertet – at have hele hjertet med."
            </blockquote>
            <cite className="text-text-muted font-medium not-italic">
              — Karen Aaes, Essentielt Institut
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
