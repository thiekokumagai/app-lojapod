import React from "react";
import { motion } from "framer-motion";
import { Bike, Package, Printer, ShoppingCart, Store, WalletCards, Instagram } from "lucide-react";

const nodes = [
  { icon: ShoppingCart, label: "PDV", note: "Venda no balcão", x: 18, y: 20, color: "var(--lp-mint)" },
  { icon: Package, label: "Estoque", note: "Baixa automática", x: 82, y: 20, color: "var(--lp-lilac)" },
  { icon: WalletCards, label: "Caixa", note: "Entradas e saídas", x: 17, y: 64, color: "var(--lp-gold)" },
  { icon: Instagram, label: "Catálogo", note: "Pedidos no WhatsApp", x: 83, y: 64, color: "var(--lp-sky)" },
  { icon: Bike, label: "Motoboy", note: "Rota no mapa", x: 30, y: 90, color: "var(--lp-lilac)" },
  { icon: Printer, label: "Impressora", note: "58mm ou 80mm", x: 70, y: 90, color: "var(--lp-mint)" },
];

const steps = [
  { title: "Crie sua conta", desc: "Cadastro em menos de 2 minutos, pelo celular ou computador." },
  { title: "Cadastre os produtos", desc: "Produtos, sabores, preços e estoque de forma rápida." },
  { title: "Configure a operação", desc: "Pagamentos, entregas, motoboys e preferências da loja." },
  { title: "Comece a vender", desc: "Sua equipe registra vendas e acompanha tudo em um só lugar." },
];

export const AboutSystem: React.FC = () => (
  <section id="sobre" className="overflow-hidden py-[clamp(64px,8vw,120px)]">
    <div className="lp-container">
      <div className="lp-heading mx-auto max-w-[720px] text-center">
        <h2>Tudo na sua loja conversa entre si.</h2>
        <p className="mx-auto">
          Uma venda no balcão baixa o estoque, entra no caixa, imprime o comprovante e, se for entrega, já gera a rota do
          motoboy. Sem planilha e sem retrabalho.
        </p>
      </div>

      {/* Rede de módulos */}
      <div className="relative mx-auto mt-14 aspect-[4/5] w-full max-w-[920px] sm:aspect-[16/10]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {nodes.map((n) => (
            <motion.line
              key={n.label}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="rgba(255,255,255,.14)"
              strokeWidth="0.25"
              strokeDasharray="1 1"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid h-24 w-24 place-items-center rounded-[28px] border border-white/15 bg-[#212121] shadow-[0_0_80px_-10px_rgba(139,212,58,.55)] sm:h-32 sm:w-32">
            <Store className="h-9 w-9 text-[var(--lp-lime)] sm:h-11 sm:w-11" />
            <span className="absolute -bottom-7 whitespace-nowrap text-sm font-medium">Sua loja</span>
          </div>
        </div>

        {nodes.map(({ icon: Icon, label, note, x, y, color }, i) => (
          <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-white/10 bg-[#1f1f1f]/90 py-2 pl-2 pr-3 backdrop-blur sm:pr-4"
          >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl text-[#141414]" style={{ background: color }}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-medium">{label}</span>
                <span className="hidden text-[11px] text-[var(--lp-muted)] sm:block">{note}</span>
              </span>
          </motion.div>
          </div>
        ))}
      </div>

      {/* Passos */}
      <ol className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="bg-[#141414] p-6 sm:p-8">
            <span className="font-mono text-xs text-[var(--lp-muted)]">0{i + 1}</span>
            <h3 className="mt-6 text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--lp-text-2)]">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default AboutSystem;
