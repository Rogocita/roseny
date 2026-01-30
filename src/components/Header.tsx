import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { Language } from "../types";

type HeaderProps = { lang: Language };

export const Header = ({ lang }: HeaderProps) => {
  return (
    <header className="w-full max-w-[1000px] mx-auto py-4 flex items-center justify-between relative text-blank-light">
      <a href="/">
        <img src="/rogocita.svg" alt="" />
      </a>

      <div className="flex items-center justify-end gap-4">
        {/* <a
          href="/blog"
          target="_blank"
          className=" transition-all hover:text-second-dark hover:font-semibold"
        >
          {lang === "en" ? "Blog" : "Blog"}
        </a> */}
        <a
          href="./#contact"
          target=""
          className="font-[500] transition-all hover:text-second-dark"
        >
          {lang === "en" ? "Contact" : "Contacto"}
        </a>
      </div>
    </header>
  );
};
