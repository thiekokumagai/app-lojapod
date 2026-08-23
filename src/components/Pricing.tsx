import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Flame, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { fetchPublicPlans, PublicPlan } from "@/lib/api";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

function formatCurrency(val: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlans() {
      setLoading(true);
      const data = await fetchPublicPlans();
      setPlans(data || []);
      setLoading(false);
    }
    void loadPlans();
  }, []);

  return (
    <section id="precos" className="py-20 sm:py-28 border-b border-slate-200 relative bg-slate-50">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-900 bg-slate-950 text-lime-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TESTE GRÁTIS DE 7 DIAS • SEM CARTÃO DE CRÉDITO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space uppercase text-slate-950 tracking-tight">
            ESCOLHA SEU PLANO <span className="text-red-600 underline underline-offset-8 decoration-lime-400">E CRIE SUA LOJA</span>
          </h2>

          <p className="text-slate-600 font-mono text-sm sm:text-base">
            Comece a testar agora mesmo com 7 dias grátis. Sem fidelidade e sem pegadinhas.
          </p>
        </div>

        {/* DYNAMIC PLAN CARDS */}
        {loading ? (
          <div className="py-12 flex items-center justify-center text-slate-500 gap-2">
            <Loader2 className="h-6 w-6 animate-spin text-red-600" />
            <span className="font-mono text-xs">Carregando planos...</span>
          </div>
        ) : plans.length > 0 ? (
          <div className={`grid grid-cols-1 ${plans.length > 1 ? 'md:grid-cols-2' : 'max-w-xl mx-auto'} gap-8`}>
            {plans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-3xl border-2 border-slate-950 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
                <div className="bg-slate-950 text-lime-400 text-center py-3 text-xs font-mono font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md">
                  <Flame className="h-4 w-4 fill-lime-400" />
                  <span>{plan.checkoutType === 'SINGLE_PRODUCT' ? 'IMPLANTAÇÃO + 1ª MENSALIDADE' : 'ASSINATURA RECORRENTE'}</span>
                </div>

                <div className="p-6 sm:p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-space uppercase text-slate-950">{plan.name}</h3>
                      {plan.description && (
                        <p className="text-xs font-mono text-slate-500 mt-1">{plan.description}</p>
                      )}
                    </div>
                    <span className="bg-lime-400 text-slate-950 border border-lime-500 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase shrink-0">
                      7 DIAS GRÁTIS
                    </span>
                  </div>

                  <div className="flex flex-col border-b border-slate-100 pb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold font-space text-slate-950">{formatCurrency(Number(plan.price))}</span>
                      <span className="text-sm font-mono text-slate-500 uppercase font-bold">
                        {plan.checkoutType === 'SINGLE_PRODUCT' ? 'único' : '/ mês'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-bold mt-1">
                      + R$ 0,99 taxa de serviço
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="text-[11px] font-mono font-extrabold tracking-wider text-slate-400 uppercase">
                      TUDO INCLUSO NA SUA LOJA:
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-mono">
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
                    </ul>
                  </div>
                </div>

                <div className="p-6 sm:p-10 pt-0">
                  <Button 
                    size="lg" 
                    onClick={() => onOpenCheckout("mensal")}
                    className="w-full py-5 px-6 text-sm font-mono font-extrabold uppercase rounded-full shadow-lg bg-slate-950 hover:bg-slate-800 text-white border-0 gap-3 transform hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    <span>Criar Minha Loja (Teste Grátis 7 Dias)</span>
                    <ArrowRight className="h-5 w-5 text-lime-400" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* FALLBACK CARD IF NO PLANS RETURNED */
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-3xl border-2 border-slate-950 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
              <div className="bg-slate-950 text-lime-400 text-center py-3 text-xs font-mono font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md">
                <Flame className="h-4 w-4 fill-lime-400" />
                <span>PLANO COMPLETO LOJAPOD — 7 DIAS GRÁTIS</span>
              </div>

              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-space uppercase text-slate-950">Assinatura Mensal</h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">Acesso ilimitado e imediato a todos os módulos</p>
                  </div>
                  <span className="bg-lime-400 text-slate-950 border border-lime-500 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase shrink-0">
                    7 DIAS GRÁTIS
                  </span>
                </div>

                <div className="flex flex-col border-b border-slate-100 pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-extrabold font-space text-slate-950">R$ 150,00</span>
                    <span className="text-sm font-mono text-slate-500 uppercase font-bold">/ mês</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold mt-1">
                    + R$ 0,99 taxa de serviço
                  </span>
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
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-10 pt-0">
                <Button 
                  size="lg" 
                  onClick={() => onOpenCheckout("mensal")}
                  className="w-full py-5 px-6 text-sm sm:text-base font-mono font-extrabold uppercase rounded-full shadow-lg bg-slate-950 hover:bg-slate-800 text-white border-0 gap-3 transform hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <span>Criar Minha Loja (Teste Grátis 7 Dias)</span>
                  <ArrowRight className="h-5 w-5 text-lime-400" />
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
