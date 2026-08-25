import React from "react";
import { Bike, TrendingUp, CreditCard, Instagram } from "lucide-react";

export const AboutSystem: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Fácil de usar & Cadastro Rápido",
      desc: "Em 2 minutos sua conta está criada e você já pode cadastrar produtos, fornecedores e motoboys.",
    },
    {
      num: 2,
      title: "Motoboy & Envio de Rotas no Mapa",
      desc: "Cadastro e financeiro do entregador com envio de rota no mapa direto para Waze ou Google Maps.",
    },
    {
      num: 3,
      title: "Contas a Pagar & Investimentos",
      desc: "Módulo completo de contas a pagar, controle de despesas e acompanhamento do capital investido.",
    },
    {
      num: 4,
      title: "Link para Bio do Instagram & Zap",
      desc: "Gere seu link exclusivo para a bio do Instagram e receba pedidos organizados no WhatsApp.",
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
            O que você precisa para usar:
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Tudo o que você precisa fazer é criar a sua conta e usar o aplicativo. A interface foi criada para ser simples e eficiente, você pode acessar tanto pelo computador quanto pelo celular.
          </p>
        </div>

        {/* 2 Columns: Left Numbered Steps, Right Light Highlights Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4 Numbered Steps */}
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

              {/* 4 Feature Items */}
              <div className="space-y-3.5 text-xs">
                
                <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <Bike className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Financeiro & Rotas de Motoboy</div>
                    <div className="text-slate-600 text-[11px]">Controle de entregadores, taxas e envio de rota no mapa pro Waze.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Módulo Contas a Pagar</div>
                    <div className="text-slate-300 text-slate-600 text-[11px]">Gestão de despesas da loja, boletos e aviso de vencimentos.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Módulo de Investimento & Aportes</div>
                    <div className="text-slate-600 text-[11px]">Acompanhamento do capital investido, sócios e retorno (ROI).</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Link Personalizado para Bio do Instagram</div>
                    <div className="text-slate-600 text-[11px]">Página de alta conversão para bio do Insta integrada ao WhatsApp.</div>
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
