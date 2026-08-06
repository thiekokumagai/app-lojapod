import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Zap } from "lucide-react";

interface FloatingCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-zinc-950/95 border-t border-red-500/30 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.8)] sm:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="text-xs font-bold font-space text-white">Plano Mensal Pro</div>
          <div className="text-sm font-extrabold text-red-400">R$ 149,99/mês</div>
        </div>
        <Button
          variant="gradient"
          size="sm"
          onClick={() => onOpenCheckout("mensal")}
          className="py-5 px-5 font-extrabold text-xs rounded-xl shadow-lg shadow-red-600/40 gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white"
        >
          <Flame className="h-4 w-4 fill-white" />
          <span>Assinar Agora</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
