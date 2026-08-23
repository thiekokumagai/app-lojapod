import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FloatingCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-slate-950/95 border-t border-slate-800 backdrop-blur-xl shadow-[0_-8px_25px_rgba(0,0,0,0.5)] sm:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div>
          <div className="flex items-center gap-1 text-xs font-black font-space uppercase text-white tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-lime-400" />
            <span>TESTE GRÁTIS</span>
          </div>
          <div className="text-[11px] font-mono font-bold text-lime-400 mt-0.5">
            7 DIAS • R$ 0,00 HOJE
          </div>
        </div>
        <Button
          size="sm"
          onClick={() => onOpenCheckout("mensal")}
          className="py-3.5 px-4 font-mono font-extrabold text-xs uppercase rounded-full shadow-lg gap-1.5 bg-lime-400 hover:bg-lime-500 text-slate-950 border-0 cursor-pointer shrink-0"
        >
          <span>Testar 7 Dias Grátis</span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-950" />
        </Button>
      </div>
    </div>
  );
};
