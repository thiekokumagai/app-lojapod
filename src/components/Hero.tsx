import React from "react";
import { Button } from "@/components/ui/button";
import { SmokeVideoBackground } from "@/components/SmokeVideoBackground";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  ShoppingCart,
  Zap,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-28 border-b border-slate-200/80 bg-slate-950 text-white">
      {/* Ambient Smoke Video Background */}
      <SmokeVideoBackground opacity={0.35} />

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[450px] bg-lime-500/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-1.5 text-xs font-mono font-bold text-white shadow-lg backdrop-blur-xl text-center">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span className="tracking-widest uppercase text-[11px] text-lime-400">
              SISTEMA #1 PARA VAPES & PODS
            </span>
          </div>
        </div>

        {/* Headline Ultra Direta */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-space leading-[1.05] uppercase">
            VENDAS NO WHATSAPP <span className="text-red-500 underline decoration-lime-400 underline-offset-8">SEM COMPLICAÇÃO</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-mono max-w-2xl mx-auto">
            Catálogo por sabores e nicotina, zero taxas de venda e comprovante impresso no balcão em 2 segundos.
          </p>
        </div>

        {/* CTA Buttons Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <Button 
            size="lg" 
            onClick={() => onOpenCheckout("mensal")}
            className="w-full sm:w-auto text-sm h-12 px-8 rounded-full shadow-lg gap-2 font-mono font-extrabold bg-lime-400 hover:bg-lime-500 text-slate-950 border-0 uppercase"
          >
            <span>Criar Minha Loja (Teste Grátis 7 Dias)</span>
            <ArrowRight className="h-4 w-4 text-slate-950" />
          </Button>

          <a href="#precos" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-sm h-12 px-6 rounded-full border-2 border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white font-mono font-bold uppercase"
            >
              <span>Ver Detalhes do Plano</span>
            </Button>
          </a>
        </div>

        {/* Sub-bullets Minimalistas */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span>0% Taxas</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span>Ativação Instantânea</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            <span>Cartão Fidelidade</span>
          </div>
               {/* Visual Product & Banner Showcase (Estilo GiGi Premium) */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          <div className="bg-slate-900/90 p-4 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-lime-400 font-mono ml-2 font-bold truncate max-w-[150px] sm:max-w-none">
                  app.lojapod.com.br
                </span>
              </div>
              <span className="text-xs bg-lime-400/10 text-lime-400 font-mono font-extrabold px-3 py-1 rounded-full border border-lime-400/20 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
                SISTEMA OPERANDO 100% ONLINE
              </span>
            </div>

            {/* Generated SaaS Showcase + Live Interactive Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Realistic Smartphone Device Mockup with Floating Badges */}
              <div className="lg:col-span-5 flex justify-center items-center py-4 relative">
                
                {/* Floating Metric Badge 1 (Top Right) */}
                <div className="absolute -top-1 -right-2 sm:right-2 bg-slate-950 border border-lime-400/40 text-white p-2.5 rounded-2xl shadow-xl z-30 hidden sm:flex items-center gap-2 animate-bounce">
                  <div className="p-1.5 rounded-xl bg-lime-400 text-slate-950">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Vendas no Zap</span>
                    <span className="text-xs font-mono font-extrabold text-lime-400 block">+ 350% Recompra</span>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Bottom Left) */}
                <div className="absolute -bottom-2 -left-2 sm:left-2 bg-slate-950 border border-slate-800 text-white p-2.5 rounded-2xl shadow-xl z-30 hidden sm:flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-emerald-500 text-slate-950">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Envio Direto</span>
                    <span className="text-xs font-mono font-extrabold text-emerald-400 block">Pedido no Zap + Pix</span>
                  </div>
                </div>

                {/* Phone Device Frame */}
                <div className="relative mx-auto border-slate-800 bg-slate-950 border-[10px] sm:border-[12px] rounded-[2.5rem] sm:rounded-[3rem] h-auto max-w-[280px] sm:max-w-[310px] shadow-2xl shadow-lime-400/10 ring-1 ring-slate-800 group">
                  {/* Notch / Dynamic Island */}
                  <div className="w-[100px] sm:w-[115px] h-[16px] sm:h-[18px] bg-slate-950 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-950 border border-blue-800/40" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-white relative">
                    <img 
                      src="/images/real_system_storefront.png" 
                      alt="LojaPod no Celular" 
                      className="w-full h-auto object-cover max-h-[480px] sm:max-h-[540px] group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Home Indicator Bar */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-900/40 rounded-full z-20" />
                  </div>
                </div>
              </div>

              {/* Right Live Interactive Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Product 1 Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-md">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-500/10 text-red-400 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded border border-red-500/20">
                      ELF BAR 5000
                    </span>
                    <span className="text-[10px] bg-lime-400/10 text-lime-400 font-mono font-bold px-2 py-0.5 rounded border border-lime-400/20">
                      EM ESTOQUE
                    </span>
                  </div>
                  <div className="text-sm font-bold font-space text-white">Watermelon Ice 🍉</div>
                  <div className="text-xs font-mono text-slate-400">Puffs: 5.000 • 50mg nicotina</div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <span className="text-base font-extrabold font-space text-lime-400">R$ 90,00</span>
                    <span className="text-xs bg-lime-400 hover:bg-lime-500 text-slate-950 font-mono font-extrabold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                      + Adicionar
                    </span>
                  </div>
                </div>

                {/* Product 2 Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-md">
                  <div className="flex justify-between items-start">
                    <span className="bg-purple-500/10 text-purple-400 text-[10px] font-mono font-extrabold px-2 py-0.5 rounded border border-purple-500/20">
                      IGNITE V50
                    </span>
                    <span className="text-[10px] bg-lime-400/10 text-lime-400 font-mono font-bold px-2 py-0.5 rounded border border-lime-400/20">
                      EM ESTOQUE
                    </span>
                  </div>
                  <div className="text-sm font-bold font-space text-white">Grape Ice 🍇</div>
                  <div className="text-xs font-mono text-slate-400">Puffs: 5.000 • 50mg nicotina</div>
                  <div className="flex justify-between items-center pt-2 border-slate-800 border-t">
                    <span className="text-base font-extrabold font-space text-lime-400">R$ 110,00</span>
                    <span className="text-xs bg-lime-400 hover:bg-lime-500 text-slate-950 font-mono font-extrabold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                      + Adicionar
                    </span>
                  </div>
                </div>

                {/* Cart Summary Full Row (WhatsApp Output) */}
                <div className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-lime-400" />
                      <span className="text-sm font-space font-extrabold text-white uppercase">
                        Carrinho WhatsApp Formatado
                      </span>
                    </span>
                    <span className="bg-lime-400/10 text-lime-400 text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold border border-lime-400/20">
                      2 itens selecionados
                    </span>
                  </div>
                  <div className="text-xs font-mono space-y-1.5 text-slate-300">
                    <div className="flex justify-between"><span>1x Elf Bar BC5000 Watermelon Ice</span><span className="font-bold text-white">R$ 90,00</span></div>
                    <div className="flex justify-between"><span>1x Ignite V50 Grape Ice</span><span className="font-bold text-white">R$ 110,00</span></div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-slate-400 uppercase">Total com Frete Pix:</span>
                    <span className="text-base font-extrabold font-mono text-lime-400">R$ 200,00</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>       </div>
      </div>
    </section>
  );
};
