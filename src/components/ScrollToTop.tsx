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
      className="lp-glass fixed bottom-20 right-4 z-50 grid h-11 w-11 place-items-center rounded-full text-white transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer sm:bottom-6 sm:right-6"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
