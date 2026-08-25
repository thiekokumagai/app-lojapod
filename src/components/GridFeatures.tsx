import React from "react";
import { 
  Tag, 
  DollarSign, 
  Package, 
  ShoppingBag, 
  BarChart2, 
  Printer,
  Bike,
  MapPin,
  TrendingUp,
  CreditCard,
  Instagram
} from "lucide-react";

export const GridFeatures: React.FC = () => {
  const features = [
    {
      icon: Tag,
      title: "Gestão de vendas & PDV",
      desc: "Registre e controle todas as vendas presenciais e no WhatsApp com agilidade.",
    },
    {
      icon: DollarSign,
      title: "Controle de caixa",
      desc: "Relatórios detalhados de entrada, saída de dinheiro, sangrias e fluxo diário.",
    },
    {
      icon: CreditCard,
      title: "Contas a pagar",
      desc: "Gestão completa de despesas, contas fixas, fornecedores e alertas de vencimento.",
    },
    {
      icon: Package,
      title: "Controle de estoque",
      desc: "Gestão de saldo e variantes de todos os pods, juices e essências em tempo real.",
    },
    {
      icon: Bike,
      title: "Cadastro & Financeiro do Motoboy",
      desc: "Controle de entregadores, acerto diário de taxas de entrega e pagamento de comissões.",
    },
    {
      icon: MapPin,
      title: "Mapa de Rotas para Entregador",
      desc: "Envie a rota exata da entrega direto para o Waze ou Google Maps do motoboy em 1 clique.",
    },
    {
      icon: TrendingUp,
      title: "Módulo de Investimento",
      desc: "Acompanhe aportes de sócios, capital investido no negócio e retorno (ROI).",
    },
    {
      icon: Instagram,
      title: "Link para Bio do Instagram",
      desc: "Crie uma página de links exclusiva para a bio do seu Instagram e converta seguidores em vendas.",
    },
    {
      icon: Printer,
      title: "Comprovantes & Impressão",
      desc: "Venda, emita e entregue a comanda térmica no balcão (58mm e 80mm) em segundos.",
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-[#F8FAF9] border-b border-slate-100">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto text-center">
        
        <span className="bg-[#e6f7ef] text-[#27a768] font-bold px-3 py-1 rounded-full text-xs">
          Recursos completos
        </span>

        {/* Headline */}
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Menos planilha, mais tempo para o que importa: vender e cuidar do seu cliente.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Além de reunir todas as ferramentas essenciais, nosso sistema oferece gestão de motoboys com rotas no mapa, contas a pagar, controle de investimento e link para bio do Instagram.
        </p>

        {/* 9 Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center mb-1">
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GridFeatures;
