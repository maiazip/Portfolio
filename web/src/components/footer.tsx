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
      className="z-50 w-11/12 h-fit flex items-start justify-center font-heading font-medium leading-none"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Footer de contato e informações" // Acessibilidade: Aria-label para o footer
    >
      <nav className="w-11/12 h-full flex flex-col items-end justify-end gap-1 px-8 pt-8 pb-2 max-w-screen-lg rounded-t-[4rem] bg-gradient-to-b from-violet-900 to-violet-900/30 shadow-sm shadow-violet-500/100 backdrop-blur backdrop-brightness-50">
        <ul
          className="w-full h-fit flex flex-row flex-wrap justify-center items-center gap-2"
          aria-label="Links de redes sociais" // Acessibilidade: Aria-label para a lista de links sociais
        >
          <li className="w-fit h-fit flex flex-row gap-1 items-center justify-center hover:scale-95 hover:text-lime-300">
            <a
              href="https://www.linkedin.com/in/maiazip/"
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="LinkedIn do portfólio" // Acessibilidade: Aria-label para o link
            >
              <TbBrandLinkedin
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
            </a>
          </li>
          <li className="w-fit h-fit flex flex-row gap-1 items-center justify-center hover:scale-95 hover:text-lime-300">
            <a
              href="https://github.com/maiazip"
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="GitHub do portfólio" // Acessibilidade: Aria-label para o link
            >
              <TbBrandGithub
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
            </a>
          </li>
          <li className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300">
            <a
              href="https://maiazip.github.io/LinkTree/" // Substituir pelo link correto do portfólio online
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="Link para o portfólio online" // Acessibilidade: Aria-label para o link
            >
              <TbLink
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
            </a>
          </li>

          <li className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300">
            <a
              href="https://wa.me/5585994522374" // Substituir pelo número correto com código do país
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="WhatsApp para contato" // Acessibilidade: Aria-label para o link
            >
              <TbBrandWhatsapp
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
            </a>
          </li>

          <li className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300">
            <a
              href="https://t.me/seu_usuario_telegram" // Substituir pelo username correto do Telegram
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="Telegram para contato" // Acessibilidade: Aria-label para o link
            >
              <TbBrandTelegram
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
            </a>
          </li>
        </ul>

        <ul
          className="w-full h-fit flex flex-row flex-wrap justify-center items-center gap-2"
          aria-label="Links de contato e créditos" // Acessibilidade: Aria-label para a lista de links de contato e créditos
        >
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="mailto:maia.zip@hotmail.com"
              aria-label="Enviar email para maiazip@hotmail.com" // Acessibilidade: Aria-label para o link
            >
              <TbMail
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
              <span className="text-base">maiazip@hotmail.com</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="tel:+5585994522374" // Formato tel: para links de telefone
              aria-label="Ligar para +55 (85) 9 9452-2374" // Acessibilidade: Aria-label para o link
            >
              <TbPhone
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
              <span className="text-base">+55 (85) 9 9452 - 2374</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://storyset.com/"
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="Créditos das ilustrações - Storyset (abre em nova janela)" // Acessibilidade: Aria-label para o link
            >
              <TbSvg
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
              <span className="text-base">Illustrations by - Storyset</span>
            </a>
          </li>
          <li>
            <a
              className="w-fit h-fit flex flex-row gap-1 items-center justify-center transition-all duration-300 hover:scale-95 hover:text-lime-300"
              href="https://tabler-icons.io/"
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="Créditos dos ícones - Tabler Icons (abre em nova janela)" // Acessibilidade: Aria-label para o link
            >
              <TbIcons
                className="text-xl text-yellow-200 hover:text-orange-300"
                aria-hidden="true" // Acessibilidade: Aria-hidden nos ícones, pois o link já tem aria-label
              />
              <span className="text-base">Icons by - Tabler</span>
            </a>
          </li>
        </ul>
        <span className="w-full flex items-center justify-center text-center">
          © 2025 "Matheus Maia Bastos" All rights reserved.
        </span>
      </nav>
    </motion.footer>
  );
}
