import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles, ExternalLink, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["modulos", "recursos", "precos", "faq"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo (Estilo GiGi Typography) */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold font-space text-2xl sm:text-3xl tracking-tight text-slate-950 uppercase">
              LOJA<span className="text-lime-500">POD</span>
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-lime-400 inline-block shadow-sm shadow-lime-400/50" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono font-bold tracking-wider uppercase text-slate-700">
          <a
            href="#modulos"
            className={`hover:text-slate-950 transition-colors ${
              activeSection === "modulos" ? "text-slate-950 border-b-2 border-lime-400 pb-1" : ""
            }`}
          >
            Módulos
          </a>

          <a
            href="#recursos"
            className={`hover:text-slate-950 transition-colors ${
              activeSection === "recursos" ? "text-slate-950 border-b-2 border-lime-400 pb-1" : ""
            }`}
          >
            Recursos
          </a>

          <a
            href="#precos"
            className={`hover:text-slate-950 transition-colors ${
              activeSection === "precos" ? "text-slate-950 border-b-2 border-lime-400 pb-1" : ""
            }`}
          >
            Preços
          </a>

          <a
            href="#faq"
            className={`hover:text-slate-950 transition-colors ${
              activeSection === "faq" ? "text-slate-950 border-b-2 border-lime-400 pb-1" : ""
            }`}
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="font-mono text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-full gap-1.5 uppercase">
              <span>Painel Admin</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Button>
          </a>

          <Button 
            onClick={() => onOpenCheckout("mensal")}
            className="hidden sm:flex gap-2 font-mono font-extrabold shadow-lg rounded-full bg-lime-400 hover:bg-lime-500 text-slate-950 border-0 px-5 sm:px-6 text-xs sm:text-sm h-9 sm:h-11 uppercase transition-all transform hover:scale-[1.03]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Teste Grátis 7 Dias</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 text-white border-b border-slate-800 p-6 space-y-4 font-mono text-sm animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 font-bold uppercase">
            <a
              href="#modulos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-lime-400 py-1 border-b border-slate-800/80"
            >
              Módulos
            </a>
            <a
              href="#recursos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-lime-400 py-1 border-b border-slate-800/80"
            >
              Recursos
            </a>
            <a
              href="#precos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-lime-400 py-1 border-b border-slate-800/80"
            >
              Preços
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-lime-400 py-1 border-b border-slate-800/80"
            >
              FAQ
            </a>
            <a
              href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white py-1 flex items-center gap-2"
            >
              <span>Painel Admin</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>

          <Button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCheckout("mensal");
            }}
            className="w-full py-4 font-mono font-extrabold rounded-full bg-lime-400 hover:bg-lime-500 text-slate-950 border-0 uppercase gap-2 text-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Teste Grátis 7 Dias</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </header>
  );
};
