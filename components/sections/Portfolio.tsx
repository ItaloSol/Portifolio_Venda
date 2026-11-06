"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = { title: string; description: string; category: string; image: string; link: string };

// Sites reais feitos por mim. Imagens em /public/portfolio (1080x1080).
const projects: Project[] = [
  { title: "Advocacia Bressan", description: "Site para advogado com áreas de atuação, casos e depoimentos.", category: "Advocacia", image: "/portfolio/bressan-pronto.webp", link: "https://advocaciabressanoficial.web.app/" },
  { title: "Nardini Advogados", description: "Site institucional do escritório com artigos jurídicos e formulário de contato.", category: "Advocacia", image: "/portfolio/nardini-pronto.webp", link: "https://nardiniadvogados.web.app/" },
  { title: "Inventários e Sucessões", description: "Página com linguagem jurídica acessível, pensada para gerar consultas.", category: "Advocacia", image: "/portfolio/familia-pronto.webp", link: "https://sucessoesnardini.web.app/" },
  { title: "Defesa do Consumidor", description: "Página para advogado especialista, com foco em contato pelo WhatsApp.", category: "Advocacia", image: "/portfolio/consumidor-pronto.webp", link: "https://consumidorsidnei.web.app/" },
  { title: "Sorrir Mais Odontologia", description: "Site da clínica com especialidades e agendamento online.", category: "Saúde", image: "/portfolio/dentista-pronto.webp", link: "https://sorrirmais-odonto.web.app/" },
  { title: "BioReino", description: "Página de vendas com vídeo e garantia em destaque.", category: "Saúde", image: "/portfolio/bioreino-pronto.webp", link: "https://bioreinooficial.web.app/" },
  { title: "Millian Cosmético", description: "Vitrine da linha de cosméticos com carrossel de produtos.", category: "Produtos", image: "/portfolio/millian-pronto.webp", link: "https://milliancosmetico.web.app/" },
  { title: "FácilZap", description: "Página de vendas de serviço digital com formulário integrado.", category: "Serviços", image: "/portfolio/facilzap-pronto.webp", link: "https://sitefacilzap.web.app/" },
  { title: "Luanda Ribeiro Dança", description: "Site do grupo de dança com agenda de eventos e galeria.", category: "Educação", image: "/portfolio/luanda-pronto.webp", link: "https://luandaribeirohd.web.app/" },
  { title: "COOPCAM", description: "Site institucional da cooperativa com área do associado e notícias.", category: "Institucional", image: "/portfolio/coopcam-pronto.webp", link: "https://coopcam-coop.web.app/" },
];

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Portfolio() {
  const [active, setActive] = useState("Todos");
  const visible = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sites que eu fiz e estão no ar</h2>
          <p className="text-gray-300 text-lg">Toque em qualquer um para abrir o site real, do jeito que os clientes dessas empresas veem.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 md:justify-center" role="group" aria-label="Filtrar por segmento">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                active === c ? "bg-blue-500 text-white" : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <a
              key={p.link}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Site ${p.title} exibido em computador e celular`}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-blue-400">{p.category}</span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{p.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{p.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                  Ver site no ar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
