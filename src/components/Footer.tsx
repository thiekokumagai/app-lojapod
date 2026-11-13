import React from "react";

interface FooterProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";

const linkClass = "text-[var(--lp-muted)] transition-colors hover:text-white";

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => (
  <footer className="border-t border-white/[0.06] bg-[#1a1a1a] pb-10 pt-[clamp(56px,7vw,96px)] text-sm">
    <div className="lp-container">
      <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-[clamp(56px,8vw,112px)]">
        <div>
          <img src="/images/logo.png" alt="LojaPod" className="h-11 w-auto object-contain" />
          <p className="mt-5 max-w-sm leading-relaxed text-[var(--lp-text-2)]">
            Sistema de gestão para lojas, vapes, pods e tabacarias. Vendas, estoque, caixa, catálogo no WhatsApp, entregas
            e impressão automática. Simples e inteligente.
          </p>
          <button type="button" onClick={() => onOpenCheckout("mensal")} className="lp-btn lp-btn-sm lp-btn-primary mt-6">
            Testar grátis
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-4 font-medium text-white">Produto</div>
            <ul className="space-y-3">
              <li><a href="#sobre" className={linkClass}>Como funciona</a></li>
              <li><a href="#recursos" className={linkClass}>Recursos</a></li>
              <li><a href="#vender-mais" className={linkClass}>Venda mais</a></li>
              <li><a href="#ecossistema" className={linkClass}>Ecossistema</a></li>
              <li><a href="#precos" className={linkClass}>Preços</a></li>
              <li><a href="#faq" className={linkClass}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-medium text-white">Recursos</div>
            <ul className="space-y-3 text-[var(--lp-muted)]">
              <li>PDV e catálogo</li>
              <li>Estoque e caixa</li>
              <li>Motoboys e rotas</li>
              <li>Contas a pagar</li>
              <li>Investimento e ROI</li>
              <li>Cartão fidelidade</li>
              <li>Avise-me quando chegar</li>
              <li>Combos e cupons</li>
              <li>Impressão automática</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-medium text-white">Conta</div>
            <ul className="space-y-3">
              <li><a href={ADMIN_URL} target="_blank" rel="noreferrer" className={linkClass}>Entrar no painel</a></li>
              <li>
                <button type="button" onClick={() => onOpenCheckout("mensal")} className={`${linkClass} text-left`}>
                  Teste grátis de 7 dias
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-[var(--lp-muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} LojaPod. Todos os direitos reservados.</span>
        <span>Use no computador, celular e tablet</span>
      </div>
    </div>
  </footer>
);

export default Footer;
