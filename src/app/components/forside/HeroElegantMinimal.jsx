"use client";

import Image from 'next/image';
import Button from "../ui/Button.jsx";

const heroImage = "/images/hero-img.jpg";

const HeroElegantMinimal = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
   
    <div className="relative w-full h-screen sm:h-[85vh] lg:h-[90vh]">
      <div className="relative overflow-hidden" style={{ borderBottomLeftRadius: "60px sm:80px lg:100px", height: "100%", width: "100%" }}>
     
        <Image
          src={heroImage}
          alt="Susan Albertsen - Psykoterapi"
          fill
          className="object-cover object-center"
          style={{ borderBottomLeftRadius: "60px sm:80px lg:100px" }}
        />
        
        {/* Bedre overlay for tekst-læsbarhed */}
        <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Centered minimal content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              
              {/* Pure essence - just the name */}
              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                <div>
                  <h1 className="text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap drop-shadow-lg">
                    Susan Albertsen
                  </h1>
                </div>
                
                {/* Single focus point */}
                <div>
                  <p className="text-black bg-white/50 text-lg sm:text-xl md:text-2xl font-light tracking-widest inline-block py-6 px-8 drop-shadow-md">
                    PSYKOTERAPI
                  </p>
                </div>
                
           
              </div>
            </div>
          </div>
          
          {/* Single, focused call to action */}
          <div className="absolute bottom-32 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2">
            <Button variant='primary'>
              BOOK EN SESSION
            </Button>
          </div>
          
      </div>
    </div>
  </div>
);

export default HeroElegantMinimal;
