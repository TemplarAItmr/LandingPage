import React from 'react';

interface HeroProps {
  onMainCTA: () => void;
}

const Hero: React.FC<HeroProps> = ({ onMainCTA }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="mb-6 md:mb-8">
        <img src="/src/assets/logo.png" alt="Templarai Logo" className="w-32 h-32 md:w-40 md:h-40" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Conecta-te com a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-light-purple">Templarai</span>
      </h1>
      
      <p className="text-lg text-light-purple max-w-xl mb-8">
        Descobre a nossa presença digital e acompanha as novidades do mundo da IA
      </p>
      
      <button 
        onClick={onMainCTA}
        className="btn-primary interactive-element"
      >
        Conhecer a Templarai
      </button>
    </section>
  );
};

export default Hero;