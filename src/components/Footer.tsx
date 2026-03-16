import zuqLogo from "@/assets/logoZUQ.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={zuqLogo} 
              alt="ZUQ" 
              className="h-10 w-auto object-contain [filter:drop-shadow(0_0_2px_#fff)_drop-shadow(0_0_8px_#fff)]" 
            />
            <span className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} ZUQ. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#solucoes" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Soluções
            </a>
            <a href="#diferenciais" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Diferenciais
            </a>
            <a href="#depoimentos" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Depoimentos
            </a>
            <a href="#diagnostico" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
