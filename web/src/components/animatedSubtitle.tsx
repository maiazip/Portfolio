"use client";

import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedSubtitleProps {
  texts: string[];
  className?: string;
  animationDelay?: number;
}

const AnimatedSubtitle: React.FC<AnimatedSubtitleProps> = ({
  texts,
  className,
  animationDelay = 0,
}) => {
  const motionRef = useRef<HTMLDivElement>(null);
  const typeAnimationRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(motionRef, { once: true });

  const sequence: (string | number)[] = [];

  texts.forEach((text) => {
    sequence.push(`{ ${text} }`);
    sequence.push(1000);
  });

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
      ref={motionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ display: "inline-block" }}
    >
      <TypeAnimation
        ref={typeAnimationRef}
        sequence={sequence}
        wrapper="span"
        speed={50}
        className="font-heading font-light capitalize text-center text-xl md:text-2xl lg:text-3xl text-lime-300"
        repeat={Infinity}
      />
    </motion.div>
  );
};

export default AnimatedSubtitle;
