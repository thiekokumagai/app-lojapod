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
    <section id="calculadora" className="py-24 border-b border-white/10 relative scroll-mt-10">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="h-3.5 w-3.5" />
            <span>Calculadora Interativa de Lucro</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white leading-tight">
            Calcule quanto sua loja vai faturar a mais com o <span className="text-gradient-emerald">LojaPod</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg">
            Ajuste a quantidade de pedidos por dia e veja o impacto financeiro direto no seu bolso.
          </p>
        </div>

        <div className="glass-card-cro p-8 md:p-10 rounded-3xl border border-emerald-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          {/* Controls Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>Pedidos Atendidos por Dia:</span>
                <span className="text-emerald-400 font-extrabold text-lg font-mono bg-emerald-500/20 border border-emerald-500/30 px-3 py-0.5 rounded-lg">
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
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <span>Ticket Médio por Pedido (R$):</span>
                <span className="text-emerald-400 font-extrabold text-lg font-mono bg-emerald-500/20 border border-emerald-500/30 px-3 py-0.5 rounded-lg">
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
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="p-4 bg-zinc-900/80 rounded-2xl border border-white/10 text-xs text-zinc-400 space-y-1">
              <div className="font-bold text-white">💡 Como calculamos?</div>
              <div>Calculado com base na redução de atrito no WhatsApp (+25% de conversão) e economia de 8 minutos por atendimento.</div>
            </div>
          </div>

          {/* Results Right */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950/60 to-zinc-900 border border-emerald-500/40 p-8 rounded-2xl space-y-6 text-center">
            <div>
              <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">FATURAMENTO ADICIONAL ESTIMADO</div>
              <div className="text-4xl sm:text-5xl font-extrabold font-space text-emerald-400 mt-2">
                + R$ {estimatedGainedRevenue.toLocaleString("pt-BR")},00
              </div>
              <div className="text-xs text-zinc-400 mt-1">por mês a mais no seu caixa</div>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
              <div>
                <div className="text-[11px] text-zinc-400 font-semibold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Tempo Economizado</span>
                </div>
                <div className="text-xl font-bold font-space text-white mt-1">
                  ~{hoursSavedPerMonth}h / mês
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Retorno do Investimento</span>
                </div>
                <div className="text-xl font-bold font-space text-emerald-400 mt-1">
                  +{Math.round((estimatedGainedRevenue / 149.99) * 100)}% ROI
                </div>
              </div>
            </div>

            <Button 
              variant="gradient"
              onClick={() => onOpenCheckout("mensal")}
              className="w-full py-6 font-extrabold text-base rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-950/60 gap-2 border-0"
            >
              <span>Quero Faturar Esse Valor Adicional</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
