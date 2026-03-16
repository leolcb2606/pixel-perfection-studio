import zuqLogo from "@/assets/logoZUQ.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Cobertura", href: "#cobertura" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/20">
      <div className="container flex items-center justify-between h-16">
        <img 
          src={zuqLogo} 
          alt="ZUQ" 
          className="h-12 w-auto object-contain [filter:drop-shadow(0_0_2px_#fff)_drop-shadow(0_0_8px_#fff)]" 
        />
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" size="lg" asChild>
            <a href="#diagnostico">Diagnóstico Gratuito</a>
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-navy-light/20 p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" className="w-full" asChild>
            <a href="#diagnostico">Diagnóstico Gratuito</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
