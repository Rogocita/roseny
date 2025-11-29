import React from "react";
import { Language } from "../types";
import { ALL_EXPERIENCES, EXPERIENCE } from "../constants";
import { ExperienceCard } from "./ExperienceCard";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";

type ExperienceProps = { lang: Language };

export const Experience = ({ lang }: ExperienceProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center gap-[80px]">
      <h2 className="text-4xl md:text-5xl">{EXPERIENCE[lang].title}</h2>
      <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-9">
        {/* buttons for change experience */}
        {/* <div className="w-full flex items-center justify-end gap-4">
          <button className="p-2 bg-primary text-blank rounded-full ">
            <ArrowLeft className="h-8" />
          </button>
          <button className="p-2 bg-primary text-blank rounded-full ">
            <ArrowRight className="h-8" />
          </button>
        </div> */}
        {/* card */}
        {ALL_EXPERIENCES.map((c, i) => (
          <ExperienceCard
            lang={lang}
            name={c.name}
            description={c.description}
            processImage={c.processImage}
            previewImage={c.previewImage}
            urlProject={c.urlProject}
            technologies={c.technologies}
          />
        ))}
        <p></p>
        {/* <h3 className="text-center text-primary">
          {HERO_CONTENT[lang].slogan}
        </h3> */}
      </div>
    </section>
  );
};
