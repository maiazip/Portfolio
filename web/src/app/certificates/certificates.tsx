"use client";

import Icon from "@/components/icon";
import { TbTrophy } from "react-icons/tb";
import { Title } from "@/components/title";
import Illustration from "@/components/illustration";
import svg from "../../assets/certificates.svg";
import AnimatedSubtitle from "@/components/animatedSubtitle";
import { ArticleCertificates } from "./article-certificates";
import { forwardRef } from "react";

const Certificates = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="certificates"
      className="w-full max-w-screen-lg min-h-fit flex flex-col items-center justify-start p-8 gap-2"
    >
      <Icon icon={<TbTrophy />} />
      <Title>Certificações</Title>
      <Illustration src={svg} />
      <AnimatedSubtitle
        texts={["Cursos", "Graduações", "Eventos", "Hackatons", "Bootcamps"]}
      />
      <ArticleCertificates />
    </section>
  );
});

Certificates.displayName = "Certificates";

export default Certificates;
