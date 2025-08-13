import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

export default function EssentielIntegrativPsykoterapiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <Container variant="narrow">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
              Holistisk tilgang
            </div>
            <h1 className="mb-6">Essentiel Integrativ Psykoterapi</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En holistisk tilgang til healing der integrerer krop, sind og sjæl. Gennem denne metode arbejder vi med at finde og forløse mønstre der holder dig tilbage, så du kan opleve mere frihed og autenticitet i dit liv.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-16">
            <Image
              src="/images/hand-on-chest.jpg"
              alt="Essentiel Integrativ Psykoterapi"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Content Cards Section */}
      <section className="pb-16">
        <Container variant="narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Fokusområder Card */}
            <Card className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="mb-6">Fokusområder</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Traumer og negative oplevelser fra fortiden</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Angst, depression og stress</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Lavt selvværd og selvkritik</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Fastlåste følelsesmønstre</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Relationsproblemer og tilknytningsvanskeligheder</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Eksistentielle kriser og livs-retning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Kreativitetsblokering og mangel på livsglæde</span>
                </div>
              </div>
            </Card>

            {/* Metoder Card */}
            <Card className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="mb-6">Metoder</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Kropsbevidsthed og åndedrætsarbejde</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Dialogbaseret terapi med fokus på følelser</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Energiarbejde og intuitive tilgange</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Mindfulness og meditation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Visualisering og symbolsk arbejde</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Integration af drømme og ubevidste processer</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <YellowButton href="/kontakt" className="px-8 py-3 text-lg font-semibold">
              Book en samtale
            </YellowButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
