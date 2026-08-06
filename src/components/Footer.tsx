import React from "react";
import { Zap, MessageCircle, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-16">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="font-extrabold font-space text-2xl tracking-tight text-white">
                Loja<span className="text-red-500">Pod</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma especializada de catálogo WhatsApp, controle de sabores e impressão térmica de alta performance para vape shops e tabacarias.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <div className="text-sm font-extrabold font-space text-white uppercase tracking-wider">Navegação</div>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#recursos" className="hover:text-white transition-colors">Recursos do Sistema</a></li>
              <li><a href="#ecossistema" className="hover:text-white transition-colors">Front, Admin & Print</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora de ROI</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Planos */}
          <div className="space-y-3">
            <div className="text-sm font-extrabold font-space text-white uppercase tracking-wider">Módulos</div>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Painel Administrativo</a></li>
              <li><button onClick={() => onOpenCheckout("mensal")} className="hover:text-white text-left transition-colors">Assinar Plano Mensal (R$ 149,99)</button></li>
              <li><button onClick={() => onOpenCheckout("anual")} className="hover:text-white text-left transition-colors">Assinar Plano Anual</button></li>
            </ul>
          </div>

          {/* WhatsApp Support */}
          <div className="space-y-3">
            <div className="text-sm font-extrabold font-space text-white uppercase tracking-wider">Atendimento VIP</div>
            <p className="text-xs text-slate-400">
              Fale com um consultor comercial direto no WhatsApp para tirar dúvidas.
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20LojaPod" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 text-xs font-bold rounded-xl mt-1 border-emerald-500/40 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>Atendimento WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} LojaPod. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para alta conversão no mercado de pods e tabacarias.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
