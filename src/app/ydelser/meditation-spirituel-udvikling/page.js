import Image from "next/image";
import YellowButton from "../../components/ui/YellowButton";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

export default function MeditationSpirituelUdviklingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <Container variant="narrow">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
              Spirituel praksis
            </div>
            <h1 className="mb-6">Meditation og Spirituel Udvikling</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gennem meditation og spirituelle praksisser åbner vi op for din indre visdom og forbindelse til noget større. Dette arbejde hjælper dig med at finde ro, klarhed og en dybere mening med livet.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-16">
            <Image
              src="/images/tree-touch.jpg"
              alt="Meditation og spirituel udvikling"
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
                  <span className="text-gray-600">Stress-reduktion og indre ro</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Spirituel søgen og personlig vækst</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Intuitions-udvikling og inner guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Manifestation og lov om tiltrækning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Energetisk healing og chakra-arbejde</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Forbindelse til naturen og universet</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Livsmening og eksistentielle spørgsmål</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Kreativitet og kunstnerisk udtryk</span>
                </div>
              </div>
            </Card>

            {/* Metoder Card */}
            <Card className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="mb-6">Metoder</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Guidet meditation og visualisering</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Åndedrætsarbejde og pranayama</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Chakra-meditation og energi-healing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Manifestations-teknikker og affirmationer</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Natur-meditation og earth-connection</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1cc18e] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Krystaller, farver og vibrationel healing</span>
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
