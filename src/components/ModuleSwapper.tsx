import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Printer, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Sparkles,
  ShieldAlert,
  BarChart3
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
    title: "VITRINE VAPES & PODS",
    subtitle: "Catálogo por Sabores & Nicotina",
    accentBg: "bg-[#02b25f]",
    accentText: "text-[#02b25f]",
    glowColor: "from-[#02b25f]/20 via-[#00df82]/10 to-transparent",
    icon: ShoppingBag,
    description: "Visualização otimizada para o nicho de pods descartáveis, juices e tabacaria. Carrinho limpo enviado direto para o WhatsApp do atendente sem complicações.",
    specs: [
      { label: "Tempo de Checkout", value: "< 30 segundos" },
      { label: "Taxa de Conversão", value: "+ 34%" },
      { label: "Variantes por Sabor", value: "Ilimitadas" },
      { label: "Envio do Pedido", value: "Via WhatsApp" }
    ],
    features: [
      "Filtro por Sabores, Puffs e Teores de Nicotina",
      "Foto em Alta Definição de cada modelo e sabor",
      "Calculadora Automática de Frete/Entrega por Região",
      "Mensagem Pronta e Formatada direto no WhatsApp"
    ],
    mockupTitle: "Elf Bar BC5000 - Watermelon Ice",
    mockupTag: "DISPONÍVEL EM ESTOQUE",
    mockupColor: "bg-[#00df82]"
  },
  {
    id: "pdv",
    badge: "ALTA VELOCIDADE",
    title: "PDV BALCÃO & IMPRESSÃO",
    subtitle: "Comprovante Térmico Instantâneo",
    accentBg: "bg-cyan-500",
    accentText: "text-cyan-500",
    glowColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    icon: Printer,
    description: "Solução completa para balcão e loja física. Lance vendas rapidamente e emita a comanda térmica na impressora do balcão em 2 segundos.",
    specs: [
      { label: "Impressão Térmica", value: "58mm & 80mm" },
      { label: "Velocidade PDV", value: "2.1 segundos" },
      { label: "Emissão de Comanda", value: "Instantânea" },
      { label: "Fechamento de Caixa", value: "Automático" }
    ],
    features: [
      "Impressão sem driver direto do navegador web",
      "Comprovante térmico personalizado com sua logo e dados",
      "Controle de Sangria e Suprimento de Caixa diário",
      "Multi-operadores com permissões individuais de acesso"
    ],
    mockupTitle: "Comprovante de Balcão #8492",
    mockupTag: "IMPRESSO NO BALCÃO",
    mockupColor: "bg-cyan-500"
  },
  {
    id: "estoque",
    badge: "GESTÃO TOTAL",
    title: "CONTROLE DE ESTOQUE & LUCRO",
    subtitle: "Alertas de Estoque & Margem Real",
    accentBg: "bg-emerald-500",
    accentText: "text-emerald-400",
    glowColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    icon: Package,
    description: "Controle o saldo de estoque de cada pod, saboreador e essência. Receba alertas automáticos de estoque baixo e saiba o custo vs lucro exato de cada venda.",
    specs: [
      { label: "Alerta Estoque Baixo", value: "Automático" },
      { label: "Cálculo de Margem", value: "Em Tempo Real" },
      { label: "Relatórios de Vendas", value: "Instantâneos" },
      { label: "Multi-Operadores", value: "Com Permissões" }
    ],
    features: [
      "Aviso automático quando o produto ou sabor estiver acabando",
      "Relatório do produto mais vendido por sabor e nicotina",
      "Margem de lucro bruta e líquida calculada por pedido",
      "Histórico completo de entradas, saídas e movimentações do caixa"
    ],
    mockupTitle: "Controle de Estoque & Margem 📊",
    mockupTag: "RELATÓRIO EM TEMPO REAL",
    mockupColor: "bg-[#02b25f]"
  }
];

export const ModuleSwapper: React.FC<ModuleSwapperProps> = ({ onOpenCheckout }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>("delivery");
  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="modulos" className="py-16 sm:py-24 bg-[#001c1f] text-white relative overflow-hidden border-y border-emerald-950/60">
      {/* Dynamic Ambient Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr ${activeModule.glowColor} rounded-full blur-[140px] pointer-events-none transition-all duration-700`} />

      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-[#002529]/90 px-4 py-1.5 text-xs font-mono font-bold text-[#00df82]">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">MÓDULOS DE ALTA PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight">
            TUDO O QUE SUA LOJA PRECISA PARA{" "}
            <span className="text-[#00df82] underline decoration-[#02b25f] underline-offset-8">MULTIPLICAR SEU LUCRO</span>
          </h2>
          <p className="text-slate-300 font-mono text-sm sm:text-base">
            Do catálogo por sabores no WhatsApp ao comprovante impresso no balcão e controle financeiro de estoque.
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
                className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? "bg-[#002529] border-[#00df82] shadow-xl shadow-[#02b25f]/15 ring-1 ring-[#00df82]/50"
                    : "bg-[#002529]/40 border-emerald-900/60 hover:border-emerald-700 hover:bg-[#002529]/70"
                }`}
              >
                {/* Badge Top */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-[#02b25f] text-white" : "bg-[#001c1f] text-slate-300 group-hover:text-white"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                    isActive ? "bg-[#00df82]/20 text-[#00df82] border-[#00df82]/40" : "bg-[#001c1f] text-slate-400 border-emerald-900"
                  }`}>
                    {mod.badge}
                  </span>
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
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#00df82] rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Module Deep-Dive Card */}
        <div className="bg-[#002529]/95 border border-emerald-800/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Description & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00df82] bg-[#00df82]/10 border border-[#00df82]/20 px-3 py-1 rounded-full">
                Módulo Ativo: {activeModule.title}
              </span>
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
                  <CheckCircle2 className="h-4 w-4 text-[#00df82] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/60">
              {activeModule.specs.map((spec, i) => (
                <div key={i} className="bg-[#001c1f]/90 border border-emerald-800/60 rounded-xl p-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">{spec.label}</span>
                  <span className="text-xs sm:text-sm font-extrabold font-space text-[#00df82] block">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => onOpenCheckout && onOpenCheckout("mensal")}
                className="w-full sm:w-auto bg-[#02b25f] hover:bg-[#00df82] text-white hover:text-slate-950 font-extrabold uppercase text-sm py-4 px-8 rounded-full shadow-lg shadow-[#02b25f]/20 gap-2 border-0 cursor-pointer transition-all glow-green-button"
              >
                <Sparkles className="h-4 w-4" />
                <span>Experimentar {activeModule.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-xs font-mono text-slate-400">Ativação imediata sem cartão de crédito</span>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#001c1f] border border-emerald-800/60 rounded-2xl p-5 space-y-4 shadow-2xl relative">
              {/* Card Top Header */}
              <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${activeModule.mockupColor} animate-pulse`} />
                  <span className="text-xs font-mono font-bold text-slate-300">{activeModule.mockupTitle}</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#002529] border border-emerald-800/60 text-slate-300 px-2 py-0.5 rounded">
                  {activeModule.mockupTag}
                </span>
              </div>

              {/* Card Body Specs Visual */}
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-[#002529] p-3 rounded-xl border border-emerald-900/60 flex justify-between items-center">
                  <span className="text-slate-400">Status Operacional:</span>
                  <span className="text-white font-bold">Totalmente Ativo</span>
                </div>
                <div className="bg-[#002529] p-3 rounded-xl border border-emerald-900/60 flex justify-between items-center">
                  <span className="text-slate-400">Destaque:</span>
                  <span className="text-[#00df82] font-bold">100% Otimizado</span>
                </div>
                <div className="bg-[#002529] p-3 rounded-xl border border-emerald-900/60 flex justify-between items-center">
                  <span className="text-slate-400">Comissão sobre Vendas:</span>
                  <span className="text-[#00df82] font-bold">0% (Zero Taxas)</span>
                </div>
                <div className="bg-[#002529] p-3 rounded-xl border border-emerald-900/60 flex justify-between items-center">
                  <span className="text-slate-400">Canal Principal:</span>
                  <span className="text-[#00df82] font-bold">WhatsApp + Balcão</span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="bg-[#00df82]/10 border border-[#00df82]/20 rounded-xl p-3 text-center">
                <span className="text-xs font-mono font-bold text-[#00df82] flex items-center justify-center gap-1.5">
                  <Zap className="h-3.5 w-3.5" />
                  Testar este módulo grátis por 7 dias
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
