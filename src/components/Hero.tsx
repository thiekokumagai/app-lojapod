import React, { useState } from "react";
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
  Volume2,
  VolumeX
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 border-b border-slate-200/80 bg-gradient-to-b from-white via-rose-50/40 to-slate-50">
      {/* Light Mesh Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-rose-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-300/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Floating Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-200 bg-white/90 px-4 py-2 text-xs font-bold text-rose-700 shadow-md shadow-rose-500/5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600" />
            </span>
            <span className="tracking-wide uppercase text-[11px]">Sistema N#1 para Lojas de Pods & Vapes</span>
            <span className="bg-rose-600 text-white px-2 py-0.5 rounded-full font-extrabold text-[10px]">EDITION 2026</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-space leading-[1.08]">
            Venda até 10x mais pods com a{" "}
            <span className="text-gradient-rose drop-shadow-sm">
              plataforma mais moderna
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Catálogo interativo por sabores e nicotina, finalização em segundos no WhatsApp e impressão térmica no balcão em 1 clique.
          </p>
        </div>

        {/* CTA Buttons Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={() => onOpenCheckout("mensal")}
            className="w-full sm:w-auto text-lg h-16 px-10 rounded-2xl shadow-xl shadow-rose-500/25 gap-3 font-extrabold hover:scale-105 transition-all duration-300 bg-gradient-to-r from-rose-600 to-rose-500 text-white border-0"
          >
            <Flame className="h-6 w-6 fill-white text-white" />
            <span>Assinar Plano Mensal — R$ 149,99/mês</span>
            <ArrowRight className="h-5 w-5" />
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto text-base h-16 px-8 rounded-2xl border-rose-300/80 bg-white hover:bg-rose-50 text-rose-700 font-bold gap-2.5 shadow-sm"
          >
            <div className="h-7 w-7 rounded-full bg-rose-600 text-white flex items-center justify-center animate-pulse-ring">
              <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
            </div>
            <span>Assistir Vídeo Demonstrativo</span>
          </Button>
        </div>

        {/* Guarantees */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Ativação Imediata via Pix</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Sem Taxa sobre Vendas</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Cancele quando quiser</span>
          </div>
        </div>

        {/* Showcase Frame */}
        <div id="video-demo" className="mt-14 relative max-w-4xl mx-auto">
          <div className="glass-card-light p-3 sm:p-5 rounded-3xl border border-rose-200/80 shadow-2xl relative overflow-hidden group">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center group shadow-inner">
              <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-rose-900 via-slate-900 to-rose-950 animate-pulse-slow" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                    <span>DEMONSTRAÇÃO EM VÍDEO HD (LOJAPOD)</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center my-auto cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                  <div className="h-20 w-20 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl shadow-rose-600/60 group-hover:scale-110 transition-all duration-300 animate-pulse-ring">
                    <Play className="h-9 w-9 fill-current ml-1" />
                  </div>
                  <span className="text-sm font-bold font-space text-white mt-4 bg-black/70 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                    Clique para ver o sistema em ação (1 min)
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300 font-mono">
                    <span>Vitrine Virtual + Admin + Impressão Térmica</span>
                    <span>01:30 HD</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-3/4 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-3xl border-0 bg-slate-950 shadow-2xl">
          <DialogHeader className="p-4 bg-slate-900 text-white flex flex-row items-center justify-between border-b border-slate-800">
            <DialogTitle className="text-base font-bold font-space flex items-center gap-2">
              <Play className="h-4 w-4 text-rose-500 fill-rose-500" />
              <span>Demonstração Completa do LojaPod (Vídeo Explicativo)</span>
            </DialogTitle>
          </DialogHeader>

          <div className="relative aspect-video bg-black flex items-center justify-center p-4">
            <div className="text-center space-y-4 max-w-md p-6 bg-slate-900/90 border border-slate-800 rounded-2xl text-white">
              <div className="h-16 w-16 rounded-full bg-rose-600/20 border border-rose-500 text-rose-500 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold font-space">Apresentação Interativa do LojaPod</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Veja como o comprador faz o pedido no Front, como você recebe no Admin e como a impressora térmica emite o comprovante automaticamente.
              </p>
              <Button 
                variant="gradient" 
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenCheckout("mensal");
                }}
                className="w-full py-5 rounded-xl font-extrabold bg-gradient-to-r from-rose-600 to-rose-500"
              >
                Garantir Minha Assinatura (R$ 149,99/mês)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
