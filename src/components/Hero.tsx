import React from "react";
import { motion } from "framer-motion";
import { Bell, Check, ChevronDown, ChevronRight, CircleDollarSign, CreditCard, FileText, Home, LayoutList, MoreHorizontal, Package, Play, Plus, Search, Settings, ShoppingBag, Truck, Users, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps { onOpenCheckout: (plan: "mensal" | "anual") => void; }

const fadeUp = (distance: number, delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: distance }, animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const menuItems = [
  { icon: Home, label: "Início", active: true }, { icon: ShoppingBag, label: "Pedidos", badge: "10" },
  { icon: Package, label: "Produtos" }, { icon: LayoutList, label: "Categorias" },
  { icon: CreditCard, label: "Pagamentos", more: true }, { icon: Users, label: "Clientes" },
  { icon: Truck, label: "Entregas", more: true },
];

const transactions = [
  ["Hoje, 10:42", "Venda #1048", "+ R$ 289,90", "Concluído", "success"],
  ["Hoje, 09:18", "Taxa de entrega", "+ R$ 12,00", "Concluído", "success"],
  ["Ontem, 18:35", "Fornecedor", "- R$ 520,00", "Pendente", "pending"],
  ["Ontem, 16:12", "Venda #1047", "+ R$ 174,50", "Concluído", "success"],
];

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => (
  <section className="relative flex h-[calc(100svh-76px)] w-full min-w-0 max-w-full flex-col items-center overflow-hidden bg-background px-4 pt-8 text-foreground sm:pt-10">
    <video className="absolute inset-0 z-0 h-full w-full object-cover" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4" autoPlay muted loop playsInline aria-hidden="true" />
    <div className="absolute inset-0 z-[1] bg-white/52" aria-hidden="true" />
    <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col items-center">
      <motion.div {...fadeUp(10, 0, 0.5)} className="mb-6 inline-flex items-center overflow-hidden rounded-full border border-emerald-100 bg-background font-body text-sm shadow-sm sm:text-base">
        <span className="rounded-full bg-[#e6f7ef] px-3 py-1.5 font-medium text-[#27a768]">Teste por 7 dias</span>
        <span className="px-3 py-1.5 text-foreground">é grátis, sem compromisso</span>
      </motion.div>
      <motion.h1 {...fadeUp(16, 0.1)} className="w-full max-w-3xl text-center font-display text-[2.65rem] leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[5rem]">
        O futuro de uma gestão <em className="font-normal">mais inteligente</em>
      </motion.h1>
      <motion.p {...fadeUp(16, 0.2)} className="mt-4 max-w-[650px] text-center font-body text-base leading-relaxed text-muted-foreground md:text-lg">
        Automatize vendas, estoque, caixa, entregas e Comprovantes & Impressão automática em uma plataforma que trabalha com você.
      </motion.p>
      <motion.div {...fadeUp(16, 0.3)} className="mt-5 flex items-center gap-3">
        <Button onClick={() => onOpenCheckout("mensal")} className="h-11 rounded-full bg-primary px-6 font-body text-sm font-medium text-primary-foreground hover:bg-primary/90">Testar agora</Button>
        <a href="#sobre" aria-label="Ver demonstração"><Button variant="ghost" size="icon" className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80"><Play className="h-4 w-4 fill-foreground" /></Button></a>
      </motion.div>

      <motion.div {...fadeUp(30, 0.5, 0.8)} className="mt-8 w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl p-3 md:p-4" style={{ background: "rgba(255,255,255,.4)", border: "1px solid rgba(255,255,255,.5)", boxShadow: "var(--shadow-dashboard)" }}>
          <div className="pointer-events-none select-none overflow-hidden rounded-xl bg-background font-body text-[11px] text-foreground">
            <div className="flex h-12 items-center gap-5 border-b border-border px-4">
              <div className="flex items-center gap-2 font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs text-primary-foreground">L</span>LojaPod <ChevronDown className="h-3 w-3 text-muted-foreground" /></div>
              <div className="hidden h-8 max-w-xs flex-1 items-center gap-2 rounded-lg bg-secondary px-3 text-muted-foreground sm:flex"><Search className="h-3.5 w-3.5" /> Buscar<span className="ml-auto rounded border border-border bg-background px-1.5 py-0.5">⌘K</span></div>
              <div className="ml-auto flex items-center gap-3"><span className="hidden font-medium md:inline">Nova venda</span><Bell className="h-4 w-4" /><span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">MP</span></div>
            </div>
            <div className="flex h-[460px]">
              <aside className="hidden w-40 shrink-0 border-r border-border p-3 sm:block">
                <div className="space-y-1">{menuItems.map(({ icon: Icon, label, active, badge, more }) => <div key={label} className={`flex h-8 items-center gap-2 rounded-lg px-2 ${active ? "bg-secondary font-medium text-foreground" : "text-muted-foreground"}`}><Icon className="h-3.5 w-3.5" /><span>{label}</span>{badge && <span className="ml-auto rounded-full bg-accent px-1.5 py-0.5 text-[9px] text-accent-foreground">{badge}</span>}{more && <ChevronRight className="ml-auto h-3 w-3" />}</div>)}</div>
                <div className="mb-2 mt-5 px-2 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">Gestão</div>
                {[[WalletCards, "Caixa"], [FileText, "Relatórios"], [CircleDollarSign, "Financeiro"], [Settings, "Configurações"]].map(([Icon, label]) => { const MenuIcon = Icon as typeof Home; return <div key={label as string} className="flex h-8 items-center gap-2 px-2 text-muted-foreground"><MenuIcon className="h-3.5 w-3.5" />{label as string}</div>; })}
              </aside>
              <main className="min-w-0 flex-1 bg-secondary/30 p-4 md:p-5">
                <div className="flex items-center justify-between"><div><div className="text-sm font-semibold">Olá, Mariana</div><div className="mt-0.5 text-muted-foreground">Aqui está o resumo da sua loja.</div></div><span className="text-muted-foreground">Personalizar</span></div>
                <div className="mt-4 flex gap-2 overflow-hidden">{["Nova venda", "Produto", "Cliente", "Despesa", "Entrega", "Relatório"].map((item, index) => <span key={item} className={`whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-medium ${index === 0 ? "bg-accent text-accent-foreground" : "border border-border bg-background"}`}>{index === 0 ? "+ " : ""}{item}</span>)}</div>
                <div className="mt-4 flex flex-col gap-3 md:flex-row">
                  <div className="min-w-0 flex-1 basis-0 rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-1.5 font-medium">Faturamento <Check className="h-3.5 w-3.5 rounded-full bg-accent p-0.5 text-accent-foreground" /></div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">R$ 84.519<span className="text-xs text-muted-foreground">,32</span></div>
                    <div className="mt-2 flex gap-5 text-[10px]"><span className="text-muted-foreground">Últimos 30 dias</span><span className="text-emerald-600">+ R$ 18,2 mil</span><span className="text-rose-500">- R$ 9 mil</span></div>
                    <svg className="mt-1 h-20 w-full" viewBox="0 0 400 90" preserveAspectRatio="none"><defs><linearGradient id="sales-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity=".15"/><stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0"/></linearGradient></defs><path d="M0,74 C45,72 50,51 89,59 C128,67 145,28 184,38 C222,48 234,19 272,28 C310,37 335,8 400,14 L400,90 L0,90 Z" fill="url(#sales-fill)" /><path d="M0,74 C45,72 50,51 89,59 C128,67 145,28 184,38 C222,48 234,19 272,28 C310,37 335,8 400,14" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" /></svg>
                  </div>
                  <div className="min-w-0 flex-1 basis-0 rounded-xl border border-border bg-background p-4"><div className="mb-2 flex items-center font-medium">Resumo <Plus className="ml-auto h-3.5 w-3.5" /><MoreHorizontal className="ml-2 h-3.5 w-3.5" /></div>{[['Vendas', 'R$ 56.125,50'], ['Catálogo online', 'R$ 16.750,00'], ['Balcão', 'R$ 11.643,82']].map(([label, value]) => <div key={label} className="flex justify-between py-3 text-xs"><span className="text-muted-foreground">{label}</span><span className="font-medium">{value}</span></div>)}</div>
                </div>
                <div className="mt-3 rounded-xl border border-border bg-background p-4"><div className="mb-3 font-medium">Vendas recentes</div><div className="grid grid-cols-[1fr_1.5fr_1fr_.8fr] pb-2 text-muted-foreground"><span>Data</span><span>Descrição</span><span>Valor</span><span>Status</span></div>{transactions.map(([date, description, amount, status, type]) => <div key={`${date}-${description}`} className="grid grid-cols-[1fr_1.5fr_1fr_.8fr] items-center border-t border-border py-2.5"><span>{date}</span><span>{description}</span><span className="font-medium">{amount}</span><span className={type === "success" ? "text-emerald-600" : "text-amber-600"}>{status}</span></div>)}</div>
              </main>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
