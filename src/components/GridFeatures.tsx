import React from "react";
import { Check, CreditCard, MapPin, Printer, TrendingUp, Wallet } from "lucide-react";

const payments = ["Pix", "Cartão de crédito", "Cartão de débito", "Dinheiro", "Pedido no WhatsApp", "Venda no balcão"];

const orderFeed = [
  { who: "Balcão", time: "9:12", text: "Venda #1048 · 2 pods + 1 essência", tone: "var(--lp-mint)" },
  { who: "Estoque", time: "9:12", text: "Baixa automática de 3 itens", tone: "var(--lp-lilac)", system: true },
  { who: "Caixa", time: "9:13", text: "Entrada de R$ 289,90 no Pix", tone: "var(--lp-gold)" },
  { who: "Impressora", time: "9:13", text: "Comprovante impresso (80mm)", tone: "var(--lp-sky)" },
];

const routeSteps = [
  { label: "Pedido", text: "Pedido #1052 pelo catálogo", tone: "var(--lp-sky)" },
  { label: "Separação", text: "Itens separados no estoque", tone: "var(--lp-lilac)" },
  { label: "Motoboy", text: "Rota enviada para o Waze", tone: "var(--lp-mint)" },
  { label: "Acerto", text: "Taxa de R$ 12,00 no fechamento", tone: "var(--lp-gold)" },
];

const extras = [
  { icon: Wallet, title: "Contas a pagar", desc: "Despesas fixas, boletos, fornecedores e aviso de vencimento." },
  { icon: TrendingUp, title: "Investimento e ROI", desc: "Aportes de sócios, capital investido e retorno do negócio." },
  { icon: CreditCard, title: "Controle de caixa", desc: "Abertura, fechamento, sangrias e fluxo diário detalhado." },
];

const Copy: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-7 pb-0 sm:p-9 sm:pb-0">
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

export const GridFeatures: React.FC = () => (
  <section id="recursos" className="py-[clamp(64px,8vw,120px)]">
    <div className="lp-container">
      <div className="lp-heading">
        <h2>O que o LojaPod faz</h2>
        <p>Um sistema para a loja inteira: do balcão à entrega, pelo celular ou computador. Menos planilha, mais tempo para vender.</p>
      </div>

      <ul className="mt-[clamp(48px,6vw,72px)] grid grid-cols-1 gap-3.5 md:grid-cols-6 md:gap-4 xl:grid-cols-12">
        {/* PDV — feed de eventos */}
        <li className="lp-card min-h-[300px] md:col-span-6 xl:col-span-7">
          <div className="grid flex-1 gap-0 lg:grid-cols-[1fr_1.1fr]">
            <div className="p-7 sm:p-9">
              <h3>Venda no PDV em poucos cliques</h3>
              <p>Registre vendas no balcão e no WhatsApp. Estoque, caixa e comprovante se atualizam sozinhos, na mesma hora.</p>
            </div>
            <div className="px-5 pb-6 pt-0 sm:pl-0 sm:pr-0 lg:pt-9">
              <div className="h-full rounded-tl-2xl border-l border-t border-white/[0.08] bg-[#1a1a1a] p-4 text-[13px] max-lg:rounded-2xl max-lg:border">
                <div className="mb-3 font-mono text-xs text-[var(--lp-muted)]"># vendas-hoje</div>
                <ul className="space-y-3">
                  {orderFeed.map((m) => (
                    <li key={m.who + m.text} className="flex gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[11px] font-semibold text-[#141414]" style={{ background: m.tone }}>
                        {m.who[0]}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-baseline gap-2">
                          <span className="font-medium">{m.who}</span>
                          <span className="text-[11px] text-[var(--lp-muted)]">{m.time}</span>
                        </span>
                        <span className="block text-[var(--lp-text-2)]">{m.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* Pagamentos — letreiro */}
        <li className="lp-card min-h-[300px] md:col-span-6 xl:col-span-5">
          <div className="lp-fade-x mt-9 space-y-3 overflow-hidden" aria-hidden="true">
            {[false, true].map((reverse) => (
              <div key={String(reverse)} className={`flex w-max gap-3 ${reverse ? "lp-marquee-reverse" : "lp-marquee"}`}>
                {[...payments, ...payments].map((p, i) => (
                  <span key={i} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[var(--lp-text-2)]">
                    {p}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-auto p-7 sm:p-9">
            <h3>Receba do jeito que o cliente preferir</h3>
            <p>Pix, cartão ou dinheiro, no balcão ou pelo WhatsApp. Cada entrada cai no caixa certo.</p>
          </div>
        </li>

        {/* Estoque */}
        <li className="lp-card min-h-[300px] md:col-span-3 xl:col-span-5">
          <Copy title="Estoque por sabor e variante">
            Saldo em tempo real de pods, juices e essências. Saiba o que está acabando antes de faltar.
          </Copy>
          <div className="mt-auto space-y-2.5 p-7 pt-8 sm:p-9 sm:pt-8">
            {[
              ["Pod Menta Ice", 82, "var(--lp-mint)"],
              ["Juice Uva 30ml", 46, "var(--lp-lilac)"],
              ["Essência Melancia", 14, "var(--lp-gold)"],
            ].map(([name, pct, color]) => (
              <div key={name as string} className="text-[13px]">
                <div className="mb-1 flex justify-between">
                  <span>{name}</span>
                  <span className="text-[var(--lp-muted)]">{pct} un.</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color as string }} />
                </div>
              </div>
            ))}
          </div>
        </li>

        {/* Entregas — fluxo */}
        <li className="lp-card min-h-[300px] md:col-span-3 xl:col-span-7">
          <div className="grid flex-1 lg:grid-cols-[1fr_1fr]">
            <Copy title="Entregas com rota no mapa">
              Cadastre motoboys, envie a rota exata para o Waze ou Google Maps em um clique e feche as taxas no fim do dia.
            </Copy>
            <ol className="relative m-7 mt-8 space-y-3 sm:m-9 sm:mt-9">
              {routeSteps.map((s, i) => (
                <li key={s.label} className="relative flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#1a1a1a] p-3 text-[13px]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[#141414]" style={{ background: s.tone }}>
                    {i === 2 ? <MapPin className="h-3.5 w-3.5" /> : <span className="text-[11px] font-semibold">{i + 1}</span>}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium">{s.label}</span>
                    <span className="block truncate text-[var(--lp-muted)]">{s.text}</span>
                  </span>
                  {i === 3 && <Check className="ml-auto h-4 w-4 shrink-0 text-[var(--lp-mint)]" />}
                </li>
              ))}
            </ol>
          </div>
        </li>

        {/* Catálogo + Instagram */}
        <li className="lp-card min-h-[300px] md:col-span-3 xl:col-span-7">
          <div className="grid flex-1 lg:grid-cols-[1fr_1fr]">
            <Copy title="Catálogo e link para a bio">
              Uma página de links para o Instagram que leva o cliente direto ao catálogo e ao WhatsApp da loja.
            </Copy>
            <div className="m-7 mt-8 flex justify-center sm:m-9 sm:mt-9">
              <div className="w-full max-w-[240px] rounded-[26px] border border-white/10 bg-[#1a1a1a] p-4 text-center text-[13px]">
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-[#8bd43a] to-[#27a768]" />
                <div className="mt-2 font-medium">@sualoja</div>
                <div className="text-[11px] text-[var(--lp-muted)]">Pods, juices e acessórios</div>
                <div className="mt-4 space-y-2">
                  {["Ver catálogo", "Pedir no WhatsApp", "Promoções da semana"].map((l, i) => (
                    <div key={l} className={`rounded-full py-2 ${i === 0 ? "bg-[var(--lp-light)] font-medium text-[#141414]" : "border border-white/10"}`}>
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Impressão */}
        <li className="lp-card min-h-[300px] md:col-span-3 xl:col-span-5">
          <Copy title="Comprovante e impressão automática">
            Cada venda imprime sozinha na impressora térmica de 58mm ou 80mm.
          </Copy>
          <div className="mt-auto flex justify-center px-7 pt-8 sm:px-9">
            <div className="w-full max-w-[220px] rounded-t-lg bg-[var(--lp-light)] p-4 font-mono text-[11px] leading-relaxed text-[#141414] shadow-[0_-20px_60px_-20px_rgba(139,212,58,.35)]">
              <div className="flex items-center justify-between font-semibold">
                <span>LOJAPOD</span>
                <Printer className="h-3.5 w-3.5" />
              </div>
              <div className="my-2 border-t border-dashed border-[#141414]/30" />
              <div className="flex justify-between"><span>2x Pod Menta</span><span>179,80</span></div>
              <div className="flex justify-between"><span>1x Essência</span><span>110,10</span></div>
              <div className="my-2 border-t border-dashed border-[#141414]/30" />
              <div className="flex justify-between font-semibold"><span>TOTAL</span><span>R$ 289,90</span></div>
              <div className="mt-1 text-[#141414]/60">Pix · Venda #1048</div>
            </div>
          </div>
        </li>
      </ul>

      {/* Recursos extras */}
      <ul className="mt-4 grid gap-3.5 md:grid-cols-3 md:gap-4">
        {extras.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="lp-card flex-row items-start gap-4 p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06]">
              <Icon className="h-5 w-5 text-[var(--lp-lime)]" />
            </span>
            <span>
              <span className="block font-semibold tracking-tight">{title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-[var(--lp-text-2)]">{desc}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default GridFeatures;
