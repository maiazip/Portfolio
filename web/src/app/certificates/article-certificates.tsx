"use client";

import { useState } from "react";
import { ButtonShowMore } from "../../components/button-show-more";
import Card from "./card";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  src: string;
  title: string;
  institution: string;
  hours: string;
  date: string;
  altText: string;
}

const certificatesData: Certificate[] = [
  {
    src: "https://github.com/maiazip/Certifications/blob/main/one.png?raw=true",
    title: "Discover",
    institution: "Rocketseat",
    hours: "28 horas",
    date: "01/09/2023",
    altText:
      "Imagem do certificado Discover da Rocketseat, curso introdutório de programação.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/two.png?raw=true",
    title: "NLW IA",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "14/09/2023",
    altText:
      "Imagem do certificado NLW IA da Rocketseat, evento sobre Inteligência Artificial.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/tree.png?raw=true",
    title: "NLW Esports",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "02/02/2024",
    altText:
      "Imagem do certificado NLW Esports da Rocketseat, evento sobre desenvolvimento para e-sports.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/four.png?raw=true",
    title: "Start",
    institution: "RocketSeat",
    hours: "6 horas",
    date: "01/09/2023",
    altText:
      "Imagem do certificado Start da Rocketseat, curso básico de programação.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/five.png?raw=true",
    title: "Especializar",
    institution: "Rocketseat",
    hours: "60 horas",
    date: "01/09/2023",
    altText:
      "Imagem do certificado Especializar da Rocketseat, curso de especialização em Front-end.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/six.png?raw=true",
    title: "Fundamentar",
    institution: "Rocketseat",
    hours: "40 horas",
    date: "30/09/2023",
    altText:
      "Imagem do certificado Fundamentar da Rocketseat, curso de fundamentos de programação.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/seven.png?raw=true",
    title: "NLW AI",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "14/09/2023",
    altText:
      "Imagem do certificado NLW AI da Rocketseat, evento sobre Inteligência Artificial.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/eight.png?raw=true",
    title: "NLW Expert - Javascript",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "09/02/2024",
    altText:
      "Imagem do certificado NLW Expert Javascript da Rocketseat, evento sobre Javascript avançado.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/nine.png?raw=true",
    title: "NLW Expert - React",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "09/02/2024",
    altText:
      "Imagem do certificado NLW Expert React da Rocketseat, evento sobre React avançado.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/ten.png?raw=true",
    title: "New Discover",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "14/07/2024",
    altText:
      "Imagem do certificado New Discover da Rocketseat, curso introdutório atualizado de programação.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/eleven.png?raw=true",
    title: "NLW Connect - React",
    institution: "Rocketseat",
    hours: "6 horas",
    date: "22/02/2025",
    altText:
      "Imagem do certificado NLW Connect React da Rocketseat, evento sobre React e conectividade.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/twelve.png?raw=true",
    title: "HTML5",
    institution: "Onebitcode",
    hours: "2:30 horas",
    date: "01/02/2023",
    altText:
      "Imagem do certificado HTML5 da Onebitcode, curso básico de HTML5.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/thirteen.png?raw=true",
    title: "CSS3",
    institution: "Onebitcode",
    hours: "2:30 horas",
    date: "02/02/2023",
    altText: "Imagem do certificado CSS3 da Onebitcode, curso básico de CSS3.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/fourteen.png?raw=true",
    title: "Git e Github",
    institution: "Onebitcode",
    hours: "4 horas",
    date: "10/02/2024",
    altText:
      "Imagem do certificado Git e Github da Onebitcode, curso sobre controle de versão com Git e Github.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/fifteen.png?raw=true",
    title: "Start Na Programação",
    institution: "Onebitcode",
    hours: "8 horas",
    date: "2/10/2024",
    altText:
      "Imagem do certificado Start na Programação da Onebitcode, curso introdutório à programação.",
  },
  {
    src: "https://github.com/maiazip/Certifications/blob/main/sixteen.png?raw=true",
    title: "Semana D Z A P C",
    institution: "DevEmDobro",
    hours: "10 horas",
    date: "01/10/2023",
    altText:
      "Imagem do certificado Semana D Z A P C da DevEmDobro, evento sobre desenvolvimento de alta performance.",
  },
].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateA.getTime() - dateB.getTime();
});

function parseDate(dateString: string): Date {
  if (dateString === "??") return new Date(0);
  const parts = dateString.split("/");
  return new Date(
    parseInt(parts[2]),
    parseInt(parts[1]) - 1,
    parseInt(parts[0])
  );
}

export function ArticleCertificates() {
  const [itemsToShow, setItemsToShow] = useState(3);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  const handleShowLess = () => {
    setItemsToShow(3);
  };

  const displayedCertificates = certificatesData.slice(0, itemsToShow);

  return (
    <article
      className="w-full h-full flex flex-col items-center justify-start gap-2"
      aria-label="Lista de Certificações"
    >
      <ul className="w-full max-sm:max-w-11/12 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-2">
        <AnimatePresence>
          {displayedCertificates.map((certificate, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                src={certificate.src}
                title={certificate.title}
                institution={certificate.institution}
                hours={certificate.hours}
                date={certificate.date}
                altText={certificate.altText} // Using altText from certificatesData
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <ButtonShowMore
        showMore={handleShowMore}
        showLess={handleShowLess}
        itemsToShow={itemsToShow}
        totalItems={certificatesData.length}
      />
    </article>
  );
}
