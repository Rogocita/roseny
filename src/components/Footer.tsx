import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Language } from "../types";

type FooterProps = { lang: Language };

export const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="w-full max-w-[1000px] flex flex-col justify-center gap-[40px] mx-auto md:gap-[80px]">
      <div className="w-full flex justify-center gap-[40px] text-base md:gap-[80px]">
        <div className="w-1/2 flex items-center justify-end gap-6">
          <a
            href="https://www.linkedin.com/in/dev-roseny-quintanilla/"
            target="_blank"
            className="w-fit flex items-center justify-start gap-4 hover:text-second-dark"
            title="Roseny Quintanilla Ceron"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="https://github.com/Rogocita"
            target="_blank"
            className="w-fit flex items-center justify-start gap-4 hover:text-second-dark"
            title="Rogocita"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.instagram.com/rogocita/"
            target="_blank"
            className="w-fit flex items-center justify-start gap-4 hover:text-second-dark"
            title="@rogocita"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-1">
          <a href="/blog" className=" hover:text-second-dark">
            {lang === "en" ? "Blog" : "Blog"}
          </a>
          <a href="#" target="" className=" hover:text-second-dark">
            {lang === "en" ? "Home" : "Inicio"}
          </a>
          <a href="./#contact" target="" className=" hover:text-second-dark">
            {lang === "en" ? "Contact" : "Contacto"}
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center p-2 text-xs md:text-sm">
        <p className="flex items-center gap-3">
          {lang === "en"
            ? "2026 Ⓒ All rights reserved"
            : "2026 Ⓒ Todos los derechos reservados"}
        </p>
        <p className="flex items-center gap-3">
          {lang === "en" ? "by Rogocita 🇵🇪" : "por Rogocita 🇵🇪"}
        </p>
      </div>
    </footer>
  );
};
