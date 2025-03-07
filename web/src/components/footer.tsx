"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbLink,
  TbBrandWhatsapp,
  TbBrandTelegram,
  TbMail,
  TbPhone,
  TbSvg,
  TbIcons,
} from "react-icons/tb";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <motion.footer
      ref={footerRef}
      className="z-50 w-full h-fit flex items-start justify-center font-heading font-medium leading-none"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-11/12 h-full flex flex-col items-end justify-end gap-1 px-8 pt-8 pb-2 max-w-screen-lg rounded-t-[4rem] bg-gradient-to-b from-violet-900 to-violet-900/30 shadow-sm shadow-violet-500/100 backdrop-blur backdrop-brightness-50">
        <ul className="w-full h-fit flex flex-row flex-wrap justify-center items-center gap-2">
          <li
            className="w-fit h-fit flex flex-row gap-1 items-center justify-center hover:scale-95 hover:text-lime-300"
            title="social"
          >
            <a href="https://www.linkedin.com/in/maiazip/" target="_blank">
              <TbBrandLinkedin className="text-xl text-yellow-200 hover:text-orange-300" />
            </a>
          </li>
          <li
            className="w-fit h-fit flex flex-row gap-1 items-center justify-center hover:scale-95 hover:text-lime-300"
            title="social"
          >
            <a href="https://www.linkedin.com/in/maiazip/" target="_blank">
              <TbBrandGithub className="text-xl text-yellow-200 hover:text-orange-300" />
            </a>
          </li>
          <li
            className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
            title="social"
          >
            <a href="https://www.linkedin.com/in/maiazip/" target="_blank">
              <TbLink className="text-xl text-yellow-200 hover:text-orange-300" />
            </a>
          </li>

          <li
            className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
            title="social"
          >
            <a href="https://www.linkedin.com/in/maiazip/" target="_blank">
              <TbBrandWhatsapp className="text-xl text-yellow-200 hover:text-orange-300" />
            </a>
          </li>

          <li
            className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
            title="social"
          >
            <a href="https://www.linkedin.com/in/maiazip/" target="_blank">
              <TbBrandTelegram className="text-xl text-yellow-200 hover:text-orange-300" />
            </a>
          </li>
        </ul>

        <ul className="w-full h-fit flex flex-row flex-wrap justify-center items-center gap-2">
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://www.linkedin.com/in/maiazip/"
              target="_blank"
            >
              <TbMail className="text-xl text-yellow-200 hover:text-orange-300" />
              <span className="text-base">maiazip@hotmail.com</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://www.linkedin.com/in/maiazip/"
              target="_blank"
            >
              <TbPhone className="text-xl text-yellow-200 hover:text-orange-300" />
              <span className="text-base">+55 (85) 9 9452 - 2374</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://www.linkedin.com/in/maiazip/"
              target="_blank"
            >
              <TbSvg className="text-xl text-yellow-200 hover:text-orange-300" />
              <span className="text-base">Illustrations by - Storyset</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://www.linkedin.com/in/maiazip/"
              target="_blank"
            >
              <TbIcons className="text-xl text-yellow-200 hover:text-orange-300" />
              <span className="text-base">Icons by - Tabler</span>
            </a>
          </li>
        </ul>
        <span className="w-full flex items-center justify-center">
          © 2025 "Decode" All rights reserved.
        </span>
      </nav>
    </motion.footer>
  );
}
