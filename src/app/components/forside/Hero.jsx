'use client'
import Image from 'next/image';
import SideIcons from './SideIcons';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">

      
      {/* Fixed margin from header */}
      <div className="relative ml-8 lg:ml-12 xl:ml-16 2xl:ml-20">
        <SideIcons />
        <div className="relative w-full h-[70vh] lg:h-[80vh] xl:h-[85vh]">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero Image - Peaceful therapy setting"
            fill
            className="object-cover rounded-bl-[100px] lg:rounded-bl-[150px] xl:rounded-bl-[200px]"
            priority
          />
          
          {/* Knapper i bunden til højre */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-4">
            <a 
              href="/ydelser" 
              className="inline-flex items-center text-white/80 hover:text-white font-light text-sm tracking-wide group transition-all duration-500 bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20 hover:bg-white/20"
            >
              <span>LÆSE MERE</span>
              <span className="ml-3 transform transition-transform group-hover:translate-x-1 text-xs opacity-70 group-hover:opacity-100">→</span>
            </a>
            <a 
              href="/kontakt" 
              className="group bg-white/95 backdrop-blur-sm text-gray-800 px-8 py-4 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-500 flex items-center gap-3 font-light text-sm tracking-wide border border-gray-100"
            >
              <span>BOOK SESSION</span>
              <span className="transform transition-transform group-hover:translate-x-1 text-xs opacity-70 group-hover:opacity-100">→</span>
            </a>
          </div>
          
          {/* Vision overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8 lg:p-12 rounded-bl-[100px] lg:rounded-bl-[150px] xl:rounded-bl-[200px]">
            <div className="max-w-4xl text-white">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light mb-8 leading-relaxed">
                Chok- og traumeforløsning, psykoterapi og 
                <span className="text-white/90"> mentalisering</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed opacity-90 mb-8">
                Min vision er, sammen med klienten at skabe en ønsket forandring, 
                med mere glæde, frihed og lethed i livet – ansvarligt, kærligt og anerkendende.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
