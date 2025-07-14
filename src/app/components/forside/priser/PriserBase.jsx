import React from 'react';

const PriserBase = () => {
  const priser = [
    { type: "Enkelt session", pris: "1.400 kr.", varighed: "1-1,5 time" },
    { type: "Studerende", pris: "900 kr.", varighed: "1-1,5 time" },
    { type: "3 sessioner", pris: "4.000 kr.", varighed: "Spar 500 kr." },
    { type: "5 sessioner", pris: "6.000 kr.", varighed: "Spar 1.000 kr." },
    { type: "10 sessioner", pris: "12.500 kr.", varighed: "Spar 1.500 kr." },
    { type: "Par-session", pris: "1.900 kr.", varighed: "1,5-2 timer" },
    { type: "Familie session", pris: "1.600 kr.", varighed: "1-1,5 time" }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Venstre side - Titel */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              Priser
            </h2>
            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Alle priser er inklusiv moms. Jeg har ingen overenskomst med sygesikringen.
            </p>
          </div>

          {/* Højre side - Prisliste */}
          <div className="py-8">
            <div className="space-y-1">
              {priser.map((pris, index) => (
                <div key={index} className="flex justify-between items-center py-5 border-b border-gray-200/40 last:border-b-0 px-4 -mx-4">
                  <div>
                    <div className="text-gray-800 font-light tracking-wide">{pris.type}</div>
                    <div className="text-xs text-gray-500 mt-1">{pris.varighed}</div>
                  </div>
                  <div className="text-lg font-light text-gray-800">{pris.pris}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Praktisk info */}
        <div className="mt-20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="py-6">
              <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Booking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Send en SMS til 25 39 25 39 eller skriv en e-mail til susanalbertsen69@gmail.com
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Afbudsregler</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Afbud meldes senest dagen før kl. 17.00. Ved for sent afbud opkræves fuldt honorar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriserBase;
