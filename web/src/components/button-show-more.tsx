"use client";

import { type ComponentProps, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ButtonShowMoreProps extends ComponentProps<"button"> {
  showMore: () => void;
  showLess: () => void;
  itemsToShow: number;
  totalItems: number;
}

export function ButtonShowMore({
  showMore,
  showLess,
  itemsToShow,
  totalItems,
  ...props
}: ButtonShowMoreProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(buttonRef, { once: true });

  const isAllItemsShown = itemsToShow >= totalItems;
  const hasMoreItems = totalItems - itemsToShow >= 3;

  if (isAllItemsShown && itemsToShow <= 3) {
    return null; // Não renderiza o botão se não houver mais itens e se apenas 3 forem mostrados
  }

  if (!hasMoreItems && !isAllItemsShown) {
    return null; // Não renderiza o botão se não houver mais itens e se não estiverem todos sendo mostrados
  }

  const expanded = isAllItemsShown; // Acessibilidade: Variável para aria-expanded

  return (
    <motion.button
      ref={buttonRef}
      className="p-1 w-2/5 min-w-32 font-heading font-semibold text-sm md:text-base lg:text-lg bg-gradient-to-bl odd:bg-gradient-to-br from-violet-400 to-indigo-950 border-2 border-violet-400/80 hover:scale-95 hover:text-yellow-200 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={isAllItemsShown ? showLess : showMore}
      aria-expanded={expanded} // Acessibilidade: Aria-expanded para indicar estado de expansão
      aria-controls="items-container" // Acessibilidade: Aria-controls para associar ao container de itens (substituir 'items-container' pelo ID real)
    >
      {isAllItemsShown ? "Exibir Menos" : "Exibir Mais"}
    </motion.button>
  );
}
