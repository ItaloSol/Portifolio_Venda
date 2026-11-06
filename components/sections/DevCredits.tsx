import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { memo } from "react";

const testimonials = [
  {
    quote:
     "Eu ajudo comércios e pequenas empresas a serem encontrados por quem pesquisa no celular. Há 4 anos crio sites e soluções digitais, e cuido pessoalmente de cada projeto: escrevo os textos, construo o site e acompanho até ele estar no ar. Você fala direto comigo do começo ao fim.",
    name: "Italo Sol",
    designation: "Criador de Sites Profissionais",
    src: "/images/foto_perfil.webp",
  }
];

export const AnimatedTestimonialsDemo = memo(function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
});
