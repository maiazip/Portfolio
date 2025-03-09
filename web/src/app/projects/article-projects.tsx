"use client";

import { useState } from "react";
import { ButtonShowMore } from "../../components/button-show-more";
import Card from "./card";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    src: "https://raw.githubusercontent.com/maiazip/Portfolio/main/previewDesktop.png",
    link: "https://github.com/maiazip/Portfolio",
    title: "Portfolio",
    description: "Algo me diz que você conhece este Website de algum lugar...",
    technologies: [
      "React",
      "Next.js",
      "Tailwind.css",
      "Typescript",
      "Motion",
      "React-Type-Animation",
      "Slick-Carousel",
      "Vercel",
    ],
  },
  {
    src: "https://raw.githubusercontent.com/maiazip/Upbuddy/main/Preview.png",
    link: "https://github.com/maiazip/Upbuddy",
    title: "UpBuddy",
    description:
      "Projeto Full Stack utilizando a API da OpenAi e outras tecnologias listadas abaixo permite que você faça o upload de vídeos e extraia deles uma transcrição precisa em texto do conteúdo do vídeo.",
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "Tailwind.css",
      "RadixUi",
      "Shadcn/ui",
      "Lucide React",
      "Ffmpeg.wasm",
      "axios",
      "Node.js",
      "Fastify",
      "Prisma",
      "Typescript",
      "Fastify-multipart",
      "Zod",
      "OpenAi API",
      "Vercel AI SDK",
    ],
  },
  {
    src: "https://github.com/maiazip/AudioNotes/raw/master/.github/previewWeb.png",
    link: "https://github.com/maiazip/AudioNotes",
    title: "AudioNotes",
    description:
      "Projeto FullStack que Através da API Speech Recognition e outras tecnologias listadas abaixo permite que o usuário crie e armazene anotações gravadas em áudio que serão transcritas para textos",
    technologies: [
      "React",
      "Vite",
      "Typescript",
      "Tailwind.css",
      "RadixUi",
      "Shadcn/Ui",
      "Lucide React",
      "Toaster",
    ],
  },
  {
    src: "https://github.com/maiazip/Devstage/blob/main/previewDesktops.png?raw=true",
    link: "https://github.com/maiazip/Devstage",
    title: "Devstage",
    description:
      "Projeto Full Stack que consiste em uma página de inscrição em eventos com sistema de ranking entre usuários",
    technologies: ["React", "Next.js", "Tailwind.css", "Typescript"],
  },
  {
    src: "https://raw.githubusercontent.com/maiazip/Flowrest/main/previewDesktop.png",
    link: "https://github.com/maiazip/Flowrest",
    title: "Flowrest",
    description:
      "Implementa soluções que otimizam sua produtividade. O projeto consiste em uma aplicação com um Timer Pomodoro, Tasks, Music Player e anotações.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind.css",
      "Typescript",
      "Javascript",
      "Motion",
    ],
  },

  {
    src: "https://github.com/maiazip/LinkTree/raw/main/.github/preview-desktop.png",
    link: "https://github.com/maiazip/LinkTree",
    title: "LinkTree",
    description:
      "Projeto simples que reúne todos os links de um usuário em uma só página, um de meus primeiros projetos que me ajudou a chegar onde cheguei hoje, utilizando a trindade pura da internet, html, css, javascript.",
    technologies: ["Javascript", "Css", "Html"],
  },
];

export function ArticleProjects() {
  const [ToShow, setToShow] = useState(3);

  const handleShowMore = () => {
    setToShow(ToShow + 3);
  };

  const handleShowLess = () => {
    setToShow(3);
  };

  const displayedProjects = projectsData.slice(0, ToShow);

  return (
    <article
      className="w-full h-full flex flex-col items-center justify-start gap-2"
      aria-label="Lista de Projetos" // Aria-label for article - ADDED
    >
      <ul className="w-full max-sm:max-w-11/12 grid grid-cols-1  lg:grid-cols-3 place-items-center gap-2">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.li // Mantém motion.li aqui
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card // Card component with altText prop - IMPROVED
                src={project.src}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                altText={`Imagem de prévia do projeto ${
                  project.title
                }. Descrição: ${project.description.substring(0, 100)}...`} // Example altText - IMPROVED - NEEDS REVIEW
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {ToShow < projectsData.length && (
        <ButtonShowMore
          showMore={handleShowMore}
          showLess={handleShowLess}
          itemsToShow={ToShow}
          totalItems={projectsData.length}
        />
      )}
    </article>
  );
}
