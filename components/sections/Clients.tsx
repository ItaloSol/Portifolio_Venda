"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import Image from "next/image";
const clients = [
  {
    name: "Clinica Sorrir Mais",
    logo: "/images/sorrimais.webp",
  },
  {
    name: "Advocacia Bressan",
    logo: "/images/advocacia.webp",
  },
  {
    name: "Encapsualados Bioreino",
    logo: "/images/bioreino.webp",
  },
  {
    name: "Agencia Royal Motors",
    logo: "/images/royal.webp",
  },
  {
    name: "Gráfica do Exército",
    logo: "/images/grafex.webp",
  },
  {
    name: "Dançarina Luanda Ribeiro",
    logo: "/images/luanda.webp",
  },
  {
    name: "Franquias PaiTech",
    logo: "/images/paitec.webp",
  },
  {
    name: "Pousada e Camping",
    logo: "/images/camping.webp",
  },
  {
    name: "Pousada e Chalés",
    logo: "/images/chales.webp",
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const nextSlide = () => {
    setShowSwipeHint(false);
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= clients.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setShowSwipeHint(false);
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.floor(clients.length / 3) * 3 : prevIndex - 3
    );
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + 3);
  const totalSlides = Math.ceil(clients.length / 3);
  const currentSlide = Math.floor(currentIndex / 3);

  return (
    <section ref={containerRef} className="relative py-20 bg-black/50">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos Clientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empresas que confiaram em nosso trabalho para impulsionar seus resultados online
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between w-full px-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous clients"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next clients"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swipe Hint */}
         
          

          <motion.div
            style={{ y }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {visibleClients.map((client, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-40 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm hover-card">
                  <div className="h-full w-full flex flex-col items-center justify-center p-4 space-y-4">
                    <p className="text-white text-lg font-medium text-center">{client.name}</p>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {showSwipeHint && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-2/1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 p-2 rounded-full"
              >
                <MoveHorizontal className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Deslize para ver mais</span>
              </motion.div>
            )}
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index * 3);
                  setShowSwipeHint(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-400 scale-110'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}