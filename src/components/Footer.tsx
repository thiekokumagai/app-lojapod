import React from "react";
import { Zap, MessageCircle, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-16 font-mono text-xs">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-4 col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold font-space text-2xl tracking-tight text-white uppercase">
                LOJA<span className="text-lime-400">POD</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-lime-400" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plataforma D2C de alta performance para vapes, pods descartáveis e tabacarias. Catálogo por sabores, impressora no balcão e cartão fidelidade.
            </p>
          </div>

          {/* Módulos */}
          <div className="space-y-3">
            <div className="font-extrabold font-space text-white uppercase tracking-wider text-sm">Módulos</div>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#modulos" className="hover:text-lime-400 transition-colors">Pods Delivery</a></li>
              <li><a href="#modulos" className="hover:text-lime-400 transition-colors">PDV Balcão</a></li>
              <li><a href="#modulos" className="hover:text-lime-400 transition-colors">Atacado B2B</a></li>
              <li><a href="#modulos" className="hover:text-lime-400 transition-colors">Cartão Fidelidade</a></li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3">
            <div className="font-extrabold font-space text-white uppercase tracking-wider text-sm">Navegação</div>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#recursos" className="hover:text-lime-400 transition-colors">Fórmula do Sucesso</a></li>
              <li><a href="#ecossistema" className="hover:text-lime-400 transition-colors">Ecossistema</a></li>
              <li><a href="#precos" className="hover:text-lime-400 transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-lime-400 transition-colors">Dúvidas (FAQ)</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-3">
            <div className="font-extrabold font-space text-white uppercase tracking-wider text-sm">Suporte</div>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <a 
                  href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-lime-400 transition-colors"
                >
                  Painel Admin
                </a>
              </li>
              <li><button onClick={() => onOpenCheckout("mensal")} className="hover:text-lime-400 text-left transition-colors">Assinar Mensal</button></li>
              <li><button onClick={() => onOpenCheckout("anual")} className="hover:text-lime-400 text-left transition-colors">Garantir 25% OFF</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} LojaPod Inc. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-lime-400 font-bold">
            <Zap className="h-3.5 w-3.5 fill-lime-400" />
            <span>Made with energy & speed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
