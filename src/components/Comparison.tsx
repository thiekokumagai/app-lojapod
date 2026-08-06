import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Sparkles, Zap, Flame } from "lucide-react";

export const Comparison: React.FC = () => {
  const comparisonData = [
    {
      feature: "Frete Dinâmico & Rota Motoboy",
      without: "Prejuízo com frete fixo ou cálculo manual lento",
      with: "Cálculo automático por KM + Rota GPS 1-Click",
    },
    {
      feature: "Vendas de Balcão Presencial",
      without: "Caixa separado com erros de estoque",
      with: "PDV Integrado para lançamento manual no balcão",
    },
    {
      feature: "Tempo de Atendimento por Pedido",
      without: "5 a 12 minutos trocando mensagens manuais",
      with: "30 segundos com carrinho pronto no WhatsApp",
    },
    {
      feature: "Gestão por Sabores & Nicotina",
      without: "Anotações em papel ou planilha desatualizada",
      with: "Estoque automático por sabor, nicotina e puffs",
    },
    {
      feature: "Emissão de Comprovante de Balcão",
      without: "Digitação manual repetitiva no caixa",
      with: "Impressão térmica em 1 clique (58mm/80mm)",
    },
    {
      feature: "Risco de Vender Produto Esgotado",
      without: "Alto (provoca atrito e insatisfação do cliente)",
      with: "Zero (alerta de estoque crítico no admin)",
    },
    {
      feature: "Custo por Venda Efetuada",
      without: "Taxas altas de iFood/Marketplaces (12% a 25%)",
      with: "R$ 0,00 de taxa (100% do lucro é seu)",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-white/10 relative bg-zinc-950/60">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-3.5 w-3.5 fill-current" />
            <span>Comparativo Direto de Desempenho</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white leading-tight">
            Por que continuar perdendo tempo e vendas no <span className="text-gradient-fire">manual?</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-lg">
            Veja a diferença brutal na rotina operacional da sua loja de pods.
          </p>
        </div>

        {/* Desktop Table Header (hidden on mobile) */}
        <div className="glass-card-cro rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          <div className="hidden sm:grid grid-cols-12 bg-zinc-900/90 border-b border-white/10 p-5 text-xs font-extrabold font-space tracking-wider uppercase text-zinc-400">
            <div className="col-span-4">RECURSO / PROCESSO</div>
            <div className="col-span-4 text-red-400 flex items-center gap-1.5">
              <XCircle className="h-4 w-4" />
              <span>SEM O LOJAPOD</span>
            </div>
            <div className="col-span-4 text-emerald-400 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="h-4 w-4" />
              <span>COM O LOJAPOD PRO</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10 sm:divide-white/5">
            {comparisonData.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 hover:bg-white/[0.02] transition-colors">
                {/* Desktop 3-column Layout */}
                <div className="hidden sm:grid grid-cols-12 text-sm items-center">
                  <div className="col-span-4 font-bold font-space text-white">
                    {item.feature}
                  </div>
                  <div className="col-span-4 text-zinc-400 text-xs sm:text-sm flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{item.without}</span>
                  </div>
                  <div className="col-span-4 text-emerald-300 text-xs sm:text-sm font-semibold flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.with}</span>
                  </div>
                </div>

                {/* Mobile Card Layout */}
                <div className="sm:hidden space-y-2.5">
                  <div className="font-extrabold font-space text-white text-sm border-b border-white/10 pb-1.5 flex justify-between items-center">
                    <span>{item.feature}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">#0{idx + 1}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/20 text-zinc-300 flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-red-400 font-bold uppercase">Sem LojaPod:</div>
                        <div>{item.without}</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 font-medium flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-emerald-400 font-extrabold uppercase">Com LojaPod Pro:</div>
                        <div>{item.with}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
