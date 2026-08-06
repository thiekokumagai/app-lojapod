import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Clock, DollarSign, Sparkles, TrendingUp } from "lucide-react";

interface RoiCalculatorProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenCheckout }) => {
  const [dailyOrders, setDailyOrders] = useState<number>(20);
  const [ticketAverage, setTicketAverage] = useState<number>(110);

  // Math estimations
  const monthlyRevenue = dailyOrders * ticketAverage * 30;
  const estimatedGainedRevenue = Math.round(monthlyRevenue * 0.25); // +25% extra conversion
  const hoursSavedPerMonth = Math.round((dailyOrders * 8 * 30) / 60); // 8 min saved per order -> hours

  return (
    <section id="calculadora" className="py-20 sm:py-24 border-b border-slate-200/80 relative scroll-mt-10 bg-slate-50/70">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Calculator className="h-3.5 w-3.5" />
            <span>Calculadora Interativa de Lucro</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Calcule quanto sua loja vai faturar a mais com o <span className="text-gradient-emerald">LojaPod</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Ajuste a quantidade de pedidos por dia e veja o impacto financeiro direto no seu bolso.
          </p>
        </div>

        <div className="glass-card-cro p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch shadow-xl relative bg-white">
          {/* Controls Left */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="text-slate-800">Pedidos Atendidos por Dia:</span>
                  <span className="text-emerald-700 font-extrabold text-base font-mono bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg shrink-0">
                    {dailyOrders} pedidos/dia
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={dailyOrders}
                  onChange={(e) => setDailyOrders(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="text-slate-800">Ticket Médio por Pedido (R$):</span>
                  <span className="text-emerald-700 font-extrabold text-base font-mono bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg shrink-0">
                    R$ {ticketAverage},00
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={ticketAverage}
                  onChange={(e) => setTicketAverage(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-900">💡 Como calculamos?</div>
              <div>Calculado com base na redução de atrito no WhatsApp (+25% de conversão) e economia de 8 minutos por atendimento.</div>
            </div>
          </div>

          {/* Results Right - Vibrant Emerald High Contrast */}
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white p-6 sm:p-8 rounded-2xl space-y-6 text-center shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-xs text-emerald-100 font-bold uppercase tracking-wider">FATURAMENTO ADICIONAL ESTIMADO</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-space text-white mt-2 whitespace-nowrap drop-shadow-sm">
                + R$ {estimatedGainedRevenue.toLocaleString("pt-BR")},00
              </div>
              <div className="text-xs text-emerald-100 mt-1 font-medium">por mês a mais no seu caixa</div>
            </div>

            <div className="pt-4 border-t border-emerald-500/50 grid grid-cols-2 gap-3 text-left">
              <div>
                <div className="text-[11px] text-emerald-100 font-semibold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-200 shrink-0" />
                  <span className="truncate">Tempo Economizado</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-space text-white mt-1">
                  ~{hoursSavedPerMonth}h / mês
                </div>
              </div>
              <div>
                <div className="text-[11px] text-emerald-100 font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-200 shrink-0" />
                  <span className="truncate">Retorno Investimento</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-space text-emerald-200 mt-1">
                  +{Math.round((estimatedGainedRevenue / 149.99) * 100)}% ROI
                </div>
              </div>
            </div>

            <Button 
              variant="gradient"
              onClick={() => onOpenCheckout("mensal")}
              className="w-full py-4 sm:py-5 h-auto min-h-[3.25rem] whitespace-normal font-extrabold text-sm sm:text-base rounded-xl bg-white text-emerald-800 hover:bg-slate-100 shadow-lg shadow-emerald-900/30 gap-2 border-0 transition-transform hover:scale-[1.02]"
            >
              <span className="leading-snug">Quero Faturar Esse Valor Adicional</span>
              <ArrowRight className="h-5 w-5 shrink-0 text-emerald-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
