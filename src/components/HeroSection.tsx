import React from "react";
import { Language } from "../types";
import { HERO_CONTENT } from "../constants";

type HeroSectionProps = { lang: Language };

export const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center items-center gap-[80px]">
      <div className="w-full flex flex-col items-center justify-center gap-9">
        <h2 className="text-4xl font-[500] cursor-pointer md:text-5xl">
          {HERO_CONTENT[lang].title}
        </h2>
        <h3 className="text-center font-[500] text-primary cursor-pointer">
          {HERO_CONTENT[lang].slogan}
        </h3>
      </div>
      <p className="w-full max-w-[800px] text-center">
        {HERO_CONTENT[lang].description}
      </p>
    </section>
  );
};
