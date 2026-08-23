import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSubscriptionSession, SubscriptionResponse } from "@/lib/api";
import { toast } from "sonner";
import { 
  Check, 
  Copy, 
  Loader2, 
  QrCode, 
  ShieldCheck, 
  Store, 
  Zap, 
  Mail, 
  CheckCircle2,
  Clock,
  ArrowRight,
  Lock
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: "mensal" | "anual";
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = "mensal",
}) => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<SubscriptionResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const priceText = selectedPlan === "mensal" ? "R$ 150,00/mês" : "R$ 1.438,80/ano";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName.trim() || !email.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await createSubscriptionSession({
        storeName: storeName.trim(),
        email: email.trim().toLowerCase(),
        planId: selectedPlan,
      });

      setResponse(res);
      toast.success(res.message || "Assinatura gerada com sucesso!");
    } catch (err: any) {
      toast.error(err.message || "Falha ao processar assinatura.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyPix = () => {
    if (response?.pixCopiaECola) {
      navigator.clipboard.writeText(response.pixCopiaECola);
      setCopied(true);
      toast.success("Código Pix Copia e Cola copiado!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleReset = () => {
    setResponse(null);
    setStoreName("");
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleReset}>
      <DialogContent className="sm:max-w-lg p-0 flex flex-col h-[90vh] sm:h-[85vh] max-h-[720px] rounded-3xl bg-white border-slate-200 text-slate-900 shadow-2xl overflow-hidden">
        {/* Fixed Header Banner */}
        <div className="shrink-0 bg-slate-950 p-5 sm:p-6 border-b border-slate-800 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-2 pr-8">
            <span className="inline-flex items-center gap-1.5 bg-lime-400/20 text-lime-400 border border-lime-400/30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
              <Zap className="h-3 w-3 fill-current" />
              <span>{selectedPlan === "mensal" ? "Plano Mensal Pro" : "Plano Anual VIP"}</span>
            </span>
            <span className="text-base sm:text-lg font-extrabold font-space text-lime-400">{priceText}</span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-extrabold font-space text-white tracking-tight">
            {response ? "Pagamento via Pix Instantâneo" : "Cadastre Sua Loja no LojaPod"}
          </DialogTitle>

          <DialogDescription className="text-xs text-slate-400 leading-relaxed mt-1">
            {response 
              ? "Escaneie o QR Code ou copie a chave Pix para ativar seu catálogo imediatamente."
              : "Preencha os dados abaixo para gerar a cobrança Pix e ativar o catálogo da sua loja."}
          </DialogDescription>

          {/* 2-Step Progress Indicator */}
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-[10px] sm:text-xs font-bold font-mono">
            <div className={`flex items-center gap-1 px-3 py-1 rounded-lg ${!response ? 'bg-lime-400 text-slate-950 font-extrabold' : 'bg-emerald-500/20 text-emerald-400'}`}>
              <span>1. Cadastro da Loja</span>
              {!response ? null : <Check className="h-3 w-3" />}
            </div>
            <span className="text-slate-600">➔</span>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-lg ${response ? 'bg-lime-400 text-slate-950 font-extrabold' : 'bg-slate-900 text-slate-500'}`}>
              <span>2. Pagamento Pix</span>
            </div>
          </div>
        </div>

        {/* Scrollable Main Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-white space-y-4 font-sans">
          {!response ? (
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              {/* Order Summary Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-700 font-bold">
                  <span>Assinatura Escolhida:</span>
                  <span className="text-slate-900 font-space font-extrabold text-sm">{selectedPlan === "mensal" ? "Plano Mensal Pro" : "Plano Anual VIP"}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Valor Recorrente:</span>
                  <span className="text-emerald-700 font-bold text-sm">{priceText}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Onboarding VIP Gratuito
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Lock className="h-3.5 w-3.5" /> Sem fidelidade
                  </span>
                </div>
              </div>

              {/* Form Input 1: Store Name */}
              <div className="space-y-1.5">
                <Label htmlFor="storeName" className="text-xs font-semibold text-slate-700">
                  Nome da sua Loja <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="storeName"
                    placeholder="Ex: VapeShop Central SP"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Store className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Form Input 2: Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
                  E-mail de Acesso Admin Master <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu-email@sualoja.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Conexão direta segura com a API LojaPod. Ativação e liberação do catálogo em menos de 10 segundos.</span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-13 py-3.5 px-6 font-mono font-extrabold uppercase rounded-2xl shadow-lg bg-slate-950 hover:bg-slate-800 text-lime-400 border-0 gap-2 text-sm cursor-pointer transition-all"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Gerar Cobrança Pix & Cadastrar</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-5 text-center">
              {/* Timer Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold">
                <Clock className="h-3.5 w-3.5 animate-pulse text-amber-600" />
                <span>Chave Pix Válida por 15 Minutos</span>
              </div>

              {/* QR Code Container */}
              <div className="p-4 bg-slate-50 rounded-2xl inline-block shadow-lg border-2 border-lime-500/30 relative">
                {response.qrCodePix ? (
                  <img
                    src={response.qrCodePix}
                    alt="QR Code Pix"
                    className="w-52 h-52 mx-auto rounded-lg"
                  />
                ) : (
                  <div className="w-52 h-52 flex items-center justify-center bg-white rounded-lg text-xs text-slate-500 font-bold border border-slate-200">
                    <QrCode className="h-14 w-14 text-lime-600" />
                  </div>
                )}
              </div>

              {/* Pix Copy Box */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">Código Pix Copia e Cola:</div>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value={response.pixCopiaECola || ""}
                    className="text-xs font-mono bg-slate-50 border-slate-200 text-slate-900 select-all h-12"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleCopyPix}
                    className="shrink-0 h-12 px-4 gap-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-extrabold"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copiado!" : "Copiar"}</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
