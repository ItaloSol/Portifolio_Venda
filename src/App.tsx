import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Advantages } from './components/Advantages';
import { DeveloperCredits } from './components/DeveloperCredits';
import { initGA, trackPageEntrance } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize GA4
    initGA();
    
    // Track page entrance
    trackPageEntrance();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DeveloperCredits />
      <Advantages />
      <Benefits />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;