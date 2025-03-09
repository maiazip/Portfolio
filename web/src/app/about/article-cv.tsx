"use client";

import { type ComponentProps, useState, useRef } from "react";
import { TbX } from "react-icons/tb";
import Image from "next/image";
import cv from "@/assets/cv.png";
import { motion, Variants } from "framer-motion";

interface ArticleCvProps extends ComponentProps<"article"> {}

export function ArticleCv(props: ArticleCvProps) {
  const [showCv, setShowCv] = useState(false);
  const cvButtonRef = useRef<HTMLButtonElement>(null); // Acessibilidade: Ref para o botão "Mostrar Currículo"

  const handleShowCv = () => {
    setShowCv(true);
    if (cvButtonRef.current) {
      cvButtonRef.current.focus(); // Acessibilidade: Focar no botão "Fechar" ao mostrar o CV
    }
  };

  const handleHideCv = () => {
    setShowCv(false);
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cv.src;
    link.download = "cv.png";
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
      aria-label="Artigo com opções de Currículo" // Acessibilidade: Aria-label para o article
    >
      <div className="w-full flex flex-row items-center justify-evenly gap-2">
        <motion.button
          variants={buttonVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-1 w-1/3 min-w-32 font-heading font-semibold text-white text-sm md:text-base lg:text-lg bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 hover:scale-95 transition-all duration-300 hover:text-yellow-200"
          onClick={handleShowCv}
          tabIndex={8}
          aria-expanded={showCv} // Acessibilidade: Aria-expanded para indicar se o CV está visível
          aria-controls="cv-image-container" // Acessibilidade: Aria-controls para associar botão ao container do CV
          ref={cvButtonRef} // Acessibilidade: Ref para focar no botão "Fechar"
        >
          Mostrar Currículo
        </motion.button>
        <motion.button
          variants={buttonVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-1 w-1/3 min-w-32 font-heading font-semibold text-white text-sm md:text-base lg:text-lg bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 hover:scale-95 transition-all duration-300 hover:text-yellow-200"
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
        id="cv-image-container" // Acessibilidade: ID para aria-controls
        aria-hidden={!showCv} // Acessibilidade: Aria-hidden para esconder o container do CV quando não visível
      >
        <button
          title="Fechar Currículo"
          className="p-2 text-lg w-full font-heading font-semibold bg-gradient-to-bl odd:bg-gradient-to-br from-indigo-400 to-violet-950 border-2 border-indigo-400/80 border-b-0 transition-all duration-300 hover:text-yellow-200"
          onClick={handleHideCv}
          aria-label="Fechar visualização do Currículo" // Acessibilidade: Aria-label para o botão de fechar
        >
          <TbX />
        </button>
        <Image
          className="w-full h-full"
          src={cv}
          alt="Currículo de Matheus Maia Bastos em formato de imagem PNG"
        />{" "}
        {/* Acessibilidade: Alt text descritivo para a imagem do CV */}
      </div>
    </article>
  );
}
