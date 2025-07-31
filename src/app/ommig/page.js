
import OmMig from '../components/ommig/OmMig';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export default function OmMigPage() {
  return (
    <main className="min-h-screen bg-white">
     <OmMig />
      <section className="py-24 lg:py-32">
        <Container variant="section">
          {/* Citat */}
          <div className="mb-20 lg:mb-24">
            <Card variant="glass" className="p-8 lg:p-12">
              <blockquote className="text-2xl lg:text-3xl font-light mb-6 italic">
                "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud fra ren ubetinget kærlighed."
              </blockquote>
              <cite className="text-sm font-light text-gray-800  not-italic">
                — KAREN AAES, ESSENTIELT INSTITUT
              </cite>
            </Card>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <Card>
              <h3 className="text-2xl font-light text-gray-800 mb-6">Min tilgang</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Jeg anvender mentaliserende tilgang i min terapi, som hjælper os til at forstå egen og andres adfærd 
                ud fra mentale tilstande. At have andres sind på sinde og skabe sikkerhed.
              </p>
            </Card>
            
            <Card>
              <h3 className="text-2xl font-light text-gray-800 mb-6">Erfaring</h3>
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
