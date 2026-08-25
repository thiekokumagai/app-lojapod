import React from "react";

interface FooterProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 py-16 text-xs">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-3 col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="LojaPOD Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Um sistema de gestão completo para você vender mais e se preocupar menos. Vendas, estoque, caixa, catálogo no WhatsApp, Comprovantes & Impressão automática, motoboys, contas a pagar e investimentos.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">Navegação</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#sobre" className="hover:text-[#27a768] transition-colors">Sobre o sistema</a></li>
              <li><a href="#recursos" className="hover:text-[#27a768] transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-[#27a768] transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-[#27a768] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">Recursos</div>
            <ul className="space-y-2 text-slate-600">
              <li><span className="text-slate-600">Financeiro & Rotas de Motoboy</span></li>
              <li><span className="text-slate-600">Contas a Pagar & Despesas</span></li>
              <li><span className="text-slate-600">Módulo de Investimento (ROI)</span></li>
              <li><span className="text-slate-600">Link para Bio do Instagram</span></li>
              <li><span className="text-slate-600">Catálogo Virtual & PDV</span></li>
              <li><span className="text-slate-600">Comprovantes & Impressão automática</span></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">Ações</div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a 
                  href={import.meta.env.VITE_ADMIN_URL || "http://localhost:5174"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#27a768] font-semibold text-slate-900 transition-colors"
                >
                  Entrar / Painel Admin
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenCheckout("mensal")} 
                  className="text-[#27a768] font-bold hover:underline cursor-pointer"
                >
                  Testar agora (7 dias grátis)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} LojaPod. Todos os direitos reservados.
          </div>
          <div className="text-slate-500 font-medium">
            Simples e Inteligente!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
