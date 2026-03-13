import { Button } from "@/components/ui/button";
import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um diagnóstico da minha frota.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nEmpresa: ${formData.company}\nTamanho da Frota: ${formData.fleetSize}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-muted/50" id="diagnostico">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-pale text-accent text-sm font-medium mb-4">
              Diagnóstico Gratuito
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground font-display mb-4">
              Pronto para eliminar os{" "}
              <span className="text-gradient">desperdícios</span> da sua frota?
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha o formulário e receba um diagnóstico completo da performance operacional da sua frota.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elevated border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-display">Nome</label>
                <input
                  type="text"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-display">E-mail Corporativo</label>
                <input
                  type="email"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-display">Telefone</label>
                <input
                  type="tel"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-display">Empresa</label>
                <input
                  type="text"
                  required
                  className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-display">Tamanho da Frota</label>
              <select
                required
                className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.fleetSize}
                onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
              >
                <option value="">Selecione...</option>
                <option value="5-10">5 a 10 veículos</option>
                <option value="11-50">11 a 50 veículos</option>
                <option value="50+">Mais de 50 veículos</option>
              </select>
            </div>

            <Button variant="hero" size="lg" className="w-full text-lg py-6" type="submit">
              Solicitar Diagnóstico Gratuito
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Ao enviar, você será redirecionado para o WhatsApp para iniciar o atendimento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
