import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A atenção aos detalhes e recursos inovadores transformaram completamente minha forma de criar landing pages. É exatamente isso que os clientes procuram.",
      name: "Italo Sol",
      designation: "Desenvolvedor de Landing Pages",
      src: "https://raw.githubusercontent.com/ItaloSol/imagens_links_API/refs/heads/main/foto_perfil.jpeg",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
