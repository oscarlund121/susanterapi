import React from 'react';

const KlientUdtalelser = () => {
  const udtalelser = [
    {
      tekst: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde, som gør at jeg i større grad kan udleve mine ønsker.",
      navn: "Dorte Toft",
      baggrund: "Familie med 3 børn i terapi"
    },
    {
      tekst: "Jeg har haft psoriasis siden jeg var 14 år gammel. Efter at have fundet frem til hvilke chok det var skyld i og få det bearbejdet, gik der ikke lang tid før jeg var fri for denne sygdom.",
      navn: "Birthe Høll Petersen", 
      baggrund: "Efter 43 år med psoriasis"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Venstre side - Titel */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Klient<br />
              udtalelser
            </h2>
          </div>

          {/* Højre side - Udtalelser */}
          <div className="space-y-8">
            {udtalelser.map((udtalelse, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 border border-gray-100/50">
                <div className="mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-sm">"</span>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic text-[15px] lg:text-base">
                    {udtalelse.tekst}
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-gray-100/60">
                  <div className="font-light text-gray-800 tracking-wide">{udtalelse.navn}</div>
                  <div className="text-xs text-gray-500 mt-1">{udtalelse.baggrund}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 pt-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vil du også opleve transformation? Jeg hjælper dig gerne med at finde 
              vej til mere glæde, frihed og lethed i livet.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 hover:shadow-lg transition-all duration-500 font-light tracking-wide group"
            >
              <span>Book din første session</span>
              <span className="transform transition-transform group-hover:translate-x-1 text-sm opacity-70 group-hover:opacity-100">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlientUdtalelser;
