"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";

const heroImage = "/images/hero-img.jpg";

const HeroElegantMinimal = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
      <div
        className="relative overflow-hidden"
        style={{
          borderBottomLeftRadius: "60px sm:80px lg:100px",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          src={heroImage}
          alt="Susan Albertsen - Psykoterapi"
          fill
          className="object-cover object-center"
          style={{ borderBottomLeftRadius: "60px sm:80px lg:100px" }}
        />
        
       

        {/* Bedre overlay for tekst-læsbarhed */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Flex layout for positioning */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top row - Button øverst til højre */}
          <div className="flex justify-end p-8">
            <Button variant="primary">BOOK EN SESSION</Button>
          </div>
          
          {/* Main content area */}
          <div className="flex-1 flex">
            {/* Venstre side - Susan Albertsen */}
    
            
            {/* Højre side - tom for nu */}
            <div className="flex-1"></div>
          </div>
          
          {/* Center - Psykoterapi */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-black bg-white/50 text-lg sm:text-xl md:text-2xl font-light tracking-widest py-6 px-8 drop-shadow-md">
              PSYKOTERAPI
            </h2>
          </div>
        </div>
      </div>
    </div>
              <div className="flex items-end px-1 py-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[120px]">
                Susan Albertsen
              </h1>
            </div>
  </div>
);

export default HeroElegantMinimal;
