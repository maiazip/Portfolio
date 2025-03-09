"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, Variants } from "framer-motion";

interface IllustrationProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  animationDelay?: number;
  ariaHidden?: boolean; // Acessibilidade: Prop para controlar aria-hidden
}

const Illustration: React.FC<IllustrationProps> = ({
  src,
  alt = "Ilustração",
  className,
  animationDelay = 0,
  ariaHidden = false, // Acessibilidade: Prop para controlar aria-hidden, padrão false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: animationDelay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ position: "relative", width: "100%", height: "50dvh" }}
      aria-hidden={ariaHidden} // Acessibilidade: Condicionalmente aplica aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{}}
        priority={!ariaHidden && true}
      />{" "}
      {/* Acessibilidade & Performance: priority prop condicional */}
    </motion.div>
  );
};

export default Illustration;
