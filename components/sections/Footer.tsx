"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sobre Nós</h3>
            <p className="text-gray-400 text-sm">
              Especialistas em criar landing pages de alta conversão que transformam visitantes em clientes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>italo.sol100@gmail.com</li>
              <li>(61) 9 9300-3980</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Links Úteis</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Casos de Sucesso</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
              </li>
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
          <p>© 2024 Landing Page Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}