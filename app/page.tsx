"use client";

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { MacbookScrollDemo } from '@/components/sections/Benefits';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { WorkProcess } from '@/components/sections/WorkProcess';
import { Cases } from '@/components/sections/Cases';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { AnimatedTestimonialsDemo } from '@/components/sections/DevCredits';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.main
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="min-h-screen bg-black text-white relative"
        >
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Hero />
          <Stats />
          <MacbookScrollDemo />
          <WhyChooseUs />
          <WorkProcess />
          <Cases />
          <AnimatedTestimonialsDemo />
          <Pricing />
          <FAQ />
          <ContactForm />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}