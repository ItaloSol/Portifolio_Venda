import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { memo } from "react";

const testimonials = [
  {
    quote:
     "Com dedicação, honestidade e profissionalismo, construo soluções digitais que impulsionam a presença online de empresas. Tenho 4 anos de experiência em desenvolvimento web e utilizo as melhores tecnologias para atender às necessidades de cada projeto. Trabalho com Next.js ou WordPress, garantindo flexibilidade e personalização para alcançar os melhores resultados.",
    name: "Italo Sol",
    designation: "Desenvolvedor de Landing Pages",
    src: "/images/foto_perfil.jpeg",
  }
];

export const AnimatedTestimonialsDemo = memo(function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
});
