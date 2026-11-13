import React from "react";
import { BarChart3, BellRing, Globe, Image, ListPlus, Ticket, Upload } from "lucide-react";
import { LoyaltyCard } from "@/components/LoyaltyCard";

const comboItems = [
  { name: "Pod Menta Ice", price: "R$ 89,90" },
  { name: "Juice Uva 30ml", price: "R$ 59,90" },
  { name: "Essência Melancia", price: "R$ 39,90" },
];

const extras = [
  { icon: ListPlus, title: "Peça também", desc: "Sugira um produto na sacola com preço exclusivo, por produto ou categoria." },
  { icon: Ticket, title: "Cupons de desconto", desc: "Promoções com limite de uso, validade e valor mínimo de pedido." },
  { icon: Image, title: "Banners no catálogo", desc: "Destaque lançamentos e ofertas no topo do catálogo." },
  { icon: BarChart3, title: "Análise de compras", desc: "Saiba o que repor com base no histórico de vendas e nos dias de cobertura do estoque." },
  { icon: Globe, title: "Domínio próprio", desc: "Use o endereço da sua loja no catálogo online." },
  { icon: Upload, title: "Importação de dados", desc: "Traga produtos e clientes de outro sistema sem digitar tudo de novo." },
];

export const GrowthFeatures: React.FC = () => (
  <section id="vender-mais" className="py-[clamp(64px,8vw,120px)]">
    <div className="lp-container">
      <div className="lp-heading">
        <h2>Venda mais para quem já compra</h2>
        <p>Fidelidade, combos e avisos de reposição que trazem o cliente de volta, configurados direto no painel.</p>
      </div>

      <ul className="mt-[clamp(48px,6vw,72px)] grid grid-cols-1 gap-3.5 md:grid-cols-6 md:gap-4 xl:grid-cols-12">
        {/* Cartão fidelidade (interativo) */}
        <li className="lp-card min-h-[340px] md:col-span-6 xl:col-span-7">
          <LoyaltyCard />
        </li>

        {/* Avise-me quando chegar */}
        <li className="lp-card min-h-[340px] md:col-span-6 xl:col-span-5">
          <div className="p-7 sm:p-9">
            <h3>Avise-me quando chegar</h3>
            <p>Produto esgotado não perde a venda. O cliente pede o aviso no catálogo e recebe uma notificação quando o item volta ao estoque.</p>
          </div>
          <div className="mt-auto space-y-2.5 px-7 pb-8 sm:px-9">
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#1a1a1a] p-3 text-[13px]">
              <span className="h-10 w-10 shrink-0 rounded-xl bg-white/[0.06]" />
              <span className="min-w-0 flex-1">
                <span className="block font-medium">Pod Mango Ice</span>
                <span className="block text-[var(--lp-muted)]">Esgotado</span>
              </span>
              <span className="rounded-full bg-[var(--lp-light)] px-3 py-1.5 text-xs font-medium text-[#141414]">Me avise</span>
            </div>
            <div className="ml-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-[13px] backdrop-blur">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--lp-mint)] text-[#141414]">
                <BellRing className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-medium">Chegou! Pod Mango Ice</span>
                <span className="block text-[var(--lp-text-2)]">Toque para garantir o seu antes que acabe.</span>
              </span>
            </div>
          </div>
        </li>

        {/* Combos */}
        <li className="lp-card min-h-[300px] md:col-span-6 xl:col-span-12">
          <div className="grid flex-1 items-center lg:grid-cols-[1fr_1.2fr]">
            <div className="p-7 sm:p-9">
              <h3>Combos que aumentam o ticket</h3>
              <p>Junte produtos em um combo com preço especial. Ele aparece no catálogo, no PDV e baixa o estoque de cada item.</p>
            </div>
            <div className="px-7 pb-8 sm:px-9 lg:py-9 lg:pl-0">
              <div className="flex flex-col gap-3 rounded-[22px] border border-white/[0.08] bg-[#1a1a1a] p-4 sm:flex-row sm:items-center sm:p-5">
                <ul className="flex-1 space-y-2 text-[13px]">
                  {comboItems.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <span className="text-[var(--lp-lime)]">+</span>
                        {item.name}
                      </span>
                      <span className="text-[var(--lp-muted)] line-through">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-[var(--lp-gold)] px-5 py-4 text-[#141414] sm:w-48">
                  <div className="font-mono text-[10px] uppercase tracking-wider">Combo do mês</div>
                  <div className="mt-1 text-3xl font-medium tracking-[-0.04em]">R$ 159,90</div>
                  <div className="text-xs text-[#141414]/65">Economia de R$ 29,80</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <ul className="mt-4 grid gap-3.5 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
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

export default GrowthFeatures;
