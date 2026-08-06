import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Boxes, 
  Smartphone, 
  Printer, 
  Percent, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Flame,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Monitor,
  MapPin,
  Navigation,
  Compass
} from "lucide-react";

interface FeaturesProps {
  onOpenCheckout?: (plan: "mensal" | "anual") => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const featuresList = [
    {
      id: "rotas",
      category: "logistica",
      icon: <MapPin className="h-7 w-7 text-red-400" />,
      title: "Mapa & Rotas Otimizadas para Motoboy",
      description: "Gere em 1 clique o mapa de entrega otimizado com a rota exata no GPS/Google Maps para o seu motoboy fazer entregas rápidas com máxima precisão.",
      badge: "LOGÍSTICA MOTOBOY",
      impactMetric: "-50% de Tempo nas Entregas",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-300">🗺️ Rota GPS Motoboy</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">
            ROTA 1-CLICK MAPS
          </span>
        </div>
      )
    },
    {
      id: "frete-dinamico",
      category: "logistica",
      icon: <Navigation className="h-7 w-7 text-red-400" />,
      title: "Cálculo Dinâmico de Frete por Distância (KM)",
      description: "O cliente digita o endereço na vitrine e o sistema calcula automaticamente o valor do frete por raio de KM até a loja em tempo real.",
      badge: "FRETE POR DISTÂNCIA",
      impactMetric: "Cálculo Automático por KM",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-300">📍 Distância: 4.2 KM</span>
          <span className="text-amber-400 font-bold">FRETE: R$ 12,00</span>
        </div>
      )
    },
    {
      id: "pdv",
      category: "pdv",
      icon: <Monitor className="h-7 w-7 text-red-400" />,
      title: "Sistema PDV de Balcão (Pedidos Manuais)",
      description: "Registre vendas presenciais de balcão e lance pedidos manuais em segundos direto no caixa com baixa automática de estoque e emissão de comprovante.",
      badge: "PDV PRESENCIAL & CAIXA",
      impactMetric: "Balcão & WhatsApp Unificados",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-300">🖥️ Venda Balcão #1052</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">
            BAIXA NO ESTOQUE OK
          </span>
        </div>
      )
    },
    {
      id: "estoque",
      category: "estoque",
      icon: <Boxes className="h-7 w-7 text-red-400" />,
      title: "Estoque de Sabores & Nicotina",
      description: "Controle cirúrgico de estoque por puffs (5.000, 10.000+), mg de nicotina (2%, 5%) e variação exata de sabores de juices e pods.",
      badge: "ESPECIALIZADO VAPES",
      impactMetric: "+100% de Precisão no Estoque",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1.5 font-mono text-[11px]">
          <div className="flex justify-between text-zinc-300">
            <span>Elf Bar (Watermelon Ice)</span>
            <span className="text-emerald-400 font-bold">24 un</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
          </div>
        </div>
      )
    },
    {
      id: "whatsapp",
      category: "vendas",
      icon: <Smartphone className="h-7 w-7 text-red-400" />,
      title: "Vitrine Digital WhatsApp 2.0",
      description: "Seu cliente escolhe os pods no catálogo virtual, monta o carrinho em segundos e você recebe o pedido formatado direto no WhatsApp.",
      badge: "ALTA CONVERSÃO",
      impactMetric: "Atendimento em 30 segundos",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-300">📱 Pedido Formatado</span>
          <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px]">
            PRONTO PARA ENVIAR
          </span>
        </div>
      )
    },
    {
      id: "print",
      category: "impressao",
      icon: <Printer className="h-7 w-7 text-red-400" />,
      title: "Impressão Térmica de Balcão",
      description: "Envie cupons de balcão e etiquetas de entrega para impressoras térmicas (58mm/80mm) em 1 clique direto da central de expedição.",
      badge: "MÓDULO EXCLUSIVO",
      impactMetric: "Zero digitação no caixa",
      visualWidget: (
        <div className="p-3 bg-zinc-950/80 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono text-zinc-300">
          <span>🖨️ Bobina 58mm / 80mm</span>
          <span className="text-red-400 font-bold">IMPRIMIR 1-CLICK</span>
        </div>
      )
    }
  ];

  const filteredFeatures = activeCategory === "todos" 
    ? featuresList 
    : featuresList.filter(f => f.category === activeCategory);

  return (
    <section id="recursos" className="py-24 border-b border-white/10 relative bg-zinc-950/40">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ferramentas de Engenharia de Vendas Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white leading-tight">
            Tudo o que sua loja precisa para <span className="text-gradient-fire">dominar o mercado</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg">
            Vitrine virtual online + Sistema PDV balcão + Rotas GPS para Motoboy e Frete por Distância.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("todos")}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border ${
              activeCategory === "todos"
                ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60"
                : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            ⚡ Todos os Recursos
          </button>

          <button
            onClick={() => setActiveCategory("logistica")}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border ${
              activeCategory === "logistica"
                ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60"
                : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            🗺️ Motoboy & Frete por KM
          </button>

          <button
            onClick={() => setActiveCategory("pdv")}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border ${
              activeCategory === "pdv"
                ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60"
                : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            🖥️ Sistema PDV Balcão
          </button>

          <button
            onClick={() => setActiveCategory("estoque")}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border ${
              activeCategory === "estoque"
                ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60"
                : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            📦 Estoque & Sabores
          </button>

          <button
            onClick={() => setActiveCategory("vendas")}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border ${
              activeCategory === "vendas"
                ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60"
                : "bg-zinc-900/80 text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            📲 WhatsApp & Vendas
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((item) => (
            <div 
              key={item.id} 
              className="glass-card-cro p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-950/50 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold font-mono tracking-wider bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold font-space text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="pt-2">
                  {item.visualWidget}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{item.impactMetric}</span>
                </span>
                <Zap className="h-4 w-4 text-red-500 fill-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Callout Banner */}
        <div className="mt-16 glass-card-cro p-8 rounded-3xl border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl bg-gradient-to-r from-red-950/40 via-zinc-950 to-zinc-900">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-400 uppercase tracking-wider">
              <Flame className="h-4 w-4 fill-current" />
              <span>FRETE DINÂMICO POR KM + MAPA DE ROTAS MOTOBOY INCLUSOS</span>
            </div>
            <h3 className="text-2xl font-extrabold font-space text-white">
              Pronto para economizar tempo e calcular frete com precisão?
            </h3>
            <p className="text-xs text-zinc-400">
              Assinatura recorrente de R$ 149,99/mês sem taxa por venda e com baixa automática de estoque.
            </p>
          </div>

          <Button
            variant="gradient"
            size="lg"
            onClick={() => onOpenCheckout && onOpenCheckout("mensal")}
            className="w-full sm:w-auto px-8 h-14 font-extrabold text-base rounded-2xl shadow-xl shadow-red-600/40 bg-gradient-to-r from-red-600 to-red-500 text-white gap-2 shrink-0 border-0"
          >
            <span>Assinar Plano Mensal Agora</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
