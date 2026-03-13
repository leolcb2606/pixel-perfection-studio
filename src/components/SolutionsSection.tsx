import { Play, Cpu, Route, Video, BarChart3, Shield, Gauge } from "lucide-react";
import { useState } from "react";

// Placeholder for the institutional video URL — replace with the real one
const VIDEO_URL = "";

const features = [
  {
    icon: Cpu,
    title: "Telemetria Avançada",
    desc: "Dados em tempo real de toda sua frota para decisões precisas.",
  },
  {
    icon: Video,
    title: "Videotelemetria com IA",
    desc: "Monitore comportamento de condução e reduza riscos com inteligência artificial.",
  },
  {
    icon: Route,
    title: "Roteirização Inteligente",
    desc: "Otimize rotas automaticamente e economize combustível e tempo.",
  },
  {
    icon: BarChart3,
    title: "Gestão Completa",
    desc: "Centralize toda a operação em uma única plataforma integrada.",
  },
  {
    icon: Shield,
    title: "Segurança Operacional",
    desc: "Alertas de desvio de rota, excesso de velocidade e paradas não autorizadas.",
  },
  {
    icon: Gauge,
    title: "Performance em Tempo Real",
    desc: "Dashboards inteligentes para acompanhar KPIs da frota em um só lugar.",
  },
];

const SolutionsSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-muted/50" id="solucoes">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated aspect-video bg-primary">
              {playing && VIDEO_URL ? (
                <iframe
                  src={VIDEO_URL}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vídeo Institucional ZUQ"
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="w-full h-full flex flex-col items-center justify-center gap-4 bg-hero group cursor-pointer relative"
                >
                  {/* Decorative circles */}
                  <div className="absolute w-48 h-48 rounded-full border border-sky/20 animate-float" />
                  <div className="absolute w-32 h-32 rounded-full border border-sky/10" style={{ animationDelay: '1s' }} />

                  <div className="w-20 h-20 rounded-full bg-cta-gradient flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform z-10">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm font-medium font-display z-10">
                    Assistir Vídeo Institucional
                  </span>
                </button>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-cta-gradient opacity-20 blur-2xl" />
          </div>

          {/* Right: features */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sky-pale text-accent text-sm font-medium mb-4">
              Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-display mb-4">
              Tecnologia de ponta a serviço da sua{" "}
              <span className="text-gradient">logística</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nossa plataforma transforma dados da operação em decisões práticas para reduzir custos e aumentar a eficiência.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sky-pale flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-display text-sm">{f.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
