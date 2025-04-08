"use client";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex";
import Image from "next/image";

export function Hero() {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

  return (
    <section id="Home" className="relative min-h-screen flex items-center">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="text-blue-400 font-semibold">Ítalo Sol</span>
                <span 
                  className="ml-2 px-2 py-1 rounded-full bg-blue-500/20 text-sm text-blue-400"
                  aria-hidden="true"
                >
                  Desenvolvedor Web
                </span>
              </motion.div>
            </div>
            
            {/* Optimized H1 with will-change and reduced animation complexity */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.2, // Reduced from 0.4s
                ease: "linear" // Simpler easing function
              }}
              className="text-5xl md:text-6xl font-bold leading-tight gradient-text"
              style={{ willChange: 'opacity' }} // Hint for browser optimization
            >
              Por que sua empresa precisa de uma Landing Page?
            </motion.h1>
            <p className="text-xl text-gray-300">
              Descubra como uma landing page pode impulsionar seus resultados e transformar visitantes em clientes
            </p>
            <div>
              <Link href={whatsappLink} target="_blank">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
                 aria-label="Solicite Proposta">
                  Solicite Proposta
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-lg font-semibold text-blue-400">Transforme visitantes em clientes fiéis!</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-3xl opacity-30" />
            <Image
              src="/logomarca.webp"
              alt="Landing Page Mockup"
              width={1080}
              height={1080}
              priority
              quality={85}
              className="relative rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}