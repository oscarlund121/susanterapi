import Image from 'next/image';
import Hero from './components/old-site/Hero';
// Hero varianter - DSE REVIEW

import HeroElegantMinimal from './components/forside/HeroElegantMinimal';
// Tjenester varianter

// NY SAMMENHÆNGENDE LANDING PAGE
import LandingPage from './components/landing/LandingPage';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========== NY SAMMENHÆNGENDE LANDING PAGE =========== */}

      <HeroElegantMinimal />
      <LandingPage />


   
 
   
    </main>
  );
}
