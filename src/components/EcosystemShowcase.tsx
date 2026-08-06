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
    <section id="ecossistema" className="py-24 border-b border-slate-200/80 bg-slate-50 relative">
      <div className="container px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-200 bg-white text-rose-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Flame className="h-3.5 w-3.5 fill-current text-rose-600" />
            <span>Ecossistema Integrado LojaPod</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-slate-900 leading-tight">
            3 Módulos em <span className="text-gradient-rose">Sintonia Perfeita</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg">
            Acompanhe a jornada completa do pedido: da escolha pelo cliente até a impressão no seu balcão.
          </p>
        </div>

        <Tabs defaultValue="cliente" className="w-full">
          <TabsList className="grid grid-cols-3 h-16 p-1.5 bg-white border border-slate-200 rounded-2xl mb-10 max-w-3xl mx-auto shadow-md">
            <TabsTrigger 
              value="cliente" 
              className="rounded-xl font-bold font-space text-xs sm:text-sm gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-600 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-600"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>1. Front Cliente</span>
            </TabsTrigger>
            <TabsTrigger 
              value="admin" 
              className="rounded-xl font-bold font-space text-xs sm:text-sm gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-600 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-600"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>2. Painel Admin</span>
            </TabsTrigger>
            <TabsTrigger 
              value="print" 
              className="rounded-xl font-bold font-space text-xs sm:text-sm gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-600 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-600"
            >
              <Printer className="h-4 w-4" />
              <span>3. Central Print</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: FRONT CLIENTE */}
          <TabsContent value="cliente" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-light border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="lg:col-span-6 space-y-5">
                <span className="bg-rose-100 text-rose-700 border border-rose-200 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  CATÁLOGO DO COMPRADOR
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold font-space text-slate-900">
                  Vitrine Digital Intuitiva & Finalização WhatsApp
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Seus clientes navegam entre pods descartáveis e juices com filtros de sabor e te enviam o pedido pronto no WhatsApp em menos de 1 minuto.
                </p>
                <ul className="space-y-3 text-sm text-slate-800 font-medium pt-2">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Filtros instantâneos por Marca, Sabores e Puffs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Carrinho dinâmico responsivo sem travar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Cálculo automático de total e mensagem Pix</span>
                  </li>
                </ul>
              </div>

              {/* Visual Preview */}
              <div className="lg:col-span-6 border border-slate-200 rounded-2xl p-6 bg-white shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-rose-600" />
                    <span className="text-xs font-mono font-bold text-slate-900">VITRINE VIRTUAL</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">ONLINE</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900">Elf Bar BC5000 Watermelon</div>
                      <div className="text-slate-500">Qtd: 2x • Nicotina 5%</div>
                    </div>
                    <span className="text-rose-600 font-extrabold text-sm">R$ 180,00</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900">Ignite V50 Grape Ice</div>
                      <div className="text-slate-500">Qtd: 1x • Nicotina 5%</div>
                    </div>
                    <span className="text-rose-600 font-extrabold text-sm">R$ 110,00</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-extrabold">
                    <span className="text-slate-900">Total com Pix:</span>
                    <span className="text-emerald-600 text-base">R$ 290,00</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: PAINEL ADMIN */}
          <TabsContent value="admin" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-light border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="lg:col-span-6 space-y-5">
                <span className="bg-rose-100 text-rose-700 border border-rose-200 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  PAINEL DE CONTROL
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold font-space text-slate-900">
                  Gestão Total de Vendas e Sabores
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Controle a disponibilidade dos seus pods em tempo real. Alerte sobre produtos esgotando e veja métricas consolidadas de faturamento.
                </p>
                <ul className="space-y-3 text-sm text-slate-800 font-medium pt-2">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Alerta de estoque crítico para sabores populares</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Criação de cupons promocionais em segundos</span>
                  </li>
                </ul>
              </div>

              {/* Visual Admin */}
              <div className="lg:col-span-6 border border-slate-200 rounded-2xl p-6 bg-white shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-900">MÉTRICAS DO DIA</span>
                  <span className="text-xs text-rose-600 font-bold">● EM TEMPO REAL</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Vendas de Hoje</div>
                    <div className="text-2xl font-extrabold text-slate-900 font-space mt-1">R$ 3.420,00</div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">↑ +24% vs ontem</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-medium">Pedidos WhatsApp</div>
                    <div className="text-2xl font-extrabold text-slate-900 font-space mt-1">42 pedidos</div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">✓ Finalizados</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: PRINT */}
          <TabsContent value="print" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-light border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="lg:col-span-6 space-y-5">
                <span className="bg-rose-100 text-rose-700 border border-rose-200 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  CENTRAL DE IMPRESSÃO
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold font-space text-slate-900">
                  Impressão Térmica de Comprovantes
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Envie o comprovante do pedido diretamente para a impressora térmica conectada no seu caixa ou área de expedição.
                </p>
                <ul className="space-y-3 text-sm text-slate-800 font-medium pt-2">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>Compatível com impressoras 58mm e 80mm</span>
                  </li>
                </ul>
              </div>

              {/* Receipt Preview */}
              <div className="lg:col-span-6 border border-slate-300 rounded-2xl p-6 bg-slate-900 text-white font-mono text-xs space-y-2 shadow-xl">
                <div className="text-center font-bold text-sm border-b border-dashed border-slate-700 pb-2">
                  === LOJAPOD COURIER ===
                </div>
                <div>PEDIDO: #1048</div>
                <div className="border-t border-b border-dashed border-slate-700 py-2 my-2 space-y-1">
                  <div>2x ELF BAR BC5000 (WATERMELON) - R$ 180,00</div>
                  <div>1x IGNITE V50 (GRAPE ICE) - R$ 110,00</div>
                </div>
                <div className="text-right font-extrabold text-sm text-rose-400">TOTAL PIX: R$ 290,00</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
