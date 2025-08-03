"use client";
import React from "react";
import Image from "next/image";

const LandingOmSusan = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Billede */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/profile.jpg"
                alt="Susan Albertsen - Psykoterapeut"
                fill
                className="object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            
            {/* Kredibilitet badge */}
            <div className="absolute -bottom-8 -right-8 bg-white shadow-lg p-6 max-w-xs">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-800 mb-2">20+ år</div>
                <div className="text-sm text-gray-600 font-light">erfaring med børn, unge og familier</div>
              </div>
            </div>
          </div>

          {/* Indhold */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Om Susan Albertsen
              </h2>
              <div className="w-16 h-px bg-gray-800 mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-700 font-light leading-relaxed">
              <p className="text-lg">
                Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos 
                Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), 
                ved Karen Aaes på Essentielt institut i Århus.
              </p>
              
              <p>
                Jeg har arbejdet i skoleverdenen i næsten 20 år og har derigennem 
                fået stor indblik i børn, unge og familier. Det er her jeg har 
                erhvervet mine erfaringer teoretisk og i praksis med mentalisering.
              </p>

              <p>
                Essentielt institut er godkendt af og medlem af EAIP (European 
                Association for Integrative Psychotherapy) siden 2004. De metoder 
                jeg bruger i terapien er anerkendt både i Danmark og i udlandet.
              </p>
            </div>

            {/* Uddannelse og tilgang */}
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-light text-gray-800 mb-4">
                Min tilgang
              </h3>
              <blockquote className="text-gray-600 font-light italic leading-relaxed border-l-2 border-gray-300 pl-6">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det 
                ud fra ren ubetinget kærlighed. Essens i terapien er at være helhjertet 
                – at have hele hjertet med."
                <footer className="text-sm text-gray-500 mt-2 not-italic">
                  - Karen Aaes, Essentielt Institut
                </footer>
              </blockquote>
            </div>

            {/* Metoder */}
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <h4 className="font-light text-gray-800">Specialiseringer:</h4>
                <div className="space-y-1 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Essentiel Integrativ Psykoterapi</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>EMDR (WHO-anerkendt)</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Mentaliserende tilgang</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Chok- og traumeforløsning</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-light text-gray-800">Teoretisk fundament:</h4>
                <div className="space-y-1 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Jung's analytiske psykologi</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Systemisk tænkning</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>NLP metoden</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                    <div>Intuition og energiarbejde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingOmSusan;
