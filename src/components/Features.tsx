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
      icon: <MapPin className="h-7 w-7 text-red-600" />,
      title: "Mapa & Rotas Otimizadas para Motoboy",
      description: "Gere em 1 clique o mapa de entrega otimizado com a rota exata no GPS/Google Maps para o seu motoboy fazer entregas rápidas com máxima precisão.",
      badge: "LOGÍSTICA MOTOBOY",
      impactMetric: "-50% de Tempo nas Entregas",
      visualWidget: (
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-900 mt-1">
          <img 
            src="/images/motoboy_route_map.png" 
            alt="Rota Multi-pedidos no Google Maps" 
            className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2">
            <span className="text-[10px] font-mono text-emerald-400 font-extrabold flex items-center justify-between w-full">
              <span>🗺️ Rota Multi-Pedidos GPS</span>
              <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[9px]">GOOGLE MAPS</span>
            </span>
          </div>
        </div>
      )
    },
    {
      id: "frete-dinamico",
      category: "logistica",
      icon: <Navigation className="h-7 w-7 text-red-600" />,
      title: "Cálculo Dinâmico de Frete por Distância (KM)",
      description: "O cliente digita o endereço na vitrine e o sistema calcula automaticamente o valor do frete por raio de KM até a loja em tempo real.",
      badge: "FRETE POR DISTÂNCIA",
      impactMetric: "Cálculo Automático por KM",
      visualWidget: (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 font-semibold">📍 Distância: 4.2 KM</span>
          <span className="text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded text-[11px] border border-amber-200">FRETE: R$ 12,00</span>
        </div>
      )
    },
    {
      id: "pdv",
      category: "pdv",
      icon: <Monitor className="h-7 w-7 text-red-600" />,
      title: "Sistema PDV de Balcão (Pedidos Manuais)",
      description: "Registre vendas presenciais de balcão e lance pedidos manuais em segundos direto no caixa com baixa automática de estoque e emissão de comprovante.",
      badge: "PDV PRESENCIAL & CAIXA",
      impactMetric: "Balcão & WhatsApp Unificados",
      visualWidget: (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 font-semibold">🖥️ Venda Balcão #1052</span>
          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px] border border-emerald-200">
            BAIXA ESTOQUE OK
          </span>
        </div>
      )
    },
    {
      id: "estoque",
      category: "estoque",
      icon: <Boxes className="h-7 w-7 text-red-600" />,
      title: "Estoque de Sabores & Nicotina",
      description: "Controle cirúrgico de estoque por puffs (5.000, 10.000+), mg de nicotina (2%, 5%) e variação exata de sabores de juices e pods.",
      badge: "ESPECIALIZADO VAPES",
      impactMetric: "+100% de Precisão no Estoque",
      visualWidget: (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 font-mono text-[11px]">
          <div className="flex justify-between text-slate-700 font-semibold">
            <span>Elf Bar (Watermelon Ice)</span>
            <span className="text-emerald-700 font-bold">24 un</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
          </div>
        </div>
      )
    },
    {
      id: "whatsapp",
      category: "vendas",
      icon: <Smartphone className="h-7 w-7 text-red-600" />,
      title: "Vitrine Digital WhatsApp 2.0",
      description: "Seu cliente escolhe os pods no catálogo virtual, monta o carrinho em segundos e você recebe o pedido formatado direto no WhatsApp.",
      badge: "ALTA CONVERSÃO",
      impactMetric: "Atendimento em 30 segundos",
      visualWidget: (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 font-semibold">📱 Pedido Formatado</span>
          <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px] border border-emerald-200">
            PRONTO PARA ENVIAR
          </span>
        </div>
      )
    },
    {
      id: "print",
      category: "impressao",
      icon: <Printer className="h-7 w-7 text-red-600" />,
      title: "Impressão Térmica de Balcão",
      description: "Envie cupons de balcão e etiquetas de entrega para impressoras térmicas (58mm/80mm) em 1 clique direto da central de expedição.",
      badge: "MÓDULO EXCLUSIVO",
      impactMetric: "Zero digitação no caixa",
      visualWidget: (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs font-mono text-slate-700 font-semibold">
          <span>🖨️ Bobina 58mm / 80mm</span>
          <span className="text-red-600 font-bold">IMPRIMIR 1-CLICK</span>
        </div>
      )
    }
  ];

  const filteredFeatures = activeCategory === "todos" 
    ? featuresList 
    : featuresList.filter(f => f.category === activeCategory);

  return (
    <section id="recursos" className="py-20 sm:py-24 border-b border-slate-200/80 relative bg-white">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ferramentas de Engenharia de Vendas Especializadas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Tudo o que sua loja precisa para <span className="text-gradient-fire">dominar o mercado</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Vitrine virtual online + Sistema PDV balcão + Rotas GPS para Motoboy e Frete por Distância.
          </p>
        </div>

        {/* Category Filter Buttons - Scrollable on mobile */}
        <div className="flex overflow-x-auto no-scrollbar items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12 pb-2 -mx-4 sm:mx-0 px-4 sm:px-0 sm:justify-center snap-x">
          <button
            onClick={() => setActiveCategory("todos")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border shrink-0 snap-start whitespace-nowrap ${
              activeCategory === "todos"
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            ⚡ Todos os Recursos
          </button>

          <button
            onClick={() => setActiveCategory("logistica")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border shrink-0 snap-start whitespace-nowrap ${
              activeCategory === "logistica"
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            🗺️ Motoboy & Frete por KM
          </button>

          <button
            onClick={() => setActiveCategory("pdv")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border shrink-0 snap-start whitespace-nowrap ${
              activeCategory === "pdv"
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            🖥️ Sistema PDV Balcão
          </button>

          <button
            onClick={() => setActiveCategory("estoque")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border shrink-0 snap-start whitespace-nowrap ${
              activeCategory === "estoque"
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            📦 Estoque & Sabores
          </button>

          <button
            onClick={() => setActiveCategory("vendas")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold font-space transition-all border shrink-0 snap-start whitespace-nowrap ${
              activeCategory === "vendas"
                ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-500/20"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            📲 WhatsApp & Vendas
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((item) => (
            <div 
              key={item.id} 
              className="glass-card-cro p-6 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between border border-slate-200/80 hover:border-red-500/40 transition-all duration-300 bg-white"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold font-mono tracking-wider bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold font-space text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="pt-2">
                  {item.visualWidget}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>{item.impactMetric}</span>
                </span>
                <Zap className="h-4 w-4 text-red-500 fill-current" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Callout Banner */}
        <div className="mt-12 sm:mt-16 glass-card-cro p-6 sm:p-8 rounded-3xl border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl bg-gradient-to-r from-red-50 via-white to-slate-50">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 uppercase tracking-wider">
              <Flame className="h-4 w-4 fill-current" />
              <span>FRETE DINÂMICO POR KM + MAPA DE ROTAS MOTOBOY INCLUSOS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-space text-slate-900">
              Pronto para economizar tempo e calcular frete com precisão?
            </h3>
            <p className="text-xs text-slate-600">
              Assinatura recorrente de R$ 149,99/mês sem taxa por venda e com baixa automática de estoque.
            </p>
          </div>

          <Button
            variant="gradient"
            size="lg"
            onClick={() => onOpenCheckout && onOpenCheckout("mensal")}
            className="w-full sm:w-auto px-6 sm:px-8 h-auto min-h-[3.25rem] py-3.5 font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-red-500/20 bg-gradient-to-r from-red-600 to-red-500 text-white gap-2 shrink-0 border-0 whitespace-normal text-center hover:scale-[1.02] transition-transform"
          >
            <span>Assinar Plano Mensal Agora</span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};
