import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, ShieldCheck, Sparkles, Zap, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precos" className="py-20 sm:py-28 border-b border-slate-200 relative bg-slate-50">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-900 bg-slate-950 text-lime-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INVESTIMENTO ÚNICO & TRANSPARENTE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space uppercase text-slate-950 tracking-tight">
            UM ÚNICO PLANO <span className="text-red-600 underline underline-offset-8 decoration-lime-400">COM TUDO INCLUSO</span>
          </h2>

          <p className="text-slate-600 font-mono text-sm sm:text-base">
            Sem pegadinhas, sem limites ocultos e sem comissões sobre suas vendas.
          </p>
        </div>

        {/* SINGLE CENTERALIZED PLAN CARD */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-slate-950 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="bg-slate-950 text-lime-400 text-center py-3 text-xs font-mono font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md">
              <Flame className="h-4 w-4 fill-lime-400" />
              <span>PLANO COMPLETO LOJAPOD — TUDO LIBERADO</span>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-space uppercase text-slate-950">Assinatura Mensal</h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">Acesso ilimitado e imediato a todos os módulos</p>
                </div>
                <span className="bg-lime-400 text-slate-950 border border-lime-500 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase shrink-0">
                  SEM FIDELIDADE
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-6">
                <span className="text-5xl sm:text-6xl font-extrabold font-space text-slate-950">R$ 150,00</span>
                <span className="text-sm font-mono text-slate-500 uppercase font-bold">/ mês</span>
              </div>

              <div className="space-y-4">
                <div className="text-[11px] font-mono font-extrabold tracking-wider text-slate-400 uppercase">
                  TUDO O QUE ESTÁ INCLUSO NO SEU PLANO:
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-mono">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span><strong>0% de taxas</strong> sobre o seu faturamento</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Catálogo Virtual por Sabores & Puffs de Nicotina</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Sistema PDV de Balcão & Comprovante Térmico</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Cartão Fidelidade & Selos Virtuais Automáticos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Impressão Térmica Direta (58mm e 80mm)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Frete Dinâmico por KM & Rotas para Motoboy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-10 pt-0">
              <Button 
                size="lg" 
                onClick={() => onOpenCheckout("mensal")}
                className="w-full py-5 px-6 text-sm sm:text-base font-mono font-extrabold uppercase rounded-full shadow-lg bg-slate-950 hover:bg-slate-800 text-white border-0 gap-3 transform hover:scale-[1.02] transition-transform"
              >
                <span>Assinar Plano Completo — R$ 150/mês</span>
                <ArrowRight className="h-5 w-5 text-lime-400" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
