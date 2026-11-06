"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { LeadModal } from "@/components/LeadModal";
import { fadeIn } from "@/lib/animations";
import { initializeAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

// Critical path components loaded imediatamente
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ReverseInvestigation } from "@/components/sections/ReverseInvestigation";
import { Stats } from "@/components/sections/Stats";
import { Objections } from "@/components/sections/Objections";
import { Testimonials } from "@/components/sections/Testimonials";
// Componentes carregados dinamicamente
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((mod) => mod.Portfolio), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

const MacbookScrollDemo = dynamic(() => import("@/components/sections/Benefits").then((mod) => mod.MacbookScrollDemo), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
  ssr: false,
});

const WorkProcess = dynamic(() => import("@/components/sections/WorkProcess").then((mod) => mod.WorkProcess), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

const AnimatedTestimonials = dynamic(
  () => import("@/components/sections/DevCredits").then((mod) => mod.AnimatedTestimonialsDemo),
  {
    loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
  }
);

const Pricing = dynamic(() => import("@/components/sections/Pricing").then((mod) => mod.Pricing), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

const ContactForm = dynamic(() => import("@/components/sections/ContactForm").then((mod) => mod.ContactForm), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer").then((mod) => mod.Footer), {
  loading: () => <motion.div className="h-screen animate-pulse bg-gray-900" />,
});

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const setupAnalytics = async () => {
      try {
        const analyticsInstance = await initializeAnalytics();
        setAnalytics(analyticsInstance as any);

        if (analyticsInstance) {
          logEvent(analyticsInstance, "page_view", {
            page_title: "Home",
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      } catch (error) {
        console.error("Failed to initialize analytics:", error);
      }
    };

    setupAnalytics();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <AnimatePresence>
      {isLoaded && (
        <motion.main
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="min-h-screen bg-black text-white relative overflow-x-hidden"
        >
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Hero />
          <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Ordem: promessa > prova rápida > dor > prova real > como funciona > oferta > dúvidas > contato > quem sou eu */}
          <Reveal><Stats /></Reveal>
          <Reveal><ReverseInvestigation /></Reveal>

          <Suspense fallback={<motion.div className="h-screen animate-pulse bg-gray-900" />}>
            <Reveal><Portfolio /></Reveal>
            <Reveal><Testimonials /></Reveal>
            <Reveal><WorkProcess /></Reveal>
            <Reveal><Pricing /></Reveal>
            <Reveal><Objections /></Reveal>
            <Reveal><FAQ /></Reveal>
            <Reveal><ContactForm /></Reveal>
            <Reveal><AnimatedTestimonials /></Reveal>
            <Footer />
          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
    </MotionConfig>
  );
}
