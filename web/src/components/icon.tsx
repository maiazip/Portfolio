"use client";

import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  useRef,
  ReactElement,
  HTMLAttributes,
} from "react";
import { motion, useInView } from "framer-motion";

interface IconProps {
  icon: ReactNode;
  ariaHidden?: boolean; // Acessibilidade: Prop para controlar aria-hidden (opcional)
}

const Icon: React.FC<IconProps> = ({ icon, ariaHidden = true }) => {
  // Acessibilidade: Default ariaHidden agora é true
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const fixedClassName =
    "size-10 md:size-12 lg:size-14 text-orange-300 hover:scale-80 hover:rotate-360 transition-all duration-500 inline-block";

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (isValidElement(icon)) {
    const element = icon as ReactElement<HTMLAttributes<HTMLElement>>;
    const elementClassName = element.props?.className || "";

    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        aria-hidden={ariaHidden} // Acessibilidade: Condicionalmente aplica aria-hidden
      >
        {cloneElement(element, {
          className: `${elementClassName} ${fixedClassName}`.trim(),
        })}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      aria-hidden={ariaHidden} // Acessibilidade: Condicionalmente aplica aria-hidden
    >
      <span>{icon}</span>
    </motion.span>
  );
};

export default Icon;
