import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";

const navItems = [
  { id: "sobre", label: "Como funciona" },
  { id: "recursos", label: "Recursos" },
  { id: "vender-mais", label: "Venda mais" },
  { id: "ecossistema", label: "Ecossistema" },
  { id: "precos", label: "Preços" },
  { id: "faq", label: "FAQ" },
];

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      // Posição relativa à viewport: funciona mesmo com seções dentro de wrappers animados
      const probe = Math.min(window.innerHeight * 0.4, 260);
      let current = "";
      for (const { id } of navItems) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= probe && rect.bottom > probe) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trava a rolagem no <html>: travar no <body> quebra o header sticky
    // (com o html em overflow-x: clip, o body vira o container de rolagem)
    const root = document.documentElement;
    root.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isMenuOpen ? "bg-[#141414]" : scrolled ? "bg-[#141414]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="lp-container grid min-h-[68px] grid-cols-[auto_1fr_auto] items-center gap-3 py-3 lg:min-h-[76px] lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <a href="#" className="flex items-center" aria-label="LojaPod início">
          <img src="/images/logo.png" alt="LojaPod" className="h-9 w-auto object-contain lg:h-10" />
        </a>

        {/* Navegação central em pílula */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="lp-glass flex items-center gap-1 rounded-full p-1">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-white/10 text-white"
                      : "text-[var(--lp-text-2)] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => onOpenCheckout("mensal")}
            className="lp-btn lp-btn-sm lp-btn-primary hidden sm:inline-flex"
          >
            Testar grátis
          </button>
          <a
            href={ADMIN_URL}
            target="_blank"
            rel="noreferrer"
            className="lp-btn lp-btn-sm lp-glass lp-btn-glass hidden sm:inline-flex"
          >
            Entrar
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lp-glass relative grid h-10 w-10 place-items-center rounded-full lg:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`absolute h-[1.5px] w-4 rounded bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 rounded bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile em folha: fica fora do <header> porque o backdrop-filter do header
          vira referência para filhos "fixed" e o painel ficava com altura zero */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[68px] z-[45] overflow-y-auto overscroll-contain bg-[#141414] lg:hidden">
          <nav className="lp-container flex flex-col py-6" aria-label="Menu do site">
            {navItems.map(({ id, label }, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="animate-in fade-in slide-in-from-bottom-2 border-b border-white/[0.08] py-4 text-2xl font-medium tracking-tight text-white fill-mode-backwards"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {label}
              </a>
            ))}
            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenCheckout("mensal");
                }}
                className="lp-btn lp-btn-primary w-full"
              >
                Testar grátis por 7 dias
              </button>
              <a href={ADMIN_URL} target="_blank" rel="noreferrer" className="lp-btn lp-glass lp-btn-glass w-full">
                Entrar no painel
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
