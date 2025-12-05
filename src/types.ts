export type Language = "es" | "en";

export type ExperienceType = {
  name: string;
  description: { [key in Language]: string };
  processImage: string;
  previewImage: string;
  urlProject: string;
  technologies: string[];
};

export type Project = {
  name: string;
  collaboration: boolean;
  coverImage: string;
  technologies: string[];
  urlProject: string;
  urlGitHub: string;
  about: string;
};
