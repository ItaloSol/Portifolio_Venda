import React from 'react';
import { Monitor, Users, MessageSquare, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Especialistas em criar landing pages de alta conversão que transformam visitantes em clientes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-400">
              italo.sol100@gmail.com<br />
              (61) 9 9300-3980
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Blog</li>
              <li>Casos de Sucesso</li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a target='_blank' href='www.linkedin.com/in/italo-sol'><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © 2024 Landing Page Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}