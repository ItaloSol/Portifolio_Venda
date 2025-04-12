"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Play, Pause, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
const photos = [
  // Nível Simples
  {
    id: 2,
    src: "/preview/aplicativo.webp",
    alt: "Design Minimalista",
    title: "Layout Inicial",
    level: "simples"
  },
  {
    id: 1,
    src: "/preview/LP_ADS.webp",
    alt: "Landing Page Simples",
    title: "Versão Básica",
    level: "simples"
  },
  {
    id: 3,
    src: "/preview/comidas.webp",
    alt: "Estrutura Básica",
    title: "Primeiro Modelo",
    level: "simples"
  },
  // Nível Básico
  {
    id: 4,
    src: "/preview/eletronico.webp",
    alt: "Landing Page Intermediária",
    title: "Design Aprimorado",
    level: "basico"
  },
  {
    id: 5,
    src: "/preview/emagrecimento.webp",
    alt: "Layout Intermediário",
    title: "Versão Refinada",
    level: "basico"
  },
  {
    id: 6,
    src: "/preview/modelo2.webp",
    alt: "Design Médio",
    title: "Acabamento Médio",
    level: "basico"
  },
  // Nível Profissional
  {
    id: 9,
    src: "/preview/revolucao.webp",
    alt: "Acabamento Premium",
    title: "Modelo Elite",
    level: "profissional",
    video: "IaLRjWoqckU",
  },
  {
    id: 7,
    src: "/preview/loja.webp",
    alt: "Landing Page Premium",
    title: "Versão Premium",
    level: "profissional",
    video: "c3PIY25CJE8",
  },
  {
    id: 8,
    src: "/preview/marketing.webp",
    alt: "Design Profissional",
    title: "Layout Profissional",
    level: "profissional",
    video: "9SZzjt6x0SY",
  }
  
];

type GalleryLevel = "simples" | "basico" | "profissional";

function useSwipeHandlers(level: string, handleSlide: (level: string, direction: 'prev' | 'next') => void) {
  return useSwipeable({
    onSwipedLeft: () => handleSlide(level, 'next'),
    onSwipedRight: () => handleSlide(level, 'prev'),
    delta: 10,
    trackMouse: true
  });
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState<Record<string, number>>({
    simples: 0,
    basico: 0,
    profissional: 0,
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedImage(null);
        setIsPlaying(false);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  const getLevelTitle = (level: string) => {
    switch (level) {
      case "simples":
        return "Nível Simples";
      case "basico":
        return "Nível Básico";
      case "profissional":
        return "Nível Profissional";
      default:
        return "";
    }
  };

  const toggleVideo = () => {
    if (videoRef.current && videoRef.current.src) {
      const iframe = videoRef.current;
      const urlParts = iframe.src.split('v=');
      if (urlParts.length > 1) {
        const videoId = urlParts[1].split('&')[0];
        const src = isPlaying 
          ? `https://www.youtube.com/embed/${videoId}?autoplay=0`
          : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        
        iframe.src = src;
        setIsPlaying(!isPlaying);
      }
    }
  };

  const groupedPhotos = photos.reduce((acc, photo) => {
    if (!acc[photo.level]) {
      acc[photo.level] = [];
    }
    acc[photo.level].push(photo);
    return acc;
  }, {} as Record<string, typeof photos>);

  const handleSlide = (level: string, direction: 'prev' | 'next') => {
    setActiveSlide(prev => ({
      ...prev,
      [level]: direction === 'next'
        ? (prev[level] + 1) % groupedPhotos[level].length
        : (prev[level] - 1 + groupedPhotos[level].length) % groupedPhotos[level].length
    }));
  };

  const useHandlers = (level: string) => useSwipeable({
    onSwipedLeft: () => handleSlide(level, 'next'),
    onSwipedRight: () => handleSlide(level, 'prev'),
    delta: 10,
    trackMouse: true
  });

  const renderPhotoItem = (photo: typeof photos[0], index: number, level: string) => {
    const hasVideo = level === "profissional" && photo.video;
    const isActive = index === activeSlide[level];

    return (
      <motion.div
        key={photo.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative group cursor-pointer ${isActive ? 'block' : 'hidden md:block'}`}
        onClick={() => hasVideo && setSelectedImage(photos.findIndex(p => p.id === photo.id))}
      >
        <div className="relative overflow-hidden rounded-lg pb-[177.78%]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            priority={photo.id <= 3} // Prioritize loading for first 3 images
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-sm font-semibold text-white">{photo.title}</h4>
            <p className="text-xs text-gray-300 mt-1">{photo.alt}</p>
          </div>
          {hasVideo && (
            <button
              type="button"
              title="Play video"
              className="absolute inset-0 flex items-center bg-black/20 justify-center opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(photos.findIndex(p => p.id === photo.id));
                setIsPlaying(true);
              }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  const swipeHandlersMap = {
    simples: useSwipeHandlers("simples", handleSlide),
    basico: useSwipeHandlers("basico", handleSlide),
    profissional: useSwipeHandlers("profissional", handleSlide),
  };

  return (
    <section id="Gallery" className="relative py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Evolução de Qualidade</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Conheça nossa progressão de qualidade em diferentes níveis de desenvolvimento
          </p>
        </div>

        <div className="space-y-16">
          {(["simples", "basico", "profissional"] as GalleryLevel[]).map((level) => (
            <div key={level} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{getLevelTitle(level)}</h3>
              <div className="relative" {...swipeHandlersMap[level]}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {groupedPhotos[level].map((photo, index) => renderPhotoItem(photo, index, level))}
                </div>
                
                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center justify-between mt-4">
                  <button
                    type="button"
                    title="Previous slide"
                    onClick={() => handleSlide(level, 'prev')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  {activeSlide[level] === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="absolute top-2/1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 p-2 rounded-full"
                    >
                      <MoveHorizontal className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-gray-300">Deslize para navegar</span>
                    </motion.div>
                  )}
                  <div className="flex gap-2">
                    {groupedPhotos[level].map((_, index) => (
                      <button
                        type="button"
                        title={`Go to slide ${index + 1}`}
                        key={index}
                        onClick={() => setActiveSlide(prev => ({ ...prev, [level]: index }))}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === activeSlide[level] ? 'bg-blue-400' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    title="Next slide"
                    onClick={() => handleSlide(level, 'next')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                   
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && photos[selectedImage].video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            title="Close video"
            onClick={() => {
              setSelectedImage(null);
              setIsPlaying(false);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X size={24} />
          </button>
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl"
          >
            <div className="relative pb-[56.25%]">
              <iframe
                title={`Video preview for ${photos[selectedImage].title}`}
                ref={videoRef}
                src={`https://www.youtube.com/embed/${photos[selectedImage]?.video}?autoplay=0`}
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-semibold text-white">{photos[selectedImage].title}</h3>
                <p className="text-sm text-gray-300 mt-1">{photos[selectedImage].alt}</p>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}