"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";

// Utility component for visually hidden text
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <span className="visually-hidden">{children}</span>;
};

interface CardProps {
  src: string;
  title: string;
  institution: string;
  hours: string;
  date: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({
  src,
  title,
  institution,
  hours,
  date,
  altText,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
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
      className="w-full h-fit max-w-96 flex flex-col items-center justify-center px-2 py-1 gap-1 rounded-lg bg-gradient-to-tl even:bg-gradient-to-tr from-indigo-400 to-violet-950 border-2 border-indigo-400/50 hover:shadow-md shadow-orange-300 border-opacity-60 hover:scale-95 hover:rotate-6 even:hover:-rotate-6 transition-all"
    >
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex flex-col items-center text-center"
        aria-label={`Ver certificado de ${title} da instituição ${institution} em nova aba`}
      >
        <VisuallyHidden>
          Ver certificado de {title} da instituição {institution} em nova aba
        </VisuallyHidden>
        <h1 className=" text-lg md:text-xl lg:text-2xl text-yellow-200">
          {title}
        </h1>
        <Image
          className="object-cover rounded w-96 h-48"
          src={src}
          alt={altText}
          width={400}
          height={400}
        />
        <div className="bg-indigo-950/50 w-full rounded-sm">
          <p className="text-lime-300 flex flex-col items-center justify-center">
            Instituição <span className="text-white">{institution}</span>
          </p>
          <p className="text-lime-300 flex flex-col items-center justify-center">
            Carga Horária <span className="text-white">{hours}</span>
          </p>
          <p className="text-lime-300 flex flex-col items-center justify-center">
            Conclusão <span className="text-white">{date}</span>
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
