import React, { useEffect } from 'react';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { socialLinks } from './data/socialLinks';

function App() {
  // Function to check for dark mode preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleMainCTA = () => {
    window.open('https://templarai.online/pt/', '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-purple text-white">
      <div className="max-w-3xl mx-auto pb-12 px-4">
        <Hero onMainCTA={handleMainCTA} />
        <SocialLinks links={socialLinks} />
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;