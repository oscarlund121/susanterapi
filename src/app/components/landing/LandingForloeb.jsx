"use client";
import React from "react";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";

const LandingForloeb = () => {
  const sessionTypes = [
    {
      type: "1:1 session",
      duration: "1 til 1,5 time",
      price: "1.400 kr.",
      description: "Individuel terapi tilpasset dine specifikke behov"
    },
    {
      type: "1:1 session (studerende)",
      duration: "1 til 1,5 time", 
      price: "900 kr.",
      description: "Særlig pris for studerende med gyldigt studiekort"
    },
    {
      type: "Par-session",
      duration: "1,5 til 2 timer",
      price: "1.900 kr.",
      description: "Terapi for par og kærester der ønsker at styrke forholdet"
    },
    {
      type: "Familie terapi",
      duration: "1 til 1,5 time",
      price: "1.600 kr.",
      description: "Forældreguidning og familieterapi"
    }
  ];

  const packages = [
    {
      sessions: "3 sessioner",
      price: "4.000 kr.",
      saving: "Du sparer 200 kr."
    },
    {
      sessions: "5 sessioner", 
      price: "6.000 kr.",
      saving: "Du sparer 1.000 kr."
    },
    {
      sessions: "10 sessioner",
      price: "12.500 kr.", 
      saving: "Du sparer 1.500 kr."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Hvordan foregår en session */}
          <div className="space-y-8">
            <SectionHeader 
              badgeText="Sådan fungerer det"
              title="Start din forandring i dag"
              description="En terapisession hos mig er en samtale, hvor vi sammen finder frem til det du ønsker at arbejde med, tale om og komme af med, så du i eget tempo kommer hen til det du ønsker."
              showButton={false}
            />

            <div className="space-y-6 text-gray-700 font-light leading-relaxed">              
              <p>
                Terapisessionerne ser forskelligt ud fordi bevægelsen i terapien for den 
                enkelte klient er en begyndelse på at åbne op for et højere niveau i dig, 
                hvor du er dig selv og fri af enhver begrænsende overbevisning og fastlåste mønstre.
              </p>
            </div>

            {/* Forløbet step-by-step */}
            <div className="bg-gray-50 p-8 space-y-6">
              <h3 className="text-xl font-light text-[#333333] mb-6">
                Sådan kommer du i gang:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Første kontakt",
                    description: "SMS eller kort telefonisk samtale, hvor du kort beskriver det du gerne vil tale om"
                  },
                  {
                    step: "02", 
                    title: "Vi aftaler tid",
                    description: "Vi finder et tidspunkt der passer dig. Første session varer ofte lidt længere"
                  },
                  {
                    step: "03",
                    title: "Din session",
                    description: "Vi mødes til den aftalte tid og arbejder med det du ønsker"
                  },
                  {
                    step: "04",
                    title: "Opfølgning",
                    description: "Du mærker efter hvad du har brug for og kontakter mig når du er klar"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <span className="bg-gray-800/50 text-white px-3 py-1 text-sm font-light tracking-wider flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-light text-[#333333] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <h4 className="font-light text-[#333333] mb-3">Anbefalet forløb:</h4>
              <p className="text-sm text-gray-600 font-light">
                Afhængig af det du ønsker at arbejde med er min anbefaling at du har 
                <strong className="font-normal"> 2 til 10 sessioner</strong> i et forløb.
              </p>
            </div>
          </div>

          {/* Priser og pakker */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#333333] mb-6">
                Priser & Varighed
              </h2>
              <div className="w-16 h-px bg-gray-800 mb-8"></div>
            </div>

            {/* Enkelte sessioner */}
            <div className="space-y-4">
              <h3 className="text-xl font-light text-[#333333] mb-6">
                Enkelte sessioner
              </h3>
              
              {sessionTypes.map((session, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-light text-[#333333] text-lg">{session.type}</h4>
                      <p className="text-sm text-gray-600">{session.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-[#333333]">{session.price}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-light">{session.description}</p>
                </div>
              ))}
            </div>

            {/* Pakker */}
            <div className="space-y-4">
              <h3 className="text-xl font-light text-[#333333] mb-6">
                Sessionsforløb (spar penge)
              </h3>
              
              {packages.map((pkg, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-light text-[#333333] text-lg">{pkg.sessions}</h4>
                      <p className="text-sm text-#1cc18e font-light">{pkg.saving}</p>
                    </div>
                    <div className="text-2xl font-light text-[#333333]">{pkg.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kontakt info */}
            <div className="bg-gray-800 text-white p-8">
              <h3 className="text-xl font-light mb-6">Book din session</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <strong className="font-normal">Telefon:</strong> 25 39 25 39
                </div>
                <div>
                  <strong className="font-normal">Email:</strong> susanalbertsen69@gmail.com
                </div>
                <div>
                  <strong className="font-normal">Adresse:</strong> Skolebakken 7, st.th, 8000 Århus C
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-light mb-2">Afbudsregler:</h4>
                <p className="text-xs text-gray-300 font-light">
                  Afbud meldes senest dagen før kl. 17.00. Senere afbud eller udeblivelse 
                  medfører fuld betaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingForloeb;
