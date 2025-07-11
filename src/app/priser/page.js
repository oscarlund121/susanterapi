export default function PriserPage() {
  const prispakker = [
    {
      type: "Enkelt session",
      pris: "1.400 kr.",
      varighed: "1 til 1,5 time",
      beskrivelse: "Perfekt til at prøve terapien af eller til enkelte sessioner"
    },
    {
      type: "3 sessioner",
      pris: "4.000 kr.",
      varighed: "1 til 1,5 time pr. session",
      beskrivelse: "Du sparer 500 kr.",
      besparelse: true
    },
    {
      type: "5 sessioner",
      pris: "6.000 kr.",
      varighed: "1 til 1,5 time pr. session",
      beskrivelse: "Du sparer 1.000 kr.",
      besparelse: true
    },
    {
      type: "10 sessioner",
      pris: "12.500 kr.",
      varighed: "1 til 1,5 time pr. session",
      beskrivelse: "Du sparer 1.500 kr.",
      besparelse: true,
      populaer: true
    }
  ];

  const specialpriser = [
    {
      type: "Studerende",
      pris: "900 kr.",
      varighed: "1 til 1,5 time",
      beskrivelse: "Særlig pris for studerende med gyldig studiekort"
    },
    {
      type: "Par-session",
      pris: "1.900 kr.",
      varighed: "1,5 til 2 timer",
      beskrivelse: "Terapi for par og kæresteforhold"
    },
    {
      type: "Familie terapi",
      pris: "1.600 kr.",
      varighed: "1 til 1,5 time",
      beskrivelse: "Forældre guidning og familie terapi"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Priser
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl leading-relaxed">
            Alle priser er inklusiv moms. Jeg har ingen overenskomst med sygesikringen.
          </p>
        </div>

        {/* Hovedpriser */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Individuelle sessioner</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {prispakker.map((pakke, index) => (
              <div key={index} className={`p-8 border border-gray-100/50 bg-white/70 backdrop-blur-sm ${pakke.populaer ? 'ring-2 ring-gray-300' : ''}`}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-light text-gray-800 tracking-wide">{pakke.type}</h3>
                      {pakke.populaer && <span className="text-xs font-light text-gray-500 bg-gray-100 px-3 py-1">POPULÆR</span>}
                    </div>
                    <div className="text-4xl font-light text-gray-800">{pakke.pris}</div>
                    <div className="text-gray-600 font-light">{pakke.varighed}</div>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {pakke.beskrivelse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialpriser */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Specialpriser</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialpriser.map((special, index) => (
              <div key={index} className="p-8 border border-gray-100/50 bg-white/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-gray-800 tracking-wide">{special.type}</h3>
                    <div className="text-3xl font-light text-gray-800">{special.pris}</div>
                    <div className="text-gray-600 font-light">{special.varighed}</div>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">{special.beskrivelse}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Praktisk info */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Praktisk information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 border border-gray-100/50">
                <h3 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">Afbudsregler</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Afbud meldes senest dagen før kl. 17.00
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Afbud sker over telefon eller SMS
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Ved for sent afbud opkræves fuldt honorar
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Ved udeblivelse opkræves fuldt honorar
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 border border-gray-100/50">
                <h3 className="text-2xl font-light text-gray-800 mb-8 tracking-wide">Betalingsinformation</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Betaling sker efter hver session
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    MobilePay eller kontant betaling
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Ingen overenskomst med sygesikringen
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Alle priser er inklusiv moms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA sektion */}
        <section className="py-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Klar til at tage det første skridt? Book din session i dag.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 hover:shadow-lg transition-all duration-500 font-light tracking-wide group"
            >
              <span>Book session</span>
              <span className="transform transition-transform group-hover:translate-x-1 text-sm opacity-70 group-hover:opacity-100">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
