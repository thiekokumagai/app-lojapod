import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: "Como funciona o Sistema de Gestão do LojaPOD?",
      a: "O LojaPOD reúne catálogo online por sabores, pedidos no WhatsApp, PDV de balcão, Comprovantes & Impressão automática, gestão de motoboys com rotas no mapa, contas a pagar e módulo de investimentos em uma só plataforma simples e inteligente."
    },
    {
      q: "Como funciona o cadastro e financeiro do Motoboy?",
      a: "Você cadastra seus entregadores, controla as taxas de entrega calculadas por pedido, faz acertos diários de valores e pode enviar a localização exata do cliente com rota no mapa (Waze/Google Maps) direto pro motoboy com 1 clique."
    },
    {
      q: "O sistema possui controle de Contas a Pagar e Investimentos?",
      a: "Sim! O LojaPOD conta com módulo exclusivo de Contas a Pagar (despesas fixas, boletos e fornecedores) e Módulo de Investimentos (controle de capital aportado por sócios e acompanhamento do retorno ROI)."
    },
    {
      q: "Posso criar um Link para a Bio do meu Instagram?",
      a: "Com certeza! O LojaPOD gera uma página de links personalizada para colocar na bio do Instagram da sua loja, onde os clientes acessam o catálogo, WhatsApp e redes sociais com máxima taxa de conversão."
    },
    {
      q: "É possível usar o Sistema de Gestão em vários dispositivos?",
      a: "Sim! Você e sua equipe podem acessar o LojaPOD ao mesmo tempo pelo celular, tablet ou computador de qualquer lugar."
    },
    {
      q: "Posso experimentar o Sistema antes de comprar?",
      a: "Com certeza! Você ganha 7 dias de teste totalmente grátis, sem precisar cadastrar cartão de crédito."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#F8FAF9] border-b border-slate-100">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column matching Image 5 */}
          <div className="lg:col-span-5 space-y-4">
            {/* Top Badge Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 rounded-full px-3 py-1 text-xs shadow-xs">
              <span className="bg-[#e6f7ef] text-[#27a768] font-bold px-2 py-0.5 rounded-full">
                FAQ
              </span>
              <span className="text-slate-600 font-medium">
                respostas para perguntas frequentes
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ficou com alguma dúvida sobre o LojaPOD?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Encontre aqui as respostas que você precisa, na hora. Tudo explicado de um jeito simples, para você não perder tempo.
            </p>
          </div>

          {/* Right Column: Accordion Items matching Image 5 */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-2xl px-6 border border-slate-200/90 shadow-sm overflow-hidden">
                  <AccordionTrigger className="hover:no-underline font-bold text-slate-900 py-4 text-left text-sm sm:text-base hover:text-[#27a768] transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pb-4 font-normal">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
