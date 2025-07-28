'use client';

import Button from '../ui/Button.jsx';
const heroImage = '/images/hero-img.jpg';


const Hero = () => (
  <div className="relative w-full overflow-hidden bg-white min-h-screen">
    {/* Fixed margin from header */}
    <div className="relative ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
      <div className="relative w-full h-[70vh] lg:h-[80vh] xl:h-[85vh]">
        <div
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            borderBottomLeftRadius: '100px',
            height: '100%',
            width: '100%'
          }}
        >
          {/* Text overlay */}
          <div className="absolute top-6 p-8 lg:p-12">
            <div>
              <h1 className="italic text-white font-bold mb-12 tracking-tight leading-tight text-[clamp(3rem,5vw,4rem)]">
                Velkommen til terapi hos Susan Albertsen
              </h1>
              <h2 className="italic font-light text-[#2c3e50] mb-2 text-[clamp(2rem,4vw,2.5rem)]">
                <span className="inline-block bg-white/50 rounded px-4 py-2">Chok- & traumeforløsning</span>
              </h2>
              <h2 className="italic font-light text-white mb-2 text-[clamp(2rem,4vw,2.5rem)] px-4">
                Psykoterapi
              </h2>
              <h2 className="italic font-light text-white text-[clamp(2rem,4vw,2.5rem)] px-4">
                Mentalisering
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute flex gap-4 lg:flex-row flex-col right-4 bottom-4 lg:right-8 lg:bottom-8">
            <Button variant="inverted">
              LÆS MERE
            </Button>
            <Button variant="primary">
              BOOK SESSION
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
