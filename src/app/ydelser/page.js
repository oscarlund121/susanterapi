import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import YdelseCard from '../components/ydelser/YdelseCard';
import SessionForloeb from '../components/ydelser/SessionForloeb';
import ProblomOmraader from '../components/ydelser/ProblomOmraader';
import YdelserHeroMinimal from '../components/ydelser/YdelserHeroMinimal';
import YdelserHeroText from '../components/ydelser/YdelserHeroText';
import YdelserHeroCard from '../components/ydelser/YdelserHeroCard';

export default function YdelserPage() {
  const ydelser = [
    {
      title: "Essentiel Integrativ Psykoterapi",
      image: "/images/hand-on-chest.jpg",
      description: "En holistisk tilgang til healing der integrerer krop, sind og sjæl. Gennem denne metode arbejder vi med at finde og forløse mønstre der holder dig tilbage, så du kan opleve mere frihed og autenticitet i dit liv.",
      fokusområder: [
        "Traumer og negative oplevelser fra fortiden",
        "Angst, depression og stress",
        "Lavt selvværd og selvkritik",
        "Fastlåste følelsesmønstre",
        "Relationsproblemer og tilknytningsvanskeligheder",
        "Eksistentielle kriser og livs-retning",
        "Kreativitetsblokering og mangel på livsglæde"
      ],
      metoder: [
        "Kropsbevidsthed og åndedrætsarbejde",
        "Dialogbaseret terapi med fokus på følelser",
        "Energiarbejde og intuitive tilgange",
        "Mindfulness og meditation",
        "Visualisering og symbolsk arbejde",
        "Integration af drømme og ubevidste processer"
      ]
    },
    {
      title: "EMDR - Chok og Traumeforløsning",
      image: "/images/sitting.jpg", 
      description: "EMDR (Eye Movement Desensitization and Reprocessing) er en WHO-anerkendt metode til behandling af traumer. Gennem bilaterale øjenbevægelser hjælper vi hjernen med at forarbejde og integrere traumatiske oplevelser, så de ikke længere påvirker dit daglige liv negativt.",
      fokusområder: [
        "PTSD og komplekse traumer",
        "Arbejdsulykker og trafikuheld",
        "Vold og overgreb", 
        "Pludselige tab og sorg",
        "Medicinske traumer og operationer",
        "Katastrofe-oplevelser",
        "Mobning og krænkelser",
        "Fobier og specifikke angst-triggere"
      ],
      metoder: [
        "Standardiseret EMDR protokol",
        "Ressource-installation for stabilisering",
        "Krops-scanning og følelsesregulering",
        "Sikker visualisering og indre beskyttelse",
        "Bilateral stimulering (øjne, lyd eller berøring)",
        "Integrationsarbejde og fremtidsplanlægning"
      ]
    },
    {
      title: "Mentaliserende Tilgang til Relationer",
      image: "/images/walk.jpg",
      description: "Mentalisering handler om at forstå egen og andres adfærd ud fra mentale tilstande - tanker, følelser, ønsker og intentioner. Denne tilgang styrker din evne til empati og forbedrer kvaliteten af dine relationer markant.",
      fokusområder: [
        "Familie- og parterapi",
        "Forældreguidning og opdragelse",
        "Kommunikationsvanskeligheder",
        "Følelsesregulering og affekthåndtering",
        "Grænse-sætning og selvhævdelse",
        "Konfliktløsning og forståelse",
        "Tilknytningsudfordringer",
        "Sociale og professionelle relationer"
      ],
      metoder: [
        "Mentaliseringsbaseret dialogteknik",
        "Refleksion over mentale tilstande",
        "Følelseskortlægning og navngivning",
        "Perspektiv-skiftende øvelser",
        "Kommunikations-træning",
        "Familiesystem-forståelse og dynamikker"
      ]
    },
    {
      title: "Meditation og Spirituel Udvikling",
      image: "/images/tree-touch.jpg",
      description: "Gennem meditation og spirituelle praksisser åbner vi op for din indre visdom og forbindelse til noget større. Dette arbejde hjælper dig med at finde ro, klarhed og en dybere mening med livet, samt manifestere dine ønsker og drømme.",
      fokusområder: [
        "Stress-reduktion og indre ro",
        "Spirituel søgen og personlig vækst",
        "Intuitions-udvikling og inner guidance", 
        "Manifestation og lov om tiltrækning",
        "Energetisk healing og chakra-arbejde",
        "Forbindelse til naturen og universet",
        "Livsmening og eksistentielle spørgsmål",
        "Kreativitet og kunstnerisk udtryk"
      ],
      metoder: [
        "Guidet meditation og visualisering",
        "Åndedrætsarbejde og pranayama",
        "Chakra-meditation og energi-healing",
        "Manifestations-teknikker og affirmationer",
        "Natur-meditation og earth-connection",
        "Krystaller, farver og vibrationel healing"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Option 1: Minimal med billede */}
  
      <YdelserHeroText />
      
      {/* Hero Option 2: Ren tekst med linjer */}
      {/* <YdelserHeroText /> */}
      
      {/* Hero Option 3: Card layout */}
      {/* <YdelserHeroCard /> */}
      
      {/* Original filosofi sektion - kan bruges med alle heroes */}
      <section className="py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-8">
          <Card className="p-8 lg:p-12 bg-gray-50/50">
            <div className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-800">
                Min filosofi
              </h2>
              <blockquote className="text-xl font-light text-gray-600 italic">
                "Jeg tror på, at hvert menneske har en indre visdom og helende kraft. 
                Min rolle er at skabe et trygt rum, hvor denne kraft kan blomstre, 
                og guide dig tilbage til din autentiske selv - fuld af glæde, frihed og kærlighed."
              </blockquote>
            </div>
          </Card>
        </div>
      </section>

      {/* Ydelser Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
              Specialiseringer
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Hver ydelse er tilpasset dine individuelle behov og kan kombineres 
              for at skabe det mest effektive terapiforløb for dig.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ydelser.map((ydelse, index) => (
              <YdelseCard key={index} ydelse={ydelse} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Session forløb */}
      <SessionForloeb />

      {/* Problem områder */}
      <ProblomOmraader />

      {/* Praktiske informationer */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
              Praktiske informationer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-light text-gray-800">Sessions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Varighed: 1 til 1,5 time pr. session</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Hyppighed: Typisk ugentligt eller hver 14. dag</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Antal: 3-10 sessioner alt efter behov</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Online eller fysisk fremmøde muligt</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-light text-gray-800">Forventninger</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Åbenhed og ærlig kommunikation</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Villighed til at udforske og eksperimentere</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Respekt for din egen proces og timing</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Engagement i hjemmeopgaver mellem sessioner</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA sektion */}
      <section className="py-16 lg:py-24 bg-gray-50/30">
        <div className="max-w-4xl mx-auto px-8">
          <Card className="p-12 text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800">
              Klar til at begynde din rejse?
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
              Jeg glæder mig til at støtte dig på din vej mod healing, vækst og en mere autentisk måde at leve på. 
              Tag det første skridt i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="large">
                Book en samtale
              </Button>
              <Button href="/priser" variant="secondary" size="large">
                Se priser
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
