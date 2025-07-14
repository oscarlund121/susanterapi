'use client'
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

const HjaelpeMedCards = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const problemkategorier = [
    {
      title: "Angst & Stress",
      items: ["Angst og fobier", "Stress og udbrændthed", "Præstationsangst", "Søvnproblemer"]
    },
    {
      title: "Følelser & Trauma",
      items: ["Sorg og tab", "Traumer", "Vrede og frustration", "Tristhed/depression"]
    },
    {
      title: "Selvværd & Udvikling",
      items: ["Lavt selvværd", "Usikkerhed", "Fastlåsthed", "Sensitivitet"]
    },
    {
      title: "Adfærd & Relationer",
      items: ["ADHD", "Skolefravær", "Tankemylder", "Parforhold problemer"]
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(item);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getItemClasses = (index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const isVisible = visibleItems.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 translate-y-8`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
          </p>
          <Button href="/kontakt">
            Book session
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemkategorier.map((kategori, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`${getItemClasses(index)} bg-gray-50 p-8 rounded-lg`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-light text-gray-800 mb-6 tracking-wide">
                {kategori.title}
              </h3>
              <ul className="space-y-3">
                {kategori.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedCards;
