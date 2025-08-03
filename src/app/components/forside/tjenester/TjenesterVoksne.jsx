"use client";
import React from "react";
import Image from "next/image";

const TjenesterVoksne = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="relative h-64">
        <Image
          src="/images/hand-on-chest.jpg"
          alt="Voksne"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <span className="text-sm font-light text-gray-500 tracking-wider uppercase">
            Målgruppe
          </span>
          <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mt-2">
            Voksne
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Som voksen kan livets kompleksitet og ansvar nogle gange føles overvældende. 
            Du jonglerer med karriere, relationer og personlig udvikling.
          </p>

          <div className="space-y-4">
            <h4 className="font-light text-gray-800">Typiske udfordringer:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Work-life balance og stress</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Relationsproblemer og kommunikation</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Selvværd og personlig identitet</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Livsovergange og forandringer</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 font-light leading-relaxed text-sm">
            Terapi kan hjælpe dig med at finde balance, klarhed og styrke til at 
            navigere livets udfordringer med større ro og selvindsigt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TjenesterVoksne;
