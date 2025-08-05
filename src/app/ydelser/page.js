import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import YdelseCard from '../components/ydelser/YdelseCard';
import SessionForloeb from '../components/ydelser/SessionForloeb';
import ProblomOmraader from '../components/ydelser/ProblomOmraader';
import YdelserHeroMinimal from '../components/ydelser/YdelserHeroMinimal';
import YdelserHeroText from '../components/ydelser/YdelserHeroText';
import YdelserHeroCard from '../components/ydelser/YdelserHeroCard';
import SectionBadge from '../components/layout/SectionBadge';
import BulletList from '../components/layout/BulletList';
import PrakiskInfo from '../components/ydelser/PraktiskInfo';
import YdelserPhilosophy from '../components/ydelser/YdelserPhilosophy';
import YdelserSpecialiseringer from '../components/ydelser/YdelserSpecialiseringer';

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
    <main className="min-h-screen bg-white">
      {/* Hero Section - 3 options to choose from */}
      <YdelserHeroText />
      {/* <YdelserHeroMinimal /> */}
      {/* <YdelserHeroCard /> */}
      
      {/* Philosophy Section */}
      <YdelserPhilosophy />

      {/* Specialiseringer Section */}
      <YdelserSpecialiseringer ydelser={ydelser} />

      {/* Session forløb */}
      <SessionForloeb />

      {/* Problem områder */}
      <ProblomOmraader />

      {/* Praktiske informationer */}
      <PrakiskInfo />

      {/* CTA sektion */}
      <section className="section-padding bg-gray-50/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800">
                Klar til at begynde din rejse?
              </h2>
              <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
        </div>
      </section>
    </main>
  );
}
