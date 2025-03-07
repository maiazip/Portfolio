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
    >
      <Icon icon={<TbCode />} />
      <Title>Projetos</Title>
      <Illustration src={svg} />
      <AnimatedSubtitle
        texts={["Galeria de Projetos", "Vitrine de repositórios"]}
      />
      <ArticleProjects />
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
