import React, { useState } from "react";
import { Language } from "../types";
import { ALL_EXPERIENCES, EXPERIENCE_TITTLE } from "../constants";
import { ExperienceCard } from "./ExperienceCard";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";

type ExperienceProps = { lang: Language };

export const Experience = ({ lang }: ExperienceProps) => {
  const [currentExperience, setCurrentExperience] = useState(0);
  return (
    <section className="min-h-dvh flex flex-col justify-center gap-[80px]">
      <h2 className="text-4xl md:text-5xl">{EXPERIENCE_TITTLE[lang].title}</h2>
      <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-9">
        {/* buttons for change experience */}
        <div className="w-full flex items-center justify-end gap-4">
          <button
            disabled={currentExperience < 1 ? true : false}
            className={`p-2 rounded-full bg-primary ${
              currentExperience < 1
                ? "disabled:opacity-60"
                : "enabled:text-blank"
            }`}
            onClick={() => {
              setCurrentExperience((p) => {
                if (p < 1) return ALL_EXPERIENCES.length - 1;
                return p - 1;
              });
            }}
          >
            <ArrowLeft className="h-8" />
          </button>
          <button
            disabled={
              currentExperience > ALL_EXPERIENCES.length - 2 ? true : false
            }
            className={`p-2 rounded-full bg-primary ${
              currentExperience > ALL_EXPERIENCES.length - 2
                ? "disabled:opacity-60"
                : "enabled:text-blank"
            }`}
            onClick={() => {
              setCurrentExperience((p) => {
                if (p > ALL_EXPERIENCES.length - 2) return 0;
                return p + 1;
              });
            }}
          >
            <ArrowRight className="h-8" />
          </button>
        </div>
        {/* card */}
        <ExperienceCard
          lang={lang}
          experience={ALL_EXPERIENCES[currentExperience]}
        />
      </div>
    </section>
  );
};
