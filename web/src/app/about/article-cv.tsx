"use client";

import { type ComponentProps, useState, useRef } from "react";
import { TbX } from "react-icons/tb";
import Image from "next/image";
import cv from "@/assets/cv.png";
import { motion, Variants, useInView } from "framer-motion";

interface ArticleCvProps extends ComponentProps<"article"> {}

export function ArticleCv(props: ArticleCvProps) {
  const [showCv, setShowCv] = useState(false);
  const refLeft = useRef<HTMLButtonElement>(null);
  const refRight = useRef<HTMLButtonElement>(null);
  const isInViewLeft = useInView(refLeft, { once: true });
  const isInViewRight = useInView(refRight, { once: true });

  const handleShowCv = () => {
    setShowCv(true);
  };

  const handleHideCv = () => {
    setShowCv(false);
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cv.src; // Use cv.src para obter o caminho da imagem
    link.download = "cv.png"; // Nome do arquivo a ser baixado
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonVariants: Variants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <article
      className="w-full min-h-fit flex flex-col items-center justify-baseline gap-2 transition-all ease-in-out duration-500"
      {...props}
    >
      <div className="w-full flex flex-row items-center justify-evenly gap-2">
        <motion.button
          ref={refLeft}
          variants={buttonVariants}
          initial="hiddenLeft"
          animate={isInViewLeft ? "visible" : "hiddenLeft"}
          className="p-1 w-2/5 min-w-32 font-heading font-semibold text-white text-sm md:text-base lg:text-lg bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 hover:scale-95 transition-all duration-300 hover:text-yellow-200"
          onClick={handleShowCv}
          tabIndex={8}
        >
          Mostrar Currículo
        </motion.button>
        <motion.button
          ref={refRight}
          variants={buttonVariants}
          initial="hiddenRight"
          animate={isInViewRight ? "visible" : "hiddenRight"}
          className="p-1 w-2/5 min-w-32 font-heading font-semibold text-white text-sm md:text-base lg:text-lg bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 hover:scale-95 transition-all duration-300 hover:text-yellow-200"
          onClick={handleDownloadCv}
          aria-label="Baixar Currículo como imagem PNG"
          tabIndex={9}
        >
          Baixar Currículo
        </motion.button>
      </div>

      <div
        className={`w-full max-w-screen-sm max-h-[80dvh] transition-all duration-500 ease-in-out ${
          showCv
            ? "opacity-100 h-[550px] lg:h-[1100px]"
            : "opacity-0 h-0 pointer-events-none"
        }`}
      >
        <button
          title="Hide Cv"
          className="p-2 text-lg w-full font-heading font-semibold bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 border-b-0 transition-all duration-300 hover:text-yellow-200"
          onClick={handleHideCv}
        >
          <TbX />
        </button>
        <Image className="w-full h-full" src={cv} alt="" />
      </div>
    </article>
  );
}
