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
            Vælg den pakke der passer bedst til dine behov. Alle priser er inklusiv moms.
          </p>
        </div>

        {/* Hovedpriser */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Individuelle sessioner</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {prispakker.map((pakke, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-2xl font-light text-gray-800">{pakke.type}</h3>
                    {pakke.populaer && (
                      <span className="text-sm font-light text-gray-400 tracking-wide">MEST POPULÆRE</span>
                    )}
                  </div>
                  <div className="text-4xl font-light text-gray-800">{pakke.pris}</div>
                  <div className="text-gray-600 font-light">{pakke.varighed}</div>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">
                  {pakke.beskrivelse}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialpriser */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Specialpriser</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {specialpriser.map((special, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-gray-800">{special.type}</h3>
                  <div className="text-3xl font-light text-gray-800">{special.pris}</div>
                  <div className="text-gray-600 font-light">{special.varighed}</div>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{special.beskrivelse}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Praktisk info */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800">Praktisk information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              <div className="space-y-8">
                <h3 className="text-2xl font-light text-gray-800">Afbudsregler</h3>
                <div className="space-y-4 text-gray-600 font-light">
                  <div className="py-3 border-b border-gray-200">Afbud meldes senest dagen før kl. 17.00</div>
                  <div className="py-3 border-b border-gray-200">Afbud sker over telefon eller SMS</div>
                  <div className="py-3 border-b border-gray-200">Ved for sent afbud opkræves fuldt honorar</div>
                  <div className="py-3 border-b border-gray-200">Ved udeblivelse opkræves fuldt honorar</div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-light text-gray-800">Betalingsinformation</h3>
                <div className="space-y-4 text-gray-600 font-light">
                  <div className="py-3 border-b border-gray-200">Betaling sker efter hver session</div>
                  <div className="py-3 border-b border-gray-200">MobilePay eller kontant betaling</div>
                  <div className="py-3 border-b border-gray-200">Ingen overenskomst med sygesikringen</div>
                  <div className="py-3 border-b border-gray-200">Alle priser er inklusiv moms</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
