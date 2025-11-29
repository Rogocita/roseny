import React from "react";
import { Experience, Language } from "../types";
import { ArrowTopRightOnSquare } from "./icons/ArrowTopRightOnSquare";

type ExperienceCardProps = Experience & { lang: Language };
export const ExperienceCard = ({
  lang,
  name,
  description,
  processImage,
  previewImage,
  urlProject,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="w-full p-4 bg-primary/50 rounded-md">
      <div className="w-full flex flex-col md:flex-row gap-4 ">
        <div className="w-full  flex flex-col justify-evenly gap-4">
          <h3 className="font-bold text-3xl">{name}</h3>
          <p>{description[lang]}</p>
          <img
            src={processImage}
            alt={
              lang === "en"
                ? "Process collage from " + name
                : "Collage del proceso de " + name
            }
            className="object-contain"
          />
        </div>
        <div
          id="image-preview"
          className="image-preview h-[180px] sm:h-[380px] md:h-[550px] w-full  rounded-md overflow-y-scroll "
        >
          <img src={previewImage} alt="" />
        </div>
      </div>
      <div className="w-full  flex flex-col gap-4 pt-4 items-center md:justify-between md:flex-row-reverse">
        <a
          href={urlProject}
          target="_blank"
          className="flex gap-2 items-center "
        >
          Preview <ArrowTopRightOnSquare className="h-6" />{" "}
        </a>
        <div className="flex items-center flex-wrap gap-2 text-sm">
          {lang === "en" ? "Made with: " : "Hecho con: "}
          {technologies.map((c, i) => (
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
