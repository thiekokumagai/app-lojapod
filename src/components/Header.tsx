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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-brand-gradient text-white shadow-md shadow-red-500/25 group-hover:scale-105 transition-transform duration-300">
            <Zap className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold font-space text-lg sm:text-2xl tracking-tight text-slate-900 leading-none">
              Loja<span className="text-red-600">Pod</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase mt-0.5 sm:mt-1 flex items-center gap-1">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              SISTEMA V2.5
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-slate-600">
          <a
            href="#recursos"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activeSection === "recursos"
                ? "bg-red-50 text-red-600 font-extrabold border border-red-200"
                : "hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            Recursos
          </a>

          <a
            href="#ecossistema"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activeSection === "ecossistema"
                ? "bg-red-50 text-red-600 font-extrabold border border-red-200"
                : "hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            Ecossistema
          </a>

          <a
            href="#calculadora"
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeSection === "calculadora"
                ? "bg-emerald-50 text-emerald-700 font-extrabold border border-emerald-200"
                : "text-emerald-700 font-bold hover:bg-emerald-50/60"
            }`}
          >
            <span>Calculadora ROI</span>
          </a>

          <a
            href="#precos"
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeSection === "precos"
                ? "bg-red-50 text-red-600 font-extrabold border border-red-200"
                : "hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            <span>Preços</span>
            <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded-full font-bold border border-red-200">
              R$ 149,99
            </span>
          </a>

          <a
            href="#faq"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              activeSection === "faq"
                ? "bg-red-50 text-red-600 font-extrabold border border-red-200"
                : "hover:text-slate-900 hover:bg-slate-100/80"
            }`}
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl gap-1.5">
              <span>Admin</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </Button>
          </a>
          <Button 
            variant="gradient" 
            size="sm" 
            onClick={() => onOpenCheckout("mensal")}
            className="gap-1.5 font-extrabold shadow-md shadow-red-500/20 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white border-0 px-3.5 sm:px-5 text-xs sm:text-sm h-9 sm:h-11 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Assinar Mensal</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
