"use client";
import React from "react";
import Image from "next/image";

const LandingMetoder = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Behandlingsmetoder
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Jeg anvender evidensbaserede metoder der er anerkendt internationalt 
            og tilpasset den enkelte klients behov.
          </p>
          <div className="w-16 h-px bg-gray-800 mx-auto mt-8"></div>
        </div>

        {/* Hovedmetoder */}
        <div className="space-y-20">
          
          {/* EMDR / Chok-forløsning */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-gray-800/50 text-white px-4 py-2 text-3xl font-light tracking-wider">
                  01
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                  EMDR & Chok-forløsning
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p className="text-lg">
                  <strong className="font-normal">Eye Movement Desensitization and Reprocessing (EMDR)</strong> 
                  er anerkendt af World Health Organization (WHO) som et effektivt værktøj 
                  til behandling af traumer og chok.
                </p>
                
                <p>
                  Chok, der er lagret i din krop fra oplevelser i dit liv, kan ses som en 
                  række små programmer, der er blevet installeret i dig. Disse programmer 
                  aktiveres igen og igen i situationer, der minder om dem, der skabte 
                  overbelastningen.
                </p>
                
                <p>
                  Gennem chok-forløsning lokaliserer vi disse programmationer, forløser dem 
                  og hjælper dig til en fornyet energi med følelse af ro, glæde, frihed og kærlighed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 space-y-3">
                <h4 className="font-light text-gray-800">Hjælper med:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Traumer og PTSD</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Angst og fobier</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Chok og kriser</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Fastlåsthed</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Negative tankemønstre</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Uforklarlige reaktioner</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <Image
                src="/images/hand-on-chest-2.jpg"
                alt="EMDR og chok-forløsning"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Mentalisering */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:order-1">
              <Image
                src="/images/walk.jpg"
                alt="Mentalisering og familieterapi"
                fill
                className="object-cover shadow-lg"
              />
            </div>
            
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-gray-800/50 text-white px-4 py-2 text-3xl font-light tracking-wider">
                  02
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                  Mentalisering
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p className="text-lg">
                  Mentaliserende tilgang hjælper os til at forstå egen og andres adfærd 
                  ud fra mentale tilstande som følelser, tanker og behov.
                </p>
                
                <p>
                  At have andres sind på sinde og skabe sikkerhed i relationerne. 
                  Denne tilgang er særligt effektiv i familie- og parterapi, hvor 
                  vi arbejder med at forstå dynamikker og skabe tryggere relationer.
                </p>
                
                <p>
                  Gennem mentalisering lærer familier at regulere følelser, skabe mening 
                  i relationerne og åbenhed for læring og vækst.
                </p>
              </div>

              <div className="bg-gray-50 p-6 space-y-3">
                <h4 className="font-light text-gray-800">Anvendes til:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Familie- og parterapi</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Forældreguidning</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Relationsproblemer</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Kommunikationsvanskeligheder</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Følelsesregulering</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Uro i familien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meditation & Bevidsthed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-gray-800/50 text-white px-4 py-2 text-3xl font-light tracking-wider">
                  03
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800">
                  Meditation & Bevidsthed
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p className="text-lg">
                  Meditativ fordybelse for harmoni, balance, ro og fred i både krop, 
                  tanker og følelser. At komme bag om det bevidste sind og ind i en 
                  dyb indadvendt fokuseret opmærksomhed.
                </p>
                
                <p>
                  En oplevelse hvor du føler en intens forbindelse med universet eller 
                  din egen sjæl. Det kan være en følelse af kroppens og visdommens 
                  reservoir af gemte ressourcer og indsigter.
                </p>
                
                <p>
                  Arbejde med loven om tiltrækning og bevidsthed - at få fokus på det 
                  du gerne vil tiltrække, så det i kroppen flyder naturligt og giver 
                  god mening i hele dig.
                </p>
              </div>

              <div className="bg-gray-50 p-6 space-y-3">
                <h4 className="font-light text-gray-800">Skaber:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Indre ro og balance</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Klarhed og indsigt</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Forbindelse til intuition</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Energi og vitalitet</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Spirituel udvikling</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                    <div>Manifestation af ønsker</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96">
              <Image
                src="/images/sitting-closed.jpg"
                alt="Meditation og bevidsthed"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMetoder;
