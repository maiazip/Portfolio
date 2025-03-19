"use client";

import Icon from "@/components/icon";
import { TbBriefcase } from "react-icons/tb";
import { Title } from "@/components/title";
import Illustration from "@/components/illustration";
import svg from "../../assets/work.svg";
import AnimatedSubtitle from "@/components/animatedSubtitle";
import { Text } from "@/components/text";
import { Divider } from "@/components/divider";
import { forwardRef } from "react";

const Work = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="work"
      className="w-full max-w-screen-lg min-h-fit flex flex-col items-center justify-start p-8 gap-2"
      aria-label="Seção Sobre Meu Trabalho" // Acessibilidade: Aria-label para a section
    >
      <Icon icon={<TbBriefcase />} ariaHidden={true} />{" "}
      {/* Acessibilidade: Aria-hidden para ícone decorativo */}
      <Title>Sobre meu trabalho</Title>
      <Illustration
        src={svg}
        alt="Ilustração da seção sobre meu trabalho" // Acessibilidade: Alt text para ilustração
      />
      <AnimatedSubtitle
        texts={[
          "Intuitivo",
          "Harmônico",
          "Inteligente",
          "Minimalista",
          "Futurístico",
          "Conceitual",
        ]}
      />
      <article
        className="w-full"
        aria-label="Descrição sobre a metodologia de trabalho" // Acessibilidade: Aria-label para o article
      >
        <Divider />
        <Text>
          Harmonia e Intuitividade moldam a metodologia que aplico em meus
          trabalhos como{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Desenvolvedor Front End
          </strong>{" "}
          e{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Web Designer
          </strong>
          .
        </Text>
        <Text>
          Construir websites com designs intuitivos e modernos que proporcionem
          praticidade é sempre meu principal objetivo, pois um website
          construído com{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            inteligência
          </strong>{" "}
          faz total diferença na{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            experiência do usuário
          </strong>
          .
        </Text>
        <Text>
          Com meus conhecimentos em{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Design
          </strong>{" "}
          busco aplicar em meus sites sempre os princípios necessários para
          alcançar elegância, modernidade e harmonia
        </Text>
        <Text>
          Tudo isso em conjunto da utilização de boas práticas de{" "}
          <abbr
            className="text-orange-300 font-bold no-underline transition-colors ease-in-out duration-1000 hover:text-lime-300"
            title="Otimização para Mecanismos de Busca. (Search Engine Optimization)"
          >
            {"<"}SEO{">"}
          </abbr>{" "}
          e{" "}
          <strong className="text-orange-300 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            {"</"}Acessibilidade{">"}
          </strong>{" "}
          tornam meu trabalho não apenas bonito, mas também útil e valioso.
        </Text>
        {/* <Text>
          Ainda sim sei que tenho muito a aprender, pois aquele que acha que de
          tudo sabe acabará na ignorância, porém sou grato por tudo que sei e
          pelas boas{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            referências
          </strong>{" "}
          nas quais me inspiro, sem deixar de lado a{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            criatividade
          </strong>
          .
        </Text> */}
        <Divider />
      </article>
    </section>
  );
});

Work.displayName = "Work";

export default Work;
