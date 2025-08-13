"use client";
import React from "react";
import SectionHeader from "../layout/SectionHeader";

const LandingMetoder = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Diagonal flowing design */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-soft-peach-200/15 rounded-full blur-2xl transform -rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-warm-beige-200/25 rounded-full blur-xl"></div>
      </div>

      {/* Full width for dramatic layout */}
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header - centered and bold */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-sage-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
            <span className="text-sage-700 text-sm font-medium">Mine behandlingsmetoder</span>
            <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Sådan arbejder jeg
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Jeg anvender evidensbaserede metoder der er anerkendt internationalt og tilpasset den enkelte klients behov og situation.
          </p>
        </div>

        {/* Revolutionary flowing method display */}
        <div className="relative">
          {/* Central connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sage-300/30 transform -translate-x-px"></div>
          
          {/* Method 1 - EMDR (Left side) */}
          <div className="mb-24 lg:mb-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:text-right lg:pr-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-soft-peach-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-soft-peach-700">01</span>
                  </div>
                  <div className="hidden lg:block w-8 h-0.5 bg-soft-peach-300"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  EMDR & Chok-forløsning
                </h3>
                <p className="text-soft-peach-600 font-medium mb-4">WHO-anerkendt traumebehandling</p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Eye Movement Desensitization and Reprocessing er en effektiv metode til at bearbejde traumer og chok. 
                  Vi lokaliserer og forløser gamle programmationer, så du kan finde ro og frihed.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Traumer og PTSD", "Angst og fobier", "Fastlåsthed"].map((item, index) => (
                    <span key={index} className="bg-soft-peach-100 text-soft-peach-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:pl-8">
                <div className="w-full h-80 bg-soft-peach-50 rounded-3xl overflow-hidden">
                  <img 
                    src="/images/hand-on-chest.jpg" 
                    alt="EMDR behandling" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Method 2 - Mentalisering (Right side) */}
          <div className="mb-24 lg:mb-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8">
                <div className="w-full h-80 bg-warm-beige-50 rounded-3xl overflow-hidden">
                  <img 
                    src="/images/walk.jpg" 
                    alt="Mentalisering og relationer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="flex items-center gap-3 mb-4 lg:justify-end">
                  <div className="hidden lg:block w-8 h-0.5 bg-warm-beige-300 lg:order-1"></div>
                  <div className="w-16 h-16 bg-warm-beige-100 rounded-2xl flex items-center justify-center lg:order-2">
                    <span className="text-2xl font-bold text-warm-beige-700">02</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 lg:text-left">
                  Mentalisering
                </h3>
                <p className="text-warm-beige-600 font-medium mb-4">Relationsdynamikker og tryggere forbindelser</p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Mentaliserende tilgang hjælper med at forstå egen og andres adfærd ud fra følelser, tanker og behov. 
                  Skaber tryggere relationer og bedre kommunikation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Familie- og parterapi", "Kommunikation", "Relationer"].map((item, index) => (
                    <span key={index} className="bg-warm-beige-100 text-warm-beige-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Method 3 - EIP (Left side) */}
          <div className="mb-24 lg:mb-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:text-right lg:pr-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-sage-700">03</span>
                  </div>
                  <div className="hidden lg:block w-8 h-0.5 bg-sage-300"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Essentiel Integrativ Psykoterapi
                </h3>
                <p className="text-sage-600 font-medium mb-4">Holistisk tilgang til krop, sind og sjæl</p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  En helhedsorienteret tilgang der arbejder med krop, sind og sjæl som én enhed. 
                  Fokuserer på at aktivere dine naturlige healing-ressourcer.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kropsbevidsthed", "Følelsesarbejde", "Energetisk healing"].map((item, index) => (
                    <span key={index} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:pl-8">
                <div className="w-full h-80 bg-sage-50 rounded-3xl overflow-hidden">
                  <img 
                    src="/images/tree-touch.jpg" 
                    alt="Holistisk terapi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Method 4 - Meditation (Right side) */}
          <div className="mb-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="order-2 lg:order-1 mt-8 lg:mt-0 lg:pr-8">
                <div className="w-full h-80 bg-soft-peach-50 rounded-3xl overflow-hidden">
                  <img 
                    src="/images/sitting-closed.jpg" 
                    alt="Meditation og spirituel udvikling" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="flex items-center gap-3 mb-4 lg:justify-end">
                  <div className="hidden lg:block w-8 h-0.5 bg-soft-peach-300 lg:order-1"></div>
                  <div className="w-16 h-16 bg-soft-peach-100 rounded-2xl flex items-center justify-center lg:order-2">
                    <span className="text-2xl font-bold text-soft-peach-700">04</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 lg:text-left">
                  Meditation & Spirituel Udvikling
                </h3>
                <p className="text-soft-peach-600 font-medium mb-4">Indre ro og spirituel vækst</p>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Meditation og spirituelle praksisser der hjælper dig med at finde indre ro, 
                  klarhed og en dybere forbindelse til dig selv og livet.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Mindfulness", "Åndedrætsarbejde", "Spirituel guidance"].map((item, index) => (
                    <span key={index} className="bg-soft-peach-100 text-soft-peach-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-sage-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-text-primary mb-4">Min integrerede tilgang</h4>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Jeg kombinerer disse metoder efter dine individuelle behov og situation. 
              Sammen finder vi frem til den tilgang der passer bedst til dig og din healing-proces.
            </p>
            <a href="/ydelser" className="inline-flex items-center gap-2 bg-sage-500 text-white px-8 py-3 rounded-2xl hover:bg-sage-600 transition-colors">
              Læs mere om metoderne
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMetoder;
