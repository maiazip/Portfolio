"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
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
    slidesToScroll: 5,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    >
      <Slider {...settings}>
        <TbBrandReact
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-cyan-300"
          title="React"
        />
        <TbBrandNextjs
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-white"
          title="Next.js"
        />
        <TbBrandTailwind
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-sky-300"
          title="Tailwind.css"
        />
        <TbBrandTypescript
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-blue-500"
          title="Typescript"
        />
        <TbBrandJavascript
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-yellow-300"
          title="Javascript"
        />
        <TbBrandCss3
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-purple-400"
          title="Css"
        />

        <TbBrandHtml5
          className="transition-all duration-500 hover:scale-90 hover:rotate-360 cursor-pointer text-orange-400"
          title="HTML"
        />
      </Slider>
    </motion.div>
  );
}

export default Carousel;
