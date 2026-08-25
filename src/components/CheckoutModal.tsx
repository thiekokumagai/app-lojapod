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
  Mail, 
  Lock,
  Globe,
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: "mensal" | "anual";
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [title, setTitle] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [createdStore, setCreatedStore] = useState<any>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!subdomain || subdomain === slugify(title)) {
      setSubdomain(slugify(val));
    }
  };

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubdomain(slugify(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !adminEmail.trim()) {
      toast.error("Por favor, preencha o Nome da Loja e o E-mail do Administrador.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await registerTrialStore({
        title: title.trim(),
        subdomain: subdomain.trim() || slugify(title),
        adminEmail: adminEmail.trim().toLowerCase(),
        password: password.trim() || 'admin123',
      });

      setCreatedStore(res);
      toast.success("Sua conta foi criada com sucesso! 7 dias grátis liberados.");
    } catch (err: any) {
      toast.error(err.message || "Erro ao criar a conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCreatedStore(null);
    setTitle("");
    setSubdomain("");
    setAdminEmail("");
    setPassword("");
    onClose();
  };

  const adminUrl = import.meta.env.VITE_ADMIN_URL || "https://admin.lojapod.com.br";

  return (
    <Dialog open={isOpen} onOpenChange={handleReset}>
      <DialogContent className="sm:max-w-lg p-0 flex flex-col rounded-3xl bg-white border-slate-200 text-slate-900 shadow-2xl overflow-hidden">
        {/* Header Banner */}
        <div className="shrink-0 bg-[#27a768] p-6 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>TESTE GRÁTIS POR 7 DIAS</span>
            </span>
            <span className="text-xs font-bold text-white/90">SEM COMPROMISSO</span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {createdStore ? "Sua Loja Está Pronta!" : "Criar sua conta no LojaPOD"}
          </DialogTitle>

          <DialogDescription className="text-xs text-white/90 leading-relaxed mt-1">
            {createdStore
              ? "Parabéns! Sua loja foi criada com sucesso com 7 dias de acesso total liberado."
              : "Preencha os dados abaixo para criar sua conta e usar o aplicativo em menos de 2 minutos."}
          </DialogDescription>
        </div>

        {/* Form or Success State */}
        <div className="p-6 bg-white space-y-4 font-sans">
          {!createdStore ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Título da Loja */}
              <div className="space-y-1.5">
                <Label htmlFor="title" className="text-xs font-semibold text-slate-700">
                  Nome da sua Loja <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="title"
                    placeholder="Ex: Minha Loja Pod"
                    value={title}
                    onChange={handleTitleChange}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#27a768] rounded-xl h-12 text-base sm:text-sm font-medium"
                  />
                  <Store className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Field 2: Subdomínio (URL) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="subdomain" className="text-xs font-semibold text-slate-700">
                    Link da sua Loja (URL)
                  </Label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {subdomain ? `${subdomain}.lojapod.com.br` : 'sualoja.lojapod.com.br'}
                  </span>
                </div>
                <div className="relative flex items-center">
                  <Input
                    id="subdomain"
                    placeholder="minhaloja"
                    value={subdomain}
                    onChange={handleSubdomainChange}
                    className="pl-10 pr-32 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#27a768] rounded-xl h-12 text-base sm:text-sm font-mono"
                  />
                  <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <span className="absolute right-3 text-xs font-mono font-bold text-slate-400 pointer-events-none select-none">
                    .lojapod.com.br
                  </span>
                </div>
              </div>

              {/* Field 3: E-mail do Administrador */}
              <div className="space-y-1.5">
                <Label htmlFor="adminEmail" className="text-xs font-semibold text-slate-700">
                  E-mail do Administrador <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="adminEmail"
                    type="email"
                    placeholder="admin@minhaloja.com.br"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    required
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#27a768] rounded-xl h-12 text-base sm:text-sm"
                  />
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Field 4: Senha Inicial do Admin */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-semibold text-slate-700">
                  Senha Inicial de Acesso (Padrão: admin123)
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Crie sua senha de acesso"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#27a768] rounded-xl h-12 text-base sm:text-sm"
                  />
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="p-3.5 bg-[#e6f7ef] rounded-xl border border-emerald-200 text-xs text-[#218f59] flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#27a768] shrink-0 mt-0.5" />
                <span>Ao criar a conta, você ganha 7 dias de acesso total e ilimitado a todas as ferramentas.</span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 py-3 px-6 font-bold rounded-xl shadow-sm bg-[#27a768] hover:bg-[#218f59] text-white border-0 gap-2 text-sm cursor-pointer transition-all"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Testar agora</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-6 space-y-6 text-center">
              <div className="w-16 h-16 bg-[#e6f7ef] rounded-full flex items-center justify-center mx-auto text-[#27a768]">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 uppercase">Loja Criada Com Sucesso!</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Sua loja <strong>{createdStore.title || title}</strong> está cadastrada e seus 7 dias de teste grátis foram ativados.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subdomínio:</span>
                  <span className="font-bold text-slate-900">{createdStore.subdomain || subdomain}.lojapod.com.br</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">E-mail Admin:</span>
                  <span className="font-bold text-slate-900">{adminEmail}</span>
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
                  className="w-full py-3.5 font-bold rounded-xl shadow-sm bg-[#27a768] hover:bg-[#218f59] text-white border-0 gap-2 text-sm cursor-pointer transition-all"
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

export default CheckoutModal;
