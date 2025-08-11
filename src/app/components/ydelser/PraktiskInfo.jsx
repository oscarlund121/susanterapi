"use client";
import React from "react";
import Card from "../ui/Card";
import BulletList from "../layout/BulletList";
import SectionBadge from "../layout/SectionBadge";
import SectionHeader from "../layout/SectionHeader";

const PraktiskInfo = () => {
  const sessionInfo = [
    "Varighed: 1 til 1,5 time pr. session",
    "Hyppighed: Typisk ugentligt eller hver 14. dag",
    "Antal: 3-10 sessioner alt efter behov",
    "Online eller fysisk fremmøde muligt"
  ];

  const forventninger = [
    "Åbenhed og ærlig kommunikation",
    "Villighed til at udforske og eksperimentere", 
    "Respekt for din egen proces og timing",
    "Engagement i hjemmeopgaver mellem sessioner"
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <SectionHeader
          badge="Sådan foregår det"
          title="Praktiske informationer"
          subtitle="Her finder du praktiske oplysninger om, hvordan en terapiproces forløber, og hvad du kan forvente af vores samarbejde."
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-light text-gray-800">Sessions</h3>
            <BulletList items={sessionInfo} />
          </Card>
          
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-light text-gray-800">Forventninger</h3>
            <BulletList items={forventninger} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PraktiskInfo;
