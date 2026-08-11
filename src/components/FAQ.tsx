import React from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: "Como funciona a assinatura do LojaPod?",
      a: "O plano completo custa R$ 150,00/mês e concede acesso ilimitado a todo o ecossistema (Vitrine por Sabores, PDV de Balcão e Cartão Fidelidade). Não há taxa percentual sobre suas vendas nem contrato de fidelidade."
    },
    {
      q: "Preciso de um computador para usar o sistema?",
      a: "Não! A vitrine do cliente e o painel admin são 100% responsivos e funcionam perfeitamente no celular, tablet ou computador. Opcionalmente, para uso da impressora térmica de balcão, você pode conectar via computador ou Android."
    },
    {
      q: "Como os pedidos chegam no meu WhatsApp?",
      a: "Quando o cliente finaliza o carrinho na sua vitrine virtual, o LojaPod formata uma mensagem completa com os produtos escolhidos, sabores, nicotina, dados de entrega e forma de pagamento Pix, direcionando-o para o WhatsApp da sua loja."
    },
    {
      q: "Posso cancelar minha assinatura quando quiser?",
      a: "Sim, com certeza. A assinatura do plano mensal é renovada mês a mês sem multas ou período de fidelidade obrigatório."
    },
    {
      q: "O sistema aceita cupons de desconto?",
      a: "Sim! Você pode cadastrar cupons de desconto diretamente no seu Painel Admin por valor fixo em reais (R$) ou porcentagem (%) com limite de usos e validade."
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 border-b border-slate-200/80 bg-white relative">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Respostas diretas sobre como o LojaPod funciona no seu dia a dia.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="glass-card-cro px-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
              <AccordionTrigger className="hover:no-underline font-extrabold font-space text-slate-900 py-5 text-left text-base sm:text-lg hover:text-red-600 transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5 font-normal">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
