import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Metadata } from "next";

import { Montserrat, Oxanium } from "next/font/google";

const oxanium = Oxanium({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap", // Otimização de Fontes: Adicionado display swap
});
const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", // Otimização de Fontes: Adicionado display swap
});

export const metadata: Metadata = {
  title: "Portfólio", // SEO: Título principal da página
  description:
    "Meu portfólio profissional Front End. Conheça mais sobre mim e também sobre meus projetos e habilidades.", // SEO: Descrição para motores de busca
  viewport: "width=device-width, initial-scale=1", // Responsividade: Configuração viewport
  // Outras meta tags relevantes para SEO podem ser adicionadas aqui
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      {/* Semântica e SEO: Definido idioma para Português do Brasil */}
      <body className="bg-gradient-to-r from-[#0f0c29] via-[#2d0061] via-tea-600 to-[#24243e] text-white antialiased">
        {/* Estilização: Classes Tailwind CSS mantidas */}
        {children}
      </body>
    </html>
  );
}
