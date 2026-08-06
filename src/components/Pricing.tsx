import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, ShieldCheck, Sparkles, Zap, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precos" className="py-20 sm:py-24 border-b border-slate-200/80 relative bg-white">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Investimento de Altíssimo Retorno</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Planos sem pegadinhas e sem <span className="text-gradient-fire">taxas escondidas</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Um único plano mensal completo com tudo incluso: PDV Presencial, Vitrine Virtual, Frete Dinâmico por KM e Rotas Motoboy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* PLAN 1: MENSAL PRO */}
          <div className="glass-card-cro rounded-3xl border-2 border-red-500 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="bg-brand-gradient text-white text-center py-2.5 text-xs font-extrabold font-space tracking-wider uppercase flex items-center justify-center gap-2 shadow-md">
              <Flame className="h-4 w-4 fill-white" />
              <span>RECOMENDADO — PLANO MENSAL PRO</span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-space text-slate-900">Assinatura Mensal</h3>
                  <p className="text-xs text-slate-500 mt-1">Acesso imediato a todo o ecossistema</p>
                </div>
                <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase shrink-0">
                  SEM FIDELIDADE
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-6">
                <span className="text-4xl sm:text-5xl font-extrabold font-space text-slate-900">R$ 149,99</span>
                <span className="text-sm font-medium text-slate-500">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-slate-500 uppercase">
                  RECURSOS INCLUSOS NO PLANO:
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Cálculo Dinâmico de Frete por KM/Distância</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Mapa & Rotas Otimizadas para Motoboy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Sistema PDV de Balcão (Pedidos Manuais)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Vitrine Virtual Ilimitada (Front Cliente)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Gestão por Sabores & Puffs de Nicotina</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Módulo de Impressão Térmica (58mm/80mm)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={() => onOpenCheckout("mensal")}
                className="w-full h-auto min-h-[3.5rem] py-3.5 px-4 text-sm sm:text-base font-extrabold rounded-2xl shadow-lg shadow-red-500/25 gap-2 hover:scale-[1.02] transition-all bg-gradient-to-r from-red-600 to-red-500 text-white border-0 whitespace-normal text-center"
              >
                <span>Assinar Plano Mensal Agora</span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>

          {/* PLAN 2: ANUAL */}
          <div className="glass-card-cro rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all bg-white shadow-md">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-space text-slate-900">Plano Anual</h3>
                  <p className="text-xs text-slate-500 mt-1">Para lojas consolidadas</p>
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase shrink-0">
                  2 MESES GRÁTIS
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-6">
                <span className="text-4xl sm:text-5xl font-extrabold font-space text-slate-900">R$ 119,90</span>
                <span className="text-sm font-medium text-slate-500">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-slate-500 uppercase">
                  BENEFÍCIOS ADICIONAIS:
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Todos os recursos do Plano Mensal Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Rotas Motoboy e Frete por KM Inclusos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    <span>Economia de R$ 360,00 no ano</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onOpenCheckout("anual")}
                className="w-full h-auto min-h-[3.5rem] py-3.5 px-4 text-sm sm:text-base font-semibold rounded-2xl border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900 whitespace-normal text-center shadow-sm"
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
