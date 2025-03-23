"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Play, Pause } from "lucide-react";
import Image from "next/image";

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
    video: "/preview/digital-pro-.mp4",
  },
  {
    id: 8,
    src: "/preview/imovel-pro.png",
    alt: "Design Profissional",
    title: "Layout Profissional",
    level: "profissional",
    video: "/preview/imoveis-pro-.mp4",
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
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
            loading={index >= 3 ? "lazy" : "eager"}
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
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Play className="w-12 h-12 text-white" />
            </button>
          )}
        </div>
       <span className="block w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-4 opacity-50" />

      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Conheça um Pouco do Portfólio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nossa coleção de landing pages personalizadas, desde designs minimalistas até experiências interativas premium. Cada projeto é cuidadosamente desenvolvido para maximizar conversões e engajamento.
          </p>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(photos.reduce((acc, photo) => {
            if (!acc[photo.level]) acc[photo.level] = [];
            acc[photo.level].push(photo);
            return acc;
          }, {} as Record<string, typeof photos>)).map(([level, photos]) => (
            <div key={level} className="col-span-full">
              <h2 className="text-2xl font-bold text-white mb-8 capitalize">
                {level === "simples" ? "Nível Simples - Ideal para Começar" :
                 level === "basico" ? "Nível Básico - Mais Recursos e Personalização" :
                 <div className="flex flex-col gap-2">
                   <div>
                     Nível Profissional - Máximo Desempenho e Interatividade
                   </div>
                   <span className="flex items-center gap-1 text-blue-400 text-lg font-normal">
                     <Play className="w-5 h-5" />
                     Clique para ver demonstração
                   </span>
                 </div>}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo, index) => renderPhotoItem(photo, index, level))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="relative w-full max-w-4xl mx-auto">
            <button
              title="Close preview"
              type="button"
              onClick={() => {
                setSelectedImage(null);
                setIsPlaying(false);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={photos[selectedImage].video}
                className="w-full aspect-video"
                controls={false}
                onEnded={() => setIsPlaying(false)}
              />
              <button
                type="button"
                onClick={() => {
                  if (videoRef.current) {
                    if (isPlaying) {
                      videoRef.current.pause();
                    } else {
                      videoRef.current.play();
                    }
                    setIsPlaying(!isPlaying);
                  }
                }}
                className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
              >
                {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}