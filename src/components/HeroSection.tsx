import React from "react";
import { Language } from "../types";
import { HERO_CONTENT } from "../constants";

type HeroSectionProps = { lang: Language };

export const HeroSection = ({ lang }: HeroSectionProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center items-center gap-[80px] ">
      <div className="w-full flex flex-col items-center justify-center gap-9">
        <div className="">
          <h2
            data-text={HERO_CONTENT[lang].title}
            className="neon-title text-4xl font-[500] cursor-pointer md:text-5xl hover:font-bold"
          >
            {HERO_CONTENT[lang].title}
          </h2>
          <div className="neon-gradient"></div>
          <div className="neon-light"></div>
        </div>
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
