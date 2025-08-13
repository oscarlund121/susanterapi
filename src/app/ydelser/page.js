import PageHeader from '../components/layout/PageHeader';
import YdelserSpecialiseringer from '../components/ydelser/YdelserSpecialiseringer';

export default function YdelserPage() {
  const ydelser = [
    {
      title: "Essentiel Integrativ Psykoterapi",
      slug: "essentiel-integrativ-psykoterapi",
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
      slug: "emdr",
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
      slug: "mentaliserende-tilgang",
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
      slug: "meditation-spirituel-udvikling",
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
      {/* Kompakt Header med billede */}
      <PageHeader 
        title="Ydelser"
        subtitle="Holistisk psykoterapi"
        description="Jeg tilbyder en holistisk tilgang til psykoterapi, hvor vi arbejder med hele mennesket - krop, sind og sjæl. Mine specialiseringer kombinerer evidensbaserede metoder med en empatisk og intuitiv tilgang."
        buttonText="Book en session"
        showImage={true}
      />
      
      {/* Hovedindhold - De 4 specialiseringer */}
      <YdelserSpecialiseringer ydelser={ydelser} />
   
    </main>
  );
}
