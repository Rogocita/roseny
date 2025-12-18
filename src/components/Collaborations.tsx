import React, { useEffect, useState } from "react";
import { CollaborationCard } from "./CollaborationCard";
import { ALL_COLLABORATIONS, COLLABORATIONS_TITTLE } from "../constants";
import { Language } from "../types";
import { ArrowRight } from "./icons/ArrowRight";
import { ArrowLeft } from "./icons/ArrowLeft";

type CollaborationsProps = { lang: Language };

export const Collaborations = ({ lang }: CollaborationsProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentCollaboration, setCurrentCollaboration] = useState(0);

  const getResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", getResize);
  }, []);

  return (
    <section className="">
      <div className="flex flex-col justify-center gap-[80px] bg-[#241f1b] p-4 rounded-md">
        <h2 className="text-4xl md:text-5xl">
          {COLLABORATIONS_TITTLE[lang].title}
        </h2>
        {/* collab experience */}
        <div className="w-full flex flex-col items-center justify-center">
          <CollaborationCard
            lang={lang}
            collaboration={ALL_COLLABORATIONS[currentCollaboration]}
            key={currentCollaboration}
            widthSize={width}
          />
          {/* Buttons */}
          {ALL_COLLABORATIONS.length > 1 && (
            <div className="w-full flex items-center justify-end gap-4">
              <button
                className={`p-2 rounded-full bg-primary`}
                onClick={() => {
                  setCurrentCollaboration((p) => {
                    if (p < 1) return ALL_COLLABORATIONS.length - 1;
                    return p - 1;
                  });
                }}
              >
                <ArrowLeft className="h-8" />
              </button>
              <button
                className={`p-2 rounded-full bg-primary `}
                onClick={() => {
                  setCurrentCollaboration((p) => {
                    if (p > ALL_COLLABORATIONS.length - 2) return 0;
                    return p + 1;
                  });
                }}
              >
                <ArrowRight className="h-8" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
