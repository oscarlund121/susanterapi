import Image from 'next/image';
import OmMigCard from '../components/ommig/OmMigCard';

export default function OmMigPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:min-h-screen">
          {/* Billede til venstre - centreret vertikalt */}
          <div className="relative h-[60vh] lg:h-[70vh] bg-gray-200">
            <Image
              src="/images/om-mig.png"
              alt="Susan Albertsen - Psykoterapeut"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Tekst til højre med padding og header */}
          <div className="px-8 lg:pl-16 lg:pr-8 xl:pr-16 2xl:pr-20 py-8 lg:py-16 flex flex-col justify-center">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
                Om mig
              </h1>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Susan Albertsen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
                  Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
                  Karen Aaes (Essentielt institut i Århus).
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Erfaring</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
                  børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
                  opstå i disse sammenhænge og relationer.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Uddannelse</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Essentielt institut er godkendt af og medlem af EAIP (European Association for 
                  integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
                  anerkendt både i Danmark og i udlandet.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Uddybende sektion */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl px-8 lg:pl-8 xl:pl-16 2xl:pl-20">
            {/* Citat */}
            <div className="mb-20 lg:mb-24">
              <div className="bg-white/60 backdrop-blur-sm p-8 lg:p-12 border border-gray-100/50">
                <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6 italic">
                  "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed."
                </blockquote>
                <cite className="text-sm font-light text-gray-400 tracking-[0.15em] not-italic">
                  — KAREN AAES, ESSENTIELT INSTITUT
                </cite>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              <div className="space-y-6 bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                <h3 className="text-2xl font-light text-gray-800 tracking-wide">Min tilgang</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Jeg anvender mentaliserende tilgang i min terapi, som hjælper os til at forstå egen og andres adfærd 
                  ud fra mentale tilstande. At have andres sind på sinde og skabe sikkerhed.
                </p>
              </div>
              
              <div className="space-y-6 bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                <h3 className="text-2xl font-light text-gray-800 tracking-wide">Erfaring</h3>
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
