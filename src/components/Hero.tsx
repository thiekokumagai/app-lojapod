import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Play, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  ShoppingCart, 
  Printer, 
  Smartphone,
  Star,
  ShieldCheck
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36 border-b border-white/10 bg-grid-pattern-dark">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-950/60 px-4.5 py-2 text-xs font-extrabold text-red-300 shadow-2xl shadow-red-950/80 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="tracking-wide uppercase text-[11px]">PLATAFORMA N#1 EM VENDAS DE PODS & VAPES NO BRASIL</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-space leading-[1.06]">
            Multiplique as vendas da sua loja de pods em{" "}
            <span className="text-gradient-fire drop-shadow-[0_0_40px_rgba(239,68,68,0.5)]">
              até 350% no WhatsApp
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Elimine a confusão das mensagens manuais. Ofereça catálogo por sabores e nicotina, receba carrinhos prontos e imprima comprovantes térmicos no balcão.
          </p>
        </div>

        {/* CTA Buttons Box */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={() => onOpenCheckout("mensal")}
            className="w-full sm:w-auto text-lg h-16 px-10 rounded-2xl shadow-[0_0_45px_rgba(239,68,68,0.5)] gap-3 font-extrabold hover:scale-105 transition-all duration-300 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white border border-red-400/40"
          >
            <Flame className="h-6 w-6 fill-white text-white" />
            <span>Assinar Plano Mensal — R$ 149,99/mês</span>
            <ArrowRight className="h-5 w-5" />
          </Button>

          <a href="#calculadora" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base h-16 px-8 rounded-2xl border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md gap-2"
            >
              <span>Simular Meu Lucro Adicional</span>
            </Button>
          </a>
        </div>

        {/* Guarantees */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-semibold text-zinc-300">
          <div className="flex items-center gap-2 bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Ativação Instantânea via Pix</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Zero Taxas por Venda</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-md">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Cancele quando quiser</span>
          </div>
        </div>

        {/* Visual Product & Order Demo Container */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="glass-card-cro p-6 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-zinc-400 font-mono ml-2">app.lojapod.com.br/demonstracao</span>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 font-extrabold px-3 py-1 rounded-full border border-emerald-500/30">
                ● VENDAS EM TEMPO REAL: 100% ONLINE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Product 1 */}
              <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">ELF BAR 5000</span>
                  <span className="text-xs text-emerald-400 font-bold">Estoque OK</span>
                </div>
                <div className="text-sm font-bold font-space text-white">Watermelon Ice (5%)</div>
                <div className="text-xs text-zinc-400">Puffs: 5.000 • 50mg nicotina</div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-base font-extrabold text-white">R$ 90,00</span>
                  <span className="text-xs bg-red-600 text-white font-bold px-3 py-1 rounded-lg shadow-sm">+ Adicionar</span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">IGNITE V50</span>
                  <span className="text-xs text-emerald-400 font-bold">Estoque OK</span>
                </div>
                <div className="text-sm font-bold font-space text-white">Grape Ice (5%)</div>
                <div className="text-xs text-zinc-400">Puffs: 5.000 • 50mg nicotina</div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-base font-extrabold text-white">R$ 110,00</span>
                  <span className="text-xs bg-red-600 text-white font-bold px-3 py-1 rounded-lg shadow-sm">+ Adicionar</span>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="bg-gradient-to-br from-red-950/70 via-zinc-950 to-zinc-900 border border-red-500/40 rounded-2xl p-4 space-y-3 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-white border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5">
                      <ShoppingCart className="h-4 w-4 text-red-400" />
                      <span>Carrinho WhatsApp</span>
                    </span>
                    <span className="text-red-400 font-bold">2 itens</span>
                  </div>
                  <div className="text-xs text-zinc-300 space-y-1.5 mt-3">
                    <div className="flex justify-between"><span>1x Elf Bar BC5000</span><span>R$ 90,00</span></div>
                    <div className="flex justify-between"><span>1x Ignite V50</span><span>R$ 110,00</span></div>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-extrabold text-white">
                    <span>Total com Pix:</span>
                    <span className="text-emerald-400 text-sm font-mono">R$ 200,00</span>
                  </div>
                  <div className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/60">
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
