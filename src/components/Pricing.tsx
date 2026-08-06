import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, ShieldCheck, Sparkles, Zap, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precos" className="py-24 border-b border-white/10 relative">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Investimento de Altíssimo Retorno</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white leading-tight">
            Planos sem pegadinhas e sem <span className="text-gradient-fire">taxas escondidas</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg">
            Um único plano mensal completo com tudo incluso: PDV Presencial, Vitrine Virtual, Frete Dinâmico por KM e Rotas Motoboy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* PLAN 1: MENSAL PRO */}
          <div className="glass-card-cro rounded-3xl border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative overflow-hidden flex flex-col justify-between group hover:shadow-[0_0_70px_rgba(239,68,68,0.35)] transition-all duration-300">
            <div className="bg-brand-gradient text-white text-center py-2.5 text-xs font-extrabold font-space tracking-wider uppercase flex items-center justify-center gap-2 shadow-md">
              <Flame className="h-4 w-4 fill-white animate-bounce" />
              <span>RECOMENDADO — PLANO MENSAL PRO</span>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-extrabold font-space text-white">Assinatura Mensal</h3>
                  <p className="text-xs text-zinc-400 mt-1">Acesso imediato a todo o ecossistema</p>
                </div>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  SEM FIDELIDADE
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-white/10 pb-6">
                <span className="text-5xl font-extrabold font-space text-white">R$ 149,99</span>
                <span className="text-sm font-medium text-zinc-400">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase">
                  RECURSOS INCLUSOS NO PLANO:
                </div>
                <ul className="space-y-3 text-sm text-zinc-200">
                  <li className="flex items-center gap-3 font-semibold text-emerald-300">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Cálculo Dinâmico de Frete por KM/Distância</span>
                  </li>
                  <li className="flex items-center gap-3 font-semibold text-emerald-300">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Mapa & Rotas Otimizadas para Motoboy</span>
                  </li>
                  <li className="flex items-center gap-3 font-semibold text-emerald-300">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Sistema PDV de Balcão (Pedidos Manuais)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Vitrine Virtual Ilimitada (Front Cliente)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Gestão por Sabores & Puffs de Nicotina</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Módulo de Impressão Térmica (58mm/80mm)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={() => onOpenCheckout("mensal")}
                className="w-full h-14 text-base font-extrabold rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.3)] gap-2 hover:scale-[1.02] transition-all bg-gradient-to-r from-red-600 to-red-500 text-white border-0"
              >
                <span>Assinar Plano Mensal Agora</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* PLAN 2: ANUAL */}
          <div className="glass-card-cro rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-extrabold font-space text-white">Plano Anual</h3>
                  <p className="text-xs text-zinc-400 mt-1">Para lojas consolidadas</p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  2 MESES GRÁTIS
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-white/10 pb-6">
                <span className="text-5xl font-extrabold font-space text-white">R$ 119,90</span>
                <span className="text-sm font-medium text-zinc-400">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase">
                  BENEFÍCIOS ADICIONAIS:
                </div>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Todos os recursos do Plano Mensal Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Rotas Motoboy e Frete por KM Inclusos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Economia de R$ 360,00 no ano</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onOpenCheckout("anual")}
                className="w-full h-14 text-base font-semibold rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 text-white"
              >
                <span>Garantir Desconto Anual</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
