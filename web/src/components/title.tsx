"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.h1 // Now directly using motion.h1 - SIMPLIFIED
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="font-heading font-light capitalize text-center text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-violet-50 to-violet-400"
    >
      {children}
    </motion.h1>
  );
}
