import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";

export default function MentaliserendeTilgangPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-[#1cc18e]">Mentaliserende Tilgang til Relationer</h1>
        <Image
          src="/images/walk.jpg"
          alt="Mentaliserende tilgang"
          width={800}
          height={400}
          className="rounded-xl object-cover w-full h-48 mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Mentalisering handler om at forstå egen og andres adfærd ud fra mentale tilstande - tanker, følelser, ønsker og intentioner. Denne tilgang styrker din evne til empati og forbedrer kvaliteten af dine relationer markant.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Fokusområder</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Familie- og parterapi</li>
          <li>Forældreguidning og opdragelse</li>
          <li>Kommunikationsvanskeligheder</li>
          <li>Følelsesregulering og affekthåndtering</li>
          <li>Grænse-sætning og selvhævdelse</li>
          <li>Konfliktløsning og forståelse</li>
          <li>Tilknytningsudfordringer</li>
          <li>Sociale og professionelle relationer</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Metoder</h2>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Mentaliseringsbaseret dialogteknik</li>
          <li>Refleksion over mentale tilstande</li>
          <li>Følelseskortlægning og navngivning</li>
          <li>Perspektiv-skiftende øvelser</li>
          <li>Kommunikations-træning</li>
          <li>Familiesystem-forståelse og dynamikker</li>
        </ul>
        <YellowButton href="/kontakt" className="px-8 py-3 text-lg font-semibold">
          Book en samtale
        </YellowButton>
      </section>
    </main>
  );
}
