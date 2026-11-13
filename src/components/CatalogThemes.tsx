import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plus, Search, ShoppingBag } from "lucide-react";

type TemplateId = "classic" | "menu-express" | "urban";

const templates: { id: TemplateId; label: string; desc: string }[] = [
  {
    id: "classic",
    label: "Classic",
    desc: "Loja virtual tradicional: busca no topo, banner de destaque e produtos em grade.",
  },
  {
    id: "menu-express",
    label: "Menu Express",
    desc: "Estilo cardápio digital: abas de categorias fixas e resumo do pedido sempre à vista.",
  },
  {
    id: "urban",
    label: "Urban",
    desc: "Visual escuro e moderno: menu lateral de categorias e cards horizontais com compra rápida.",
  },
];

// Cores de exemplo; no painel a loja escolhe qualquer cor
const colors = ["#dc2626", "#27a768", "#7c3aed", "#f59e0b"];

const products = [
  { name: "Pod Menta Ice", price: "89,90" },
  { name: "Juice Uva 30ml", price: "59,90" },
  { name: "Essência Melancia", price: "39,90" },
  { name: "Pod Mango Ice", price: "89,90" },
];

const ClassicPreview: React.FC<{ color: string }> = ({ color }) => (
  <div className="flex h-full flex-col bg-white text-[#141414]">
    <div className="flex items-center gap-2 px-3 pt-3">
      <span className="h-6 w-6 rounded-full" style={{ background: color }} />
      <div className="flex h-7 flex-1 items-center gap-1.5 rounded-full bg-black/[0.05] px-2.5 text-[10px] text-black/40">
        <Search className="h-3 w-3" /> Buscar produtos
      </div>
    </div>
    <div className="mx-3 mt-3 rounded-xl px-3 py-4 text-white" style={{ background: color }}>
      <div className="text-[9px] uppercase tracking-wider opacity-80">Oferta da semana</div>
      <div className="text-sm font-semibold">Combo com 15% OFF</div>
    </div>
    <div className="grid flex-1 grid-cols-2 gap-2 p-3">
      {products.map((p) => (
        <div key={p.name} className="rounded-xl border border-black/[0.06] p-2">
          <div className="aspect-square rounded-lg bg-black/[0.05]" />
          <div className="mt-1.5 truncate text-[10px]">{p.name}</div>
          <div className="text-[11px] font-semibold" style={{ color }}>R$ {p.price}</div>
        </div>
      ))}
    </div>
  </div>
);

const MenuExpressPreview: React.FC<{ color: string }> = ({ color }) => (
  <div className="relative flex h-full flex-col bg-[#fafafa] text-[#141414]">
    <div className="px-3 pt-3 text-sm font-semibold">Sua Loja</div>
    <div className="mt-2 flex gap-1.5 overflow-hidden border-b border-black/[0.06] px-3 pb-2 text-[10px]">
      {["Pods", "Juices", "Essências", "Acessórios"].map((t, i) => (
        <span
          key={t}
          className={`whitespace-nowrap rounded-full px-2.5 py-1 ${i === 0 ? "font-medium text-white" : "bg-black/[0.05]"}`}
          style={i === 0 ? { background: color } : undefined}
        >
          {t}
        </span>
      ))}
    </div>
    <ul className="flex-1 divide-y divide-black/[0.06] px-3">
      {products.map((p) => (
        <li key={p.name} className="flex items-center gap-2 py-2.5">
          <span className="h-10 w-10 shrink-0 rounded-lg bg-black/[0.05]" />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-medium">{p.name}</span>
            <span className="text-[11px] font-semibold" style={{ color }}>R$ {p.price}</span>
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full border border-black/10">
            <Plus className="h-3 w-3" />
          </span>
        </li>
      ))}
    </ul>
    <div
      className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl px-3 py-2.5 text-[11px] font-medium text-white shadow-lg"
      style={{ background: color }}
    >
      <span className="inline-flex items-center gap-1.5">
        <ShoppingBag className="h-3.5 w-3.5" /> 2 itens
      </span>
      <span>Ver sacola · R$ 149,80</span>
    </div>
  </div>
);

const UrbanPreview: React.FC<{ color: string }> = ({ color }) => (
  <div className="flex h-full bg-[#0f0f10] text-white">
    <aside className="flex w-12 shrink-0 flex-col items-center gap-3 border-r border-white/[0.06] py-3">
      <Menu className="h-4 w-4 text-white/60" />
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="h-7 w-7 rounded-lg" style={{ background: i === 0 ? color : "rgba(255,255,255,.07)" }} />
      ))}
    </aside>
    <div className="min-w-0 flex-1 p-3">
      <div className="text-sm font-semibold">Pods</div>
      <div className="mt-2 space-y-2">
        {products.slice(0, 3).map((p) => (
          <div key={p.name} className="flex items-center gap-2 rounded-xl bg-white/[0.05] p-2">
            <span className="h-11 w-11 shrink-0 rounded-lg bg-white/[0.08]" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-medium">{p.name}</span>
              <span className="text-[11px] font-semibold" style={{ color }}>R$ {p.price}</span>
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-lg text-white" style={{ background: color }}>
              <Plus className="h-3.5 w-3.5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CatalogThemes: React.FC = () => {
  const [template, setTemplate] = useState<TemplateId>("classic");
  const [color, setColor] = useState(colors[0]);
  const current = templates.find((t) => t.id === template)!;

  return (
    <div className="grid flex-1 items-center lg:grid-cols-[1fr_1.1fr]">
      <div className="p-7 sm:p-9">
        <h3>3 temas para o seu catálogo</h3>
        <p>
          No painel você escolhe o template do catálogo e as cores da sua marca: cor principal para botões e destaques, e
          cor dos preços. Troque quando quiser, sem programar.
        </p>

        <div className="mt-6 text-xs font-medium uppercase tracking-wider text-[var(--lp-muted)]">Template</div>
        <div role="tablist" aria-label="Templates do catálogo" className="mt-2 flex flex-wrap gap-2">
          {templates.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={template === t.id}
              aria-controls="catalog-preview"
              onClick={() => setTemplate(t.id)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                template === t.id
                  ? "bg-[var(--lp-light)] font-medium text-[#141414]"
                  : "border border-white/10 text-[var(--lp-text-2)] hover:border-white/25 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-5 text-xs font-medium uppercase tracking-wider text-[var(--lp-muted)]">Cor da marca</div>
        <div className="mt-2 flex gap-2" role="radiogroup" aria-label="Cor de exemplo">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={color === c}
              aria-label={`Cor ${c}`}
              onClick={() => setColor(c)}
              className={`h-8 w-8 rounded-full border-2 transition-transform ${
                color === c ? "scale-110 border-white" : "border-transparent hover:scale-105"
              }`}
              style={{ background: c }}
            />
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

      {/* Prévia em um celular */}
      <div className="flex justify-center px-7 pb-8 sm:px-9 lg:py-9 lg:pl-0">
        <div
          id="catalog-preview"
          role="tabpanel"
          aria-live="polite"
          className="h-[380px] w-[230px] overflow-hidden rounded-[30px] border-[6px] border-[#2a2a2a] bg-[#2a2a2a] shadow-[0_30px_70px_-30px_rgba(0,0,0,.9)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={template}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="h-full overflow-hidden rounded-[24px]"
            >
              {template === "classic" && <ClassicPreview color={color} />}
              {template === "menu-express" && <MenuExpressPreview color={color} />}
              {template === "urban" && <UrbanPreview color={color} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CatalogThemes;
