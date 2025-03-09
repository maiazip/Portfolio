"use client";

import { Title } from "@/components/title";
import { TbCode } from "react-icons/tb";
import svg from "../../assets/projects.svg";
import AnimatedSubtitle from "@/components/animatedSubtitle";
import Icon from "@/components/icon";
import Illustration from "@/components/illustration";
import { ArticleProjects } from "./article-projects";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="w-full max-w-screen-lg min-h-fit flex flex-col items-center justify-start p-8 gap-2"
      aria-label="Seção de Projetos" // Acessibilidade: Aria-label para a section
    >
      <Icon icon={<TbCode />} ariaHidden={true} />{" "}
      {/* Acessibilidade: Aria-hidden para ícone decorativo */}
      <Title>Projetos</Title>
      <Illustration
        src={svg}
        alt="Ilustração da seção de Projetos" // Acessibilidade: Alt text para ilustração
      />
      <AnimatedSubtitle
        texts={["Galeria de Projetos", "Vitrine de repositórios"]}
      />
      <ArticleProjects />
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
