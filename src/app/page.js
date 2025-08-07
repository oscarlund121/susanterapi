import Image from 'next/image';

import HeroElegantMinimal from './components/layout/Hero';
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
