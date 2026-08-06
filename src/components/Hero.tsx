import React from "react";
import { Button } from "@/components/ui/button";
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
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-28 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[450px] bg-red-500/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-extrabold text-red-600 shadow-sm backdrop-blur-xl text-center max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="tracking-wide uppercase truncate">SISTEMA N#1 PARA VAPES & PODS NO BRASIL</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-space leading-[1.12] sm:leading-[1.06]">
            Multiplique as vendas da sua loja de pods em{" "}
            <span className="text-gradient-fire drop-shadow-sm">
              até 350% no WhatsApp
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            Elimine a confusão das mensagens manuais. Ofereça catálogo por sabores e nicotina, receba carrinhos prontos e imprima comprovantes térmicos no balcão.
          </p>
        </div>

        {/* CTA Buttons Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-2">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={() => onOpenCheckout("mensal")}
            className="w-full sm:w-auto text-sm sm:text-lg h-auto min-h-[3.5rem] py-3.5 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-xl shadow-red-500/25 gap-2 sm:gap-2.5 font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white border-0 whitespace-normal text-center hover:scale-[1.02] transition-all"
          >
            <Flame className="h-5 w-5 fill-white text-white shrink-0" />
            <span className="leading-tight">Assinar Plano Mensal — R$ 149,99/mês</span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>

          <a href="#calculadora" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-xs sm:text-base h-auto min-h-[3rem] py-3 sm:py-4 px-6 sm:px-8 rounded-2xl border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold shadow-sm gap-2 whitespace-normal text-center"
            >
              <span>Simular Meu Lucro Adicional</span>
            </Button>
          </a>
        </div>

        {/* Guarantees */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm text-xs text-slate-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Ativação Instantânea via Pix</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm text-xs text-slate-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Zero Taxas por Venda</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm text-xs text-slate-700">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Cancele quando quiser</span>
          </div>
        </div>

        {/* Visual Product & Banner Showcase */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          <div className="glass-card-cro p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500 font-mono ml-2 font-bold truncate max-w-[150px] sm:max-w-none">
                  app.lojapod.com.br
                </span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                VENDAS 100% ONLINE
              </span>
            </div>

            {/* Generated SaaS Banner Showcase + Live Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Realistic Smartphone Device Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center py-2">
                <div className="relative mx-auto border-slate-900 bg-slate-900 border-[10px] sm:border-[12px] rounded-[2.5rem] sm:rounded-[3rem] h-auto max-w-[280px] sm:max-w-[310px] shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900/20 group">
                  {/* Notch / Dynamic Island */}
                  <div className="w-[100px] sm:w-[115px] h-[16px] sm:h-[18px] bg-slate-950 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-950 border border-blue-800/40" />
                  </div>

                  {/* Side Buttons */}
                  <div className="h-[28px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[60px] rounded-l-lg" />
                  <div className="h-[40px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[105px] rounded-l-lg" />
                  <div className="h-[40px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[155px] rounded-l-lg" />
                  <div className="h-[55px] w-[3px] bg-slate-800 absolute -right-[13px] sm:-right-[15px] top-[120px] rounded-r-lg" />

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
                {/* Product 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5 shadow-sm">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-0.5 rounded border border-red-200">ELF BAR 5000</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">Estoque OK</span>
                  </div>
                  <div className="text-sm font-bold font-space text-slate-900">Watermelon Ice (5%)</div>
                  <div className="text-xs text-slate-500">Puffs: 5.000 • 50mg nicotina</div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                    <span className="text-base font-extrabold text-slate-900">R$ 90,00</span>
                    <span className="text-xs bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-red-700 transition-colors">+ Adicionar</span>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5 shadow-sm">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-0.5 rounded border border-red-200">IGNITE V50</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">Estoque OK</span>
                  </div>
                  <div className="text-sm font-bold font-space text-slate-900">Grape Ice (5%)</div>
                  <div className="text-xs text-slate-500">Puffs: 5.000 • 50mg nicotina</div>
                  <div className="flex justify-between items-center pt-2 border-slate-200 border-t">
                    <span className="text-base font-extrabold text-slate-900">R$ 110,00</span>
                    <span className="text-xs bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-red-700 transition-colors">+ Adicionar</span>
                  </div>
                </div>

                {/* Cart Summary Full Row */}
                <div className="sm:col-span-2 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-4 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-white/20 pb-2">
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-white" />
                      <span className="text-sm font-space font-extrabold">Carrinho WhatsApp Formatado</span>
                    </span>
                    <span className="bg-white/20 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">2 itens</span>
                  </div>
                  <div className="text-xs space-y-1 font-medium">
                    <div className="flex justify-between"><span>1x Elf Bar BC5000 Watermelon</span><span className="font-bold">R$ 90,00</span></div>
                    <div className="flex justify-between"><span>1x Ignite V50 Grape Ice</span><span className="font-bold">R$ 110,00</span></div>
                  </div>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-100">Total com Frete Pix:</span>
                    <span className="text-base font-extrabold font-mono text-emerald-300">R$ 200,00</span>
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
