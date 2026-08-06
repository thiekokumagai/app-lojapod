import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles, ExternalLink, Play } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-all shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform duration-300">
            <Zap className="h-6 w-6 fill-current animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold font-space text-2xl tracking-tight text-slate-900 leading-none">
              Loja<span className="text-rose-600">Pod</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono font-medium tracking-wider uppercase mt-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              SISTEMA VITALÍCIO 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#recursos" className="transition-colors hover:text-rose-600">Recursos</a>
          <a href="#ecossistema" className="transition-colors hover:text-rose-600">Ecossistema</a>
          <a href="#video-demo" className="transition-colors hover:text-rose-600 flex items-center gap-1.5">
            <Play className="h-3.5 w-3.5 fill-rose-600 text-rose-600" />
            <span>Vídeo Demo</span>
          </a>
          <a href="#precos" className="transition-colors hover:text-rose-600 flex items-center gap-1.5">
            <span>Preços</span>
            <span className="bg-rose-100 text-rose-700 text-[10px] px-2 py-0.5 rounded-full font-bold border border-rose-200">
              R$ 149,99
            </span>
          </a>
          <a href="#faq" className="transition-colors hover:text-rose-600">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl gap-1.5">
              <span>Painel Admin</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </Button>
          </a>
          <Button 
            variant="gradient" 
            size="default" 
            onClick={() => onOpenCheckout("mensal")}
            className="gap-2 font-bold shadow-lg shadow-rose-500/30 rounded-xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-rose-600 to-rose-500 text-white border-0"
          >
            <Sparkles className="h-4 w-4" />
            <span>Assinar Mensal</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
