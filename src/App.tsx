import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSystem } from "@/components/AboutSystem";
import { GridFeatures } from "@/components/GridFeatures";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingCta } from "@/components/FloatingCta";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Toaster } from "sonner";

export function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"mensal" | "anual">("mensal");

  const handleOpenCheckout = (plan: "mensal" | "anual" = "mensal") => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-hidden bg-[#F8FAF9] pb-16 text-slate-800 antialiased sm:pb-0">
      <Header onOpenCheckout={handleOpenCheckout} />
      <main className="min-w-0 flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} />
        <ScrollReveal>
          <AboutSystem />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <GridFeatures />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Pricing onOpenCheckout={handleOpenCheckout} />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
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
