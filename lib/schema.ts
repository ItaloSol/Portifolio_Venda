export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PageCraft",
  "description": "Criação de sites profissionais para comércios e pequenas empresas",
  "url": "https://vendalandingpage.web.app",
  "logo": "https://vendalandingpage.web.app/logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-61-99931-5616",
    "contactType": "sales",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.linkedin.com/in/italo-sol/"
  ]
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Criação de Site Profissional",
  "provider": {
    "@type": "Organization",
    "name": "PageCraft"
  },
  "areaServed": "BR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planos de Site Profissional",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site Essencial",
          "description": "Site de uma página focado em um produto ou serviço, com WhatsApp e versão para celular",
          "price": "810",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site Completo",
          "description": "Site completo para pequenas e médias empresas, com catálogo, identidade visual e otimização para o Google",
          "price": "1621",
          "priceCurrency": "BRL"
        }
      }
    ]
  }
});