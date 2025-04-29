"use client";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/556199315616?text=${whatsappMessage}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image 
              src="/logomarca.webp" 
              alt="Logo" 
              width={48} 
              height={48} 
              className="h-12 w-auto mr-2"
              priority
            />
            <span className="font-bold text-xl">PageCraft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#Home" 
              onClick={(e) => handleScroll(e, "Home")}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleScroll(e, "benefits")}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Benefícios
            </a>
            <a 
              href="#Gallery" 
              onClick={(e) => handleScroll(e, "Gallery")}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Portfólio
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScroll(e, "pricing")}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Preços
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contato
            </a>
            <Link href={whatsappLink} target="_blank">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300"
                aria-label="Solicitar proposta via WhatsApp"
              >
                Solicite Proposta
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#Home" 
              onClick={(e) => handleScroll(e, "Home")}
              className="block w-full px-4 py-3 hover:bg-white/10 rounded-md transition-colors duration-300 text-center"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleScroll(e, "benefits")}
              className="block w-full px-4 py-3 hover:bg-white/10 rounded-md transition-colors duration-300 text-center"
            >
              Benefícios
            </a>
            <a 
              href="#Gallery" 
              onClick={(e) => handleScroll(e, "Gallery")}
              className="block w-full px-4 py-3 hover:bg-white/10 rounded-md transition-colors duration-300 text-center"
            >
              Portfólio
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScroll(e, "pricing")}
              className="block w-full px-4 py-3 hover:bg-white/10 rounded-md transition-colors duration-300 text-center"
            >
              Preços
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="block w-full px-4 py-3 hover:bg-white/10 rounded-md transition-colors duration-300 text-center"
            >
              Contato
            </a>
            <Link href={whatsappLink} target="_blank" className="block mt-4">
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300 py-6"
                aria-label="Solicitar proposta via WhatsApp"
              >
                Solicite Proposta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}