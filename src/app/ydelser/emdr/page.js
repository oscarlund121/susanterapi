import Image from "next/image";
import StaticButton from "../../components/ui/StaticButton";
import Container from "../../components/ui/Container";
import BulletList from "../../components/layout/BulletList";

export default function EMDRPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left side - Content */}
            <div className="flex items-start px-6 md:px-12 lg:px-16 pt-20 md:pt-24">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                  Traumebehandling
                </div>

                {/* Title */}
                <h1 className="mb-6">EMDR - Chok og Traumeforløsning</h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8">
                  EMDR (Eye Movement Desensitization and Reprocessing) er en WHO-anerkendt metode til behandling af traumer. Gennem bilaterale øjenbevægelser hjælper vi hjernen med at forarbejde og integrere traumatiske oplevelser.
                </p>

                {/* CTA */}
                <div>
                  <StaticButton
                    href="/kontakt"
                    text="Book en samtale"
                    size="large"
                    variant="green"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Tættere placering */}
            <div className="hidden lg:block h-full px-8 py-20">
              <div className="relative h-full w-full">
                {/* Venstre side - Stort rundt billede */}
                <div className="absolute left-0 top-0 w-64 h-96 rounded-full overflow-hidden">
                  <Image
                    src="/images/sitting.jpg"
                    alt="EMDR terapi"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Højre øverst - Lille rundt billede - tættere på det store */}
                <div className="absolute right-4 top-4 w-40 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/images/hand-on-chest.jpg"
                    alt="Terapi session"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Højre nederst - Purple badge - tættere på de andre */}
                <div className="absolute right-4 bottom-4 w-40 h-24 bg-purple-600 rounded-full flex flex-col justify-center items-center text-white">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-center px-2">successfulde behandlinger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <Container variant="narrow">
          <div className="mb-12">
            <h2 className="mb-6">Fokusområder</h2>
            <BulletList
              items={[
                "PTSD og komplekse traumer",
                "Arbejdsulykker og trafikuheld",
                "Vold og overgreb",
                "Pludselige tab og sorg",
                "Medicinske traumer og operationer",
                "Katastrofe-oplevelser",
                "Mobning og krænkelser",
                "Fobier og specifikke angst-triggere"
              ]}
            />
          </div>

          <div className="mb-12">
            <h2 className="mb-6">Metoder</h2>
            <BulletList
              items={[
                "Standardiseret EMDR protokol",
                "Ressource-installation for stabilisering",
                "Krops-scanning og følelsesregulering",
                "Sikker visualisering og indre beskyttelse",
                "Bilateral stimulering (øjne, lyd eller berøring)",
                "Integrationsarbejde og fremtidsplanlægning"
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
