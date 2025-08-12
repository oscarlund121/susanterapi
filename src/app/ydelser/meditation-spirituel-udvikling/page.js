import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";

export default function MeditationSpirituelUdviklingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-[#1cc18e]">Meditation og Spirituel Udvikling</h1>
        <Image
          src="/images/tree-touch.jpg"
          alt="Meditation og spirituel udvikling"
          width={800}
          height={400}
          className="rounded-xl object-cover w-full h-48 mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          Gennem meditation og spirituelle praksisser åbner vi op for din indre visdom og forbindelse til noget større. Dette arbejde hjælper dig med at finde ro, klarhed og en dybere mening med livet, samt manifestere dine ønsker og drømme.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Fokusområder</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Stress-reduktion og indre ro</li>
          <li>Spirituel søgen og personlig vækst</li>
          <li>Intuitions-udvikling og inner guidance</li>
          <li>Manifestation og lov om tiltrækning</li>
          <li>Energetisk healing og chakra-arbejde</li>
          <li>Forbindelse til naturen og universet</li>
          <li>Livsmening og eksistentielle spørgsmål</li>
          <li>Kreativitet og kunstnerisk udtryk</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Metoder</h2>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Guidet meditation og visualisering</li>
          <li>Åndedrætsarbejde og pranayama</li>
          <li>Chakra-meditation og energi-healing</li>
          <li>Manifestations-teknikker og affirmationer</li>
          <li>Natur-meditation og earth-connection</li>
          <li>Krystaller, farver og vibrationel healing</li>
        </ul>
        <YellowButton href="/kontakt" className="px-8 py-3 text-lg font-semibold">
          Book en samtale
        </YellowButton>
      </section>
    </main>
  );
}
