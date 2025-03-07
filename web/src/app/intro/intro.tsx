"use client";

import Icon from "@/components/icon";
import { TbArrowDownRhombus, TbDeviceDesktop } from "react-icons/tb";
import { Title } from "@/components/title";
import Illustration from "@/components/illustration";
import svg from "../../assets/intro.svg";
import AnimatedSubtitle from "@/components/animatedSubtitle";
import { Text } from "@/components/text";
import Carousel from "../intro/carousel";
import { forwardRef } from "react";
import { Divider } from "@/components/divider";

const Intro = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="intro"
      className="w-full max-w-screen-lg min-h-fit flex flex-col items-center justify-start p-8 gap-1 "
    >
      <Icon icon={<TbDeviceDesktop />} />
      <Title>Portfolio Website</Title>
      <Illustration src={svg} />
      <AnimatedSubtitle
        texts={["Desenvolvido Por Matheus Maia", " Desenvolvido Por @maia.zip"]}
      />
      <Text>Utilizando as tecnologias</Text>
      <Icon icon={<TbArrowDownRhombus />} />
      <Divider />
      <Carousel />
      <Divider />
    </section>
  );
});

Intro.displayName = "Intro";

export default Intro;
