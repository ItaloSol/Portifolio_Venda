"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { initializeAnalytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

// Critical path components loaded immediately
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Questions } from '@/components/sections/Questions';
import { ImmersiveQuestions } from '@/components/sections/ImmersiveQuestions';
// Components loaded dynamically with loading states


const Gallery = dynamic(
  () => import('@/components/sections/Gallery').then(mod => mod.Gallery),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const MacbookScrollDemo = dynamic(
  () => import('@/components/sections/Benefits').then(mod => mod.MacbookScrollDemo),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />, ssr: false }
);

const WorkProcess = dynamic(
  () => import('@/components/sections/WorkProcess').then(mod => mod.WorkProcess),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const AnimatedTestimonials = dynamic(
  () => import('@/components/sections/DevCredits').then(mod => mod.AnimatedTestimonialsDemo),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const Pricing = dynamic(
  () => import('@/components/sections/Pricing').then(mod => mod.Pricing),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const FAQ = dynamic(
  () => import('@/components/sections/FAQ').then(mod => mod.FAQ),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const ContactForm = dynamic(
  () => import('@/components/sections/ContactForm').then(mod => mod.ContactForm),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

const Footer = dynamic(
  () => import('@/components/sections/Footer').then(mod => mod.Footer),
  { loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" /> }
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize analytics asynchronously
    const setupAnalytics = async () => {
      try {
        const analyticsInstance = await initializeAnalytics();
        setAnalytics(analyticsInstance as any);
        
        if (analyticsInstance) {
          logEvent(analyticsInstance, 'page_view', {
            page_title: 'Home',
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
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
          <Questions />
          <Stats />
          <Suspense fallback={<motion.div className="h-screen animate-pulse bg-gray-900" />}>
            <motion.div onViewportEnter={() => trackSectionView('work-process')}>
              <WorkProcess />
            </motion.div>
            <Suspense fallback={<motion.div className="h-screen animate-pulse bg-gray-900" />}>
              <ImmersiveQuestions />
            </Suspense>
            <Gallery />
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
