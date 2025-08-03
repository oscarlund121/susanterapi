"use client";
import React from "react";
import Image from "next/image";

const TjenesterUnge = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="relative h-64">
        <Image
          src="/images/sitting.jpg"
          alt="Unge og studerende"
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
            Unge & Studerende
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 font-light leading-relaxed">
            Som ung eller studerende møder du ofte nye udfordringer. At være ung og studerende 
            kan være spændende – men også krævende.
          </p>

          <div className="space-y-4">
            <h4 className="font-light text-gray-800">Typiske udfordringer:</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Mange nye mennesker og gruppedannelser</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Nye måder at arbejde og lære på</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>At finde din plads i fællesskabet</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Præstationspres og karakterer</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 font-light leading-relaxed text-sm">
            Alt dette kræver både energi og overskud – og det tager tid at opbygge 
            en følelse af tryghed og sikkerhed i dig selv.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TjenesterUnge;
