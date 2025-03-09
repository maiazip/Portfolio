"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

function Carousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 500,
    accessibility: true,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true });

  return (
    <motion.div
      ref={carouselRef}
      className="slider-container w-full h-fit text-5xl select-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      aria-label="Carrossel de tecnologias que utilizo"
      role="region"
      tabIndex={0}
    >
      <Slider {...settings}>
        <TbBrandReact
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-cyan-300"
          title="React"
          aria-label="React" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandNextjs
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-white"
          title="Next.js"
          aria-label="Next.js" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandTailwind
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-sky-300"
          title="Tailwind CSS"
          aria-label="Tailwind CSS" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandTypescript
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-blue-500"
          title="Typescript"
          aria-label="Typescript" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandJavascript
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-yellow-300"
          title="Javascript"
          aria-label="Javascript" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandCss3
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-purple-400"
          title="CSS3"
          aria-label="CSS3" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
        <TbBrandHtml5
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-orange-400"
          title="HTML5"
          aria-label="HTML5" // Acessibilidade: Aria-label diretamente no ícone
          aria-hidden="true"
        />
      </Slider>
    </motion.div>
  );
}

export default Carousel;
