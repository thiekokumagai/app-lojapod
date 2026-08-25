import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, LogIn } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobre", "recursos", "precos", "faq"];
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/images/logo.png" 
            alt="LojaPOD Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#sobre"
            className={`hover:text-[#27a768] transition-colors ${
              activeSection === "sobre" ? "text-[#27a768] font-bold" : ""
            }`}
          >
            Sobre o sistema
          </a>

          <a
            href="#recursos"
            className={`hover:text-[#27a768] transition-colors ${
              activeSection === "recursos" ? "text-[#27a768] font-bold" : ""
            }`}
          >
            Recursos
          </a>

          <a
            href="#precos"
            className={`hover:text-[#27a768] transition-colors ${
              activeSection === "precos" ? "text-[#27a768] font-bold" : ""
            }`}
          >
            Preços
          </a>

          <a
            href="#faq"
            className={`hover:text-[#27a768] transition-colors ${
              activeSection === "faq" ? "text-[#27a768] font-bold" : ""
            }`}
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="text-sm font-semibold text-slate-700 hover:text-[#27a768] hover:bg-[#e6f7ef] rounded-xl gap-1.5">
              <LogIn className="h-4 w-4 text-[#27a768]" />
              <span>Entrar</span>
            </Button>
          </a>

          <Button 
            onClick={() => onOpenCheckout("mensal")}
            className="hidden sm:flex font-bold shadow-sm rounded-xl bg-[#27a768] hover:bg-[#218f59] text-white border-0 px-5 text-sm h-11 transition-all cursor-pointer"
          >
            <span>Testar agora</span>
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
        <div className="lg:hidden bg-white text-slate-900 border-b border-slate-200 p-6 space-y-4 text-sm animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 font-semibold">
            <a
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#27a768] py-1 border-b border-slate-100"
            >
              Sobre o sistema
            </a>
            <a
              href="#recursos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#27a768] py-1 border-b border-slate-100"
            >
              Recursos
            </a>
            <a
              href="#precos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#27a768] py-1 border-b border-slate-100"
            >
              Preços
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-[#27a768] py-1 border-b border-slate-100"
            >
              FAQ
            </a>
            <a
              href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-[#27a768] py-1 flex items-center gap-2"
            >
              <LogIn className="h-4 w-4 text-[#27a768]" />
              <span>Entrar / Painel Admin</span>
            </a>
          </nav>

          <Button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCheckout("mensal");
            }}
            className="w-full py-3.5 font-bold rounded-xl bg-[#27a768] hover:bg-[#218f59] text-white border-0 text-sm cursor-pointer"
          >
            <span>Testar agora (7 Dias Grátis)</span>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
