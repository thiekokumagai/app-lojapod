import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Zap } from "lucide-react";

interface FloatingCtaProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 border-t border-slate-200 backdrop-blur-xl shadow-[0_-8px_25px_rgba(15,23,42,0.1)] sm:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="text-xs font-extrabold font-space text-slate-900">Plano Mensal Pro</div>
          <div className="text-sm font-extrabold text-red-600">R$ 149,99/mês</div>
        </div>
        <Button
          variant="gradient"
          size="sm"
          onClick={() => onOpenCheckout("mensal")}
          className="py-4 px-5 font-extrabold text-xs rounded-xl shadow-md shadow-red-500/20 gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white border-0"
        >
          <Flame className="h-4 w-4 fill-white" />
          <span>Assinar Agora</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
