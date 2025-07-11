export default function YdelserPage() {
  const ydelser = [
    {
      title: "Psykoterapi",
      description: "Gennem helhjertet terapi lærer du at give slip på destruktive følelser og fastlåsthed. Oplev frihed, glæde og en fornyet energi.",
      detaljer: [
        "Arbejde med traumer og negative tankemønstre",
        "Genvind balance og harmoni",
        "Udvikl større selvforståelse",
        "Styrk din mentale sundhed"
      ]
    },
    {
      title: "Chok- og traumeforløsning",
      description: "EMDR metode til at forløse chok lagret i kroppen. Genvind balance og oplevelse af ro og kærlighed.",
      detaljer: [
        "WHO-anerkendt EMDR metode",
        "Forløsning af chok og traumer",
        "Genetablering af kroppens naturlige balance",
        "Intuitive og håndgribelige redskaber"
      ]
    },
    {
      title: "Meditation og mindfulness",
      description: "Meditativ fordybelse for harmoni og balance. Kom bag om det bevidste sind og oplev intens forbindelse med din sjæl.",
      detaljer: [
        "Dyb indadvendt fokuseret opmærksomhed",
        "Forbindelse med universet og din sjæl",
        "Adgang til kroppens visdom",
        "Harmoni i krop, tanker og følelser"
      ]
    },
    {
      title: "Familie- og parterapi",
      description: "Mentaliserende tilgang til relationer. Forstå dynamikker og skab sikkerhed i familien og parforhold.",
      detaljer: [
        "Forståelse af mentale tilstande",
        "Forbedring af kommunikation",
        "Skabelse af tryg relation",
        "Guidning til forældre"
      ]
    }
  ];

  const problemer = [
    "Angst og fobier", "Stress og udbrændthed", "Sorg og tab", "Lavt selvværd",
    "Traumer", "Vrede og frustration", "ADHD", "Skolefravær",
    "Præstationsangst", "Usikkerhed", "Fastlåsthed", "Søvnproblemer",
    "Tristhed/depression", "Sensitivitet", "Tankemylder", "Parforhold problemer"
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Mine ydelser
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl leading-relaxed">
            Jeg tilbyder psykoterapi, chok-forløsning, arbejder med intuition og energier, 
            og anvender en mentaliserende tilgang.
          </p>
        </div>

        {/* Ydelser grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-24 lg:mb-32">
          {ydelser.map((ydelse, index) => (
            <div key={index} className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-light text-gray-400 tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light text-gray-800">{ydelse.title}</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{ydelse.description}</p>
              </div>
              <div className="space-y-3">
                {ydelse.detaljer.map((detalje, idx) => (
                  <div key={idx} className="text-gray-600 font-light py-2 border-b border-gray-100 last:border-b-0">
                    {detalje}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Problemer sektion */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800 leading-tight">
              Jeg arbejder med børn, unge og voksne
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {problemer.map((problem, index) => (
                <div key={index} className="text-gray-600 font-light py-3 border-b border-gray-200">
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Session info */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-3xl lg:text-4xl font-light mb-8 text-gray-800">Hvordan foregår en session?</h3>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              En terapisession hos mig er en samtale, hvor vi sammen finder frem til det du ønsker at arbejde med. 
              I dit eget tempo kommer du hen til det du ønsker. Sessionerne åbner op for et højere niveau i dig, 
              hvor du er dig selv og fri af enhver begrænsende overbevisning.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
