import { type ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<"h2"> {}

export function Subtitle(props: SubtitleProps) {
  return (
    <h2
      className="font-heading font-light capitalize text-center text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-yellow-50 to-yellow-200"
      {...props}
    />
  );
}
