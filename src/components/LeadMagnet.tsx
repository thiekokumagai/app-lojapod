import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, CheckCircle2, ArrowRight, Gift } from "lucide-react";
import { toast } from "sonner";

interface LeadMagnetProps {
  onOpenCheckout?: (plan: "mensal" | "anual") => void;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ onOpenCheckout }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) {
      toast.error("Por favor, preencha seu e-mail ou WhatsApp.");
      return;
    }
    toast.success("Cupom de 25% OFF ativado com sucesso! Redirecionando...");
    if (onOpenCheckout) {
      setTimeout(() => {
        onOpenCheckout("anual");
      }, 1000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-slate-900/90 border-2 border-lime-400/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-mono font-bold text-lime-400">
            <Gift className="h-4 w-4" />
            <span className="uppercase tracking-widest">OFERTA DE BOAS-VINDAS LOJAPOD</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-space tracking-tight text-white">
              PRONTO PARA ELEVAR <span className="text-lime-400">O NÍVEL DAS SUAS VENDAS?</span>
            </h2>
            <p className="text-slate-300 font-mono text-sm sm:text-base max-w-2xl mx-auto">
              Cadastre seu contato agora e receba <strong className="text-lime-400 underline">25% DE DESCONTO EXCLUSIVO</strong> no Plano Anual + 14 dias de teste grátis sem cartão.
            </p>
          </div>

          {/* Form Capture */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Digite seu melhor e-mail ou WhatsApp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 rounded-full py-6 px-6 font-mono text-sm focus:border-lime-400 focus:ring-lime-400"
            />
            <Button
              type="submit"
              className="bg-lime-400 hover:bg-lime-500 text-slate-950 font-extrabold font-mono text-sm uppercase py-6 px-8 rounded-full shadow-lg shadow-lime-400/20 gap-2 shrink-0 border-0"
            >
              <span>Resgatar 25% OFF</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-lime-400" />
              <span>Sem Spams, Apenas Ofertas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-lime-400" />
              <span>Ativação Instantânea via Pix</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-lime-400" />
              <span>Cancelamento Grátis a qualquer momento</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
