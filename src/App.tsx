import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModuleSwapper } from "@/components/ModuleSwapper";
import { FormulaBenefits } from "@/components/FormulaBenefits";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingCta } from "@/components/FloatingCta";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "sonner";

export function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"mensal" | "anual">("mensal");

  const handleOpenCheckout = (plan: "mensal" | "anual" = "mensal") => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col antialiased pb-16 sm:pb-0">
      <Header onOpenCheckout={handleOpenCheckout} />
      <main className="flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} />
        <ModuleSwapper onOpenCheckout={handleOpenCheckout} />
        <FormulaBenefits />
        <Pricing onOpenCheckout={handleOpenCheckout} />
        <FAQ />
      </main>
      <Footer onOpenCheckout={handleOpenCheckout} />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlan}
      />
      <FloatingCta onOpenCheckout={handleOpenCheckout} />
      <ScrollToTop />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
