import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";

export default function EssentielIntegrativPsykoterapiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-[#1cc18e]">Essentiel Integrativ Psykoterapi</h1>
        <Image
          src="/images/hand-on-chest.jpg"
          alt="Essentiel Integrativ Psykoterapi"
          width={800}
          height={400}
          className="rounded-xl object-cover w-full h-48 mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          En holistisk tilgang til healing der integrerer krop, sind og sjæl. Gennem denne metode arbejder vi med at finde og forløse mønstre der holder dig tilbage, så du kan opleve mere frihed og autenticitet i dit liv.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Fokusområder</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Traumer og negative oplevelser fra fortiden</li>
          <li>Angst, depression og stress</li>
          <li>Lavt selvværd og selvkritik</li>
          <li>Fastlåste følelsesmønstre</li>
          <li>Relationsproblemer og tilknytningsvanskeligheder</li>
          <li>Eksistentielle kriser og livs-retning</li>
          <li>Kreativitetsblokering og mangel på livsglæde</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Metoder</h2>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Kropsbevidsthed og åndedrætsarbejde</li>
          <li>Dialogbaseret terapi med fokus på følelser</li>
          <li>Energiarbejde og intuitive tilgange</li>
          <li>Mindfulness og meditation</li>
          <li>Visualisering og symbolsk arbejde</li>
          <li>Integration af drømme og ubevidste processer</li>
        </ul>
        <YellowButton href="/kontakt" className="px-8 py-3 text-lg font-semibold">
          Book en samtale
        </YellowButton>
      </section>
    </main>
  );
}
