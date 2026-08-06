import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Sparkles } from "lucide-react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rafael Mendes",
      store: "Vape Lounge SP",
      text: "Antes do LojaPod os clientes se perdiam nos grupos de WhatsApp perguntando sabores. Hoje eles montam o carrinho no site e nos enviam pronto. O tempo de atendimento caiu de 10 minutos para 30 segundos!",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "Lucas Alencar",
      store: "PodStore Curitiba",
      text: "A integração com a impressora térmica de balcão é animal. O pedido chega pelo WhatsApp, eu clico em imprimir e a etiqueta de entrega sai prontinha com os produtos e o Pix conferido.",
      rating: 5,
      avatar: "LA"
    },
    {
      name: "Juliana Rocha",
      store: "Tabacaria & Vapes BH",
      text: "O controle de estoque por variação de nicotina e sabores evitou que a gente vendesse produto esgotado. Vale cada centavo da assinatura mensal de R$ 149,99.",
      rating: 5,
      avatar: "JR"
    },
  ];

  return (
    <section className="py-24 border-b border-slate-200/80 bg-slate-50 relative">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-white text-rose-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Casos Reais de Sucesso</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Aprovado por quem vende <span className="text-gradient-rose">todos os dias</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Veja como donos de vape shops escalaram suas operações com o LojaPod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card-light glass-card-light-hover p-8 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-rose-200" />
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 text-white flex items-center justify-center font-extrabold text-xs shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-extrabold font-space text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.store}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
