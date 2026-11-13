import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Coins, Gift, Layers, Percent, Wallet } from "lucide-react";

type StrategyId = "selos" | "cashback" | "pontos" | "progressivo" | "hibrido";

const strategies: {
  id: StrategyId;
  label: string;
  icon: typeof Gift;
  color: string;
  desc: string;
}[] = [
  {
    id: "selos",
    label: "Selos e brinde",
    icon: Gift,
    color: "var(--lp-lilac)",
    desc: "A cada compra o cliente ganha um selo. Completou o cartão, ganha o brinde que você escolher.",
  },
  {
    id: "cashback",
    label: "Cashback",
    icon: Wallet,
    color: "var(--lp-mint)",
    desc: "Uma porcentagem de cada compra volta como saldo para o cliente usar no próximo pedido.",
  },
  {
    id: "pontos",
    label: "Pontos em desconto",
    icon: Coins,
    color: "var(--lp-gold)",
    desc: "O cliente acumula pontos por real gasto e troca os pontos por desconto na sacola.",
  },
  {
    id: "progressivo",
    label: "Desconto progressivo",
    icon: Percent,
    color: "var(--lp-sky)",
    desc: "Quanto mais o cliente compra, maior o desconto. Cada nível desbloqueia uma porcentagem nova.",
  },
  {
    id: "hibrido",
    label: "Híbrido",
    icon: Layers,
    color: "#f2a7c3",
    desc: "Combine estratégias, como selos para o brinde e cashback em todas as compras.",
  },
];

const CardShell: React.FC<{ title: string; icon: typeof Gift; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <>
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
      <span>{title}</span>
      <Icon className="h-4 w-4" />
    </div>
    <div className="mt-5 text-lg font-semibold tracking-tight">Ana Souza</div>
    {children}
  </>
);

const Stamps: React.FC<{ filled: number; total?: number }> = ({ filled, total = 10 }) => (
  <div className="mt-4 grid grid-cols-5 gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`grid aspect-square place-items-center rounded-full border ${
          i < filled ? "border-[#141414] bg-[#141414] text-white" : "border-dashed border-[#141414]/40"
        }`}
      >
        {i < filled ? <Check className="h-3.5 w-3.5" /> : i === total - 1 ? <Gift className="h-3.5 w-3.5 text-[#141414]/50" /> : null}
      </span>
    ))}
  </div>
);

const Bar: React.FC<{ pct: number }> = ({ pct }) => (
  <div className="mt-3 h-2 rounded-full bg-[#141414]/15">
    <div className="h-full rounded-full bg-[#141414]" style={{ width: `${pct}%` }} />
  </div>
);

const Preview: React.FC<{ id: StrategyId; icon: typeof Gift }> = ({ id, icon }) => {
  switch (id) {
    case "selos":
      return (
        <CardShell title="Cartão de selos" icon={icon}>
          <div className="text-xs text-[#141414]/60">7 de 10 selos · faltam 3 para o brinde</div>
          <Stamps filled={7} />
        </CardShell>
      );
    case "cashback":
      return (
        <CardShell title="Cashback 5%" icon={icon}>
          <div className="text-xs text-[#141414]/60">Saldo disponível para a próxima compra</div>
          <div className="mt-3 text-4xl font-medium tracking-[-0.05em]">R$ 14,50</div>
          <ul className="mt-3 space-y-1.5 border-t border-[#141414]/15 pt-3 text-xs">
            <li className="flex justify-between"><span>Venda #1048 · R$ 289,90</span><span className="font-medium">+ R$ 14,50</span></li>
            <li className="flex justify-between text-[#141414]/60"><span>Venda #1031 · R$ 120,00</span><span>usado</span></li>
          </ul>
        </CardShell>
      );
    case "pontos":
      return (
        <CardShell title="1 ponto por R$ 1" icon={icon}>
          <div className="text-xs text-[#141414]/60">Cada ponto vale R$ 0,05 de desconto</div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-medium tracking-[-0.05em]">1.250</span>
            <span className="text-sm text-[#141414]/60">pontos</span>
          </div>
          <div className="mt-3 rounded-xl bg-[#141414] px-3 py-2 text-xs text-white">Trocar por R$ 62,50 de desconto</div>
        </CardShell>
      );
    case "progressivo":
      return (
        <CardShell title="Desconto progressivo" icon={icon}>
          <div className="text-xs text-[#141414]/60">4 compras · faltam 2 para o próximo nível</div>
          <ol className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            {[
              ["3 compras", "5%", true],
              ["6 compras", "10%", false],
              ["10 compras", "15%", false],
            ].map(([label, pct, done]) => (
              <li
                key={label as string}
                className={`rounded-xl px-2 py-2.5 ${done ? "bg-[#141414] text-white" : "border border-dashed border-[#141414]/40"}`}
              >
                <span className="block text-lg font-medium tracking-tight">{pct}</span>
                <span className={done ? "text-white/60" : "text-[#141414]/60"}>{label}</span>
              </li>
            ))}
          </ol>
          <Bar pct={45} />
        </CardShell>
      );
    case "hibrido":
      return (
        <CardShell title="Selos + cashback" icon={icon}>
          <div className="text-xs text-[#141414]/60">7 de 10 selos · R$ 14,50 de cashback</div>
          <Stamps filled={7} />
          <div className="mt-3 flex items-center justify-between rounded-xl bg-[#141414] px-3 py-2 text-xs text-white">
            <span>Cashback disponível</span>
            <span className="font-medium">R$ 14,50</span>
          </div>
        </CardShell>
      );
  }
};

export const LoyaltyCard: React.FC = () => {
  const [active, setActive] = useState<StrategyId>("selos");
  const current = strategies.find((s) => s.id === active)!;

  return (
    <div className="grid flex-1 lg:grid-cols-[1fr_1.05fr]">
      <div className="p-7 sm:p-9">
        <h3>Cartão fidelidade do seu jeito</h3>
        <p>Escolha a estratégia que combina com a sua loja. O cliente acompanha o progresso pelo catálogo.</p>
        <div role="tablist" aria-label="Estratégias de fidelidade" className="mt-6 flex flex-wrap gap-2">
          {strategies.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active === s.id}
              aria-controls="loyalty-preview"
              onClick={() => setActive(s.id)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                active === s.id
                  ? "bg-[var(--lp-light)] font-medium text-[#141414]"
                  : "border border-white/10 text-[var(--lp-text-2)] hover:border-white/25 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={current.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="!mt-5 min-h-[3.2em] text-sm"
          >
            {current.desc}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center px-7 pb-8 sm:px-9 lg:py-9 lg:pl-0">
        <div id="loyalty-preview" role="tabpanel" aria-live="polite" className="w-full max-w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -12, rotate: 1.5 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lp-grid-bg min-h-[244px] rounded-[22px] p-5 text-[#141414] shadow-[0_30px_60px_-30px_rgba(0,0,0,.8)]"
              style={{ backgroundColor: current.color }}
            >
              <Preview id={current.id} icon={current.icon} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
