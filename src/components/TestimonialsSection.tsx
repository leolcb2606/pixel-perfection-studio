import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Com a ZUQ conseguimos reduzir 22% no consumo de combustível em apenas 4 meses. A plataforma mudou nossa visão operacional.",
    name: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "TransLog Express",
  },
  {
    quote: "A videotelemetria com IA nos ajudou a identificar comportamentos de risco que nunca teríamos visto. Reduzimos sinistros em 35%.",
    name: "Ana Paula Vieira",
    role: "Gestora de Frota",
    company: "Rodomax Logística",
  },
  {
    quote: "Finalmente temos controle real. A ZUQ nos deu visibilidade total da operação e eliminamos planilhas desnecessárias.",
    name: "Roberto Almeida",
    role: "Gerente de Transporte",
    company: "Cargo Sul Transportes",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28" id="depoimentos">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-pale text-accent text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-display">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-bold text-foreground font-display text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
