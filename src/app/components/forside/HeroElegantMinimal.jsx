"use client";

import Image from "next/image";
import Button from "../ui/Button.jsx";
import { IoArrowForward } from "react-icons/io5";

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
        
       

  
        

        {/* Flex layout for positioning */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex items-end px-1 py-2">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[100px]">
                 Susan Albertsen
               </h1>
             </div>
          {/* Top row - Button øverst til højre */}
          
          {/* Main content area */}
          <div className="flex-1 flex">
            {/* Venstre side - Susan Albertsen */}
    
            
            {/* Højre side - tom for nu */}
            <div className="flex-1"></div>
          </div>
          
          {/* Center - Psykoterapi */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="/kontakt" className="group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-gray-800 bg-white/50 py-6 px-8 drop-shadow-md transition-all duration-500 ease-in-out group-hover:bg-green-600 group-hover:text-white border-2 border-transparent group-hover:border-white group-hover:shadow-xl animate-pulse group-hover:animate-none flex items-center gap-3">
                <IoArrowForward className="text-green-600 group-hover:text-white transition-colors duration-500" size={28} />
                <span className="group-hover:hidden">PSYKOTERAPI</span>
                <span className="hidden group-hover:inline">KLIK HER FOR AT BOOKE</span>
              </h2>
            </a>
          {/* <div className="flex justify-end p-8">
            <Button variant="header">BOOK EN SESSION</Button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
           
  </div>
);

export default HeroElegantMinimal;
