import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  LayoutDashboard, 
  Printer, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Smartphone,
  Flame,
  Star,
  MapPin
} from "lucide-react";

export const EcosystemShowcase: React.FC = () => {
  return (
    <section id="ecossistema" className="py-16 sm:py-24 border-b border-slate-200/80 relative bg-slate-50/70">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-3.5 w-3.5 fill-current" />
            <span>Ecossistema Integrado de Ponta a Ponta</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            3 Módulos Poderosos em <span className="text-gradient-fire">Perfeita Sintonia</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-lg">
            Veja como a experiência do comprador, o controle do gestor e a expedição de balcão conversam em tempo real.
          </p>
        </div>

        <Tabs defaultValue="cliente" className="w-full">
          <TabsList className="grid grid-cols-3 h-14 sm:h-16 p-1.5 bg-white border border-slate-200 rounded-2xl mb-8 sm:mb-10 max-w-3xl mx-auto shadow-sm">
            <TabsTrigger 
              value="cliente" 
              className="rounded-xl font-bold font-space text-[11px] sm:text-sm px-1 sm:px-3 gap-1.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600"
            >
              <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">1. Cliente</span>
            </TabsTrigger>
            <TabsTrigger 
              value="admin" 
              className="rounded-xl font-bold font-space text-[11px] sm:text-sm px-1 sm:px-3 gap-1.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600"
            >
              <LayoutDashboard className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">2. Admin</span>
            </TabsTrigger>
            <TabsTrigger 
              value="print" 
              className="rounded-xl font-bold font-space text-[11px] sm:text-sm px-1 sm:px-3 gap-1.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md text-slate-600"
            >
              <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">3. Print & Rota</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: FRONT CLIENTE */}
          <TabsContent value="cliente" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden bg-white">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-100 text-red-700 border border-red-200 text-[10px] sm:text-xs font-mono font-extrabold px-3 py-1 rounded-full uppercase">
                  EXPERIÊNCIA DO CLIENTE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-slate-900">
                  Catálogo Virtual Ultra Rápido & WhatsApp
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  O cliente escolhe pods descartáveis ou juices com filtros por marca e nicotina e finaliza o pedido direto no WhatsApp da loja em menos de 1 minuto.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Filtros instantâneos por Marca, Sabores e Puffs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Cálculo dinâmico de frete por KM/distância no carrinho</span>
                  </li>
                </ul>
              </div>

              {/* Visual Real System Smartphone Device Mockup */}
              <div className="lg:col-span-6 flex justify-center items-center py-2">
                <div className="relative mx-auto border-slate-900 bg-slate-900 border-[10px] sm:border-[12px] rounded-[2.5rem] sm:rounded-[3rem] h-auto max-w-[280px] sm:max-w-[310px] shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900/20 group">
                  {/* Notch / Dynamic Island */}
                  <div className="w-[100px] sm:w-[115px] h-[16px] sm:h-[18px] bg-slate-950 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-950 border border-blue-800/40" />
                  </div>

                  {/* Side Buttons */}
                  <div className="h-[28px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[60px] rounded-l-lg" />
                  <div className="h-[40px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[105px] rounded-l-lg" />
                  <div className="h-[40px] w-[3px] bg-slate-800 absolute -left-[13px] sm:-left-[15px] top-[155px] rounded-l-lg" />
                  <div className="h-[55px] w-[3px] bg-slate-800 absolute -right-[13px] sm:-right-[15px] top-[120px] rounded-r-lg" />

                  {/* Phone Screen Container */}
                  <div className="rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden bg-white relative">
                    <img 
                      src="/images/real_system_storefront.png" 
                      alt="LojaPod no Celular" 
                      className="w-full h-auto object-cover max-h-[460px] group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Home Indicator Bar */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-900/40 rounded-full z-20" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: PAINEL ADMIN */}
          <TabsContent value="admin" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden bg-white">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-100 text-red-700 border border-red-200 text-[10px] sm:text-xs font-mono font-extrabold px-3 py-1 rounded-full uppercase">
                  PAINEL ADMINISTRATIVO SAAS
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-slate-900">
                  Gestão Total de Vendas, PDV Balcão & Estoque
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Gerencie vendas do balcão e WhatsApp em um único lugar com alarme de estoque baixo e controle de faturamento real.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Lançamento manual de pedidos no caixa (PDV Presencial)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Alerta de estoque crítico para sabores populares</span>
                  </li>
                </ul>
              </div>

              {/* Visual Generated Image Admin Dashboard */}
              <div className="lg:col-span-6 border border-slate-200 rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src="/images/admin_dashboard.png" 
                  alt="Painel Administrativo LojaPod SaaS"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: PRINT & MOTOBOY */}
          <TabsContent value="print" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden bg-white">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-100 text-red-700 border border-red-200 text-[10px] sm:text-xs font-mono font-extrabold px-3 py-1 rounded-full uppercase">
                  CENTRAL DE EXPEDIÇÃO & ROTAS
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-slate-900">
                  Impressão Térmica Direta & Rotas GPS
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Envie o comprovante do pedido diretamente para a impressora térmica conectada no seu caixa e gere a rota no Waze/Google Maps para seu motoboy em 1 clique.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Compatível com impressoras 58mm e 80mm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <span>Geração de rota otimizada por KM no mapa para entregador</span>
                  </li>
                </ul>
              </div>

              {/* Visual Multi-Stop Motoboy Delivery Route Map */}
              <div className="lg:col-span-6 relative border border-slate-200 rounded-2xl overflow-hidden shadow-xl group bg-slate-900">
                <img 
                  src="/images/motoboy_route_map.png" 
                  alt="Rota Multi-pedidos Google Maps para Motoboy no LojaPod"
                  className="w-full h-auto max-h-[460px] object-cover group-hover:scale-105 transition-transform duration-500 mx-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-bold font-space flex items-center justify-between w-full">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-extrabold">
                      <MapPin className="h-4 w-4" /> Rota Multi-Pedidos Google Maps & Waze
                    </span>
                    <span className="bg-emerald-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-mono uppercase">
                      1-CLICK WHATSAPP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
