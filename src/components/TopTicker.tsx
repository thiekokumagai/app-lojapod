import React from "react";
import { Flame, Sparkles, Zap, ShieldCheck } from "lucide-react";

export const TopTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white text-xs font-bold py-2 px-4 overflow-hidden border-b border-red-500/30 shadow-md">
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
        <span className="flex items-center gap-2">
          <Flame className="h-3.5 w-3.5 fill-white" />
          <span>OPOPTUNIDADE DE LANÇAMENTO: PLANO MENSAL COMPLETO POR APENAS R$ 149,99/MÊS</span>
        </span>
        <span className="flex items-center gap-2 text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>SISTEMA N#1 EM CONVERSÃO DE VAPES E PODS</span>
        </span>
        <span className="flex items-center gap-2 text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>+500 LOJAS ATIVAS NO BRASIL</span>
        </span>
        <span className="flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 fill-white" />
          <span>ATIVAÇÃO IMEDIATA PÓS-PIX • SEM TAXA SOBRE VENDAS</span>
        </span>

        {/* Duplicate for infinite loop */}
        <span className="flex items-center gap-2">
          <Flame className="h-3.5 w-3.5 fill-white" />
          <span>OPORTUNIDADE DE LANÇAMENTO: PLANO MENSAL COMPLETO POR APENAS R$ 149,99/MÊS</span>
        </span>
        <span className="flex items-center gap-2 text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>SISTEMA N#1 EM CONVERSÃO DE VAPES E PODS</span>
        </span>
        <span className="flex items-center gap-2 text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>+500 LOJAS ATIVAS NO BRASIL</span>
        </span>
      </div>
    </div>
  );
};
