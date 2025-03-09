"use client";

import Icon from "@/components/icon";
import { TbUser } from "react-icons/tb";
import { Title } from "@/components/title";
import Illustration from "@/components/illustration";
import svg from "../../assets/about.svg";
import AnimatedSubtitle from "@/components/animatedSubtitle";
import { Divider } from "@/components/divider";
import { Text } from "@/components/text";
import { ArticleCv } from "./article-cv";
import { forwardRef } from "react";

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full max-w-screen-lg min-h-fit flex flex-col items-center justify-start text-center p-8 gap-1"
    >
      <Icon icon={<TbUser />} />
      <Title>Sobre mim</Title>
      <Illustration src={svg} />
      <AnimatedSubtitle
        texts={[
          "Desenvolvedor",
          "Compositor",
          "Designer",
          "Investidor",
          "Criador de conteúdo",
        ]}
      />

      <article className="w-full">
        <Divider />
        <Text>
          Olá forma de vida senciente, eu me chamo{" "}
          <a
            href="https://www.linkedin.com/in/maiazip/"
            target="_blank"
            className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
          >
            Matheus Maia Bastos
          </a>{" "}
          e sou grato por ter um pouco de sua atenção.
        </Text>
        <Text>
          Atualmente estou com{" "}
          <abbr
            title="Data de nascimento: 09/04/2000"
            className="text-orange-300 font-bold no-underline transition-colors ease-in-out duration-1000 hover:text-lime-300"
          >
            {`{`} 24 {`}`}
          </abbr>{" "}
          anos terrestres de idade e residindo em{" "}
          <a
            className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            href="https://g.co/kgs/wKcSPTY"
            target="_blank"
          >
            Fortaleza
          </a>
        </Text>
        <Text>
          Me encontro em meu último semestre na graduação em{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Análise e Desenvolvimento de Sistemas
          </strong>{" "}
          <abbr
            className="text-orange-300 no-underline font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            title="Análise e Desenvolvimento de Sistemas"
          >
            {`<`}ADS{`>`}
          </abbr>{" "}
          na Faculdade Das Américas{" "}
          <abbr
            className="text-orange-300 no-underline font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            title="Faculdade Das Américas"
          >
            <a href="https://www.vemprafam.com.br/" target="_blank">
              {`<`}FAM{`/>`}
            </a>{" "}
          </abbr>
          - São Paulo - Brasil
        </Text>
        <Text>
          Atualmente estou disponível para oportunidades de trabalhar com{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Desenvolvimento Front End
          </strong>{" "}
          e também com{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            UI UX Design
          </strong>
          .
        </Text>
        <Divider />
      </article>

      <ArticleCv />
    </section>
  );
});

About.displayName = "About";

export default About;
