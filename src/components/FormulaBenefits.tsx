import React from "react";
import { 
  Percent, 
  Layers, 
  Zap, 
  ShieldCheck, 
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
    <section id="recursos" className="py-16 sm:py-24 bg-[#002529] text-white relative border-b border-emerald-900/60">
      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-[#001c1f] px-4 py-1.5 text-xs font-mono font-bold text-[#00df82]">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">FÓRMULA & BENEFÍCIOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight text-white">
            A FÓRMULA DO SUCESSO DA <span className="text-[#00df82]">SUA OPERAÇÃO</span>
          </h2>
          <p className="text-slate-300 font-mono text-sm sm:text-base">
            Tudo o que sua loja precisa para rodar sem travamentos, sem burocracia e com margem de lucro máxima.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FORMULA_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-[#001c1f]/90 border border-emerald-800/60 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-[#00df82]/50 hover:bg-[#001c1f] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#002529] text-[#00df82] border border-emerald-800/60 group-hover:bg-[#02b25f] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold bg-[#002529] border border-emerald-800/60 text-slate-300 px-2.5 py-1 rounded-full group-hover:text-[#00df82] group-hover:border-[#00df82]/30 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <div>
                    <h3 className="text-base font-extrabold font-space uppercase text-white group-hover:text-[#00df82] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#00df82] mt-1">
                      {item.highlight}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-mono text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Line */}
                <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Padrão Lojapod</span>
                  <span className="text-[#00df82] font-bold">100% Otimizado</span>
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
