"use client";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para uma landing page.");
  const whatsappLink = `https://wa.me/5561993003980?text=${whatsappMessage}`;

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
            <SparklesCore className="h-8 w-32">
              <span className="font-bold text-xl">LandingCraft</span>
            </SparklesCore>
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
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300">
                Solicite Proposta
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#" 
              onClick={(e) => handleScroll(e, "home")}
              className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleScroll(e, "benefits")}
              className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              Benefícios
            </a>
            <a 
              href="#cases" 
              onClick={(e) => handleScroll(e, "cases")}
              className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              Cases
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScroll(e, "pricing")}
              className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              Preços
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")}
              className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors duration-300"
            >
              Contato
            </a>
            <Link href={whatsappLink} target="_blank" className="block">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300">
                Solicite Proposta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}