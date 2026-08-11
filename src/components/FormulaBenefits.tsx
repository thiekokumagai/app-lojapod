import React from "react";
import { 
  Percent, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Smartphone,
  Sparkles
} from "lucide-react";

const FORMULA_ITEMS = [
  {
    icon: Percent,
    title: "ZERO TAXAS DE VENDA",
    highlight: "100% de Lucro Retido",
    description: "Sem comissões ocultas ou porcentagens retidas por pedido. O faturamento da sua loja vai integralmente direto para a sua conta Pix.",
    badge: "0% COMISSÃO"
  },
  {
    icon: Layers,
    title: "ESPECÍFICO PARA PODS & VAPES",
    highlight: "Sabores, Puffs & Nicotina",
    description: "Atributos pensados exatamente para o seu nicho. O cliente escolhe teor de nicotina, sabor e marca sem dúvidas no atendimento.",
    badge: "NICHO DEDICADO"
  },
  {
    icon: Zap,
    title: "CHECKOUT ULTRARRÁPIDO",
    highlight: "Pronto em < 30s",
    description: "Envio de carrinho direto para o WhatsApp já formatado com frete e dados do cliente, pronto para você enviar a chave Pix.",
    badge: "ALTA VELOCIDADE"
  },
  {
    icon: ShieldCheck,
    title: "ZERO FALHAS OU COMPROVANTES FALSOS",
    highlight: "Validação Inteligente",
    description: "Verificação automática e relatórios de fluxo financeiro em tempo real para evitar calotes e comprovantes Pix adulterados.",
    badge: "SEGURANÇA TOTAL"
  }
];

export const FormulaBenefits: React.FC = () => {
  return (
    <section id="recursos" className="py-16 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-1.5 text-xs font-mono font-bold text-lime-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">FÓRMULA & BENEFÍCIOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight text-white">
            A FÓRMULA DO SUCCESSO DA <span className="text-lime-400">SUA OPERAÇÃO</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            Tudo o que sua loja precisa para rodar sem travamentos, sem burocracia e com margem de lucro máxima.
          </p>
        </div>

        {/* 4 Cards Grid - Estilo Formula & Benefits GiGi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FORMULA_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-lime-400/50 hover:bg-slate-950 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 text-lime-400 border border-slate-800 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-full group-hover:text-lime-400 group-hover:border-lime-400/30 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <div>
                    <h3 className="text-base font-extrabold font-space uppercase text-white group-hover:text-lime-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-lime-400 mt-1">
                      {item.highlight}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-mono text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Line */}
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Padrão Lojapod</span>
                  <span className="text-lime-400 font-bold">100% Otimizado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FormulaBenefits;
