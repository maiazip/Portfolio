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
  const heroRef = useRef<HTMLElement | null>();
  const introRef = useRef<HTMLElement | null>();
  const aboutRef = useRef<HTMLElement | null>();
  const workRef = useRef<HTMLElement | null>();
  const projectsRef = useRef<HTMLElement | null>();
  const certificatesRef = useRef<HTMLElement | null>();

  return (
    <main className="w-full max-w-screen h-fit min-h-dvh flex flex-col items-center justify-baseline scroll-smooth select-none">
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
      <Work ref={workRef} />
      <Projects ref={projectsRef} />
      <Certificates ref={certificatesRef} />
      <Footer />
    </main>
  );
}
