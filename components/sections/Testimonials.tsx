"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal, Quote } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
const testimonials = [
  {
    id: -1,
    name: "Advocacia Bressan",
    role: "Advocacia Bressan",
    image: "/images/advocacia.webp",
    content: "A transformação da minha página foi extraordinária após o seu trabalho. Agora tenho uma página completa e que passa credibilidade.",
    url: "https://advocaciabressan.com/",
    company: "Advocacia Bressan",
  },
  {
    id: 1,
    name: "Clinica Sorrir Mais",
    role: "Cliente Satisfeito",
    image: "/images/sorrimais.webp",
    content: "A parceria com Italo Sol tem sido extremamente benéfica. A qualidade do serviço é excepcional.",
    url: "https://sorrirmais.netlify.app/",
    company: "Clinica Sorrir Mais",
  },
  {
    id: 2,
    name: "Dançarina Luanda Ribeiro",
    role: "Cliente Satisfeito",
    image: "/images/luanda.webp",
    content: "Os resultados foram além das expectativas. Italo Sol é muito profissional e dedicado.",
    url: "https://luandaribeirohd.web.app/",
    company: "Dançarina Luanda Ribeiro",
  },
  {
    id: 3,
    name: "Encapsualados Bioreino",
    role: "Cliente Satisfeito",
    image: "/images/bioreino.webp",
    content: "Italo Sol é extremamente competente e os resultados falam por si. Excelente parceria!",
    url: "https://bioreinooficial.com.br/",
    company: "Encapsualados Bioreino",
  },
  {
    id: 4,
    name: "Gráfica do Exército",
    role: "Cliente Satisfeito",
    image: "/images/grafex.webp",
    content: "A qualidade do trabalho de Italo Sol é incomparável. Estamos muito satisfeitos com os resultados.",
    url: "https://www.grafex.eb.mil.br/portifolio/",
    company: "Gráfica do Exército",
  },
  {
    id: 5,
    name: "Agencia Royal Motors",
    role: "Cliente Satisfeito",
    image: "/images/royal.webp",
    content: "A nossa agência viu um crescimento significativo após a colaboração com Italo Sol. Altamente recomendado!",
    url: "#",
    company: "Agencia Royal Motors",
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setShowSwipeHint(false);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    touchEventOptions: { passive: false },
    trackMouse: true
  });

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section ref={containerRef} className="relative py-20 bg-black/50">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Depoimentos depois de ficarem satisfeitos
          </p>
        </div>

        <div className="relative" {...handlers}>
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-between w-full px-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swipe Hint */}
          

          <div className="overflow-hidden relative min-h-[400px]">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="w-full max-w-4xl mb-4 mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm p-8 md:p-12">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-400/20" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center md:gap-12">
                    <div className="flex-shrink-0 flex justify-center items-center">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-blue-400/20 flex justify-center items-center">
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={`Depoimento de ${testimonials[currentIndex].name}`}
                            className="object-cover"
                            width={160}  // Increased from 128 for better quality on retina displays
                            height={160} // Increased from 128 for better quality on retina displays
                            sizes="(max-width: 768px) 96px, 128px" // Responsive sizes
                            priority={currentIndex < 2} // Only prioritize first 2 images
                            quality={85}
                            loading={currentIndex > 1 ? "lazy" : "eager"} // Lazy load non-visible images
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl text-gray-200 mb-6">
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </blockquote>
                      <div className="space-y-2">
                        <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                        <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                      </div>
                      <a 
                        href={`${testimonials[currentIndex].url}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-4 block"
                      >
                        Visite a página
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
            {/* Swipe Hint */}
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                  setShowSwipeHint(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 scale-110' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}