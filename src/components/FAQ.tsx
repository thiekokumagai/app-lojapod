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
      q: "Como funciona o Cartão Fidelidade?",
      a: "Você escolhe a estratégia: selos que viram brinde, cashback, pontos que viram desconto, desconto progressivo ou um modelo híbrido. Os selos e pontos são registrados nas compras e o cliente acompanha o progresso."
    },
    {
      q: "O que é o \"Avise-me quando chegar\"?",
      a: "Quando um produto está esgotado, o cliente pede no catálogo para ser avisado. Assim que o item volta ao estoque, ele recebe uma notificação e você não perde a venda."
    },
    {
      q: "Posso montar combos e sugerir produtos na sacola?",
      a: "Sim. Você cria combos com preço especial e usa o \"Peça também\" para sugerir um produto na sacola, com preço exclusivo, de acordo com o produto ou a categoria escolhida pelo cliente."
    },
    {
      q: "Quanto custa?",
      a: "R$ 150 por mês, com todos os recursos inclusos. Antes, você testa por 7 dias grátis."
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
    <section id="faq" className="py-[clamp(64px,8vw,120px)]">
      <div className="lp-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lp-heading lg:sticky lg:top-28 lg:self-start">
          <h2>Perguntas</h2>
          <p>Respostas curtas sobre o sistema, entregas, financeiro e o teste grátis.</p>
        </div>

        <Accordion type="single" collapsible className="w-full border-t border-white/[0.08]">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/[0.08] py-1">
              <AccordionTrigger className="py-5 text-[17px] font-medium tracking-tight text-white hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-[62ch] text-[15px] leading-relaxed text-[var(--lp-text-2)]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
