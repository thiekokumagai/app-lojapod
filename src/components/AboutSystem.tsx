import React from "react";
import { Bike, TrendingUp, CreditCard, Instagram, Printer, ShoppingCart, WalletCards } from "lucide-react";

export const AboutSystem: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Crie sua conta",
      desc: "Faça seu cadastro em menos de 2 minutos e acesse o sistema pelo celular ou computador.",
    },
    {
      num: 2,
      title: "Cadastre seus produtos",
      desc: "Adicione produtos, sabores, preços e estoque de forma rápida e organizada.",
    },
    {
      num: 3,
      title: "Configure sua operação",
      desc: "Defina formas de pagamento, entregas, motoboys e as preferências da sua loja.",
    },
    {
      num: 4,
      title: "Comece a vender",
      desc: "Pronto: sua equipe já pode registrar vendas e acompanhar toda a operação em um só lugar.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white border-y border-slate-100">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Top Badge Pill */}
        <div className="mb-4">
          <span className="bg-[#e6f7ef] text-[#27a768] font-bold px-3 py-1 rounded-full text-xs">
            Sobre o sistema
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comece a vender em poucos minutos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Configure sua loja em quatro passos simples. Depois, use todos os recursos pelo celular ou computador para cuidar da operação em um só lugar.
          </p>
        </div>

        {/* 2 Columns: Left Numbered Steps, Right Light Highlights Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Getting Started Steps */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#e6f7ef] text-[#27a768] font-bold flex items-center justify-center text-sm shrink-0 mt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Clean Light Highlight Showcase Card */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-4">
            
            <div className="bg-[#F8FAF9] text-slate-900 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 w-full space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <span className="text-xs text-[#27a768] font-bold uppercase tracking-wider block">Módulos Especiais</span>
                  <h4 className="text-lg font-extrabold text-slate-900">LojaPOD Pro Feature Set</h4>
                </div>
                <span className="bg-[#27a768] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Tudo Incluso
                </span>
              </div>

              {/* Feature Items */}
              <div className="flex flex-col gap-3.5 text-xs">
                
                <div className="order-4 flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <Bike className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Financeiro & Rotas de Motoboy</div>
                    <div className="text-slate-600 text-[11px]">Controle de entregadores, taxas e envio de rota no mapa pro Waze.</div>
                  </div>
                </div>

                <div className="order-5 flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Módulo Contas a Pagar</div>
                    <div className="text-slate-300 text-slate-600 text-[11px]">Gestão de despesas da loja, boletos e aviso de vencimentos.</div>
                  </div>
                </div>

                <div className="order-6 flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Módulo de Investimento & Aportes</div>
                    <div className="text-slate-600 text-[11px]">Acompanhamento do capital investido, sócios e retorno (ROI).</div>
                  </div>
                </div>

                <div className="order-7 flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Link Personalizado para Bio do Instagram</div>
                    <div className="text-slate-600 text-[11px]">Página de alta conversão para bio do Insta integrada ao WhatsApp.</div>
                  </div>
                </div>

                <div className="order-3 flex items-center gap-3 p-3.5 bg-[#f4fbf7] rounded-2xl border-2 border-[#27a768]/40 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#27a768] text-white flex items-center justify-center shrink-0">
                    <Printer className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Comprovantes & Impressão automática</div>
                    <div className="text-slate-600 text-[11px]">Emissão de comprovantes com impressão térmica automática em 58mm ou 80mm.</div>
                  </div>
                </div>

                <div className="order-1 flex items-center gap-3 p-3.5 bg-[#f4fbf7] rounded-2xl border-2 border-[#27a768]/40 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#27a768] text-white flex items-center justify-center shrink-0">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Venda no PDV Rápida e Fácil</div>
                    <div className="text-slate-600 text-[11px]">Venda no balcão em poucos cliques com um PDV simples e ágil.</div>
                  </div>
                </div>

                <div className="order-2 flex items-center gap-3 p-3.5 bg-[#f4fbf7] rounded-2xl border-2 border-[#27a768]/40 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#27a768] text-white flex items-center justify-center shrink-0">
                    <WalletCards className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Módulo de Caixa</div>
                    <div className="text-slate-600 text-[11px]">Controle de abertura, fechamento, entradas, saídas e saldo do caixa.</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSystem;
