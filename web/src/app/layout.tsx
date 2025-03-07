import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Metadata } from "next";

import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = { title: "Portfolio" };

const oxanium = Oxanium({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});
const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gradient-to-r from-[#0f0c29] via-[#2d0061] via-tea-600 to-[#24243e]  text-white antialiased">
        {children}
      </body>
    </html>
  );
}
// from-[#0f0c29] via-[#302b63] via-tea-600 to-[#24243e]
//  from-[#300412] via-[#800A38] to-[#3A1F26]
// dark:from-zinc-950 dark:via-zinc-800 dark:to-zinc-950
