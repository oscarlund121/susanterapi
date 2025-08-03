import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-none">
        {/* Header */}
        <div className="mb-20 lg:mb-24 px-8 lg:pl-8 xl:pl-16 2xl:pl-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-8">
            Kontakt
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl">
            Jeg glæder mig til at høre fra dig. Tag det første skridt mod en positiv forandring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Kontaktinformationer */}
          <div className="lg:col-span-5 px-8 lg:pl-8 xl:pl-16 2xl:pl-20 space-y-16">
            <div>
              <h2 className="text-3xl font-light mb-12 text-gray-800">Kontakt mig</h2>
              
              <div className="space-y-8">
                <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h3 className="text-xl font-light text-gray-800 mb-3">Telefon</h3>
                  <div className="text-2xl lg:text-3xl font-light text-gray-800 mb-2">25 39 25 39</div>
                  <p className="text-gray-600 font-light text-sm">
                    Indtal gerne navn og telefonnummer hvis jeg ikke tager telefonen
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h3 className="text-xl font-light text-gray-800 mb-3">E-mail</h3>
                  <div className="text-lg font-light text-gray-600">susanalbertsen69@gmail.com</div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h3 className="text-xl font-light text-gray-800 mb-3">Adresse</h3>
                  <div className="text-gray-600 font-light text-sm">
                    Essens-terapi<br />
                    ved Psykologerne på Skolebakken<br />
                    Skolebakken 7, st.th<br />
                    8000 Århus C
                  </div>
                </div>
              </div>
            </div>

            {/* Praktisk info */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-gray-800">Praktisk information</h3>
              <div className="space-y-6">
                <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h4 className="text-lg font-light text-gray-800 mb-2">Parkering</h4>
                  <p className="text-gray-600 font-light text-sm">
                    Parkér i gaderne omkring Skolebakken med parkerings-app, 
                    i parkeringshuset ved Navitas, Dokk1 eller Magasins parkeringshus.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 border border-gray-100/50">
                  <h4 className="text-lg font-light text-gray-800 mb-2">Faciliteter</h4>
                  <p className="text-gray-600 font-light text-sm">
                    I klinikken er der venteværelse og toilet til din rådighed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking sektion */}
          <div className="lg:col-span-7 lg:pl-16">
            <h2 className="text-3xl font-light mb-12 text-gray-800">Book din session</h2>
            
            <div className="space-y-12">
              <div className="bg-white/60 backdrop-blur-sm p-8 border border-gray-100/50">
                <h3 className="text-2xl font-light mb-8 text-gray-800">Sådan booker du</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50/60">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center text-sm font-light">01</div>
                    <div>
                      <div className="text-lg font-light text-gray-800">Send en SMS eller e-mail</div>
                      <div className="text-gray-600 font-light text-sm">Til 25 39 25 39 eller susanalbertsen69@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50/60">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center text-sm font-light">02</div>
                    <div>
                      <div className="text-lg font-light text-gray-800">Beskriv dit ønske</div>
                      <div className="text-gray-600 font-light text-sm">Fortæl kort hvad du gerne vil tale om</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50/60">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center text-sm font-light">03</div>
                    <div>
                      <div className="text-lg font-light text-gray-800">Aftale tidspunkt</div>
                      <div className="text-gray-600 font-light text-sm">Vi finder et tidspunkt der passer dig</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50/60">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center text-sm font-light">04</div>
                    <div>
                      <div className="text-lg font-light text-gray-800">Første session</div>
                      <div className="text-gray-600 font-light text-sm">Varer ofte lidt længere end 1 time</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Før din første session</h3>
                <p className="text-gray-600 font-light mb-8">
                  Det er vigtigt for mig at du mærker efter, hvad du efterfølgende har brug for. 
                  Afhængig af det du ønsker at arbejde med, er min anbefaling at du har 2 til 10 sessioner i et forløb.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  href="tel:+4525392539" 
                  className="w-full justify-center"
                >
                  Ring nu: 25 39 25 39
                </Button>
                <Button 
                  variant="secondary"
                  href="mailto:susanalbertsen69@gmail.com" 
                  className="w-full justify-center"
                >
                  Send e-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
