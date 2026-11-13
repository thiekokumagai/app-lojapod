import React from "react";
import { ArrowRight } from "lucide-react";

interface EcosystemCardsProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const offers = [
  {
    title: "Painel da loja",
    label: "Gestão completa",
    desc: "Vendas, estoque, caixa, contas a pagar, relatórios e equipe com permissões, no computador ou no celular.",
    color: "var(--lp-lilac)",
  },
  {
    title: "Catálogo do cliente",
    label: "Venda online",
    desc: "Seu cliente escolhe sabores, monta o pedido e envia pelo WhatsApp. O pedido cai direto no painel.",
    color: "var(--lp-mint)",
  },
  {
    title: "Impressão automática",
    label: "Comprovantes",
    desc: "Comprovantes padronizados que saem sozinhos na impressora térmica, sem clicar em imprimir.",
    color: "var(--lp-gold)",
  },
  {
    title: "Entregas e motoboys",
    label: "Logística",
    desc: "Rotas no mapa, taxas por pedido e acerto diário com cada entregador.",
    color: "var(--lp-sky)",
  },
];

export const EcosystemCards: React.FC<EcosystemCardsProps> = ({ onOpenCheckout }) => (
  <section id="ecossistema" className="py-[clamp(64px,8vw,120px)]">
    <div className="lp-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="lp-heading">
          <h2>Um ecossistema para a loja inteira</h2>
          <p>Quatro partes que funcionam juntas desde o primeiro dia. Tudo incluso, sem módulo escondido.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => onOpenCheckout("mensal")} className="lp-btn lp-btn-primary">
            Testar grátis
          </button>
          <a href="#precos" className="lp-btn lp-glass lp-btn-glass">
            Ver preço <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ol className="mt-10 hidden space-y-3 text-sm text-[var(--lp-muted)] lg:block">
          {offers.map((o, i) => (
            <li key={o.title} className="flex gap-4">
              <span className="font-mono">0{i + 1}</span>
              <span className="text-[var(--lp-text-2)]">{o.title}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Cards empilhados com sticky */}
      <ol className="relative">
        {offers.map((o, i) => (
          <li
            key={o.title}
            className="lp-grid-bg sticky mb-6 grid min-h-[340px] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[28px] border border-black/10 p-7 text-[#141414] shadow-[0_-20px_50px_-20px_rgba(0,0,0,.6)] sm:min-h-[380px] sm:p-10"
            style={{ top: `calc(96px + ${i * 28}px)`, backgroundColor: o.color }}
          >
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <span>{o.label}</span>
              <span>
                0{i + 1} / 0{offers.length}
              </span>
            </div>
            <div />
            <div>
              <h3 className="text-[clamp(28px,3.6vw,44px)] font-medium leading-none tracking-[-0.045em] text-[#141414]">{o.title}</h3>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-[#141414]/75">{o.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default EcosystemCards;
