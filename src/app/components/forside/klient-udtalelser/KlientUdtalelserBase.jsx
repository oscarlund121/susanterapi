'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from '../../ui/Button';

const KlientUdtalelserBase = () => {
  const udtalelser = [
    {
      tekst: "Jeg oplever Susan som utrolig og meget tillidsvækkende. Efter en terapisession føler jeg altid en større lethed og glæde, som gør at jeg i større grad kan udleve mine ønsker.",
      navn: "Dorte",
      baggrund: "Familie med 3 børn i terapi"
    },
    {
      tekst: "Jeg har haft psoriasis siden jeg var 14 år gammel. Efter at have fundet frem til hvilke chok det var skyld i og få det bearbejdet, gik der ikke lang tid før jeg var fri for denne sygdom.",
      navn: "Birthe", 
      baggrund: "Efter 43 år med psoriasis"
    },
    {
      tekst: "Susan hjalp mig gennem en svær periode med angst. Hun skabte et trygt rum hvor jeg kunne være åben om mine følelser. Nu føler jeg mig meget stærkere.",
      navn: "Maria",
      baggrund: "Angst og stress"
    },
    {
      tekst: "Min datter var begyndt at have skolefravær. Efter nogle sessioner med Susan begyndte hun at blomstre igen. Jeg er så taknemmelig for den hjælp vi fik.",
      navn: "Thomas",
      baggrund: "Far til teenager"
    },
    {
      tekst: "Jeg havde længe kæmpet med lavt selvværd. Susan hjalp mig til at se mine egne styrker og nu tør jeg meget mere end før.",
      navn: "Anne",
      baggrund: "Selvværd og selvtillid"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Titel */}
        <div className="text-left mb-16">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-4">
            Klient udtalelser
          </h2>
        </div>

        {/* Swiper Karussel - fuld bredde */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {udtalelser.map((udtalelse, index) => (
              <SwiperSlide key={index}>
                <div className="p-8 lg:p-12 text-center">
                  <div className="mb-8">
                    <blockquote className="text-gray-700 leading-relaxed italic text-lg lg:text-xl max-w-3xl mx-auto">
                      "{udtalelse.tekst}"
                    </blockquote>
                  </div>
                  <div className="pt-6">
                    <div className="font-medium text-gray-800 tracking-wide text-lg">{udtalelse.navn}</div>
                    <div className="text-sm text-gray-500 mt-2">{udtalelse.baggrund}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 pt-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vil du også opleve transformation? Jeg hjælper dig gerne med at finde 
              vej til mere glæde, frihed og lethed i livet.
            </p>
            <Button href="/kontakt">
              Book din første session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlientUdtalelserBase;
