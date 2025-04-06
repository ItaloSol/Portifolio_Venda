"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadModal } from "@/components/LeadModal";
import { fadeIn } from "@/lib/animations";
import { initializeAnalytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

// Critical path components loaded imediatamente
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Questions } from "@/components/sections/Questions";
import { Stats } from "@/components/sections/Stats";
import { ImmersiveQuestions } from "@/components/sections/ImmersiveQuestions";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
// Componentes carregados dinamicamente
const Gallery = dynamic(() => import("@/components/sections/Gallery").then((mod) => mod.Gallery), {
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

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Questions />
          </motion.div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Stats />
          </motion.div>

          <Suspense fallback={<motion.div className="h-screen animate-pulse bg-gray-900" />}>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              key="workProcess"
            >
              <WorkProcess />
            </motion.div>


            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Clients />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Testimonials />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ImmersiveQuestions />
            </motion.div>



            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Gallery />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <AnimatedTestimonials />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Pricing />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FAQ />
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>


            <Footer />

          </Suspense>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
