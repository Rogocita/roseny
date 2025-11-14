import React from "react";
import { MailIcon } from "./icons/MailIcon";

export const Header = () => {
  return (
    <header className="w-full max-w-[1000px] mx-auto py-4 flex items-center justify-between relative text-blank-light">
      <a href="/">
        <img src="/rogocita.svg" alt="" />
      </a>
      <a
        href="mailto:contact@roseny.dev"
        className="flex gap-3 items-center hover:text-second-light"
      >
        <MailIcon className="size-[24px]" /> contact@roseny.dev
      </a>
    </header>
  );
};
