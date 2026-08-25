import React from "react";
import { Button } from "@/components/ui/button";

interface FloatingCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 border-t border-slate-200 backdrop-blur-md shadow-lg sm:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div>
          <div className="text-xs font-bold text-slate-900">
            Teste por 7 dias grátis
          </div>
          <div className="text-[11px] text-[#27a768] font-semibold mt-0.5">
            Sem compromisso
          </div>
        </div>
        <Button
          size="sm"
          onClick={() => onOpenCheckout("mensal")}
          className="py-2.5 px-5 font-bold text-xs rounded-xl shadow-sm bg-[#27a768] hover:bg-[#218f59] text-white border-0 cursor-pointer shrink-0"
        >
          Testar agora
        </Button>
      </div>
    </div>
  );
};

export default FloatingCta;
