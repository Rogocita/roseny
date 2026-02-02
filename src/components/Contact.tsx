import React from "react";
import { Language } from "../types";
import { CONTACT_DATA } from "../constants";

type ContactProps = { lang: Language };

export const Contact = ({ lang }: ContactProps) => {
  return (
    <section
      id="contact"
      className="min-h-dvh flex flex-col justify-center items-center outline-none gap-10 md:gap-20"
    >
      <h2 className="text-4xl md:text-5xl">{CONTACT_DATA[lang].title}</h2>
      <div className="flex flex-col items-center justify-center gap-20 md:gap-40 md:flex-row md:justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-center italic">
            "{CONTACT_DATA[lang].forBusiness}"
          </p>
          <a
            className="px-6 py-3 rounded-full border-2 border-primary hover:bg-blank-dark hover:text-obscure hover:border-blank-dark"
            href={`mailto:contact@roseny.dev?cc=contact@roseny.dev&bcc=contact@roseny.dev
            &subject=Quiero%20emppoderar%20mi%20negocio
            &body=Hola%20Roseny!%0D%0ATengo%20interes%20en%20empoderar%20mi%20negocio%20con%20tecnologia`}
          >
            {CONTACT_DATA[lang].btnBusiness}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-center italic">
            "{CONTACT_DATA[lang].forRecruiter}"
          </p>
          <a
            className="px-6 py-3 rounded-full bg-primary hover:bg-blank-dark hover:text-obscure"
            href={`mailto:contact@roseny.dev?cc=contact@roseny.dev&bcc=contact@roseny.dev
            &subject=I%20want%20you%20in%20my%20team
            &body=Hi!%20Roseny.%0D%0AI%20am%20interested%20in%20your%20background%20and%20think%20you%20match%20with%20my%20team`}
          >
            {CONTACT_DATA[lang].btnRecruiter}
          </a>
        </div>
      </div>
    </section>
  );
};
