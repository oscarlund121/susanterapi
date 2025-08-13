"use client";
import React, { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import TestimonialModal from "./TestimonialModal";
import CallToActionBox from "../layout/CallToActionBox";

const LandingUdtalelser = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Emilie, 26 år",
      age: "26",
      image: "/images/flower.jpg",
      imageBorderRadius: "rounded-tl-[50px] rounded-tr-xl rounded-b-xl",
      preview: "Da jeg startede i terapi hos Susan, var det min første gang i terapi nogensinde. Jeg stod et sted hvor livet føltes som om det ramlede sammen omkring mig...",
      category: "Eksamensangst & livskriser",
      fullText: "Da jeg startede i terapi hos Susan, var det også min første gang i terapi nogensinde. Jeg stod et sted i mit liv, hvor det føltes som om livet ramlede sammen omkring mig og jeg følte mig alene og vidste ikke længere hvordan jeg skulle komme ovenpå igen.\n\nTerapien blev for mig et sted hvor der var plads til at snakke om alt - uden den mindste form for fordømmelse. Susan har været enormt lyttende, men også meget nærværende i alle samtaler og griber alt hvad jeg siger med det samme.\n\nSom terapeut er Susan varm, kærlig, dygtig, nysgerrig, åben og man føler sig virkelig tryg i hendes nærvær. Personligt har jeg sat rigtig meget pris på, at Susan ikke blot lytter - men bruger en stor del af tiden på at forklare mig hvad mine følelser/tanker/oplevelser kan betyde og hvorfor jeg måske reager som jeg gør, i bestemte situationer.\n\nAlle mine tanker og ord blev taget kærligt i mod, og sammen fandt vi frem til kernen i mange nuværende følelser, som har rødder i oplevelser langt tilbage i mit liv. Men der blev også sorteret i følelserne, så vi sammen kom nærmere hvad 'problemet' egentlig var og hvad der kunne sorteres fra og dermed parkeres, så de ikke længere krævede min opmærksomhed.\n\nFor mig personligt fungerede det værktøj, at parkere sine tanker (i et 'parkeringshus') rigtig godt. Jeg blev opmærksom på hvad jeg bruger min energi på, og det har været en enormt lærrerig proces. Det var svært i starten - og er det stadig til tider - men Susan var god til at komme med konkrete metaforer for, hvordan man kunne styre sin bevidsthed over tankerne.\n\nDette har hjulpet mig enormt meget, da jeg stod overfor to reeksamener i sommeren 2025, og de negative tanker og frygten for eksamen tog overhånd. Konkret hjalp Susan mig også med, at man ikke behøver, at 'være en der har eksamensangst' - det kan man gøre noget ved.\n\nOg selvom de to reeksamener jeg lige har været oppe i, er noget af det sværeste mentalt jeg har skullet igennem i mit liv, så har jeg aldrig været så rolig og haft så godt styr på mig selv og min krop op til og under en eksamen.\n\nSusan havde rådet mig til at skrive 5-10 sætninger ned på et papir, som lå foran mig til hele eksamen og mindede mig om alle de positive tanker. Konkrete vejrtrækningsøvelser, meditation og viljen til ikke at lade negative tanker og 'panik' overtage var grunden til, at jeg klarede mig så godt igennem eksamenerne.\n\nOg noget jeg vil tage med mig i mange situationer fremover i livet. Jeg kunne ikke have gjort det uden Susans hjælp og hun har mine varmeste anbefalinger."
    },
    {
      name: "Dorte",
      age: "42",
      image: "/images/tree-touch.jpg",
      imageBorderRadius: "rounded-2xl",
      preview: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde, som gør at jeg i større grad kan udleve mine ønsker...",
      category: "Familie & børneterapi",
      fullText: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde, som gør at jeg i større grad kan udleve mine ønsker.\n\nJeg har fået terapi hos Susan gennem en del år, og det samme gælder min datter. Susan har også chok-forløst og hjulpet min daværende 5 årige datter, som ikke turde bevæge sig alene rundt i vores hus. Min teenagedatter får også terapi løbende hos Susan og nogle gange bare for at lufte ud i systemet.\n\nDet er så svært at forklare, hvordan terapien er, men det giver SÅ MEGET mening, når Susan fortæller om tankerne bag. Man får en bevidstgørelse og forståelse af, hvordan psyke, krop, og det fysiske hænger sammen. Susan mærker én og man skal ikke fortælle ret meget før end at hun griber den og finder ind til kernen af det der er svært."
    },
    {
      name: "Birthe",
      age: "57",
      image: "/images/purple-flower.jpg",
      imageTopLeftRadius: "rounded-tl-[75px]",
      imageTopRightRadius: "rounded-tr-xl",
      imageBottomLeftRadius: "rounded-bl-xl",
      imageBottomRightRadius: "rounded-br-xl",
      preview: "Jeg har haft psoriasis siden jeg var 14 år gammel, jeg er i dag 57 år og har kæmpet hele mit liv med de gener det giver at have psoriasis...",
      category: "Psoriasis & hudsygdomme",
      fullText: "Jeg har haft den glæde at stifte bekendtskab med Essens terapi gennem Susan Albertsen.\n\nJeg har haft psoriasis siden jeg var 14 år gammel, jeg er i dag 57 år og har kæmpet hele mit liv med de gener det giver at have psoriasis. Jeg har forsøgt rigtig mange ting for at slippe af med denne hudsygdom, har været ved Dødehavet 3 gange på ophold, smurt mig med alverdens cremer, spist og drukket mange mærkelige ting - men intet har hjulpet.\n\nJeg kom i terapi hos Susan og da vi fandt frem til hvilke CHOK det var skyld i at jeg som 14 årige fik psoriasis, og fik det bearbejdet, gik der ikke lang tid før jeg var fri for denne sygdom.\n\nJeg er blevet hjulpet med mange ting gennem denne enestående terapiform. Vi kommer alle ud for sorg/bekymringer og disse ting lagres i kroppen og vi reagerer alle forskelligt på disse hændelser - men med Essens terapi kan man få løst op for disse CHOK.\n\nJeg kan ikke forklare hvad det er Susan kan, men hun er med sin varme og dejlige udstråling en terapeut man føler sig tryg ved. Hun har en fantastisk evne til at guide en igennem terapien. Og man har let ved at åbne sig for hende.\n\nJeg kan kun varmt anbefale Susan hvis du vil have bearbejdet ting der kan gøre livet svært for dig."
    },
    {
      name: "Carlo",
      age: "65",
      image: "/images/wheat.jpg",
      imageBorderRadius: "rounded-xl",
      preview: "Da jeg over en længere periode havde været meget træt og uoplagt, oplevede jeg efter en terapi med Susan, at energien kom tilbage og min træthed forsvandt...",
      category: "Energi & rygestop",
      fullText: "Da jeg over en længer periode havde været meget træt og uoplagt, oplevede jeg efter en terapi med Susan, at energien kom tilbage og min træthed forsvandt.\n\nDa jeg længe har haft et ønske om at stoppe med rygning, kontaktede jeg igen Susan, for at se om det var noget hun kunne hjælpe med, efter en terapi gik der et stykke tid, hvorefter min trang til rygning gradvis blev mindre og mindre, og blev stille og rolig mere klar til at stoppe rygning som jeg har gjort i ca. 43 år, nu har jeg ikke røget de sidste 7 måneder, hvilke jeg er Susan dybt taknemlig for.\n\nMed Susans ro og varme når hun udfører sin terapi kan jeg klart anbefale Susan."
    },
    {
      name: "Steffen",
      age: "30",
      image: "/images/beach-walk.jpg",
      imageTopLeftRadius: "rounded-tl-[60px]",
      imageTopRightRadius: "rounded-tr-2xl",
      imageBottomLeftRadius: "rounded-bl-2xl",
      imageBottomRightRadius: "rounded-br-2xl",
      preview: "Jeg er blevet hjulpet af Susan af flere omgange med forskellige ting jeg går og døjer med, og jeg kan virkelig anbefale det...",
      category: "Negative tanker",
      fullText: "Jeg er blevet hjulpet af Susan af flere omgange med forskellige ting jeg går og døjer med, og jeg kan virkelig anbefale det. Jeg er nu sluppet af med alle de dårlige tanker jeg gik og havde før hen og hviler nu mere i mig selv.\n\nHun er både den rareste og mest professionelle person jeg længe har oplevet, man føler sig i rigtig trykke hænder hos Susan."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-warm-beige-50 via-sage-50 to-soft-peach-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-soft-peach-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header som i LandingTilbyder */}
        <SectionHeader 
          badgeText="Klient resultater"
          title="Se hvad mine klienter opnår"
          description="Læs om tidligere klienters oplevelser og resultater med terapien. Deres historier viser kraften i at arbejde med både krop og sind."
          buttonText="Book din session nu"
          buttonHref="/kontakt"
          buttonVariant="green"
          buttonDirection="left"
          buttonSize="large"
        />

        {/* Testimonials grid - mere elegant layout */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              onReadMore={setSelectedTestimonial}
            />
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-sage-200/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-text-secondary text-lg leading-relaxed italic">
              "Hver historie er unik, men fælles for alle er rejsen mod større trivsel og indre balance. 
              Jeg er stolt af at kunne være en del af mine klienters healing-proces."
            </p>
            <div className="mt-4 text-text-primary font-medium">— Susan Albertsen</div>
          </div>
        </div>

        {/* Modal for full testimonials */}
        <TestimonialModal 
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />

      </div>
    </section>
  );
};

export default LandingUdtalelser;
