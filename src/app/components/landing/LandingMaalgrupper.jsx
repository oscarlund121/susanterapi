"use client";
import React from "react";
import Image from "next/image";

const LandingMaalgrupper = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Målgrupper
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Hvem jeg hjælper
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Jeg arbejder med børn, unge og voksne og hjælper med alle former for ubehag 
            og fastlåsthed i livet.
          </p>
        </div>

        {/* Tre målgrupper */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Børn & Familier */}
          <div className="bg-white shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/flower.jpg"
                alt="Børn og familier"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-light text-gray-800">
                Børn & Familier
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Familiedynamikker og relationer</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Skolefravær og læringsvanskeligheder</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>ADHD og følelsesmæssige udfordringer</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Mentaliserende forældreguidning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Unge & Studerende */}
          <div className="bg-white shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/sitting.jpg"
                alt="Unge og studerende"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-light text-gray-800">
                Unge & Studerende
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Præstationsangst og eksamenstress</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Sociale udfordringer og gruppedannelser</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Usikkerhed og lavt selvværd</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Overgange og nye miljøer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Voksne & Par */}
          <div className="bg-white shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/hand-on-chest.jpg"
                alt="Voksne og par"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-light text-gray-800">
                Voksne & Par
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Stress, angst og depression</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Parforhold og kæresteproblematikker</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Traumer og sorg</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0 rounded-full"></div>
                  <div>Personlig udvikling og selvværd</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundsektion */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 font-light">
              Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
              eller fastlåst i en situation? Jeg hjælper dig med at finde vej til 
              frihed, glæde og fornyet energi.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-px bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingMaalgrupper;
