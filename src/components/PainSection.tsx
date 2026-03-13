import { Fuel, FileSpreadsheet, Wrench, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Fuel,
    title: "Combustível disparando",
    desc: "Sem controle real de consumo, cada litro desperdiçado é lucro que evapora.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excesso de planilhas",
    desc: "Informações espalhadas, sem centralização e sem visão estratégica da operação.",
  },
  {
    icon: Wrench,
    title: "Manutenção corretiva cara",
    desc: "Sem prevenção, os custos com manutenção explodem e a frota para na hora errada.",
  },
  {
    icon: TrendingDown,
    title: "Falhas operacionais",
    desc: "Desvios de rota, ociosidade e comportamento de risco que passam despercebidos.",
  },
];

const PainSection = () => {
  return (
    <section className="py-20 md:py-28" id="diferenciais">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-display mb-4">
            Você sente que a rentabilidade da sua operação está{" "}
            <span className="text-gradient">escapando pelas mãos?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A ZUQ identifica desperdícios que o rastreamento comum não mostra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 group border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-pale flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <pain.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-bold text-foreground font-display text-lg mb-2">{pain.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
