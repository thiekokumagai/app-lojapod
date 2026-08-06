import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { createSubscriptionSession, SubscriptionResponse } from "@/lib/api";
import { toast } from "sonner";
import { Check, Copy, Loader2, QrCode, ShieldCheck, Sparkles, Store, Zap } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: "mensal" | "anual";
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<SubscriptionResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const priceText = selectedPlan === "mensal" ? "R$ 149,99/mês" : "R$ 1.438,80/ano";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName || !email || !phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await createSubscriptionSession({
        storeName,
        email,
        phone,
        cpfCnpj,
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
    setPhone("");
    setCpfCnpj("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleReset}>
      <DialogContent className="sm:max-w-md p-6 max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-slate-200 text-slate-900 shadow-2xl">
        <DialogHeader className="space-y-3 text-left">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 border border-rose-200 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
              <Zap className="h-3 w-3 fill-current" />
              <span>Plano {selectedPlan === "mensal" ? "Mensal Recorrente" : "Anual com Desconto"}</span>
            </span>
            <span className="text-base font-extrabold font-space text-rose-600">{priceText}</span>
          </div>

          <DialogTitle className="text-2xl font-extrabold font-space text-slate-900">
            {response ? "Pagamento via Pix Instantâneo" : "Cadastre Sua Loja no LojaPod"}
          </DialogTitle>

          <DialogDescription className="text-xs text-slate-500 leading-relaxed">
            {response 
              ? "Escaneie o QR Code abaixo ou copie a chave Pix para liberar seu painel administrativo imediatamente."
              : "Informe os dados da sua loja para gerar a chave Pix direta na API e ativar seu acesso."}
          </DialogDescription>
        </DialogHeader>

        {!response ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="storeName" className="text-xs font-semibold text-slate-700">
                Nome da sua Loja <span className="text-rose-600">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="storeName"
                  placeholder="Ex: VapeShop Central"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                  className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rose-500 rounded-xl"
                />
                <Store className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
                E-mail de Acesso Admin <span className="text-rose-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contato@sualoja.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rose-500 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                  WhatsApp da Loja <span className="text-rose-600">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rose-500 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="cpfCnpj" className="text-xs font-semibold text-slate-700">
                  CPF ou CNPJ
                </Label>
                <Input
                  id="cpfCnpj"
                  placeholder="00.000.000/0001-00"
                  value={cpfCnpj}
                  onChange={(e) => setCpfCnpj(e.target.value)}
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rose-500 rounded-xl"
                />
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Conexão segura direta com a api-lojapod. Liberação automática pós-confirmação.</span>
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={isLoading}
              className="w-full h-14 text-base font-extrabold rounded-2xl shadow-lg shadow-rose-500/25 mt-2 bg-gradient-to-r from-rose-600 to-rose-500 text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Gerando Assinatura via API...</span>
                </div>
              ) : (
                <span>Confirmar & Ir para Pagamento Pix</span>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-5 pt-2 text-center">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl inline-block shadow-md">
              {response.qrCodePix ? (
                <img
                  src={response.qrCodePix}
                  alt="QR Code Pix"
                  className="w-48 h-48 mx-auto rounded-lg"
                />
              ) : (
                <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg text-xs text-gray-500">
                  <QrCode className="h-12 w-12 text-primary" />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-600">Chave Pix Copia e Cola:</div>
              <div className="flex items-center gap-2">
                <Input
                  readOnly
                  value={response.pixCopiaECola || ""}
                  className="text-xs font-mono bg-slate-100 border-slate-200 text-slate-800 select-all"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCopyPix}
                  className="shrink-0 gap-1.5 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Copiado" : "Copiar"}</span>
                </Button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={response.adminUrl || (import.meta.env.VITE_ADMIN_URL || "http://localhost:5174")}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button variant="gradient" className="w-full h-12 rounded-xl gap-2 font-bold bg-gradient-to-r from-rose-600 to-rose-500 text-white">
                  <span>Ir para o Painel Admin da Loja</span>
                </Button>
              </a>
              <Button variant="ghost" onClick={handleReset} className="w-full text-xs text-slate-500 hover:text-slate-800">
                Fechar Janela
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
