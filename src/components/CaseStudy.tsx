import React from "react";
import { Language } from "../types";
import { ALL_CASE_STUDIES, CASE_STUDY } from "../constants";

type CaseStudyProps = { lang: Language };

export const CaseStudy = ({ lang }: CaseStudyProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center gap-[60px] outline-none md:gap-[80px]">
      <h2 className="text-4xl md:text-5xl">{CASE_STUDY[lang].title}</h2>
      <p className="text-primary text-center">"{CASE_STUDY[lang].paragraph}"</p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
        {/* cards */}
        {ALL_CASE_STUDIES.map((c, i) => (
          <a
            className="rounded-full flex flex-col items-center justify-center cursor-pointer"
            key={i}
            title={c.name}
            href={c.urlProject}
            target="_blank"
          >
            <div
              className="scale-90 hover:scale-110  transition-all md:scale-100 md:hover:scale-125"
              style={{
                width: "100px",
                height: "100px",
                backgroundImage: `url(${c.logo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            ></div>
          </a>
        ))}
      </div>
    </section>
  );
};
