import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a fase de Análise?",
    answer: `Nossa fase de análise inclui três etapas fundamentais:

1. Estudo do mercado: Analisamos tendências, oportunidades e desafios do seu setor, identificando as melhores práticas e estratégias que geram resultados.

2. Definição do público-alvo: Criamos personas detalhadas do seu cliente ideal, incluindo dados demográficos, comportamentais e necessidades específicas.

3. Análise da concorrência: Avaliamos os pontos fortes e fracos dos seus concorrentes, identificando oportunidades de diferenciação.`
  },
  {
    question: "O que envolve a fase de Estratégia?",
    answer: `A fase de estratégia é composta por três elementos cruciais:

1. Planejamento de conteúdo: Desenvolvemos uma estrutura de conteúdo persuasiva que comunica claramente sua proposta de valor e benefícios.

2. Definição de KPIs: Estabelecemos métricas claras de sucesso, como taxa de conversão, tempo de permanência e taxa de rejeição.

3. Escolha de tecnologias: Selecionamos as ferramentas e plataformas mais adequadas para garantir performance, segurança e escalabilidade.`
  },
  {
    question: "Como é realizada a fase de Desenvolvimento?",
    answer: `O desenvolvimento engloba três aspectos principais:

1. Design responsivo: Criamos layouts que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência consistente.

2. Otimização SEO: Implementamos as melhores práticas de SEO técnico e on-page para melhorar o posicionamento nos buscadores.

3. Testes A/B: Realizamos testes comparativos de diferentes elementos para maximizar a taxa de conversão.`
  },
  {
    question: "O que acontece na fase de Lançamento?",
    answer: `O lançamento é dividido em três etapas:

1. Publicação: Colocamos sua landing page no ar após rigorosos testes de qualidade e performance.

2. Monitoramento: Acompanhamos em tempo real o comportamento dos usuários e métricas de conversão.

3. Ajustes finais: Realizamos otimizações com base nos dados coletados para maximizar os resultados.`
  },
  {
    question: "O que é otimização para SEO?",
    answer: `A otimização para SEO (Search Engine Optimization) é um conjunto de técnicas que aplicamos para melhorar o posicionamento da sua landing page nos resultados de busca. Nossa otimização inclui:

1. SEO Técnico:
   - Estrutura HTML semântica
   - Velocidade de carregamento otimizada
   - Responsividade para dispositivos móveis
   - URLs amigáveis
   - Sitemap XML e robots.txt

2. SEO On-page:
   - Pesquisa e implementação de palavras-chave estratégicas
   - Meta tags otimizadas (título, descrição, headings)
   - Conteúdo relevante e bem estruturado
   - Otimização de imagens e mídia
   - Links internos estratégicos

3. Experiência do Usuário:
   - Navegação intuitiva
   - Tempo de carregamento rápido
   - Conteúdo organizado e legível
   - Elementos interativos bem posicionados

4. Monitoramento:
   - Acompanhamento de rankings
   - Análise de métricas de engajamento
   - Ajustes contínuos baseados em dados`
  },
  {
    question: "Quanto tempo leva para criar uma landing page?",
    answer: "O processo completo leva em média 72 horas após a aprovação do briefing. Este prazo inclui todas as fases de desenvolvimento, desde a análise inicial até o lançamento."
  },
  {
    question: "As landing pages são otimizadas para SEO?",
    answer: "Sim, todas as páginas seguem as melhores práticas de SEO técnico e on-page, incluindo otimização de meta tags, estrutura de dados, velocidade de carregamento e experiência do usuário."
  },
  {
    question: "Posso solicitar alterações após o lançamento?",
    answer: "Sim, oferecemos um período de ajustes gratuitos de 15 dias após o lançamento. Além disso, disponibilizamos pacotes de manutenção contínua para garantir que sua landing page continue evoluindo e gerando resultados."
  }
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}