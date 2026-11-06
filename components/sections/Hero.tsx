"use client";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { whatsappLink, formatBRL, PRECO_ESSENCIAL } from "@/lib/whatsapp";

export function Hero() {
  const ctaLink = whatsappLink(
    "Olá, Ítalo! Vi seu site e quero entender como um site profissional pode trazer mais clientes para a minha empresa."
  );

  return (
    <section id="Home" className="relative min-h-screen flex items-center justify-center">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid md:grid-cols-1 gap-12 items-center justify-items-center text-center">
          <div className="space-y-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <span className="text-blue-400 font-semibold">Ítalo Sol</span>
              <span className="ml-2 px-2 py-1 rounded-full bg-blue-500/20 text-sm text-blue-300">
                Sites profissionais para comércios e empresas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="text-4xl md:text-6xl font-bold leading-tight gradient-text"
            >
              Quando alguém procura o que você vende, encontra a sua empresa ou a do concorrente?
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-200">
              Antes de sair de casa, o cliente pesquisa no celular. Eu crio o{" "}
              <strong className="text-white">site profissional</strong> da sua empresa com seus produtos,
              diferenciais, endereço e WhatsApp organizados em um só lugar. Assim, quem pesquisa chega até você
              pronto para comprar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity text-base"
                >
                  Quero um site que traga clientes
                </Button>
              </Link>
              <a href="#pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 bg-transparent text-base">
                  Ver quanto custa
                </Button>
              </a>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-1.5"><Check className="h-4 w-4 text-blue-400" aria-hidden="true" />A partir de {formatBRL(PRECO_ESSENCIAL)}</li>
              <li className="flex items-center gap-1.5"><Check className="h-4 w-4 text-blue-400" aria-hidden="true" />Pronto em média em 72h após aprovação</li>
              <li className="flex items-center gap-1.5"><Check className="h-4 w-4 text-blue-400" aria-hidden="true" />Hospedagem inclusa</li>
              <li className="flex items-center gap-1.5"><Check className="h-4 w-4 text-blue-400" aria-hidden="true" />Você não precisa entender de tecnologia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
