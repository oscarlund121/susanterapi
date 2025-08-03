"use client";
import React from "react";
import Image from "next/image";

const YdelserHeroMinimal = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800">
              Mine ydelser
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-2xl">
              Jeg tilbyder en holistisk tilgang til psykoterapi, hvor vi arbejder med hele mennesket - 
              krop, sind og sjæl.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/tree-touch.jpg"
                alt="Healing touch"
                fill
                className="object-cover opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YdelserHeroMinimal;
