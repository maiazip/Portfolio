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
    >
      <Icon icon={<TbBriefcase />} />
      <Title>Sobre meu trabalho</Title>
      <Illustration src={svg} />
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
      <article>
        <Divider />
        <Text>
          Harmonia e Intuitividade moldam a metodologia que aplico em meus
          projetos como{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Desenvolvedor Front End
          </strong>{" "}
          e{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            UI UX Designer
          </strong>
          .
        </Text>
        <Text>
          Construo websites com designs intuitivos e modernos, que proporcionem
          praticidade, pois um website construído com{" "}
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
          Elegância e modernidade é o que busco alcançar aplicando meus
          conhecimentos em{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Design
          </strong>{" "}
          no{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Desenvolvimento Front End
          </strong>
          .
        </Text>
        <Text>
          Tudo isso em conjunto da utilização de boas práticas de{" "}
          <abbr className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            SEO
          </abbr>{" "}
          e{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Clean Code
          </strong>{" "}
          é o que torna meu trabalho valioso.
        </Text>
        <Text>
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
        </Text>
        <Divider />
      </article>
    </section>
  );
});

Work.displayName = "Work";

export default Work;
