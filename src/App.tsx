import React, { useState } from "react";
import { TopTicker } from "@/components/TopTicker";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { EcosystemShowcase } from "@/components/EcosystemShowcase";
import { Comparison } from "@/components/Comparison";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
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
    <div className="min-h-screen bg-[#070709] text-white flex flex-col antialiased pb-16 sm:pb-0">
      <TopTicker />
      <Header onOpenCheckout={handleOpenCheckout} />
      <main className="flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} />
        <Features onOpenCheckout={handleOpenCheckout} />
        <EcosystemShowcase />
        <Comparison />
        <RoiCalculator onOpenCheckout={handleOpenCheckout} />
        <Pricing onOpenCheckout={handleOpenCheckout} />
        <Testimonials />
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
