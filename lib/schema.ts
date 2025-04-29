export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PageCraft",
  "description": "Especialistas em criar landing pages de alta conversão",
  "url": "https://vendalandingpage.web.app",
  "logo": "https://vendalandingpage.web.app/logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-61-99300-3980",
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
  "name": "Landing Page Development",
  "provider": {
    "@type": "Organization",
    "name": "PageCraft"
  },
  "areaServed": "BR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Landing Page Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Simples",
          "description": "Landing page básica com design responsivo",
          "price": "480",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Profissional",
          "description": "Landing page otimizada com copywriting avançado e A/B Testing",
          "price": "1997",
          "priceCurrency": "BRL"
        }
      }
    ]
  }
});