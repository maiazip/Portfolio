"use client";

import React, { ReactNode, isValidElement, cloneElement, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface IconProps {
  icon: ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fixedClassName =
    "size-10 md:size-12 lg:size-14 text-orange-300 hover:scale-80 hover:rotate-360 transition-all duration-500 inline-block";

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (isValidElement(icon)) {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {cloneElement(icon, {
          className: `${
            icon.props && (icon.props as { className?: string }).className
              ? (icon.props as { className?: string }).className + " "
              : ""
          }${fixedClassName}`,
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
    >
      <span>{icon}</span>
    </motion.span>
  );
};

export default Icon;
