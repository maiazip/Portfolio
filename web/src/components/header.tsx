"use client";

import {
  TbAppWindow,
  TbBriefcase,
  TbCode,
  TbHome,
  TbTrophy,
  TbUser,
} from "react-icons/tb";
import { motion } from "framer-motion";

interface HeaderProps {
  sectionRefs: {
    hero: React.RefObject<HTMLElement | null>;
    intro: React.RefObject<HTMLElement | null>;
    about: React.RefObject<HTMLElement | null>;
    work: React.RefObject<HTMLElement | null>;
    projects: React.RefObject<HTMLElement | null>;
    certificates: React.RefObject<HTMLElement | null>;
  };
}

export default function Header({ sectionRefs }: HeaderProps) {
  const handleNavigation = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const headerHeight = 64; // Altura do seu header em pixels (ajuste conforme necessário)
      const sectionTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className="fixed z-50 w-full h-16 flex items-start justify-center font-heading font-medium leading-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-10/12 max-w-screen-lg h-full flex items-center justify-center rounded-b-full bg-gradient-to-b from-violet-900/100 to-violet-900/30 backdrop-blur backdrop-brightness-50 px-2 shadow shadow-violet-500/100">
        <ul className="w-full h-full flex flex-row items-center justify-evenly max-md:text-2xl select-none">
          <li
            title="Início"
            aria-label="Seção Inicial"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.hero)}
            tabIndex={1}
          >
            <TbHome className="md:hidden" />
            <span className="hidden md:block">Início</span>
          </li>
          <li
            title="Introdução"
            aria-label="Seção de Introdução"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.intro)}
            tabIndex={2}
          >
            <TbAppWindow className="md:hidden" />
            <span className="hidden md:block">Introdução</span>
          </li>
          <li
            title="Sobre mim"
            aria-label="Seção Sobre Mim"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.about)}
            tabIndex={3}
          >
            <TbUser className="md:hidden" />
            <span className="hidden md:block">Sobre</span>
          </li>
          <li
            title="Certificados"
            aria-label="Seção de certificados"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.certificates)}
            tabIndex={6}
          >
            <TbTrophy className="md:hidden" />
            <span className="hidden md:block">Certificados</span>
          </li>
          <li
            title="Sobre Meu Trabalho"
            aria-label="Seção sobre meu trabalho"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.work)}
            tabIndex={4}
          >
            <TbBriefcase className="md:hidden" />
            <span className="hidden md:block">Trabalho</span>
          </li>
          <li
            title="Projetos"
            aria-label="Seção de projetos"
            className="hover:scale-95 hover:text-yellow-200 hover:cursor-pointer"
            onClick={() => handleNavigation(sectionRefs.projects)}
            tabIndex={5}
          >
            <TbCode className="md:hidden" />
            <span className="hidden md:block">Projetos</span>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
