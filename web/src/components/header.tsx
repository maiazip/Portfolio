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
      role="banner" // Semântica e Acessibilidade: Define o header como banner
    >
      <nav
        className="w-10/12 max-w-screen-lg h-full flex items-center justify-center rounded-b-full bg-gradient-to-b from-violet-900/100 to-violet-900/30 backdrop-blur backdrop-brightness-50 px-2 shadow shadow-violet-500/100"
        aria-label="Navegação principal" // Acessibilidade: Label para a navegação
      >
        <ul className="w-full h-full flex flex-row items-center justify-evenly max-md:text-2xl select-none">
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Início"
              aria-label="Ir para a seção inicial"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.hero)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbHome className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Início</span>
            </button>
          </li>
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Introdução"
              aria-label="Ir para a seção de introdução"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.intro)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbAppWindow className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Introdução</span>
            </button>
          </li>
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Sobre mim"
              aria-label="Ir para a seção sobre mim"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.about)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbUser className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Sobre</span>
            </button>
          </li>
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Certificados"
              aria-label="Ir para a seção de certificados"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.certificates)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbTrophy className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Certificados</span>
            </button>
          </li>
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Sobre Meu Trabalho"
              aria-label="Ir para a seção sobre meu trabalho"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.work)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbBriefcase className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Trabalho</span>
            </button>
          </li>
          <li className="group">
            {" "}
            {/* Semântica: Adicionado 'group' para agrupar ícone e texto */}
            <button // Semântica e Acessibilidade: Usando <button> para ações de navegação
              title="Projetos"
              aria-label="Ir para a seção de projetos"
              className="group-hover:scale-95 group-hover:text-yellow-200 cursor-pointer flex flex-col items-center justify-center" // Acessibilidade: Removido hover:cursor-pointer e adicionado no container <button>
              onClick={() => handleNavigation(sectionRefs.projects)}
              tabIndex={0} // Acessibilidade: tabIndex 0 para elementos interativos
            >
              <TbCode className="md:hidden" aria-hidden="true" />{" "}
              {/* Acessibilidade: aria-hidden em ícones decorativos */}
              <span className="hidden md:block">Projetos</span>
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
