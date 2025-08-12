import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";

export default function EMDRPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-[#1cc18e]">EMDR - Chok og Traumeforløsning</h1>
        <Image
          src="/images/sitting.jpg"
          alt="EMDR terapi"
          width={800}
          height={400}
          className="rounded-xl object-cover w-full h-48 mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          EMDR (Eye Movement Desensitization and Reprocessing) er en WHO-anerkendt metode til behandling af traumer. Gennem bilaterale øjenbevægelser hjælper vi hjernen med at forarbejde og integrere traumatiske oplevelser, så de ikke længere påvirker dit daglige liv negativt.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Fokusområder</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>PTSD og komplekse traumer</li>
          <li>Arbejdsulykker og trafikuheld</li>
          <li>Vold og overgreb</li>
          <li>Pludselige tab og sorg</li>
          <li>Medicinske traumer og operationer</li>
          <li>Katastrofe-oplevelser</li>
          <li>Mobning og krænkelser</li>
          <li>Fobier og specifikke angst-triggere</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-[#1cc18e]">Metoder</h2>
        <ul className="list-disc pl-6 mb-8 text-gray-700">
          <li>Standardiseret EMDR protokol</li>
          <li>Ressource-installation for stabilisering</li>
          <li>Krops-scanning og følelsesregulering</li>
          <li>Sikker visualisering og indre beskyttelse</li>
          <li>Bilateral stimulering (øjne, lyd eller berøring)</li>
          <li>Integrationsarbejde og fremtidsplanlægning</li>
        </ul>
        <YellowButton href="/kontakt" className="px-8 py-3 text-lg font-semibold">
          Book en samtale
        </YellowButton>
      </section>
    </main>
  );
}
