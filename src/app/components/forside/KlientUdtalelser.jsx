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
    <section className="py-32 bg-gray-50">
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
          <div className="space-y-12">
            {udtalelser.map((udtalelse, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-8 py-6">
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{udtalelse.tekst}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-light text-gray-800">{udtalelse.navn}</div>
                  <div className="text-gray-500">{udtalelse.baggrund}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Vil du også opleve transformation? Jeg hjælper dig gerne med at finde 
              vej til mere glæde, frihed og lethed i livet.
            </p>
            <a 
              href="/kontakt" 
              className="inline-block border border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              Book din første session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlientUdtalelser;
