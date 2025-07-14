import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Grid from '../components/ui/Grid';

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
      <div className="max-w-6xl mx-auto px-8">
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
            <div key={index} className="space-y-8 py-12 px-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="inline-block text-xs font-light text-gray-400 tracking-widest bg-gray-100/60 px-4 py-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light text-gray-800 tracking-wide">{ydelse.title}</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{ydelse.description}</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                <div className="space-y-3">
                  {ydelse.detaljer.map((detalje, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      {detalje}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Problemer sektion */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light mb-16 lg:mb-20 text-gray-800 leading-tight">
              Jeg arbejder med børn, unge og voksne
            </h2>
            <div className="bg-white/70 backdrop-blur-sm p-8 border border-gray-100/50">
              <div className="grid grid-cols-1 gap-3">
                {problemer.map((problem, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 text-sm py-3 px-4 bg-gray-50/60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    {problem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Session info */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="bg-white/60 backdrop-blur-sm p-8 lg:p-12 border border-gray-100/50">
              <h3 className="text-3xl lg:text-4xl font-light mb-8 text-gray-800">Hvordan foregår en session?</h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                En terapisession hos mig er en samtale, hvor vi sammen finder frem til det du ønsker at arbejde med. 
                I dit eget tempo kommer du hen til det du ønsker. Sessionerne åbner op for et højere niveau i dig, 
                hvor du er dig selv og fri af enhver begrænsende overbevisning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA sektion */}
        <section className="py-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vil du opleve transformation? Jeg hjælper dig gerne med at finde 
              vej til mere glæde, frihed og lethed i livet.
            </p>
            <Button href="/kontakt">
              Book din første session
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
