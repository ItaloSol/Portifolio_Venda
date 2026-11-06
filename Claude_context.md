\# CLAUDE\_CONTEXT.md — LandingCraft



\## 1. Visão Geral do Projeto



\*\*Nome:\*\* LandingCraft (identidade do responsável: Ítalo Sol — Desenvolvedor Web)



\*\*Objetivo principal:\*\* Site de vendas (landing page de conversão única) que comercializa o serviço de criação de landing pages profissionais sob demanda. A página é, ela própria, a vitrine e o funil de vendas do serviço.



\*\*Público-alvo:\*\* Comércios locais e pequenos negócios que ainda não possuem presença online profissional ou que têm sites de baixa conversão. O discurso é dirigido a decisores não-técnicos (donos de pequenas empresas, autônomos, empreendedores locais).



\*\*Proposta de valor:\*\* "Transforme visitantes em clientes com Landing Pages otimizadas." A diferenciação centra-se em copywriting persuasivo, design responsivo de alta conversão, entrega rápida (até 72h) e preços escalonados a partir de R$ 480. O contato e a conversão acontecem via WhatsApp, sem fricção de formulários externos.



\---



\## 2. Arquitetura e Stack Tecnológica



| Camada           | Tecnologia                                   | Observações                                                                  |

| ---------------- | -------------------------------------------- | ---------------------------------------------------------------------------- |

| Framework        | Next.js 13.5.1 (App Router)                  | `output: 'export'` — geração estática (SSG) para SEO. Sem SSR dinâmico.      |

| Linguagem        | TypeScript 5.2.2                             | Tipagem estrita esperada em todo o código.                                   |

| UI / Estilização | Tailwind CSS 3.3.3 + tailwindcss-animate     | Tema escuro (preto) com acentos azul/violeta. Tokens HSL via CSS vars.        |

| Componentes UI   | shadcn/ui + Radix UI                         | Componentes em `components/ui/` (primitivos) e `components/ui/aceternity/`.  |

| Animação         | Framer Motion 11.x + react-intersection-observer | Variantes centralizadas em `lib/animations.ts`.                          |

| Ícones           | lucide-react                                 | Único pacote de ícones permitido.                                            |

| Formulário       | react-hook-form + zod + @hookform/resolvers  | Validação declarativa (a.validação atual do contato ainda é manual).        |

| Carousel         | embla-carousel-react + react-swipeable       | Usado nas seções de perguntas imersivas.                                     |

| Analytics        | Google Analytics 4 (gtag.js)                 | Injetado via `next/script`; ID em `NEXT\_PUBLIC\_GA\_ID`.                       |

| SEO              | Metadata API do Next.js + JSON-LD            | Schemas Organization / FAQ / Service em `lib/schema.ts`.                     |

| Hospedagem       | Vercel (alvo)                                | Exportação estática compatível com CDN.                                      |

| Backend / Dados  | Nenhum ativo                                 | Sem Supabase ou banco configurado no momento. Formulário envia ao WhatsApp. |



\*\*Estado de configuração atual:\*\* O projeto compila como site estático puro. Não há rotas de API, nem integração com backend. Todo o estado é client-side via `useState`/`useEffect` em componentes marcados com `"use client"`.



\---



\## 3. Estrutura de Pastas e Arquivos Chave



```

.

├── app/

│   ├── layout.tsx          # Layout raiz: fonte Inter, metadados SEO, scripts GA + Vimeo

│   ├── page.tsx            # Página única — compõe todas as seções na ordem do funil

│   └── globals.css         # Estilos globais, tokens HSL, classes utilitárias (gradient-text etc.)

├── components/

│   ├── sections/           # Seções da landing page (uma responsabilidade cada)

│   │   ├── Navigation.tsx

│   │   ├── Hero.tsx

│   │   ├── Stats.tsx

│   │   ├── Questions.tsx          # Carrossel de perguntas de conscientização (dor)

│   │   ├── Benefits.tsx

│   │   ├── WhyChooseUs.tsx

│   │   ├── WorkProcess.tsx

│   │   ├── Gallery.tsx

│   │   ├── Cases.tsx

│   │   ├── Clients.tsx

│   │   ├── Testimonials.tsx

│   │   ├── ImmersiveQuestions.tsx # Carrossel de perguntas de conversão ( objeção)

│   │   ├── Pricing.tsx

│   │   ├── FAQ.tsx

│   │   ├── ContactForm.tsx        # Formulário que monta mensagem e abre WhatsApp

│   │   └── Footer.tsx

│   └── ui/                        # Primitivos shadcn/ui + variantes aceternity

│       ├── button.tsx, input.tsx, ...   # \~40 componentes Radix-based

│       └── aceternity/

│           ├── background-beams.tsx

│           ├── bento-grid.tsx

│           ├── infinite-moving-cards.tsx

│           └── sparkles.tsx

├── hooks/

│   └── use-toast.ts              # Hook de notificações toast

├── lib/

│   ├── animations.ts             # Variantes Framer Motion reutilizáveis

│   ├── gtag.ts                   # Inicialização e eventos do GA4

│   ├── schema.ts                 # JSON-LD: Organization, FAQ, Service

│   └── utils.ts                  # `cn()` — merge de classes Tailwind

├── public/

│   ├── manifest.json

│   ├── robots.txt

│   └── sitemap.xml

├── next.config.js                # output: 'export', imagens não otimizadas

├── tailwind.config.ts            # Tema estendido (cores HSL, keyframes de scroll)

├── tsconfig.json

└── package.json

```



\*\*Arquivos de configuração relevantes:\*\* `next.config.js` (export estático), `tailwind.config.ts` (design tokens), `components.json` (config shadcn/ui), `tsconfig.json` (paths `@/\*`).



\*\*Ordem do funil em `app/page.tsx`:\*\*

Navigation → Hero → Stats → Questions → Benefits → WhyChooseUs → WorkProcess → Gallery → Cases → Clients → Testimonials → ImmersiveQuestions → Pricing → FAQ → ContactForm → Footer.



\---



\## 4. Regras de Negócio e Skill de Vendas Injetada



A copy e o fluxo seguem um funil de vendas estruturado com gatilhos mentais e quebra de objeções. As seções mapeiam-se às etapas:



1\. \*\*Conscientização da dor (`Questions.tsx`):\*\* Carrossel de 5 perguntas que questionam a ausência de presença online ("Você tem dificuldades em atrair novos clientes sem uma presença online?"). Gatilho: dor + prova de conceito ("a maioria dos consumidores pesquisa online antes de fechar negócio").



2\. \*\*Autoridade e prova (`Stats.tsx`, `WhyChooseUs.tsx`, `Clients.tsx`, `Cases.tsx`, `Testimonials.tsx`):\*\* Números de impacto (300% de conversão, 72h de entrega, 24/7 de suporte) e depoimentos. Gatilho: prova social + autoridade.



3\. \*\*Quebra de objeção vs. Instagram (`Benefits.tsx`, `ImmersiveQuestions.tsx`):\*\* Posiciona o site profissional contra depender apenas de Instagram. As perguntas imersivas focam em conversão ("taxa de conversão até 300%", "experiência que incentiva ações imediatas"). Gatilho: comparação + escassez de resultado.



4\. \*\*Oferta e ancoragem de preço (`Pricing.tsx`):\*\* 4 planos (Simples R$480 → Premium R$3.997) com o plano "Profissional" destacado como âncora. Cada CTA abre WhatsApp com mensagem pré-preenchida por plano. Gatilho: ancoragem de preço + reciprocidade (DNS gratuito).



5\. \*\*Conversão sem fricção (`ContactForm.tsx`):\*\* Formulário captura nome, email, telefone, empresa e faixa de orçamento, com consentimento LGPD. O submit não persiste dados — apenas monta uma mensagem estruturada e abre o WhatsApp (`wa.me/5561993003980`) com os dados pré-preenchidos. Gatilho: compromisso e consistência + baixa fricção.



6\. \*\*CTA recorrente:\*\* Todo CTA na página é via link `wa.me` com mensagem contextualizada por seção, garantindo rastreabilidade manual da origem do lead.



\*\*Observação técnica:\*\* A estratégia de copy está embarcada no JSX dos componentes (strings literais). Não há CMS nem separação de conteúdo — edições de copy exigem mudança direta nos arquivos em `components/sections/`.



\---



\## 5. Estado Atual e Próximos Passos



\### Funcional e validado

\- Landing page single-page com 16 seções renderizadas em ordem de funil.

\- Tema escuro premium com animações Framer Motion (fade, slide, parallax, carrosséis swipeable).

\- Componentes shadcn/ui + aceternity integrados e estilizados.

\- SEO configurado: metadados Open Graph, Twitter Cards, canonical, robots, JSON-LD (Organization/FAQ/Service), sitemap e robots.txt.

\- Google Analytics 4 inicializado com tracking de entrada de página.

\- Carrosséis interativos (Questions e ImmersiveQuestions) com navegação por swipe, setas e dots.

\- Pricing com 4 planos e CTAs WhatsApp contextuais.

\- Formulário de contato funcional (envio via WhatsApp) com consentimento LGPD.

\- Build estático (`next build`) com `output: 'export'`.



\### Pendente / Próximos passos para o Claude Code

1\. \*\*Persistência de leads:\*\* Atualmente o formulário apenas abre WhatsApp e descarta os dados. Integrar Supabase (tabela `leads` com RLS) para persistir cada submissão antes do redirecionamento, habilitando CRM simples.

2\. \*\*Validação de formulário com Zod:\*\* O `ContactForm` ainda usa validação HTML básica. Migrar para `react-hook-form` + `zod` (dependências já instaladas) com mensagens em PT-BR.

3\. \*\*Substituição de imagens Unsplash:\*\* URLs do Unsplash são hardcoded. Avaliar migração para Pexels (via API) ou assets locais em `/public` para garantir durabilidade e LCP otimizado.

4\. \*\*Rastreabilidade de conversão:\*\* Cada CTA WhatsApp usa mensagens diferentes, mas não há UTM/tag de evento GA por seção. Adicionar `trackEvent` do `lib/gtag.ts` em cada clique de CTA.

5\. \*\*Página de obrigados / confirmação:\*\* Após submissão do formulário, exibir estado de sucesso inline (toast ou section) antes/depois do redirect ao WhatsApp.

6\. \*\*Tipagem rigorosa:\*\* Revisar `any` em `lib/gtag.ts` e adicionar tipos explícitos nos handlers de eventos.

7\. \*\*OG image e favicon:\*\* Referenciados em metadados mas ausentes de `/public` (`/og-image.jpg`, `/favicon.ico`, `/apple-touch-icon.png`).

8\. \*\*Acessibilidade:\*\* Adicionar `alt` descritivos nas imagens de carrossel e garantir contraste AA em textos cinza-claro sobre fundo preto.



\### Observação de arquitetura

O `next.config.js` usa `output: 'export'`, o que desabilita rotas de API dinâmicas e SSR. Qualquer integração backend (Supabase, webhooks) deve usar Supabase Edge Functions ou clientes client-side com RLS, não rotas Next.js API.



