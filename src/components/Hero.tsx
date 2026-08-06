import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  ShoppingCart
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-28 border-b border-white/10 bg-grid-pattern-dark">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[450px] bg-red-600/20 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none animate-pulse-slow" />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/70 px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold text-red-300 shadow-2xl backdrop-blur-xl text-center max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="tracking-wide uppercase truncate">SISTEMA N#1 PARA VAPES & PODS NO BRASIL</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-space leading-[1.12] sm:leading-[1.06]">
            Multiplique as vendas da sua loja de pods em{" "}
            <span className="text-gradient-fire drop-shadow-[0_0_35px_rgba(239,68,68,0.5)]">
              até 350% no WhatsApp
            </span>
          </h1>

          <p className="text-sm sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            Elimine a confusão das mensagens manuais. Ofereça catálogo por sabores e nicotina, receba carrinhos prontos e imprima comprovantes térmicos no balcão.
          </p>
        </div>

        {/* CTA Buttons Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-2">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={() => onOpenCheckout("mensal")}
            className="w-full sm:w-auto text-sm sm:text-lg h-14 sm:h-16 px-6 sm:px-10 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.4)] gap-2.5 font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white border border-red-400/40"
          >
            <Flame className="h-5 w-5 fill-white text-white shrink-0" />
            <span>Assinar Plano Mensal — R$ 149,99/mês</span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>

          <a href="#calculadora" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-xs sm:text-base h-12 sm:h-16 px-6 sm:px-8 rounded-2xl border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md gap-2"
            >
              <span>Simular Meu Lucro Adicional</span>
            </Button>
          </a>
        </div>

        {/* Guarantees */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-zinc-300">
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md text-[11px] sm:text-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Ativação Instantânea via Pix</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md text-[11px] sm:text-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Zero Taxas por Venda</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md text-[11px] sm:text-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Cancele quando quiser</span>
          </div>
        </div>

        {/* Visual Product & Order Demo Container */}
        <div className="mt-12 sm:mt-16 relative max-w-4xl mx-auto">
          <div className="glass-card-cro p-4 sm:p-6 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] sm:text-xs text-zinc-400 font-mono ml-1 truncate max-w-[140px] sm:max-w-none">
                  app.lojapod.com.br
                </span>
              </div>
              <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-400 font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                ● VENDAS 100% ONLINE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {/* Product 1 */}
              <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-3.5 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">ELF BAR 5000</span>
                  <span className="text-[10px] text-emerald-400 font-bold">Estoque OK</span>
                </div>
                <div className="text-xs sm:text-sm font-bold font-space text-white">Watermelon Ice (5%)</div>
                <div className="text-[11px] text-zinc-400">Puffs: 5.000 • 50mg nicotina</div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-sm font-extrabold text-white">R$ 90,00</span>
                  <span className="text-[10px] bg-red-600 text-white font-bold px-2.5 py-1 rounded-lg shadow-sm">+ Adicionar</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-3.5 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">IGNITE V50</span>
                  <span className="text-[10px] text-emerald-400 font-bold">Estoque OK</span>
                </div>
                <div className="text-xs sm:text-sm font-bold font-space text-white">Grape Ice (5%)</div>
                <div className="text-[11px] text-zinc-400">Puffs: 5.000 • 50mg nicotina</div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-sm font-extrabold text-white">R$ 110,00</span>
                  <span className="text-[10px] bg-red-600 text-white font-bold px-2.5 py-1 rounded-lg shadow-sm">+ Adicionar</span>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="bg-gradient-to-br from-red-950/70 via-zinc-950 to-zinc-900 border border-red-500/40 rounded-2xl p-3.5 space-y-3 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-white border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5">
                      <ShoppingCart className="h-3.5 w-3.5 text-red-400" />
                      <span>Carrinho WhatsApp</span>
                    </span>
                    <span className="text-red-400 font-bold text-[11px]">2 itens</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 space-y-1 mt-2">
                    <div className="flex justify-between"><span>1x Elf Bar BC5000</span><span>R$ 90,00</span></div>
                    <div className="flex justify-between"><span>1x Ignite V50</span><span>R$ 110,00</span></div>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-extrabold text-white">
                    <span>Total Pix:</span>
                    <span className="text-emerald-400 text-xs sm:text-sm font-mono">R$ 200,00</span>
                  </div>
                  <div className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1 shadow-lg">
                    <span>Enviar para WhatsApp</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
