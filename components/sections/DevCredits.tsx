import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { memo } from "react";

const testimonials = [
  {
    quote:
      "A atenção aos detalhes e recursos inovadores transformaram completamente minha forma de criar landing pages. É exatamente isso que os clientes procuram.",
    name: "Italo Sol",
    designation: "Desenvolvedor de Landing Pages",
    src: "/images/foto_perfil.jpeg",
  }
];

export const AnimatedTestimonialsDemo = memo(function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
});
