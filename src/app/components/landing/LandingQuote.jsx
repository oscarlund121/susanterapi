"use client";

const LandingQuote = () => {
  return (
    <section className="py-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <blockquote className="font-light text-gray-800 leading-relaxed mb-8 italic">
              "Vi kan kun skabe varig transformationer i os selv, hvis vi gør det ud
              fra ren ubetinget kærlighed. Essens i terapien er at være helhjertet –
              at have hele hjertet med."
            </blockquote>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-px bg-gray-300"></div>
              <cite className="text-gray-500 font-light not-italic tracking-wide text-sm">
                Karen Aaes, Essentielt Institut
              </cite>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingQuote;
