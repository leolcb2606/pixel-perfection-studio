import { Users, MapPin } from "lucide-react";

const CoverageSection = () => {
  return (
    <section className="py-20 md:py-28 bg-hero text-primary-foreground" id="cobertura">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sky/20 text-sky-light text-sm font-medium mb-4 border border-sky/30">
              Presença Nacional
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Mais de <span className="text-gradient">600 técnicos</span> credenciados em todo o Brasil
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Prontos para atender sua operação com rapidez e qualidade, de norte a sul do país.
            </p>

            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-sky-light" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold font-display">+600</p>
                  <p className="text-sm text-primary-foreground/60">Técnicos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-light" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold font-display">27</p>
                  <p className="text-sm text-primary-foreground/60">Estados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map visual representation */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-sky/10 border border-sky/20 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-sky/10 border border-sky/20 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cta-gradient flex items-center justify-center animate-float">
                  <MapPin className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>
            {/* Dots */}
            <div className="absolute top-8 left-1/4 w-3 h-3 rounded-full bg-sky animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/4 right-8 w-2 h-2 rounded-full bg-sky-light animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-glow animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-sky animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
