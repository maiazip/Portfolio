"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TbDiamonds } from "react-icons/tb";

export function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="w-full h-10 flex flex-row items-center justify-center gap-1 bg-red-00"
    >
      <span className="w-full h-0.5 md:h-1 bg-gradient-to-r even:bg-gradient-to-l from-lime-300 via-orange-300 to-neutral-100" />
      <TbDiamonds className="size-20 transition-all ease-in-out duration-300 hover:-rotate-90 hover:text-orange-300" />
      <span className="w-full h-0.5 md:h-1 bg-gradient-to-l even:bg-gradient-to-r from-lime-300 via-orange-300 to-neutral-100" />
    </motion.div>
  );
}
