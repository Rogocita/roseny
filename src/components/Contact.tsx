import React from "react";
import { Language } from "../types";
import { CONTACT_DATA } from "../constants";

type ContactProps = { lang: Language };

export const Contact = ({ lang }: ContactProps) => {
  return (
    <section className="min-h-dvh flex flex-col justify-center gap-[60px] outline-none md:gap-[80px]">
      <h2 className="text-4xl md:text-5xl">{CONTACT_DATA[lang].title}</h2>
      <p className="text-primary text-center">
        "{CONTACT_DATA[lang].paragraph}"
      </p>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
