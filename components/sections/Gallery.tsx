"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Play, Pause } from "lucide-react";

const photos = [
  // Nível Simples
  {
    id: 1,
    src: "/preview/LP_ADS.jpg",
    alt: "Landing Page Simples",
    title: "Versão Básica",
    level: "simples"
  },
  {
    id: 2,
    src: "/preview/aplicativo.jpg",
    alt: "Design Minimalista",
    title: "Layout Inicial",
    level: "simples"
  },
  {
    id: 3,
    src: "/preview/comidas.jpg",
    alt: "Estrutura Básica",
    title: "Primeiro Modelo",
    level: "simples"
  },
  // Nível Básico
  {
    id: 4,
    src: "/preview/eletronico.jpg",
    alt: "Landing Page Intermediária",
    title: "Design Aprimorado",
    level: "basico"
  },
  {
    id: 5,
    src: "/preview/emagrecimento.jpg",
    alt: "Layout Intermediário",
    title: "Versão Refinada",
    level: "basico"
  },
  {
    id: 6,
    src: "/preview/maquiagem.jpg",
    alt: "Design Médio",
    title: "Acabamento Médio",
    level: "basico"
  },
  // Nível Profissional
  {
    id: 7,
    src: "/preview/digital-pro.png",
    alt: "Landing Page Premium",
    title: "Versão Premium",
    level: "profissional",
    video: "/preview/digital-pro.mp4",
  },
  {
    id: 8,
    src: "/preview/imovel-pro.png",
    alt: "Design Profissional",
    title: "Layout Profissional",
    level: "profissional",
    video: "/preview/imoveis-pro.mp4",
  },
  {
    id: 9,
    src: "/preview/inovacao-pro.png",
    alt: "Acabamento Premium",
    title: "Modelo Elite",
    level: "profissional",
    video: "/preview/inovacao-pro.mp4",
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const groupedPhotos = photos.reduce((acc, photo) => {
    if (!acc[photo.level]) {
      acc[photo.level] = [];
    }
    acc[photo.level].push(photo);
    return acc;
  }, {} as Record<string, typeof photos>);

  const renderPhotoItem = (photo: typeof photos[0], index: number, level: string) => {
    const hasVideo = level === "profissional" && photo.video;

    return (
      <motion.div
        key={photo.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative group cursor-pointer"
        onClick={() => hasVideo && setSelectedImage(photos.findIndex(p => p.id === photo.id))}
      >
        <div className="relative overflow-hidden rounded-lg pb-[177.78%]">
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-sm font-semibold text-white">{photo.title}</h4>
            <p className="text-xs text-gray-300 mt-1">{photo.alt}</p>
          </div>
          {hasVideo && (
            <button
              type="button"
              title="Play video preview"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

  return (
    <section id="Gallery" className="relative py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Evolução de Qualidade</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Conheça nossa progressão de qualidade em diferentes níveis de desenvolvimento
          </p>
        </div>

        <div className="space-y-12">
          {["simples", "basico", "profissional"].map((level) => (
            <div key={level} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{getLevelTitle(level)}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {groupedPhotos[level].map((photo, index) => renderPhotoItem(photo, index, level))}
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
            title="Close preview"
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
              <video
                ref={videoRef}
                src={photos[selectedImage].video}
                className="absolute inset-0 w-full h-full rounded-lg"
                playsInline
                style={{ border: "none" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-semibold text-white">{photos[selectedImage].title}</h3>
                <p className="text-sm text-gray-300 mt-1">{photos[selectedImage].alt}</p>
              </div>
              <button
                onClick={toggleVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}