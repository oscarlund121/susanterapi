import Image from 'next/image';
import ImageTextSection from '../components/sections/ImageTextSection';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';

export default function OmMigPage() {
  return (
    <main className="min-h-screen bg-white">
      <ImageTextSection
        title="Om mig"
        imageSrc="/images/om-mig.png"
        imageAlt="Susan Albertsen - Psykoterapeut"
      >
        <div className="space-y-8">
          <Card>
            <h3 className="text-lg font-light text-gray-800 mb-4 tracking-wide">Susan Albertsen</h3>
            <p className="text-gray-600 leading-relaxed">
              Mit navn er Susan Albertsen og jeg er uddannet psykoterapeut hos
              Essentiel integrativ essens, psyke, krop og helbredsterapi (EIP), ved
              Karen Aaes (Essentielt institut i Århus).
            </p>
          </Card>

          <Card variant="glass">
            <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Erfaring</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jeg har arbejdet i skoleverden i næsten 20 år og har derigennem stor indblik i 
              børn, unge og familier, og fået erfaring med de forskellige udfordringer der kan 
              opstå i disse sammenhænge og relationer.
            </p>
          </Card>

          <Card variant="glass">
            <h4 className="text-base font-light text-gray-800 mb-2 tracking-wide">Uddannelse</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Essentielt institut er godkendt af og medlem af EAIP (European Association for 
              integrativ Psychotherapy) siden 2004. De metoder jeg bruger i terapien er 
              anerkendt både i Danmark og i udlandet.
            </p>
          </Card>
        </div>
      </ImageTextSection>
        
      {/* Uddybende sektion */}
      <section className="py-24 lg:py-32">
        <Container variant="section">
          {/* Citat */}
          <div className="mb-20 lg:mb-24">
            <Card variant="glass" className="p-8 lg:p-12">
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed mb-6 italic">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed."
              </blockquote>
              <cite className="text-sm font-light text-gray-400 tracking-widest not-italic">
                — KAREN AAES, ESSENTIELT INSTITUT
              </cite>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <Card>
              <h3 className="text-2xl font-light text-gray-800 tracking-wide mb-6">Min tilgang</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Jeg anvender mentaliserende tilgang i min terapi, som hjælper os til at forstå egen og andres adfærd 
                ud fra mentale tilstande. At have andres sind på sinde og skabe sikkerhed.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-2xl font-light text-gray-800 tracking-wide mb-6">Erfaring</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Med næsten 20 års erfaring i skoleverden har jeg stor indsigt i børn, unge og familier. 
                Dette giver mig en unik forståelse for de udfordringer, der opstår i disse relationer.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
