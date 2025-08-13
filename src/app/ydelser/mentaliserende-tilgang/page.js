import Image from "next/image";
import StaticButton from "../../components/ui/StaticButton";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import BulletList from "../../components/layout/BulletList";

export default function MentaliserendeTilgangPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Kompakt Header Section */}
      <section className="pt-24 pb-12">
        <Container variant="narrow">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
              Relationsterapi
            </div>

            {/* Title */}
            <h1 className="mb-6">Mentaliserende Tilgang til Relationer</h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Mentalisering handler om at forstå egen og andres adfærd ud fra mentale tilstande - tanker, følelser, ønsker og intentioner. Denne tilgang styrker din evne til empati og forbedrer kvaliteten af dine relationer markant.
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
        </Container>
      </section>

      {/* Content Cards Section */}
      <section className="pb-16">
        <Container variant="narrow">
          <div className="mb-12">
            <h2 className="mb-6">Fokusområder</h2>
            <BulletList
              items={[
                "Familie- og parterapi",
                "Forældreguidning og opdragelse", 
                "Kommunikationsvanskeligheder",
                "Følelsesregulering og affekthåndtering",
                "Grænse-sætning og selvhævdelse",
                "Konfliktløsning og forståelse",
                "Tilknytningsudfordringer",
                "Sociale og professionelle relationer"
              ]}
            />
          </div>

          <div className="mb-12">
            <h2 className="mb-6">Metoder</h2>
            <BulletList
              items={[
                "Mentaliseringsbaseret dialogteknik",
                "Refleksion over mentale tilstande",
                "Følelseskortlægning og navngivning", 
                "Perspektiv-skiftende øvelser",
                "Kommunikations-træning",
                "Familiesystem-forståelse og dynamikker"
              ]}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
