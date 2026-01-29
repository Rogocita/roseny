import React from "react";
import { CollaborationType, Language } from "../types";
import { RedirectIcon } from "./icons/RedirectIcon";

type CollaborationCardProps = {
  lang: Language;
  widthSize: number;
  collaboration: CollaborationType;
};

export const CollaborationCard = ({
  lang,
  widthSize,
  collaboration,
}: CollaborationCardProps) => {
  return (
    <div className="p-4 bg-obscure rounded-md flex gap-4 flex-col md:flex-row">
      <div className="flex flex-col">
        <div className="w-full flex items-center gap-4">
          <img
            width={widthSize ? 50 : 100}
            height={widthSize ? 50 : 100}
            src={collaboration.organizationLogo}
            alt={
              lang === "en"
                ? "Logo from " + collaboration.organizationName
                : "Logo de " + collaboration.organizationName
            }
            title={
              lang === "en"
                ? collaboration.organizationName
                : collaboration.organizationName
            }
          />
          <a
            href={collaboration.urlProject}
            target="_blank"
            className="flex items-center text-primary hover:text-second-dark"
          >
            <h2 className="w-full text-start font-bold">
              {collaboration.projectName}
            </h2>
            <RedirectIcon className="size-8" />
          </a>
        </div>
        <img
          className="h-full max-h-[600px] md:max-h-[325px]"
          src={
            widthSize < 768
              ? collaboration.impressionImgSm
              : collaboration.impressionImgMd
          }
          alt=""
        />
      </div>
    </div>
  );
};
