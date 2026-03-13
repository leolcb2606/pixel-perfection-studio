import { Building2, Truck, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: "+1.600", label: "Empresas atendidas" },
  { icon: Truck, value: "+50 mil", label: "Veículos monitorados" },
  { icon: MapPin, value: "100%", label: "Cobertura nacional" },
];

const AuthorityBar = () => {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-elevated p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 rounded-xl bg-sky-pale flex items-center justify-center shrink-0">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-primary font-display">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
