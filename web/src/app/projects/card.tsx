"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { TbBrandGithub, TbDeviceDesktop } from "react-icons/tb";

interface CardProps {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({
  src,
  title,
  description,
  technologies,
  link,
}) => {
  const ref = useRef<HTMLDivElement>(null); // Mudado para HTMLDivElement
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
    <motion.div // Mudado para motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="w-full h-fit max-w-96 flex flex-col items-center justify-center px-2 py-1 gap-1 rounded-lg bg-gradient-to-tl even:bg-gradient-to-tr from-indigo-400 to-violet-950 border-2 border-indigo-400/50 hover:shadow-md shadow-orange-300 border-opacity-60 hover:scale-95 hover:rotate-6 even:hover:-rotate-6 transition-all"
    >
      <a className="w-full h-full text-center" href={link} target="_blank">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-yellow-200">
          {title}
        </h1>
        <Image
          className="object-fill rounded w-96 h-48"
          src={src}
          alt={title}
          width={400}
          height={400}
        />
        <p className="w-full h-32 text-center place-content-center break-word overflow-scroll bg-indigo-950/50 rounded-md p-2 overflow-x-hidden">
          {description}
        </p>

        <div className="w-full h-17 overflow-y-scroll flex flex-row flex-wrap justify-center items-center gap-1 p-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-950/60 text-lime-300 capitalize rounded-full px-2 py-1 text-sm"
              aria-label={`Tecnologia: ${tech}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <TbBrandGithub size={24} />
          <TbDeviceDesktop size={24} />
        </div>
      </a>
    </motion.div> // Mudado para motion.div
  );
};

export default Card;
