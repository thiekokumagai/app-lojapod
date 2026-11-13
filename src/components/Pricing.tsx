import React from "react";
import { Check } from "lucide-react";

interface PricingProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const PRICE = "R$ 150";

const included = [
  "PDV de balcão e pedidos no WhatsApp",
  "Cadastro de produtos, sabores e variantes",
  "Controle de estoque em tempo real",
  "Controle de caixa e relatórios",
  "Contas a pagar e despesas",
  "Módulo de investimento e ROI",
  "Motoboys, taxas e rotas no mapa",
  "Catálogo online e link para a bio do Instagram",
  "3 temas para o catálogo, com as cores da sua marca",
  "Cartão fidelidade: selos, cashback, pontos e mais",
  "Avise-me quando chegar",
  "Combos, Peça também e cupons de desconto",
  "Comprovantes e impressão automática (58mm e 80mm)",
  "Acesso pelo computador, celular e tablet",
];

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => (
  <section id="precos" className="relative overflow-hidden py-[clamp(64px,8vw,120px)]">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[min(900px,140vw)] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
      style={{ background: "radial-gradient(closest-side, #8bd43a, #27a768 45%, transparent)" }}
    />
    <div className="lp-container">
      <div className="lp-heading mx-auto max-w-[720px] text-center">
        <h2>Um preço. Tudo incluso.</h2>
        <p className="mx-auto">Sem plano escondido e sem módulo extra. Teste grátis por 7 dias, sem cartão de crédito e sem contrato.</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1040px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#212121] md:grid-cols-[1fr_1.1fr]">
        {/* Preço */}
        <div className="flex flex-col justify-between gap-10 bg-[var(--lp-light)] p-8 text-[#141414] sm:p-10">
          <div>
            <span className="inline-flex rounded-full bg-[#141414] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
              Plano LojaPod
            </span>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-[clamp(64px,9vw,104px)] font-medium leading-none tracking-[-0.06em]">{PRICE}</span>
              <span className="text-lg text-[#141414]/60">/mês</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-[#141414]/70">
              Todos os recursos do sistema para a sua loja, desde o primeiro dia.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => onOpenCheckout("mensal")}
              className="lp-btn w-full bg-[#141414] text-white hover:bg-black"
            >
              Testar grátis por 7 dias
            </button>
            <p className="mt-3 text-center text-xs text-[#141414]/55">Sem carência · Cancele quando quiser</p>
          </div>
        </div>

        {/* Incluso */}
        <div className="p-8 sm:p-10">
          <div className="text-sm font-medium text-white">O que está incluso</div>
          <ul className="mt-6 grid gap-3.5 text-[15px]">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lp-lime)]" />
                <span className="text-[var(--lp-text-2)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
