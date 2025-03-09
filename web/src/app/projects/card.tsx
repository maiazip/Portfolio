"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { TbBrandGithub, TbDeviceDesktop } from "react-icons/tb";

// Utility component for visually hidden text
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <span className="visually-hidden">{children}</span>;
};

interface CardProps {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  altText: string; // altText prop is now required and part of CardProps
}

const Card: React.FC<CardProps> = ({
  src,
  title,
  description,
  technologies,
  link,
  altText, // altText prop is now required
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
      className="w-full h-fit max-w-96 flex flex-col items-center justify-center px-2 py-1 rounded-lg bg-gradient-to-tl even:bg-gradient-to-tr from-violet-400 to-indigo-950 border-2 border-violet-400/50 hover:shadow-md shadow-orange-300 border-opacity-60 hover:scale-95 hover:rotate-6 even:hover:-rotate-6 transition-all"
    >
      <a
        className="w-full h-full text-center flex flex-col gap-1"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver projeto ${title} no Github em nova aba`} // Aria-label for link - IMPROVED
      >
        <VisuallyHidden>
          Ver projeto {title} no Github em nova aba
        </VisuallyHidden>{" "}
        {/* Visually hidden link text - IMPROVED */}
        <h1 className="text-xl md:text-2xl lg:text-3xl text-yellow-200">
          {title}
        </h1>
        <Image
          className="object-fill rounded w-96 h-48"
          src={src}
          alt={altText} // Using the required altText prop - IMPROVED
          width={400}
          height={400}
        />
        <p className="description-scroll w-full h-32 text-center place-content-center break-word overflow-y-scroll bg-indigo-950/50 rounded-md p-2 overflow-x-hidden">
          {description}
        </p>
        <div className="technologies-scroll w-full h-17 overflow-y-scroll flex flex-row flex-wrap justify-center items-center gap-1 p-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-violet-950/60 text-lime-300 capitalize rounded-full px-2 py-1 text-sm"
              aria-label={`Tecnologia: ${tech}`} // Aria-label for technology badge - MAINTAINED
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
