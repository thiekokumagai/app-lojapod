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
import { registerTrialStore } from "@/lib/api";
import { toast } from "sonner";
import { 
  CheckCircle2, 
  Loader2, 
  ShieldCheck, 
  Store, 
  Zap, 
  Mail, 
  Phone, 
  Lock,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: "mensal" | "anual";
}

function formatPhoneMask(val: string): string {
  const digits = val.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName.trim() || !email.trim() || !phone.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    try {
      const cleanPhone = phone.replace(/\D/g, '');
      const res = await registerTrialStore({
        title: storeName.trim(),
        adminEmail: email.trim().toLowerCase(),
        phone: cleanPhone,
        password: password.trim() || 'admin123',
      });

      setSuccessData(res);
      toast.success("Sua loja foi criada com sucesso! 7 dias grátis liberados.");
    } catch (err: any) {
      toast.error(err.message || "Erro ao cadastrar a loja. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setStoreName("");
    setEmail("");
    setPhone("");
    setPassword("");
    onClose();
  };

  const adminUrl = import.meta.env.VITE_ADMIN_URL || "https://admin.lojapod.com.br";

  return (
    <Dialog open={isOpen} onOpenChange={handleReset}>
      <DialogContent className="sm:max-w-lg p-0 flex flex-col rounded-3xl bg-white border-slate-200 text-slate-900 shadow-2xl overflow-hidden">
        {/* Fixed Header Banner */}
        <div className="shrink-0 bg-slate-950 p-6 border-b border-slate-800 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 bg-lime-400/20 text-lime-400 border border-lime-400/30 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5 fill-current" />
              <span>7 DIAS DE TESTE GRÁTIS</span>
            </span>
            <span className="text-xs font-mono font-bold text-slate-400">R$ 0,00 HOJE</span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-extrabold font-space text-white tracking-tight">
            {successData ? "Sua Loja Está Pronta!" : "Cadastre Sua Loja no LojaPod"}
          </DialogTitle>

          <DialogDescription className="text-xs text-slate-400 leading-relaxed mt-1">
            {successData
              ? "Parabéns! Sua loja foi criada com sucesso com 7 dias de acesso total liberado."
              : "Preencha os dados abaixo para criar sua loja e ativar seu teste grátis instantaneamente."}
          </DialogDescription>
        </div>

        {/* Form or Success State */}
        <div className="p-6 bg-white space-y-4 font-sans">
          {!successData ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order Summary Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-700 font-bold">
                  <span>Plano Escolhido:</span>
                  <span className="text-slate-900 font-space font-extrabold text-sm">Teste Grátis 7 Dias</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Valor Hoje:</span>
                  <span className="text-emerald-700 font-bold text-sm">R$ 0,00</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Ativação em menos de 10 seg
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Lock className="h-3.5 w-3.5" /> Sem cartão necessário
                  </span>
                </div>
              </div>

              {/* Input 1: Store Name */}
              <div className="space-y-1.5">
                <Label htmlFor="storeName" className="text-xs font-semibold text-slate-700">
                  Nome da sua Loja <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="storeName"
                    placeholder="Ex: VapeShop Central"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Store className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Input 2: Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold text-slate-700">
                  E-mail do Administrador <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu-email@sualoja.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Input 3: Phone (With WhatsApp Mask!) */}
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                  WhatsApp da Loja <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneMask(e.target.value))}
                    maxLength={15}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Input 4: Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-semibold text-slate-700">
                  Senha de Acesso (Opcional - padrão: admin123)
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Crie sua senha de acesso"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-lime-500 rounded-xl h-12 text-sm"
                  />
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ao cadastrar, você ganha 7 dias de acesso total e ilimitado ao sistema de gestão e catálogo.</span>
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
                    <span>Criar Minha Loja (Teste Grátis 7 Dias)</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-6 space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 font-space uppercase">Loja Criada Com Sucesso!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Sua loja <strong>{successData.title || storeName}</strong> está cadastrada e seus 7 dias de teste grátis foram ativados.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">E-mail:</span>
                  <span className="font-bold text-slate-900">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Senha:</span>
                  <span className="font-bold text-slate-900">{password || 'admin123'}</span>
                </div>
              </div>

              <a
                href={adminUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Button
                  className="w-full py-4 font-mono font-extrabold uppercase rounded-2xl shadow-lg bg-lime-400 hover:bg-lime-500 text-slate-950 border-0 gap-2 text-sm cursor-pointer"
                >
                  <span>Acessar Painel de Gestão</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
