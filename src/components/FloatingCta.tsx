import React from "react";

interface FloatingCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCheckout }) => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#141414]/85 p-3 backdrop-blur-xl sm:hidden">
    <div className="mx-auto flex max-w-md items-center justify-between gap-3">
      <div>
        <div className="text-xs font-medium text-white">Teste por 7 dias grátis</div>
        <div className="mt-0.5 text-[11px] text-[var(--lp-muted)]">Sem compromisso</div>
      </div>
      <button type="button" onClick={() => onOpenCheckout("mensal")} className="lp-btn lp-btn-sm lp-btn-primary shrink-0">
        Testar agora
      </button>
    </div>
  </div>
);

export default FloatingCta;
