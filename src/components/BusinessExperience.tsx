import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Store, 
  Truck, 
  Building2, 
  CalendarCheck, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface BusinessExperienceProps {
  onOpenCheckout?: (plan: "mensal" | "anual") => void;
}

const EXPERIENCES = [
  {
    icon: Store,
    title: "Lojas Físicas & Balcão",
    description: "Comprovante térmico instantâneo na impressora do balcão, leitor de código de barras e controle de caixa rápido.",
    ctaText: "Ver Solução de Balcão",
    accentColor: "hover:border-lime-400"
  },
  {
    icon: Truck,
    title: "Vendedores D2C & Delivery",
    description: "Catálogo virtual de alta conversão para envios via motoboy, recebimento de frete e Pix automático em 1 clique.",
    ctaText: "Criar Loja Delivery",
    accentColor: "hover:border-red-500"
  },
  {
    icon: Building2,
    title: "Distribuidores & Atacadistas",
    description: "Tabelas de preço progressivas por quantidade, pedidos de caixas fechadas B2B e área exclusiva para revendedores.",
    ctaText: "Solicitar Tabela B2B",
    accentColor: "hover:border-purple-500"
  },
  {
    icon: CalendarCheck,
    title: "Eventos & Tabacarias",
    description: "Parcerias comerciais para grandes operações, suporte técnico dedicado e soluções personalizadas em lote.",
    ctaText: "Falar com Consultor",
    accentColor: "hover:border-amber-400"
  }
];

export const BusinessExperience: React.FC<BusinessExperienceProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-1.5 text-xs font-mono font-bold text-lime-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">EXPERIMENTE O LOJAPOD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight text-slate-900">
            DO BALCÃO AO ATACADO, <span className="text-red-600">SUA OPERAÇÃO CONECTADA</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm sm:text-base">
            Selecione o formato do seu negócio e descubra como o LojaPod acelera seu faturamento.
          </p>
        </div>

        {/* 4 Experience Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div 
                key={i}
                className={`bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${exp.accentColor} group`}
              >
                <div className="space-y-4">
                  <div className="p-3.5 w-fit rounded-2xl bg-slate-950 text-white shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-lime-400" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-space uppercase text-slate-900">
                    {exp.title}
                  </h3>

                  <p className="text-sm font-mono text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => onOpenCheckout && onOpenCheckout("mensal")}
                    className="border-slate-900 bg-slate-900 text-white hover:bg-slate-800 font-mono font-bold text-xs uppercase rounded-full px-6 py-2.5 gap-2 shadow-sm"
                  >
                    <span>{exp.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4 text-lime-400" />
                  </Button>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">Suporte 24h</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BusinessExperience;
