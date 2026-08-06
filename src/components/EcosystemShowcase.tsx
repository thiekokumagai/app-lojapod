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
  Star
} from "lucide-react";

export const EcosystemShowcase: React.FC = () => {
  return (
    <section id="ecossistema" className="py-16 sm:py-24 border-b border-white/10 relative bg-zinc-950/40">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-3.5 w-3.5 fill-current" />
            <span>Ecossistema Integrado de Ponta a Ponta</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white leading-tight">
            3 Módulos Poderosos em <span className="text-gradient-fire">Perfeita Sintonia</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-lg">
            Veja como a experiência do comprador, o controle do gestor e a expedição de balcão conversam em tempo real.
          </p>
        </div>

        <Tabs defaultValue="cliente" className="w-full">
          <TabsList className="grid grid-cols-3 h-14 sm:h-16 p-1 bg-zinc-900/90 border border-white/10 rounded-2xl mb-8 sm:mb-10 max-w-3xl mx-auto backdrop-blur-md">
            <TabsTrigger 
              value="cliente" 
              className="rounded-xl font-bold font-space text-[10px] sm:text-sm px-1 sm:px-3 gap-1 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-zinc-400"
            >
              <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">1. Cliente</span>
            </TabsTrigger>
            <TabsTrigger 
              value="admin" 
              className="rounded-xl font-bold font-space text-[10px] sm:text-sm px-1 sm:px-3 gap-1 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-zinc-400"
            >
              <LayoutDashboard className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">2. Admin</span>
            </TabsTrigger>
            <TabsTrigger 
              value="print" 
              className="rounded-xl font-bold font-space text-[10px] sm:text-sm px-1 sm:px-3 gap-1 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-zinc-400"
            >
              <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">3. Print</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: FRONT CLIENTE */}
          <TabsContent value="cliente" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-white/15 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  EXPERIÊNCIA DO CLIENTE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-white">
                  Catálogo Virtual Ultra Rápido & WhatsApp
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  O cliente escolhe pods descartáveis ou juices com filtros por marca e nicotina e finaliza o pedido direto no WhatsApp da loja em menos de 1 minuto.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-zinc-200 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Filtros instantâneos por Marca, Sabores e Puffs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Cálculo dinâmico de frete por KM/distância no carrinho</span>
                  </li>
                </ul>
              </div>

              {/* Visual Demo Card */}
              <div className="lg:col-span-6 border border-white/10 rounded-2xl p-4 sm:p-6 bg-zinc-900/90 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-red-500 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-white truncate">PREVIEW VITRINE VIRTUAL</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded shrink-0">ONLINE</span>
                </div>

                <div className="space-y-2.5 font-sans text-xs">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-xs">Elf Bar BC5000 Watermelon</div>
                      <div className="text-zinc-500 text-[10px]">Qtd: 2x • Nicotina 5%</div>
                    </div>
                    <span className="text-red-400 font-extrabold text-xs sm:text-sm">R$ 180,00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-xs">Ignite V50 Grape Ice</div>
                      <div className="text-zinc-500 text-[10px]">Qtd: 1x • Nicotina 5%</div>
                    </div>
                    <span className="text-red-400 font-extrabold text-xs sm:text-sm">R$ 110,00</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-extrabold">
                    <span className="text-white">Total com Frete:</span>
                    <span className="text-emerald-400 text-sm">R$ 290,00</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: PAINEL ADMIN */}
          <TabsContent value="admin" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-white/15 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  PAINEL ADMINISTRATIVO
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-white">
                  Gestão Total de Vendas, PDV Balcão & Estoque
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Gerencie vendas do balcão e WhatsApp em um único lugar com alarme de estoque baixo e controle de faturamento real.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-zinc-200 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Lançamento manual de pedidos no caixa (PDV)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Alerta de estoque crítico para sabores populares</span>
                  </li>
                </ul>
              </div>

              {/* Visual Demo Admin */}
              <div className="lg:col-span-6 border border-white/10 rounded-2xl p-4 sm:p-6 bg-zinc-900/90 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-white">DASHBOARD ADMIN</span>
                  <span className="text-[10px] sm:text-xs text-red-400 font-bold">● EM TEMPO REAL</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 sm:p-4 rounded-xl bg-zinc-950 border border-white/10">
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">Vendas de Hoje</div>
                    <div className="text-lg sm:text-2xl font-extrabold text-white font-space mt-1">R$ 3.420,00</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold mt-1">↑ +24% vs ontem</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-zinc-950 border border-white/10">
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">Pedidos WhatsApp</div>
                    <div className="text-lg sm:text-2xl font-extrabold text-white font-space mt-1">42 pedidos</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-400 font-bold mt-1">✓ Finalizados</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: PRINT */}
          <TabsContent value="print" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center glass-card-cro border border-white/15 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  CENTRAL DE IMPRESSÃO & MOTOBOY
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-space text-white">
                  Impressão Térmica Direta & Rotas GPS
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Envie o comprovante do pedido diretamente para a impressora térmica conectada no seu caixa e gere a rota no Waze/Google Maps para seu motoboy em 1 clique.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-zinc-200 font-medium pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Compatível com impressoras 58mm e 80mm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span>Geração de rota otimizada no mapa para entregador</span>
                  </li>
                </ul>
              </div>

              {/* Receipt Visual */}
              <div className="lg:col-span-6 border border-white/10 rounded-2xl p-4 sm:p-6 bg-zinc-950 font-mono text-[11px] sm:text-xs text-zinc-300 space-y-2 shadow-2xl">
                <div className="text-center font-bold text-xs sm:text-sm border-b border-dashed border-zinc-700 pb-2 text-white">
                  === LOJAPOD - TICKET BALCÃO ===
                </div>
                <div>PEDIDO: #1048</div>
                <div>CLIENTE: Carlos Silva (WhatsApp)</div>
                <div className="border-t border-b border-dashed border-zinc-700 py-2 my-2 space-y-1">
                  <div>2x ELF BAR BC5000 (WATERMELON) - R$ 180,00</div>
                  <div>1x IGNITE V50 (GRAPE ICE) - R$ 110,00</div>
                </div>
                <div className="text-right font-extrabold text-xs sm:text-sm text-white">TOTAL PIX: R$ 290,00</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
