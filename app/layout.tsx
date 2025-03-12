import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Comprar - Landing Pages Profissionais',
  description: 'Especialistas em criar landing pages de alta conversão. Transforme visitantes em clientes com designs otimizados, copywriting persuasivo e integrações personalizadas.',
  metadataBase: new URL('https://vendalandingpage.web.app/'),
  openGraph: {
    title: 'Comprar - Landing Pages Profissionais',
    description: 'Especialistas em criar landing pages de alta conversão. Transforme visitantes em clientes com designs otimizados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Comprar - Landing Pages Profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprar - Landing Pages Profissionais',
    description: 'Especialistas em criar landing pages de alta conversão. Transforme visitantes em clientes.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vendalandingpage.web.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        
        

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}