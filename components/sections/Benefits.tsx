'use client';

import React, { useRef, useEffect, useState } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { Target, Lightbulb, BarChart3, LayoutDashboard, FileCheck, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    title: "Foco na Conversão",
    description: "Direcione visitantes para ações específicas como cadastros, vendas ou agendamentos",
    icon: Target,
  },
  {
    title: "Clareza e Simplicidade",
    description: "Mensagem objetiva e focada que elimina distrações e destaca o valor do seu negócio",
    icon: Lightbulb,
  },
  {
    title: "Otimização de Campanhas",
    description: "Integração perfeita com marketing digital e segmentação precisa de público",
    icon: BarChart3,
  },
  {
    title: "Mensuração de Resultados",
    description: "Acompanhamento detalhado de métricas e ajuste contínuo de estratégias",
    icon: LayoutDashboard,
  },
  {
    title: "Custo-Benefício",
    description: "Desenvolvimento econômico e rápido para testar novos produtos ou serviços",
    icon: FileCheck,
  },
  {
    title: "Experiência do Usuário",
    description: "Navegação intuitiva que facilita a jornada e decisão do cliente",
    icon: Users,
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export function MacbookScrollDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <Benefits />;
  }

  return (
    <div id="benefits" className="overflow-hidden bg-[#0B0B0F] w-full">
      <MacbookScroll
        title={
          <span>
            Você sabe porque uma landing page impressiona seus clientes?. <br /> De uma olhada.
          </span>
        }
        badge={
          <Link href="https://vendalandingpage.web.app/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`https://raw.githubusercontent.com/ItaloSol/imagens_links_API/refs/heads/main/site_vendas_laptop.webp`}
        showGradient={false}
      />
    </div>
  );
}

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="benefits" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por que escolher nossas Landing Pages?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforme sua presença digital com landing pages otimizadas para resultados
          </p>
        </div>
        
        <motion.div
          style={{ y, rotate, scale, perspective: 1000 }}
          className="relative w-full max-w-5xl mx-auto mb-32"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl -z-10" />
          <BentoGrid>
            {benefits.map((benefit, index) => (
              <BentoGridItem
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className={index === 0 || index === 5 ? "md:col-span-2" : ""}
              />
            ))}          
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};
