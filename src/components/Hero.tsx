import React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  FileText,
  Home,
  LayoutList,
  Monitor,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Smartphone,
  Tablet,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const ease = [0.22, 1, 0.36, 1] as const;
const line = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease },
});

const menuItems = [
  { icon: Home, label: "Início", active: true },
  { icon: ShoppingBag, label: "Pedidos", badge: "10" },
  { icon: Package, label: "Produtos" },
  { icon: LayoutList, label: "Categorias" },
  { icon: CreditCard, label: "Pagamentos", more: true },
  { icon: Users, label: "Clientes" },
  { icon: Truck, label: "Entregas", more: true },
];

const transactions = [
  ["Hoje, 10:42", "Venda #1048", "+ R$ 289,90", "Concluído", "success"],
  ["Hoje, 09:18", "Taxa de entrega", "+ R$ 12,00", "Concluído", "success"],
  ["Ontem, 18:35", "Fornecedor", "- R$ 520,00", "Pendente", "pending"],
  ["Ontem, 16:12", "Venda #1047", "+ R$ 174,50", "Concluído", "success"],
];

const platforms = [
  { icon: Monitor, label: "Computador" },
  { icon: Smartphone, label: "Celular" },
  { icon: Tablet, label: "Tablet" },
];

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => (
  <section className="relative isolate -mt-[68px] overflow-hidden pt-[68px] lg:-mt-[76px] lg:pt-[76px]" aria-labelledby="hero-title">
    {/* Feixe de luz + grade de fundo */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,212,58,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,212,58,.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(80% 60% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />
      <div className="absolute left-1/2 top-[38%] h-[900px] w-[min(1100px,160vw)] -translate-x-1/2">
      <motion.div
        className="h-full w-full rounded-[50%] blur-[90px]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #27a76800, #27a768 60deg, #8bd43a 120deg, #74b9ff 200deg, #d6adf2 260deg, #e3b866 320deg, #27a76800 360deg)",
          opacity: 0.32,
        }}
        animate={{ rotate: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#141414]" />
    </div>

    <div className="lp-container flex flex-col items-center pb-12 pt-[60px] text-center sm:pt-[clamp(60px,8vw,112px)] sm:pb-[72px]">
      <motion.p
        {...line(0)}
        className="lp-glass mb-7 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full py-1 pl-1 pr-3 text-[11px] font-medium leading-none text-[var(--lp-text-2)]"
      >
        <span className="inline-flex min-h-6 items-center rounded-full bg-[var(--lp-light)] px-2.5 font-mono text-[9px] font-semibold tracking-[0.08em] text-[var(--lp-on-light)]">
          7 DIAS GRÁTIS
        </span>
        <span className="hidden sm:inline">Use no</span>
        {platforms.map(({ icon: Icon, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <span aria-hidden="true" className="text-white/30">·</span>}
            <span className="inline-flex items-center gap-1 text-white">
              <Icon className="h-3 w-3" />
              {label}
            </span>
          </React.Fragment>
        ))}
      </motion.p>

      <motion.h1
        id="hero-title"
        {...line(0.08)}
        className="text-balance text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.065em]"
      >
        Sua loja, <span className="bg-gradient-to-r from-[#8bd43a] to-[#27a768] bg-clip-text text-transparent">no controle</span>
      </motion.h1>

      <motion.p
        {...line(0.16)}
        className="mt-6 max-w-[720px] text-pretty text-base leading-[1.5] text-[var(--lp-text-2)] sm:mt-[30px] sm:text-[clamp(17px,2vw,20px)] sm:leading-[1.55]"
      >
        Vendas, estoque, caixa, catálogo no WhatsApp, entregas com motoboy e{" "}
        <span className="whitespace-nowrap rounded-md bg-white/[0.06] px-1.5 py-0.5 text-white">impressão automática</span> em
        um só sistema. Feito para lojas, vapes, pods e tabacarias.
      </motion.p>

      <motion.div {...line(0.24)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={() => onOpenCheckout("mensal")} className="lp-btn lp-btn-primary">
          Testar grátis por 7 dias
        </button>
        <a href="#precos" className="lp-btn lp-glass lp-btn-glass">
          Ver preço
        </a>
      </motion.div>
    </div>

    {/* Prévia do aplicativo */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease }}
      className="lp-container pb-8"
    >
      <h2 className="sr-only">Prévia do painel LojaPod</h2>
      <div className="mx-auto max-w-[1120px] rounded-[22px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,.9)] backdrop-blur sm:p-3">
        <div className="pointer-events-none select-none overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1a1a1a] text-left text-[11px] text-white">
          <div className="flex h-12 items-center gap-5 border-b border-white/[0.07] px-4">
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--lp-green)] text-xs">L</span>
              LojaPod <ChevronDown className="h-3 w-3 text-white/50" />
            </div>
            <div className="hidden h-8 max-w-xs flex-1 items-center gap-2 rounded-lg bg-white/[0.05] px-3 text-white/50 sm:flex">
              <Search className="h-3.5 w-3.5" /> Buscar
              <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5">Ctrl K</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span className="hidden font-medium md:inline">Nova venda</span>
              <Bell className="h-4 w-4 text-white/70" />
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--lp-lilac)] text-[10px] font-semibold text-[#141414]">MP</span>
            </div>
          </div>
          <div className="flex h-[420px] sm:h-[460px]">
            <aside className="hidden w-44 shrink-0 border-r border-white/[0.07] p-3 sm:block">
              <div className="space-y-1">
                {menuItems.map(({ icon: Icon, label, active, badge, more }) => (
                  <div
                    key={label}
                    className={`flex h-8 items-center gap-2 rounded-lg px-2 ${active ? "bg-white/[0.08] font-medium text-white" : "text-white/55"}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                    {badge && <span className="ml-auto rounded-full bg-[var(--lp-green)] px-1.5 py-0.5 text-[9px]">{badge}</span>}
                    {more && <ChevronRight className="ml-auto h-3 w-3" />}
                  </div>
                ))}
              </div>
              <div className="mb-2 mt-5 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/40">Gestão</div>
              {(
                [
                  [WalletCards, "Caixa"],
                  [FileText, "Relatórios"],
                  [CircleDollarSign, "Financeiro"],
                  [Settings, "Configurações"],
                ] as const
              ).map(([Icon, label]) => (
                <div key={label} className="flex h-8 items-center gap-2 px-2 text-white/55">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
              ))}
            </aside>
            <main className="min-w-0 flex-1 p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Olá, Mariana</div>
                  <div className="mt-0.5 text-white/50">Aqui está o resumo da sua loja.</div>
                </div>
                <span className="text-white/50">Personalizar</span>
              </div>
              <div className="mt-4 flex gap-2 overflow-hidden">
                {["Nova venda", "Produto", "Cliente", "Despesa", "Entrega", "Relatório"].map((item, index) => (
                  <span
                    key={item}
                    className={`whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-medium ${
                      index === 0 ? "bg-[var(--lp-light)] text-[#141414]" : "border border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    {index === 0 ? "+ " : ""}
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <div className="min-w-0 flex-1 basis-0 rounded-xl border border-white/[0.07] bg-[#212121] p-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    Faturamento <Check className="h-3.5 w-3.5 rounded-full bg-[var(--lp-green)] p-0.5" />
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
                    R$ 84.519<span className="text-xs text-white/50">,32</span>
                  </div>
                  <div className="mt-2 flex gap-5 text-[10px]">
                    <span className="text-white/50">Últimos 30 dias</span>
                    <span className="text-[var(--lp-mint)]">+ R$ 18,2 mil</span>
                    <span className="text-rose-400">- R$ 9 mil</span>
                  </div>
                  <svg className="mt-1 h-20 w-full" viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="sales-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8bd43a" stopOpacity=".25" />
                        <stop offset="100%" stopColor="#8bd43a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,74 C45,72 50,51 89,59 C128,67 145,28 184,38 C222,48 234,19 272,28 C310,37 335,8 400,14 L400,90 L0,90 Z" fill="url(#sales-fill)" />
                    <path d="M0,74 C45,72 50,51 89,59 C128,67 145,28 184,38 C222,48 234,19 272,28 C310,37 335,8 400,14" fill="none" stroke="#8bd43a" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 basis-0 rounded-xl border border-white/[0.07] bg-[#212121] p-4">
                  <div className="mb-2 flex items-center font-medium">
                    Resumo <Plus className="ml-auto h-3.5 w-3.5" />
                    <MoreHorizontal className="ml-2 h-3.5 w-3.5" />
                  </div>
                  {[
                    ["Vendas", "R$ 56.125,50"],
                    ["Catálogo online", "R$ 16.750,00"],
                    ["Balcão", "R$ 11.643,82"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-3 text-xs">
                      <span className="text-white/50">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-white/[0.07] bg-[#212121] p-4">
                <div className="mb-3 font-medium">Vendas recentes</div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_.8fr] pb-2 text-white/45">
                  <span>Data</span>
                  <span>Descrição</span>
                  <span>Valor</span>
                  <span>Status</span>
                </div>
                {transactions.map(([date, description, amount, status, type]) => (
                  <div key={`${date}-${description}`} className="grid grid-cols-[1fr_1.5fr_1fr_.8fr] items-center border-t border-white/[0.06] py-2.5">
                    <span>{date}</span>
                    <span>{description}</span>
                    <span className="font-medium">{amount}</span>
                    <span className={type === "success" ? "text-[var(--lp-mint)]" : "text-[var(--lp-gold)]"}>{status}</span>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
