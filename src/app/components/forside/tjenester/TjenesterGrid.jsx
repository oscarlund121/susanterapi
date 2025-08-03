"use client";
import React from "react";
import TjenesterUnge from "./TjenesterUnge";
import TjenesterVoksne from "./TjenesterVoksne";
import TjenesterBoern from "./TjenesterBoern";

const TjenesterGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6">
            Hvad jeg tilbyder
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Jeg tilbyder psykoterapi tilpasset forskellige livsfaser og behov. 
            Uanset om du er barn, ung eller voksen, finder vi sammen en tilgang der passer til dig.
          </p>
        </div>

        {/* Grid af tjenester */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <TjenesterBoern />
          <TjenesterUnge />
          <TjenesterVoksne />
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 md:mt-20">
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-6"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
          
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Uanset hvilken livsfase du befinder dig i, er mit mål at skabe et trygt rum, 
            hvor du kan udforske dine udfordringer og finde veje til vækst og healing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TjenesterGrid;
