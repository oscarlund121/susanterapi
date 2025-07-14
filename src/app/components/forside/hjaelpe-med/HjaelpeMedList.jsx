'use client'
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

const HjaelpeMedList = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const terapiområder = [
    {
      kategori: "Angst og bekymringer",
      items: ["Generel angst", "Panikangst", "Sociale fobier", "Præstationsangst", "Sundhedsangst"]
    },
    {
      kategori: "Stress og udmattelse", 
      items: ["Udbrændthed", "Arbejdsstress", "Søvnforstyrrelser", "Tankemylder", "Koncentrationsbesvær"]
    },
    {
      kategori: "Sorg og tab",
      items: ["Dødsfald", "Skilsmisse", "Jobmiste", "Venskabstab", "Livskrise"]
    },
    {
      kategori: "Selvværd og identitet",
      items: ["Lavt selvværd", "Perfektionisme", "Selvkritik", "Usikkerhed", "Identitetskrise"]
    },
    {
      kategori: "Traumer og chok",
      items: ["PTSD", "Barndomstraumer", "Ulykker", "Vold", "Seksuelle overgreb"]
    },
    {
      kategori: "Følelsesregulering",
      items: ["Vredesudbrud", "Følelsesmæssig ustabilitet", "Depression", "Apati", "Overfølsomhed"]
    },
    {
      kategori: "Sociale relationer",
      items: ["Parforhold", "Familiekonflikter", "Venners", "Mobning", "Ensomhed"]
    },
    {
      kategori: "Børn og unge",
      items: ["Skolefravær", "ADHD", "Modstand", "Lavt selvværd", "Separation"]
    }
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getSectionClasses = (index) => {
    const baseClasses = "transition-all duration-700 ease-out";
    const isVisible = visibleSections.has(index);
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0`;
    }
    return `${baseClasses} opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`;
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvad kan jeg hjælpe med?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Kender du fornemmelsen af ikke at føle dig anerkendt som den du er, 
            eller fastlåst i en situation? Jeg hjælper børn, unge og voksne med at komme videre.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {terapiområder.map((område, index) => (
            <div
              key={index}
              ref={el => sectionRefs.current[index] = el}
              className={getSectionClasses(index)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide">
                  {område.kategori}
                </h3>
                <div className="space-y-2">
                  {område.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center border-t border-gray-100 pt-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            En terapisession hos mig er en samtale, hvor vi sammen finder frem til 
            det du ønsker at arbejde med.
          </p>
          <Button href="/kontakt">
            Book session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HjaelpeMedList;
