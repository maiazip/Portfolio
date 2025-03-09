"use client";

import Header from "@/components/header";
import Hero from "./hero";
import Intro from "../intro/intro";
import About from "../about/about";
import Work from "../work/work";
import Projects from "../projects/projects";
import Certificates from "../certificates/certificates";
import Footer from "@/components/footer";
import { useRef } from "react";

export default function Home() {
  // Referências para as seções para navegação e acessibilidade
  const heroRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const certificatesRef = useRef<HTMLElement | null>(null);

  return (
    <main
      className="w-full max-w-screen h-fit min-h-dvh flex flex-col items-center justify-start scroll-smooth select-none overflow-hidden" // Responsividade: justify-baseline -> justify-start para alinhamento no topo
      id="main-content" // Acessibilidade: ID para referência principal de conteúdo
    >
      <Header
        sectionRefs={{
          hero: heroRef,
          intro: introRef,
          about: aboutRef,
          work: workRef,
          projects: projectsRef,
          certificates: certificatesRef,
        }}
      />
      <Hero heroRef={heroRef} introRef={introRef} />
      <Intro ref={introRef} />
      <About ref={aboutRef} />
      <Certificates ref={certificatesRef} />
      <Work ref={workRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </main>
  );
}
