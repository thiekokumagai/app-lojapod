import React from "react";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle2
} from "lucide-react";

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <Boxes className="h-7 w-7 text-rose-600" />,
      title: "Estoque por Nicotina & Sabores",
      description: "Controle de estoque cirúrgico por quantidade de puffs, teor de nicotina (2%, 5%) e disponibilidade de sabores em tempo real.",
      badge: "ESPECIALIZADO",
      bgLight: "bg-rose-50 border-rose-200/80"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-rose-600" />,
      title: "Vitrine WhatsApp de Alta Conversão",
      description: "Navegação mobile ultrarrápida. Seu cliente escolhe os pods, adiciona ao carrinho e você recebe a lista pronta no WhatsApp.",
      badge: "CONVERSÃO ALTA",
      bgLight: "bg-emerald-50 border-emerald-200/80"
    },
    {
      icon: <Printer className="h-7 w-7 text-rose-600" />,
      title: "Módulo de Impressão Térmica",
      description: "Imprima cupons de entrega e balcão em 1 clique nas bobinas de 58mm ou 80mm. Sem softwares adicionais pagos.",
      badge: "INTEGRADO",
      bgLight: "bg-amber-50 border-amber-200/80"
    },
    {
      icon: <Percent className="h-7 w-7 text-rose-600" />,
      title: "Cupons de Desconto & Ofertas",
      description: "Crie cupons promocionais em R$ ou % para acelerar o fechamento de vendas de pods e juices no final de semana.",
      badge: "VENDAS",
      bgLight: "bg-purple-50 border-purple-200/80"
    },
    {
      icon: <Clock className="h-7 w-7 text-rose-600" />,
      title: "Dashboard de Faturamento Real",
      description: "Gráficos intuitivos com vendas por dia e hora, lista dos pods mais vendidos e histórico completo de atendimentos.",
      badge: "GESTÃO",
      bgLight: "bg-blue-50 border-blue-200/80"
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-rose-600" />,
      title: "Servidores Nuvem 99.9%",
      description: "Infraestrutura rápida com resposta em menos de 100ms. Sua vitrine virtual sempre online e pronta para faturar.",
      badge: "ESTABILIDADE",
      bgLight: "bg-rose-50 border-rose-200/80"
    }
  ];

  return (
    <section id="recursos" className="py-24 border-b border-slate-200/80 bg-white relative">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Recursos Criados para Tabacarias & Vape Shops</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Tudo o que sua loja precisa para{" "}
            <span className="text-gradient-rose">vender mais e melhor</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Um ecossistema desenhado exclusivamente para atender as particularidades da venda de pods e juices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card-light glass-card-light-hover p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className={`h-14 w-14 rounded-2xl ${item.bgLight} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold font-mono tracking-wider bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-space text-slate-900 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-rose-600">
                <span>Incluso no Plano Mensal Pro</span>
                <Zap className="h-3.5 w-3.5 fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
