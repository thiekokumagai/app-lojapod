import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles, ExternalLink } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["recursos", "ecossistema", "calculadora", "precos", "faq"];
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
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#070709]/85 backdrop-blur-xl transition-all">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-red-600/40 group-hover:scale-105 transition-transform duration-300">
            <Zap className="h-6 w-6 fill-current animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold font-space text-2xl tracking-tight text-white leading-none">
              Loja<span className="text-red-500">Pod</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-mono font-medium tracking-wider uppercase mt-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              CONVERSÃO MÁXIMA 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Active Indicator */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <a
            href="#recursos"
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSection === "recursos"
                ? "bg-red-500/20 text-red-400 font-extrabold border border-red-500/30"
                : "hover:text-white hover:bg-white/5"
            }`}
          >
            Recursos
          </a>

          <a
            href="#ecossistema"
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSection === "ecossistema"
                ? "bg-red-500/20 text-red-400 font-extrabold border border-red-500/30"
                : "hover:text-white hover:bg-white/5"
            }`}
          >
            Ecossistema
          </a>

          <a
            href="#calculadora"
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeSection === "calculadora"
                ? "bg-emerald-500/20 text-emerald-400 font-extrabold border border-emerald-500/30"
                : "text-emerald-400 font-bold hover:bg-white/5"
            }`}
          >
            <span>Calculadora ROI</span>
          </a>

          <a
            href="#precos"
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeSection === "precos"
                ? "bg-red-500/20 text-red-400 font-extrabold border border-red-500/30"
                : "hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Preços</span>
            <span className="bg-red-500/20 text-red-400 text-[10px] px-2 py-0.5 rounded-full font-bold border border-red-500/30">
              R$ 149,99
            </span>
          </a>

          <a
            href="#faq"
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSection === "faq"
                ? "bg-red-500/20 text-red-400 font-extrabold border border-red-500/30"
                : "hover:text-white hover:bg-white/5"
            }`}
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="font-semibold text-zinc-300 hover:text-white hover:bg-white/10 rounded-xl gap-1.5">
              <span>Painel Admin</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Button>
          </a>
          <Button 
            variant="gradient" 
            size="default" 
            onClick={() => onOpenCheckout("mensal")}
            className="gap-2 font-extrabold shadow-xl shadow-red-600/30 rounded-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-500 text-white border-0"
          >
            <Sparkles className="h-4 w-4" />
            <span>Assinar Plano Mensal</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
