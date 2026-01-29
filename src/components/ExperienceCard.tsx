import React from "react";
import { ExperienceType, Language } from "../types";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";

type ExperienceCardProps = { lang: Language; experience: ExperienceType };
export const ExperienceCard = ({ lang, experience }: ExperienceCardProps) => {
  return (
    <div className="w-full p-4 bg-primary/50 rounded-md">
      <div className="w-full flex flex-col md:flex-row gap-4 ">
        <div className="w-full  flex flex-col justify-evenly gap-4">
          <h3 className="font-bold text-3xl">{experience.name}</h3>
          <p>{experience.description[lang]}</p>
          <img
            src={experience.processImage}
            alt={
              lang === "en"
                ? "Process collage from " + experience.name
                : "Collage del proceso de " + experience.name
            }
            className="object-contain"
          />
        </div>
        <div
          id="image-preview"
          className="image-preview h-[180px] sm:h-[380px] md:h-[550px] w-full  rounded-md overflow-y-scroll "
        >
          <img src={experience.previewImage} alt="" />
        </div>
      </div>
      <div className="w-full  flex flex-col gap-4 pt-4 items-center md:justify-between md:flex-row-reverse">
        <a
          href={experience.urlProject}
          target="_blank"
          className="flex gap-2 items-center text-sm font-semibold hover:text-second"
        >
          Preview <ArrowTopRightOnSquare className="h-6" />{" "}
        </a>
        <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm">
          {lang === "en" ? "Made with: " : "Hecho con: "}
          {experience.technologies.map((c, i) => (
            <span
              key={i}
              className="py-0.5 px-1 rounded-md border border-blank"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
