import React from "react";
import { MailIcon } from "./icons/MailIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

export const Footer = () => {
  return (
    <footer className="w-full max-w-[1000px] flex flex-col justify-center gap-[80px] mx-auto">
      <div></div>
      <div className="w-full flex justify-center gap-[80px] text-base">
        <div className="w-1/2 flex flex-col items-center justify-center gap-1">
          <a href="/blog" className=" hover:text-second-dark">
            Blog
          </a>
          <a href="#" target="" className=" hover:text-second-dark">
            Home
          </a>
          <a href="./#contact" target="" className=" hover:text-second-dark">
            Contact
          </a>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-1">
          <a
            href="mailto:contact@roseny.dev"
            target="_blank"
            className="w-full flex items-center justify-start gap-4 hover:text-second-dark"
          >
            <MailIcon className="size-5" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dev-roseny-quintanilla/"
            target="_blank"
            className="w-full flex items-center justify-start gap-4 hover:text-second-dark"
          >
            <LinkedinIcon className="size-5" />
            Linkedin
          </a>
          <a
            href="https://github.com/Rogocita"
            target="_blank"
            className="w-full flex items-center justify-start gap-4 hover:text-second-dark"
          >
            <GithubIcon className="size-5" />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/rogocita/"
            target="_blank"
            className="w-full flex items-center justify-start gap-4 hover:text-second-dark"
          >
            <InstagramIcon className="size-5" />
            Instagram
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center p-2 text-xs md:text-sm">
        <p className="flex items-center gap-3"> 2026 Ⓒ All rights reserved</p>
        <p className="flex items-center gap-3">by Rogocita 🇵🇪</p>
      </div>
    </footer>
  );
};
