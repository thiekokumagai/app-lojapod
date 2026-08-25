import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  LayoutDashboard, 
  Link2, 
  Package, 
  FolderTree, 
  Sliders, 
  Ticket, 
  ShoppingBag, 
  MapPin, 
  Bike, 
  Users, 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  History, 
  Settings,
  ExternalLink,
  Printer,
  Bell,
  UserCheck,
  CheckCircle2,
  XCircle,
  DollarSign,
  ShoppingCart,
  Eye,
  Percent,
  Clock,
  ChevronDown
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (plan: "mensal" | "anual") => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#F8FAF9] text-slate-900 overflow-hidden">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto text-center">
        
        {/* Top Badge Pill matching ApexComercio */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs sm:text-sm shadow-sm">
            <span className="bg-[#e6f7ef] text-[#27a768] font-bold px-3 py-1 rounded-full">
              Teste por 7 dias
            </span>
            <span className="text-slate-600 font-medium">
              é grátis, sem compromisso
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Um sistema de gestão completo para você vender mais, e se preocupar menos.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
          Vendas, estoques, caixa, catálogo online no WhatsApp, tudo em uma só plataforma!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => onOpenCheckout("mensal")}
            className="bg-[#27a768] hover:bg-[#218f59] text-white font-bold px-8 py-3.5 h-12 rounded-xl text-base shadow-sm border-0 cursor-pointer"
          >
            Testar agora
          </Button>

          <a href="#sobre">
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 px-6 py-3.5 h-12 rounded-xl text-base cursor-pointer"
            >
              Ver demonstração
            </Button>
          </a>
        </div>

        {/* Real System Interface Device Mockup (Exact 1:1 match to screenshot) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto relative">
          <div className="bg-slate-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl ring-1 ring-slate-900/10 relative overflow-hidden">
            
            {/* Screen Window Container */}
            <div className="bg-white rounded-[1.4rem] overflow-hidden text-left relative border border-slate-200 shadow-inner">
              
              {/* Window Header Bar */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-500 font-mono font-medium ml-2">
                    app.lojapod.com.br/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] bg-[#e6f7ef] text-[#27a768] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27a768] animate-pulse" />
                    SISTEMA OPERANDO LIVRE
                  </span>
                </div>
              </div>

              {/* Play / Demo Overlay Button */}
              <div 
                onClick={() => onOpenCheckout("mensal")}
                className="absolute inset-0 bg-slate-900/5 backdrop-blur-[0.5px] z-30 flex items-center justify-center cursor-pointer group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900/85 hover:bg-[#27a768] text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform group-hover:scale-110 border-2 border-white/20">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1" />
                </div>
              </div>

              {/* REAL DASHBOARD SCREENSHOT RECREATION */}
              <div className="flex min-h-[480px] sm:min-h-[580px] bg-slate-50 text-slate-800 text-xs">
                
                {/* Left Dark Sidebar (Exact menu from screenshot) */}
                <div className="w-48 sm:w-56 bg-[#0f172a] text-slate-300 p-3 sm:p-4 flex flex-col justify-between shrink-0 hidden sm:flex">
                  <div className="space-y-4">
                    {/* Brand Header */}
                    <div className="flex items-center gap-2 text-white font-extrabold text-sm border-b border-slate-800 pb-3">
                      <div className="w-6 h-6 rounded bg-[#27a768] text-white flex items-center justify-center text-xs">P</div>
                      <span>Pod e Mais</span>
                    </div>

                    {/* Main Section */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white font-bold bg-[#27a768] px-2.5 py-1.5 rounded-lg">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg cursor-pointer">
                        <Link2 className="h-4 w-4" />
                        <span>Página de Links</span>
                      </div>
                    </div>

                    {/* Catálogo */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] uppercase font-bold text-slate-500 px-2 tracking-wider">Catálogo</div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Package className="h-3.5 w-3.5" /><span>Produtos</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><FolderTree className="h-3.5 w-3.5" /><span>Categorias</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Sliders className="h-3.5 w-3.5" /><span>Variações</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Ticket className="h-3.5 w-3.5" /><span>Cupons</span></div>
                    </div>

                    {/* Vendas */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] uppercase font-bold text-slate-500 px-2 tracking-wider">Vendas</div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><ShoppingBag className="h-3.5 w-3.5" /><span>Pedidos</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><MapPin className="h-3.5 w-3.5" /><span>Mapa de Entregas</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Bike className="h-3.5 w-3.5" /><span>Motoboys</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Users className="h-3.5 w-3.5" /><span>Clientes</span></div>
                    </div>

                    {/* Financeiro */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] uppercase font-bold text-slate-500 px-2 tracking-wider">Financeiro</div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><Wallet className="h-3.5 w-3.5" /><span>Caixa Atual</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><CreditCard className="h-3.5 w-3.5" /><span>Contas Fixas</span></div>
                      <div className="flex items-center gap-2 text-slate-400 hover:text-white px-2 py-1 cursor-pointer"><TrendingUp className="h-3.5 w-3.5" /><span>Módulo de Investimento</span></div>
                    </div>
                  </div>
                </div>

                {/* Right Main Content Area (Matches exact screenshot grid) */}
                <div className="flex-1 p-4 sm:p-6 overflow-hidden space-y-4">
                  
                  {/* Top Bar inside Dashboard */}
                  <div className="flex justify-between items-center border-b pb-3">
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900">Dashboard</h2>
                      <p className="text-[11px] text-slate-500">Monitore o desempenho das suas vendas em tempo real.</p>
                    </div>

                    {/* Filter Pills matching screenshot */}
                    <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 text-[11px]">
                      <span className="bg-[#27a768] text-white px-2.5 py-0.5 rounded font-bold">Hoje</span>
                      <span className="text-slate-600 px-2 py-0.5">7 dias</span>
                      <span className="text-slate-600 px-2 py-0.5">30 dias</span>
                      <span className="text-slate-600 px-2 py-0.5 hidden md:inline">6 meses</span>
                    </div>
                  </div>

                  {/* 8 Metric Cards Grid matching exact screenshot values */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Card 1 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Produtos Ativos</span>
                        <span className="text-lg font-extrabold text-slate-900 block">215</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Produtos Inativos</span>
                        <span className="text-lg font-extrabold text-slate-900 block">354</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <XCircle className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Total Vendas</span>
                        <span className="text-lg font-extrabold text-[#27a768] block">R$ 1.557,95</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#e6f7ef] text-[#27a768] flex items-center justify-center shrink-0">
                        <DollarSign className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Pedidos no Período</span>
                        <span className="text-lg font-extrabold text-slate-900 block">13</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                        <ShoppingBag className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Ticket Médio</span>
                        <span className="text-base font-extrabold text-slate-900 block">R$ 119,84</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#27a768] flex items-center justify-center shrink-0">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Produtos Vendidos</span>
                        <span className="text-lg font-extrabold text-slate-900 block">18</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                        <Package className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Visitas</span>
                        <span className="text-lg font-extrabold text-slate-900 block">339</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                        <Eye className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Conversão</span>
                        <span className="text-lg font-extrabold text-slate-900 block">3.8%</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                        <Percent className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Sales Chart + Top Products */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    
                    {/* Sales Evolution Bar Chart matching screenshot */}
                    <div className="lg:col-span-7 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-3">
                      <div className="font-bold text-slate-900 text-xs">Evolução das Vendas</div>
                      <div className="h-28 flex items-end justify-between gap-1 border-b border-l border-slate-200 p-1 pt-4">
                        <div className="w-full bg-slate-100 h-2 rounded-t" />
                        <div className="w-full bg-slate-100 h-2 rounded-t" />
                        <div className="w-full bg-[#27a768] h-[35%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[55%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[95%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[45%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[50%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[65%] rounded-t" />
                        <div className="w-full bg-[#27a768] h-[80%] rounded-t" />
                      </div>
                    </div>

                    {/* Top Products List matching screenshot */}
                    <div className="lg:col-span-5 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-2">
                      <div className="flex justify-between items-center font-bold text-slate-900 text-xs mb-2">
                        <span>Mais Vendidos</span>
                        <span className="text-[10px] text-slate-400">Categorias</span>
                      </div>
                      
                      <div className="space-y-2 text-[11px]">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                          <div className="truncate pr-2">
                            <span className="font-bold text-slate-800 block truncate">Vaporesso Xros 0.8 ohm</span>
                            <span className="text-[9px] text-slate-400 block">Resistência</span>
                          </div>
                          <span className="font-bold text-[#27a768] shrink-0">3 un.</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                          <div className="truncate pr-2">
                            <span className="font-bold text-slate-800 block truncate">BLVK Mint Spearmint 30ml</span>
                            <span className="text-[9px] text-slate-400 block">NicSalt</span>
                          </div>
                          <span className="font-bold text-[#27a768] shrink-0">2 un.</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="truncate pr-2">
                            <span className="font-bold text-slate-800 block truncate">Ignite V55 Icy Mint 5.5k</span>
                            <span className="text-[9px] text-slate-400 block">Descartável</span>
                          </div>
                          <span className="font-bold text-[#27a768] shrink-0">1 un.</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
