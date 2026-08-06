import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar para o topo"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white shadow-2xl shadow-red-600/50 border border-red-400/40 transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-md"
    >
      <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
