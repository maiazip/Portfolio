"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CallToAction } from "./call-to-action";
import { forwardRef } from "react";

interface HeroProps {
  heroRef: React.RefObject<HTMLElement | null>;
  introRef: React.RefObject<HTMLElement | null>; // Adicionado introRef
}

const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ heroRef, introRef }, ref) => {
    return (
      <section
        ref={ref || heroRef}
        id="hero"
        className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden"
      >
        <CallToAction introRef={introRef} /> {/* Passando introRef */}
        <motion.span
          className="absolute w-full h-dvh z-30"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="object-cover"
            src="/planet.svg"
            fill={true}
            alt="Svg Illustration"
          />
        </motion.span>
        <motion.span
          className="absolute w-full h-dvh z-20"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            className="object-cover"
            src="/clouds.svg"
            fill={true}
            alt="Svg Illustration"
          />
        </motion.span>
        <motion.span
          className="absolute w-full h-dvh z-10"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            className="object-cover"
            src="/rocks.svg"
            fill={true}
            alt="Svg Illustration"
          />
        </motion.span>
        <motion.span
          className="absolute w-full h-dvh z-20"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            className="object-cover"
            src="/plants.svg"
            fill={true}
            alt="Svg Illustration"
          />
        </motion.span>
        <motion.span
          className="absolute w-full h-dvh z-30"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="object-cover"
            src="/floor.svg"
            fill={true}
            alt="Svg Illustration"
          />
        </motion.span>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
