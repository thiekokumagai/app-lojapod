import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Printer, 
  Package, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Sparkles,
  ShieldAlert
} from "lucide-react";

interface ModuleSwapperProps {
  onOpenCheckout?: (plan: "mensal" | "anual") => void;
}

interface ModuleOption {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  accentBg: string;
  accentText: string;
  glowColor: string;
  icon: React.ElementType;
  description: string;
  isUpcoming?: boolean;
  specs: { label: string; value: string }[];
  features: string[];
  mockupTitle: string;
  mockupTag: string;
  mockupColor: string;
}

const MODULES: ModuleOption[] = [
  {
    id: "delivery",
    badge: "MAIS POPULAR",
    title: "VAPES & PODS DELIVERY",
    subtitle: "Catálogo por Sabores & Nicotina",
    accentBg: "bg-lime-500",
    accentText: "text-lime-600",
    glowColor: "from-lime-500/20 via-emerald-500/10 to-transparent",
    icon: ShoppingBag,
    description: "Visualização otimizada para o nicho de pods descartáveis e juices. Carrinho limpo enviado direto para o WhatsApp do atendente sem bagunça.",
    specs: [
      { label: "Tempo de Checkout", value: "< 30 segundos" },
      { label: "Taxa de Conversão", value: "+ 34%" },
      { label: "Variantes por Sabor", value: "Ilimitadas" },
      { label: "Envio do Pedido", value: "Via WhatsApp" }
    ],
    features: [
      "Filtro por Sabores, Puffs e Teores de Nicotina",
      "Foto em Alta Definição de cada modelo",
      "Calculadora Automática de Frete/Entrega",
      "Mensagem Pronta e Formatada no WhatsApp"
    ],
    mockupTitle: "Elf Bar BC5000 - Watermelon Ice",
    mockupTag: "DISPONÍVEL EM ESTOQUE",
    mockupColor: "bg-emerald-500"
  },
  {
    id: "pdv",
    badge: "ALTA VELOCIDADE",
    title: "PDV BALCÃO & IMPRESSÃO",
    subtitle: "Comprovante Térmico Instantâneo",
    accentBg: "bg-cyan-500",
    accentText: "text-cyan-600",
    glowColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    icon: Printer,
    description: "Solução para lojas físicas e balcão. Lance os pedidos rapidamente e emita a comanda térmica na impressora do balcão em segundos.",
    specs: [
      { label: "Impressão Térmica", value: "58mm & 80mm" },
      { label: "Velocidade PDV", value: "2.1 segundos" },
      { label: "Emissão de Comanda", value: "Instantânea" },
      { label: "Fechamento de Caixa", value: "Automático" }
    ],
    features: [
      "Impressão sem driver direto do navegador",
      "Comprovante térmico personalizado com sua logo",
      "Controle de Sangria e Suprimento de Caixa",
      "Multi-operadores com permissões individuais"
    ],
    mockupTitle: "Comprovante de Balcão #8492",
    mockupTag: "IMPRESSO NO BALCÃO",
    mockupColor: "bg-cyan-500"
  },
  {
    id: "fidelidade",
    badge: "ALTA RECOMPRA",
    title: "CARTÃO FIDELIDADE & PONTOS",
    subtitle: "Programa de Recompensas no Zap",
    accentBg: "bg-amber-500",
    accentText: "text-amber-500",
    glowColor: "from-amber-500/20 via-orange-500/10 to-transparent",
    icon: Award,
    description: "Fidelize seus clientes a cada pod ou refill comprado. A cada compra no Pix ou balcão, o cliente acumula selos virtuais para resgatar um pod grátis ou cupom exclusivo.",
    specs: [
      { label: "Aumento de Recompra", value: "+ 45%" },
      { label: "Selos Virtuais", value: "Automáticos" },
      { label: "Resgate de Prêmios", value: "No Carrinho" },
      { label: "Retenção de Clientes", value: "Máxima" }
    ],
    features: [
      "Cartão de selos virtuais acumula pontos a cada pedido",
      "Premiação automática configurável (Ex: 10º Pod Grátis)",
      "Lembrete automático para clientes com selos prestes a expirar",
      "Histórico de pontos totalmente integrado ao WhatsApp"
    ],
    mockupTitle: "Cartão Fidelidade: 8/10 Selos 🏷️",
    mockupTag: "1 POD GRÁTIS EM BREVE",
    mockupColor: "bg-amber-500"
  }
];

export const ModuleSwapper: React.FC<ModuleSwapperProps> = ({ onOpenCheckout }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>("delivery");
  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="modulos" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Dynamic Ambient Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr ${activeModule.glowColor} rounded-full blur-[140px] pointer-events-none transition-all duration-700`} />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-mono font-bold text-lime-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">MÓDULOS DE ALTA PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight">
            TUDO O QUE SUA LOJA PRECISA PARA{" "}
            <span className="text-lime-400 underline decoration-slate-700 underline-offset-8">MULTIPLICAR SEU LUCRO</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            Do catálogo por sabores no WhatsApp ao comprovante impresso no balcão e fidelização automática dos clientes.
          </p>
        </div>

        {/* Horizontal Module Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            const isActive = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? "bg-slate-900 border-lime-400 shadow-xl shadow-lime-400/10 ring-1 ring-lime-400/50"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                {/* Badge Top */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-lime-400 text-slate-950" : "bg-slate-800 text-slate-300 group-hover:text-white"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {mod.isUpcoming ? (
                    <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      EM BREVE
                    </span>
                  ) : (
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                      isActive ? "bg-lime-400/20 text-lime-300 border-lime-400/30" : "bg-slate-800 text-slate-400 border-slate-700"
                    }`}>
                      {mod.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-sm sm:text-base font-extrabold uppercase font-space ${isActive ? "text-white" : "text-slate-300"}`}>
                    {mod.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                    {mod.subtitle}
                  </p>
                </div>

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-lime-400 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Module Deep-Dive Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Description & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-lime-400 bg-lime-400/10 border border-lime-400/20 px-3 py-1 rounded-full">
                Módulo Ativo: {activeModule.title}
              </span>
              {activeModule.isUpcoming && (
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full flex items-center gap-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Disponibilidade Q4 2026
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-space text-white">
              {activeModule.subtitle}
            </h3>

            <p className="text-slate-300 font-mono text-sm sm:text-base leading-relaxed">
              {activeModule.description}
            </p>

            {/* Features Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeModule.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Technical Specs Grid (Estilo GiGi Nutritivo) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
              {activeModule.specs.map((spec, i) => (
                <div key={i} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-extrabold font-space text-lime-400 block">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => onOpenCheckout && onOpenCheckout("mensal")}
                className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-slate-950 font-extrabold uppercase text-sm py-4 px-8 rounded-full shadow-lg shadow-lime-400/20 gap-2 border-0"
              >
                <span>Experimentar {activeModule.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-xs font-mono text-slate-400">Ativação imediata no seu painel</span>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-2xl relative">
              {/* Card Top Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${activeModule.mockupColor} animate-pulse`} />
                  <span className="text-xs font-mono font-bold text-slate-300">{activeModule.mockupTitle}</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                  {activeModule.mockupTag}
                </span>
              </div>

              {/* Card Body Specs Visual */}
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400">Modelo:</span>
                  <span className="text-white font-bold">Pod Descartável 5% Nic</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400">Sabor Selecionado:</span>
                  <span className="text-lime-400 font-bold">Watermelon Ice 🍉</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400">Quantidade:</span>
                  <span className="text-white font-bold">1 UN (R$ 90,00)</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-400">Envio do Pedido:</span>
                  <span className="text-lime-400 font-bold">Direto no WhatsApp</span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-3 text-center">
                <span className="text-xs font-mono font-bold text-lime-400 flex items-center justify-center gap-1.5">
                  <Zap className="h-3.5 w-3.5" />
                  Pronto para enviar ao WhatsApp em 1 clique
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModuleSwapper;
