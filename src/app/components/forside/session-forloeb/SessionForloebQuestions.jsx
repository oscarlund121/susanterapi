'use client'
import React from 'react';

const SessionForloebQuestions = () => {
  const sessionInfo = [
    {
      spørgsmål: "Hvordan starter jeg?",
      svar: "Ring eller send SMS til 24 29 81 28. Beskriv kort hvad du gerne vil tale om, så finder vi et tidspunkt der passer dig.",
      type: "praktisk"
    },
    {
      spørgsmål: "Hvad sker der i første session?",
      svar: "Vi bruger 1,5-2 timer på at skabe en tryg ramme. Du fortæller din historie i dit eget tempo, og vi får et overblik over dine udfordringer.",
      type: "første"
    },
    {
      spørgsmål: "Hvilke metoder bruger du?",
      svar: "Jeg arbejder med EMDR til traumer, meditation, mentalisering og andre teknikker. Vi finder sammen frem til hvad der virker bedst for dig.",
      type: "metoder"
    },
    {
      spørgsmål: "Hvor lang tid tager det?",
      svar: "Opfølgende sessioner er typisk 1-1,5 time. Et forløb kan være alt fra 2-10 sessioner, afhængig af dine behov og ønsker.",
      type: "tid"
    },
    {
      spørgsmål: "Hvad hvis jeg ikke er klar til at dele alt?",
      svar: "Det er helt i orden. Du bestemmer selv hvor meget du vil dele og hvornår. Der er ingen pres eller forventninger.",
      type: "tillid"
    },
    {
      spørgsmål: "Er jeg forpligtet til et langt forløb?",
      svar: "Nej, der er ingen binding. Du kan stoppe når som helst, tage pauser eller vende tilbage senere. Du bestemmer selv.",
      type: "fleksibilitet"
    }
  ];

  const typeColors = {
    praktisk: "bg-blue-50 border-blue-200",
    første: "bg-green-50 border-green-200", 
    metoder: "bg-purple-50 border-purple-200",
    tid: "bg-orange-50 border-orange-200",
    tillid: "bg-pink-50 border-pink-200",
    fleksibilitet: "bg-gray-50 border-gray-200"
  };

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-8">
            Hvordan foregår en session?
          </h2>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl mx-auto">
            De spørgsmål jeg oftest får, og mine ærlige svar
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sessionInfo.map((info, index) => (
            <div
              key={index}
              className={`${typeColors[info.type]} border rounded-lg p-8 transition-all duration-200 hover:shadow-lg`}
            >
              <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide leading-tight">
                {info.spørgsmål}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {info.svar}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-10 rounded-lg text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wide">
            Kort sagt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-400 mb-2">01</div>
              <h4 className="text-lg font-light text-gray-800 mb-2">Du tager kontakt</h4>
              <p className="text-sm text-gray-600">Ring eller SMS når du er klar</p>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-400 mb-2">02</div>
              <h4 className="text-lg font-light text-gray-800 mb-2">Vi mødes</h4>
              <p className="text-sm text-gray-600">I tryg atmosfære uden pres</p>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-400 mb-2">03</div>
              <h4 className="text-lg font-light text-gray-800 mb-2">Du bestemmer</h4>
              <p className="text-sm text-gray-600">Tempoet, dybden og varigheden</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Har du andre spørgsmål? Ring gerne og hør mere om hvordan en session foregår. 
            Der er ingen forpligtelser ved at spørge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionForloebQuestions;
