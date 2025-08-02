'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const KlientUdtalelser = () => {
  // Udtalelser content for easy editing
  const udtalelserContent = {
    header: {
      title: "Klient udtalelser",
      subtitle: "Historier om transformation og helbredelse"
    },
    featured: {
      tekst: `Da jeg startede i terapi hos Susan, var det også min første gang i terapi nogensinde. Jeg stod et sted i mit liv, hvor det føltes som om livet ramlede sammen omkring mig og jeg følte mig alene og vidste ikke længere hvordan jeg skulle komme ovenpå igen. Terapien blev for mig et sted hvor der var plads til at snakke om alt - uden den mindste form for fordømmelse. Susan har været enormt lyttende, men også meget nærværende i alle samtaler og griber alt hvad jeg siger med det samme. Som terapeut er Susan varm, kærlig, dygtig, nysgerrig, åben og man føler sig virkelig tryg i hendes nærvær. Personligt har jeg sat rigtig meget pris på, at Susan ikke blot lytter - men bruger en stor del af tiden på at forklare mig hvad mine følelser/tanker/oplevelser kan betyde og hvorfor jeg måske reager som jeg gør, i bestemte situationer.

Alle mine tanker og ord blev taget kærligt i mod, og sammen fandt vi frem til kernen i mange nuværende følelser, som har rødder i oplevelser langt tilbage i mit liv. Men der blev også sorteret i følelserne, så vi sammen kom nærmere hvad "problemet" egentlig var og hvad der kunne sorteres fra og dermed parkeres, så de ikke længere krævede min opmærksomhed. For mig personligt fungerede det værktøj, at parkere sine tanker (i et "parkeringshus") rigtig godt. Jeg blev opmærksom på hvad jeg bruger min energi på, og det har været en enormt lærrerig proces. Det var svært i starten - og er det stadig til tider - men Susan var god til at komme med konkrete metaforer for, hvordan man kunne styre sin bevidsthed over tankerne. Dette har hjulpet mig enormt meget, da jeg stod overfor to reekeksamener i sommeren 2025, og de negative tanker og frygten for eksamen tog overhånd. Konkret hjalp Susan mig også med, at man ikke behøver, at "være en der har eksamensangst" - det kan man gøre noget ved. Og selvom de to reeksamener jeg lige har været oppe i, er noget af det sværeste mentalt jeg har skullet igennem i mit liv, så har jeg aldrig været så rolig og haft så godt styr på mig selv og min krop op til og under en eksamen. Susan havde rådet mig til at skrive 5-10 sætninger ned på et papir, som lå foran mig til hele eksamen og mindede mig om alle de positive tanker. Konkrete vejrtrækningsøvelser, meditation og viljen til ikke at lade negative tanker og "panik" overtage var grunden til, at jeg klarede mig så godt igennem eksamenerne. Og noget jeg vil tage med mig i mange situationer fremover i livet. Jeg kunne ikke have gjort det uden Susans hjælp og hun har mine varmeste anbefalinger.`,
      navn: "Emilie",
      alder: "26 år"
    },
    udtalelser: [
      {
        tekst: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde, som gør at jeg i større grad kan udleve mine ønsker.",
        navn: "Dorte",
        baggrund: "Familie med 3 børn i terapi"
      },
      {
        tekst: "Jeg har haft psoriasis siden jeg var 14 år gammel. Efter at have fundet frem til hvilke chok det var skyld i og få det bearbejdet, gik der ikke lang tid før jeg var fri for denne sygdom.",
        navn: "Birthe",
        baggrund: "Efter 43 år med psoriasis"
      }
    ]
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-40">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 mb-6">
            {udtalelserContent.header.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-500 italic">
            {udtalelserContent.header.subtitle}
          </p>
        </div>

        {/* Alle udtalelser - Carousel */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-40">
          <Carousel className="relative" opts={{ loop: true }}>
            <CarouselContent>
              {/* Featured udtalelse - Emilie først */}
              <CarouselItem>
                <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
                  <blockquote className="text-lg md:text-xl font-light text-gray-700 italic mb-8 leading-relaxed">
                    "{udtalelserContent.featured.tekst}"
                  </blockquote>
                  <div className="text-right">
                    <p className="text-lg font-light text-gray-800">
                      {udtalelserContent.featured.navn}, {udtalelserContent.featured.alder}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Andre udtalelser */}
              {udtalelserContent.udtalelser.map((udtalelse, index) => (
                <CarouselItem key={index}>
                  <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
                    <blockquote className="text-lg md:text-xl font-light text-gray-700 italic mb-8 leading-relaxed">
                      "{udtalelse.tekst}"
                    </blockquote>
                    <div className="text-right">
                      <p className="text-lg font-light text-gray-800">{udtalelse.navn}</p>
                      <p className="text-sm text-gray-500">{udtalelse.baggrund}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-light text-gray-600 mb-8 max-w-2xl mx-auto">
            Vil du også opleve transformation? Jeg hjælper dig gerne med at finde vej til mere glæde, frihed og lethed i livet.
          </p>
          <a 
            href="/kontakt"
            className="inline-block bg-gray-800 text-white px-8 py-3 text-lg font-light hover:bg-gray-700 transition-colors"
          >
            Book din første session
          </a>
        </div>

      </div>
    </section>
  );
};

export default KlientUdtalelser;
