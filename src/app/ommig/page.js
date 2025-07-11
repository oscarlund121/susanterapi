import OmMigCard from '../components/ommig/OmMigCard';

export default function OmMigPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
            Om mig
          </h1>
        </div>

        <OmMigCard />
        
        {/* Uddybende sektion */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Citat */}
            <div className="mb-20 lg:mb-24">
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed."
              </blockquote>
              <cite className="text-sm font-light text-gray-400 tracking-wide">
                — KAREN AAES, ESSENTIELT INSTITUT
              </cite>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-800">Min tilgang</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Jeg anvender mentaliserende tilgang i min terapi, som hjælper os til at forstå egen og andres adfærd 
                  ud fra mentale tilstande. At have andres sind på sinde og skabe sikkerhed.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-800">Erfaring</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Med næsten 20 års erfaring i skoleverden har jeg stor indsigt i børn, unge og familier. 
                  Dette giver mig en unik forståelse for de udfordringer, der opstår i disse relationer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
