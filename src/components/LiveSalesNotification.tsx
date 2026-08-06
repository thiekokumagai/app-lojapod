import React, { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle2, X } from "lucide-react";

export const LiveSalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState({
    store: "Vape Lounge SP",
    city: "São Paulo, SP",
    time: "há 2 minutos",
  });

  const salesList = [
    { store: "PodStore Curitiba", city: "Curitiba, PR", time: "há 1 minuto" },
    { store: "Vape Lounge SP", city: "São Paulo, SP", time: "há 3 minutos" },
    { store: "Tabacaria & Vapes BH", city: "Belo Horizonte, MG", time: "há 4 minutos" },
    { store: "Imperium Pods", city: "Rio de Janeiro, RJ", time: "há 6 minutos" },
    { store: "Hookah & Pod Club", city: "Campinas, SP", time: "há 8 minutos" },
  ];

  useEffect(() => {
    // Show toast 3 seconds after load
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Rotate sales every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        const randomSale = salesList[Math.floor(Math.random() * salesList.length)];
        setCurrentSale(randomSale);
        setIsVisible(true);
      }, 1000);
    }, 14000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-bounce-short">
      <div className="glass-card-cro p-3.5 px-4 rounded-2xl border border-emerald-500/40 bg-zinc-950/90 text-white shadow-2xl flex items-center gap-3 backdrop-blur-xl max-w-xs sm:max-w-sm">
        <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="flex-1 text-xs">
          <div className="font-extrabold font-space text-white flex items-center gap-1.5">
            <span>{currentSale.store}</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-1.5 py-0.2 rounded">
              Assinou Mensal
            </span>
          </div>
          <div className="text-zinc-400 text-[11px] mt-0.5">
            {currentSale.city} • <span className="text-zinc-300 font-medium">{currentSale.time}</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-500 hover:text-white p-1"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
