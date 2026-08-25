import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Headphones, Zap } from "lucide-react";
import { fetchPublicPlans, PublicPlan } from "@/lib/api";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

function formatCurrency(val: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
}

// Helper to extract feature bullets from plan description or default list
function getPlanFeatures(plan: PublicPlan, isPopular: boolean): string[] {
  let baseFeatures: string[] = [];

  if (plan.description && plan.description.includes(";")) {
    baseFeatures = plan.description.split(";").map((s) => s.trim()).filter(Boolean);
  } else if (plan.description && plan.description.includes("\n")) {
    baseFeatures = plan.description.split("\n").map((s) => s.trim()).filter(Boolean);
  } else {
    const nameLower = plan.name.toLowerCase();

    if (nameLower.includes("essencial")) {
      baseFeatures = [
        "Até 3 usuários",
        "Cadastro de produtos, sabores e teores",
        "Controle de estoque simples",
        "Link para Bio do Instagram",
        "PDV de Balcão e Pedidos no WhatsApp",
      ];
    } else if (isPopular) {
      baseFeatures = [
        "Tudo do plano Essencial",
        "Suporte inicial por humano no WhatsApp",
        "Financeiro do Motoboy & Rotas no Mapa",
        "Módulo Contas a Pagar & Despesas",
        "Comprovantes & Impressão automática",
        "Relatórios de fluxo de caixa e lucros",
      ];
    } else {
      baseFeatures = [
        "Módulo de Investimento & Aportes",
        "Link de Bio do Instagram com Alta Conversão",
        "Até 10 usuários com permissões avançadas",
        "Comprovantes & Impressão automática",
        "Relatórios de métricas e ROI avançados",
      ];
    }
  }

  // GUARANTEE: If NOT popular, filter out any human support text!
  if (!isPopular) {
    baseFeatures = baseFeatures.filter((f) => !f.toLowerCase().includes("humano"));
  } else {
    // GUARANTEE: If IS popular, ensure "Suporte inicial por humano no WhatsApp" is present!
    if (!baseFeatures.some((f) => f.toLowerCase().includes("humano"))) {
      baseFeatures.splice(1, 0, "Suporte inicial por humano no WhatsApp");
    }
  }

  return baseFeatures;
}

// Fallback plans if API returns empty array or is initializing
const FALLBACK_PLANS: PublicPlan[] = [
  {
    id: "plan-essencial",
    name: "Essencial",
    description: "Comece com controle total do essencial, sem complicação.",
    price: 99.90,
    checkoutType: "RECURRING_SUBSCRIPTION",
  },
  {
    id: "plan-profissional",
    name: "Profissional",
    description: "O plano ideal para quem precisa de mais controle e decisões baseadas em dados.",
    price: 139.90,
    checkoutType: "RECURRING_SUBSCRIPTION",
  },
  {
    id: "plan-avancado",
    name: "Avançado",
    description: "Gestão avançada com automações e inteligência para vender mais.",
    price: 169.90,
    checkoutType: "RECURRING_SUBSCRIPTION",
  },
];

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  const [plans, setPlans] = useState<PublicPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlans() {
      setLoading(true);
      const data = await fetchPublicPlans();
      if (data && data.length > 0) {
        setPlans(data);
      } else {
        setPlans(FALLBACK_PLANS);
      }
      setLoading(false);
    }
    void loadPlans();
  }, []);

  const displayPlans = plans.length > 0 ? plans : FALLBACK_PLANS;

  return (
    <section id="precos" className="py-20 bg-white border-b border-slate-100">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#e6f7ef] text-[#27a768] font-bold px-3 py-1 rounded-full text-xs">
            Planos transparentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Escolha o plano ideal para a sua loja
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Experimente grátis por 7 dias. Sem compromisso e sem contratos engessados.
          </p>
        </div>

        {/* DYNAMIC API PLAN CARDS */}
        {loading ? (
          <div className="py-12 flex items-center justify-center text-slate-500 gap-2">
            <Loader2 className="h-6 w-6 animate-spin text-[#27a768]" />
            <span className="font-mono text-xs">Carregando planos da API...</span>
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${displayPlans.length === 2 ? 'md:grid-cols-2 max-w-4xl' : displayPlans.length >= 3 ? 'md:grid-cols-3' : 'max-w-md'} gap-8 items-stretch mx-auto`}>
            {displayPlans.map((plan, idx) => {
              const isPopular = idx === 1 || plan.name.toLowerCase().includes("profissional") || plan.name.toLowerCase().includes("popular") || plan.name.toLowerCase().includes("suporte de instalação");
              const features = getPlanFeatures(plan, isPopular);
              const isSingleProduct = plan.checkoutType === 'SINGLE_PRODUCT';
              const recurringPrice = Number(plan.price) / 2;

              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all ${
                    isPopular
                      ? "border-2 border-[#27a768] shadow-xl transform md:-translate-y-2"
                      : "border border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Top Popular Header Banner */}
                  {isPopular && (
                    <div className="bg-[#218f59] text-white text-center py-2 text-xs font-bold uppercase tracking-wider -mx-8 -mt-8 mb-6 flex items-center justify-center gap-1.5">
                      <span>Mais popular</span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-extrabold text-[#27a768]">{plan.name}</h3>
                      {isPopular && (
                        <span className="text-[10px] bg-[#e6f7ef] text-[#27a768] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Headphones className="h-3 w-3" />
                          Suporte Humano
                        </span>
                      )}
                    </div>

                    {plan.description && (
                      <p className="text-xs text-slate-500 mt-2 min-h-[32px]">{plan.description}</p>
                    )}
                    
                    <div className="mt-6 flex flex-col border-b border-slate-100 pb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-slate-900">{formatCurrency(Number(plan.price))}</span>
                        <span className="text-xs font-semibold text-slate-500">
                          {isSingleProduct ? ' único' : ' p/mês'}
                        </span>
                      </div>

                      {/* Highlight: Subsequentes mensalidades por metade do valor */}
                      {isSingleProduct ? (
                        <div className="mt-3 text-xs font-bold text-[#218f59] bg-[#e6f7ef] p-2.5 rounded-xl border border-emerald-200/80 flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5 fill-[#27a768] shrink-0" />
                          <span>Depois as mensalidades serão metade desse valor ({formatCurrency(recurringPrice)}/mês)</span>
                        </div>
                      ) : (
                        <div className="mt-2 text-xs font-medium text-slate-400">
                          Sem carência • Cancele quando quiser
                        </div>
                      )}
                    </div>

                    <div className="mt-6 space-y-3.5">
                      <div className="text-xs font-bold text-slate-700">O plano inclui:</div>
                      <ul className="space-y-3 text-xs text-slate-600">
                        {features.map((feat, i) => {
                          const isHumanSupport = feat.toLowerCase().includes("humano");
                          return (
                            <li key={i} className={`flex items-center gap-2.5 ${isHumanSupport ? 'font-bold text-slate-900' : ''}`}>
                              <div className="w-4 h-4 rounded-full bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </div>
                              <span>
                                {isHumanSupport ? (
                                  <strong className="text-[#27a768] font-bold">{feat}</strong>
                                ) : (
                                  feat
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={() => onOpenCheckout("mensal")}
                      className={`w-full font-bold py-3 rounded-xl cursor-pointer ${
                        isPopular
                          ? "bg-[#27a768] hover:bg-[#218f59] text-white border-0 shadow-sm"
                          : "bg-white hover:bg-[#e6f7ef] text-[#27a768] border border-[#27a768]"
                      }`}
                    >
                      Começar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default Pricing;
