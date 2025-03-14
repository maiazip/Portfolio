"use client";

import { type ComponentProps, useRef, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";

interface CallToActionProps extends ComponentProps<"button"> {
  introRef: React.RefObject<HTMLElement | null>;
}

export function CallToAction({ introRef, ...props }: CallToActionProps) {
  const CallToActionRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(CallToActionRef, { once: true });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (introRef.current) {
      const headerHeight = 64; // Altura do seu header em pixels (ajuste conforme necessário)
      const sectionTop =
        introRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    } else {
      console.error("Intro section not found or not rendered yet.");
    }
  };

  return (
    <motion.button
      ref={CallToActionRef}
      className="clip-slant-top cip-slant-bottom  z-40 w-80 lg:w-96 p-1 px-2  flex items-center justify-center font-heading font-semibold text-sm md:text-base lg:text-lg text-white bg-gradient-to-t from-violet-900/100 to-violet-900/30 backdrp-blur backdrop-brihtness-50 border border-violet-900 cursor-pointer transition-all duration-300 hover:text-yellow-200 hover:scale-95 transform-3d"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      aria-label="Ir para a seção de introdução e conhecer mais sobre mim" // Acessibilidade: Aria-label mais descritivo
      // tabIndex={7} - Acessibilidade: Removido tabIndex arbitrário
    >
      Começar a Explorar
    </motion.button>
    // Semântica: Texto do botão mais claro e direto
  );
}
