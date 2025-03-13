"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { initializeAnalytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

// Componentes carregados dinamicamente
const MacbookScrollDemo = dynamic(
  () => import('@/components/sections/Benefits').then(mod => mod.MacbookScrollDemo),
  { loading: () => <motion.div className="h-screen" />, ssr: false }
);

const WhyChooseUs = dynamic(
  () => import('@/components/sections/WhyChooseUs').then(mod => mod.WhyChooseUs)
);
const WorkProcess = dynamic(
  () => import('@/components/sections/WorkProcess').then(mod => mod.WorkProcess)
);
const Cases = dynamic(
  () => import('@/components/sections/Cases').then(mod => mod.Cases)
);
const AnimatedTestimonials = dynamic(
  () => import('@/components/sections/DevCredits').then(mod => mod.AnimatedTestimonialsDemo)
);
const Pricing = dynamic(
  () => import('@/components/sections/Pricing').then(mod => mod.Pricing)
);
const FAQ = dynamic(
  () => import('@/components/sections/FAQ').then(mod => mod.FAQ)
);
const ContactForm = dynamic(
  () => import('@/components/sections/ContactForm').then(mod => mod.ContactForm)
);
const Footer = dynamic(
  () => import('@/components/sections/Footer').then(mod => mod.Footer)
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize analytics
    const setupAnalytics = async () => {
      const analyticsInstance = await initializeAnalytics();
      setAnalytics(analyticsInstance as any);
      
      if (analyticsInstance) {
        logEvent(analyticsInstance, 'page_view', {
          page_title: 'Home',
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    setupAnalytics();
  }, []);

  const trackSectionView = async (sectionId: string) => {
    if (analytics) {
      logEvent(analytics, 'section_view', {
        section_id: sectionId,
        page_title: 'Home',
        timestamp: new Date().toISOString(),
      });
    }
  };

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
          <Suspense fallback={<motion.div className="h-screen" />}>
            <motion.div onViewportEnter={() => trackSectionView('benefits')}>
              <MacbookScrollDemo />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('why-choose-us')}>
              <WhyChooseUs />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('work-process')}>
              <WorkProcess />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('cases')}>
              <Cases />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('testimonials')}>
              <AnimatedTestimonials />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('pricing')}>
              <Pricing />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('faq')}>
              <FAQ />
            </motion.div>
            <motion.div onViewportEnter={() => trackSectionView('contact')}>
              <ContactForm />
            </motion.div>
            <Footer />
          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
