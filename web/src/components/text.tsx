"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export function Text({ children }: TextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="font-sans font-normal text-center break-words text-base md:text-xl lg:text-2xl text-white leading-tight"
    >
      {children}
    </motion.p>
  );
}
