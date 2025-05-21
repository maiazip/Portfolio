"use client";

import Icon from "@/components/icon";
import { TbExternalLink, TbLinkOff, TbLinkPlus, TbUser } from "react-icons/tb";
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
      aria-label="Seção sobre mim" // Acessibilidade: Aria-label para a section "Sobre mim"
    >
      <Icon icon={<TbUser />} ariaHidden={true} />{" "}
      {/* Acessibilidade: Aria-hidden para ícone decorativo */}
      <Title>Sobre mim</Title>
      <Illustration src={svg} alt="Ilustração sobre a seção sobre mim" />{" "}
      {/* Acessibilidade: Alt text para a ilustração */}
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
            rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
            className="text-yellow-200 font-bold   transition-colors ease-in-out duration-1000 hover:text-lime-300"
            aria-label="LinkedIn de Matheus Maia Bastos (abre em nova janela)" // Acessibilidade: Aria-label para o link
          >
            Matheus Maia Bastos
          </a>{" "}
          e lhe dou boas vindas ao meu Portfólio virtual.
        </Text>
        <Text>
          Com minha base sólida de experiências em programação, eu me especializo na utilização de{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            React, Next.js, Typescript, Javascript e Motion
          </strong>{" "}
          e sigo aplicando meus
          conhecimentos para criar experiências modernas e intuitivas na Web.
        </Text>
        <Text>
          {" "}
          Atualmente possuo{" "}
          <abbr
            title="Data de nascimento: 09/04/2000"
            className="text-orange-300 font-bold no-underline transition-colors ease-in-out duration-1000 hover:text-lime-300"
          >
            {`{`} 25 {`}`}
          </abbr>{" "}
          anos terrestres de idade e me localizo em{" "}
          <a
            className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            href="https://g.co/kgs/wKcSPTY"
            target="_blank"
            rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
            aria-label="Localização de Fortaleza no Google Maps (abre em nova janela)" // Acessibilidade: Aria-label para o link
          >
            Fortaleza
          </a>
          .
        </Text>
        <Text>
          Me encontro cursando o último semestre na graduação de{" "}
          <strong className="text-yellow-200 font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300">
            Análise e Desenvolvimento de Sistemas
          </strong>{" "}
          <abbr
            className="text-orange-300 no-underline font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            title="Análise e Desenvolvimento de Sistemas"
          >
            {`<`}ADS{`>`}
          </abbr>{" "}
          no instituto de ensino superior{" "}
          <abbr
            className="text-orange-300 no-underline font-bold transition-colors ease-in-out duration-1000 hover:text-lime-300"
            title="Faculdade Das Américas"
          >
            <a
              href="https://www.vemprafam.com.br/"
              target="_blank"
              rel="noopener noreferrer" // Segurança e performance: Adicionado rel="noopener noreferrer"
              aria-label="Site do centro universitário (FAM) (abre em nova janela)" // Acessibilidade: Aria-label para o link
            >
              {`</`}FAM{`>`}
            </a>{" "}
          </abbr>
        </Text>
        <Divider />
      </article>
      <ArticleCv />
    </section>
  );
});

About.displayName = "About";

export default About;
