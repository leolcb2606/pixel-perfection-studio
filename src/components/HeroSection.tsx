import heroImage from "@/assets/hero-fleet.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Gestão de frotas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16">
        <div className="max-w-2xl space-y-6">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky/20 text-sky-light text-sm font-medium border border-sky/30 mb-4">
              Muito além do rastreamento
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-up-delay-1 font-display">
            Pare de perder lucro em{" "}
            <span className="text-gradient">erros invisíveis.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-up-delay-2 max-w-xl font-body">
            A ZUQ é o braço direito do gestor de logística e transporte. Centralize telemetria, gestão completa da frota e roteirização em uma única plataforma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#diagnostico">Quero um Diagnóstico Gratuito</a>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#solucoes">Conhecer Soluções</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
