"use client";
import React from "react";

import LandingTilbyder from "./LandingTilbyder";
import LandingOmSusan from "./LandingOmSusan";
import LandingMetoder from "./LandingMetoder"; 
import LandingProblemer from "./LandingProblemer";
import LandingMaalgrupper from "./LandingMaalgrupper";
import LandingUdtalelser from "./LandingUdtalelser";
import LandingForloeb from "./LandingForloeb";
import LandingQuote from "./LandingQuote";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
   
      
      {/* Hvad jeg tilbyder - simpelt 2-kolonne layout */}
      <LandingTilbyder />
      
      {/* Om Susan - baggrund og erfaring */}
      <LandingOmSusan />

      {/* Quote - LandingQuote */}
      <LandingQuote />

      {/* Konkrete problemområder */}
      <LandingProblemer />
      
      {/* Detaljerede behandlingsmetoder */}
      <LandingMetoder />
      
      {/* Hvem jeg hjælper - tre målgrupper */}
      <LandingMaalgrupper />
      
      {/* Klientudtalelser */}
      <LandingUdtalelser />
      
      {/* Session forløb og priser */}
      <LandingForloeb />
    </div>
  );
};

export default LandingPage;
