import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="precos" className="py-24 border-b border-slate-200/80 bg-white relative">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Investimento de Altíssimo Retorno</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Planos sem pegadinhas e sem <span className="text-gradient-rose">taxas escondidas</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Acesso ilimitado com mensalidade fixa. Pague mês a mês sem fidelidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* PLAN 1: MENSAL (DESTACADO EM LIGHT MODE) */}
          <div className="glass-card-light rounded-3xl border-2 border-rose-500 shadow-xl shadow-rose-500/10 relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            {/* Top Banner Badge */}
            <div className="bg-gradient-to-r from-rose-600 to-rose-500 text-white text-center py-2.5 text-xs font-extrabold font-space tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm">
              <Flame className="h-4 w-4 fill-white animate-bounce" />
              <span>MAIS POPULAR — PLANO MENSAL PRO</span>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-extrabold font-space text-slate-900">Assinatura Mensal</h3>
                  <p className="text-xs text-slate-500 mt-1">Acesso imediato a todo o ecossistema</p>
                </div>
                <span className="bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  SEM FIDELIDADE
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-6">
                <span className="text-5xl font-extrabold font-space text-slate-900">R$ 149,99</span>
                <span className="text-sm font-medium text-slate-500">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                  RECURSOS INCLUSOS NO PLANO:
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Vitrine Virtual Ilimitada (Front Cliente)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Gestão por Sabores & Puffs de Nicotina</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Carrinho e Pedidos Direto no WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Módulo de Impressão Térmica (58mm/80mm)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Dashboard de Vendas em Tempo Real</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Suporte VIP via WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={() => onOpenCheckout("mensal")}
                className="w-full h-14 text-base font-extrabold rounded-2xl shadow-xl shadow-rose-500/25 gap-2 hover:scale-[1.02] transition-all bg-gradient-to-r from-rose-600 to-rose-500 text-white border-0"
              >
                <span>Assinar Plano Mensal Agora</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* PLAN 2: ANUAL */}
          <div className="glass-card-light rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-extrabold font-space text-slate-900">Plano Anual</h3>
                  <p className="text-xs text-slate-500 mt-1">Para lojas consolidadas</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  2 MESES GRÁTIS
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-6">
                <span className="text-5xl font-extrabold font-space text-slate-900">R$ 119,90</span>
                <span className="text-sm font-medium text-slate-500">/ mês</span>
              </div>

              <div className="space-y-3.5">
                <div className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                  BENEFÍCIOS ADICIONAIS:
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Todos os recursos do Plano Mensal Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
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
                className="w-full h-14 text-base font-semibold rounded-2xl border-slate-300 bg-white hover:bg-slate-50 text-slate-800"
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
