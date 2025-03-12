"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

// Componentes carregados dinamicamente
const MacbookScrollDemo = dynamic(() => import('@/components/sections/Benefits').then(mod => mod.MacbookScrollDemo), {
  loading: () => <div className="h-screen" />,
  ssr: false
});

const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then(mod => mod.WhyChooseUs));
const WorkProcess = dynamic(() => import('@/components/sections/WorkProcess').then(mod => mod.WorkProcess));
const Cases = dynamic(() => import('@/components/sections/Cases').then(mod => mod.Cases));
const AnimatedTestimonials = dynamic(() => import('@/components/sections/DevCredits').then(mod => mod.AnimatedTestimonialsDemo));
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(mod => mod.Pricing));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ));
const ContactForm = dynamic(() => import('@/components/sections/ContactForm').then(mod => mod.ContactForm));
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => mod.Footer));

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
          <Suspense fallback={<div className="h-screen" />}>
            <MacbookScrollDemo />
            <WhyChooseUs />
            <WorkProcess />
            <Cases />
            <AnimatedTestimonials />
            <Pricing />
            <FAQ />
            <ContactForm />
            <Footer />
          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
  );
}