"use client";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sobre Nós</h3>
            <p className="text-gray-400 text-sm">
              Sites profissionais para comércios e pequenas empresas serem encontrados, transmitirem confiança e receberem mais contatos no WhatsApp.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href={whatsappLink("Olá, Ítalo! Vim pelo seu site.")} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: (61) 9 9931-5616</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Navegação</h3>
            <ul className="space-y-1">
              <li><a href="#pricing" className="text-gray-400 hover:text-white text-sm">Planos e preços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white text-sm">Portfólio</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white text-sm">Perguntas frequentes</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm">Pedir proposta</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/italo-sol/"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/landingpagecraft/"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} PageCraft, por Ítalo Sol. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}