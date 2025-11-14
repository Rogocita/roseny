import React from "react";
import { Language } from "../types";
import { HERO_CONTENT } from "../constants";

type HeroSectionProps = { lang: Language };

export const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center gap-[80px]">
      <div className="w-full flex flex-col items-center justify-center gap-9">
        <h2 className="text-4xl md:text-5xl">{HERO_CONTENT[lang].title}</h2>
        <h3 className="text-center text-primary">
          {HERO_CONTENT[lang].slogan}
        </h3>
      </div>
      <p className="text-center">{HERO_CONTENT[lang].description}</p>
    </section>
  );
};
