import React from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: "Como funciona a assinatura mensal do LojaPod?",
      a: "O plano mensal custa R$ 149,99/mês e concede acesso completo a todo o ecossistema (Vitrine do Cliente, Painel Admin e Módulo de Impressão). Não há taxa percentual sobre suas vendas nem fidelidade contratual."
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
    <section id="faq" className="py-24 border-b border-slate-200/80 bg-white relative">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
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
            <AccordionItem key={idx} value={`item-${idx}`} className="glass-card-light px-6 rounded-2xl border border-slate-200 shadow-sm">
              <AccordionTrigger className="hover:no-underline font-extrabold font-space text-slate-900 py-5 text-left text-base sm:text-lg">
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
