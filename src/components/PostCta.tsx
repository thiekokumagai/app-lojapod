import React from "react";
import { ArrowRight } from "lucide-react";

interface PostCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";

export const PostCta: React.FC<PostCtaProps> = ({ onOpenCheckout }) => (
  <section className="relative mt-[clamp(32px,6vw,80px)] grid min-h-[560px] place-items-center overflow-hidden text-center sm:min-h-[620px]">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-x-0 bottom-0 h-[70%] opacity-80"
        style={{
          background:
            "linear-gradient(to top, rgba(139,212,58,0) 0%, rgba(139,212,58,.55) 18%, rgba(39,167,104,.45) 36%, rgba(116,185,255,.35) 56%, rgba(214,173,242,.3) 74%, rgba(227,184,102,0) 100%)",
          filter: "blur(60px)",
          maskImage: "radial-gradient(60% 100% at 50% 100%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(60% 100% at 50% 100%, #000 30%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(50% 60% at 50% 60%, #000, transparent)",
          WebkitMaskImage: "radial-gradient(50% 60% at 50% 60%, #000, transparent)",
        }}
      />
    </div>

    <div className="lp-container flex flex-col items-center">
      <h2 className="max-w-[16ch] text-balance text-[clamp(34px,4.6vw,56px)] font-medium leading-[1.04] tracking-[-0.055em]">
        Comece a vender com mais controle hoje
      </h2>
      <p className="mt-5 max-w-[560px] text-pretty text-[clamp(16px,1.8vw,19px)] leading-relaxed text-[var(--lp-text-2)]">
        Vendas, estoque, caixa, catálogo, entregas e impressão em um só lugar. Teste por 7 dias, sem compromisso.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => onOpenCheckout("mensal")} className="lp-btn lp-btn-primary">
          Testar grátis por 7 dias
        </button>
        <a href={ADMIN_URL} target="_blank" rel="noreferrer" className="lp-btn lp-glass lp-btn-glass">
          Já sou cliente <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default PostCta;
