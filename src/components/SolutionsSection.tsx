import dashboardImage from "@/assets/platform-dashboard.jpg";
import { Cpu, Route, Video, BarChart3, Shield, Gauge } from "lucide-react";

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
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="solucoes">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={dashboardImage}
                alt="Plataforma ZUQ"
                className="w-full h-auto"
              />
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
