import React from "react";
import { Instagram, Star, TrendingUp, CheckCircle } from "lucide-react";

const FEED_CARDS = [
  {
    storeName: "VapeZone Delivery",
    location: "São Paulo, SP",
    metric: "+ 420 Pedidos/Mês",
    tag: "Delivery 24h",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=600&q=80",
    quote: "A comanda saindo automática na impressora térmica zerou a bagunça do nosso atendimento no WhatsApp."
  },
  {
    storeName: "PodClub Premium",
    location: "Curitiba, PR",
    metric: "R$ 68.000/Mês",
    tag: "Balcão & Zap",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
    quote: "Nossos clientes amam selecionar os sabores e o teor de nicotina direto no catálogo virtual do LojaPod."
  },
  {
    storeName: "Ignite & Vapes Atacado",
    location: "Goiânia, GO",
    metric: "+ 1.200 Lotes B2B",
    tag: "Atacado B2B",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
    quote: "A tabela dinâmica por quantidade eliminou a necessidade de passar orçamentos manuais um por um."
  }
];

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="container relative z-10 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-4 py-1.5 text-xs font-mono font-bold text-lime-400">
            <Instagram className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">COMMUNITY & PROVA SOCIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight text-slate-900">
            LOJAS QUE ESTÃO <span className="text-red-600">DOMINANDO O MERCADO</span>
          </h2>
          <p className="text-slate-600 font-mono text-sm sm:text-base">
            Siga <strong className="text-slate-900">@lojapod.br</strong> no Instagram e veja casos de sucesso reais.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEED_CARDS.map((card, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold font-space text-base text-slate-900 flex items-center gap-1.5">
                      <span>{card.storeName}</span>
                      <CheckCircle className="h-4 w-4 text-emerald-500 fill-emerald-100 shrink-0" />
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{card.location}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs font-mono text-slate-600 italic leading-relaxed">
                  "{card.quote}"
                </p>
              </div>

              {/* Card Footer Metric */}
              <div className="bg-slate-950 p-4 text-white flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-lime-400" />
                  <span className="font-bold text-lime-400">{card.metric}</span>
                </div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialFeed;
