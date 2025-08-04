"use client";

import Button from "../ui/Button.jsx";
const heroImage = "/images/hero-img.jpg";

const Hero = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Fixed margin from header */}
    <div className="relative ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
      <div className="relative w-full h-[70vh] lg:h-[80vh] xl:h-[85vh]">
        <div
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderBottomLeftRadius: "100px",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Text overlay */}
          <div className="absolute p-8  lg:p-12">
            <div>
              <h1 className="italic text-white font-bold text-[clamp(3rem,5vw,4rem)]">
                Velkommen til terapi hos  
              </h1>
              <h1 className="text-black font-bold mb-12 md:mb-20 text-[clamp(3rem,5vw,4rem)]">
                
                  Susan Albertsen
              
              </h1>
              <h2 className="italic font-light text-black mb-2 text-[clamp(2rem,4vw,2.5rem)]">
                <span className="rounded-tr-4xl rounded-bl-4xl inline-block bg-white/50 px-4 py-2">
                  Chok- & traumeforløsning
                </span>
              </h2>
              <br />
              <h2 className="italic font-light mb-2 text-white text-[clamp(2rem,4vw,2.5rem)]  ">
                <span className="rounded-tl-4xl rounded-br-4xl
                inline-block bg-black/50 px-4 py-2">
                  Mentalisering
                </span>
              </h2>
               <br />
              <h2 className="italic font-light text-white text-[clamp(2rem,4vw,2.5rem)] ">
                <span className="rounded-tl-4xl rounded-br-4xl inline-block bg-black/50 px-4 py-2">
                  Psykoterapi
                </span>
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute flex gap-4 lg:flex-row flex-col right-4 bottom-4 lg:right-8 lg:bottom-8">
            <Button variant="inverted">LÆS MERE</Button>
            <Button variant="primary">BOOK SESSION</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
