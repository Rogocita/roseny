export type Language = "es" | "en";

export type Project = {
  name: string;
  collaboration: boolean;
  coverImage: string;
  technologies: string[];
  urlProject: string;
  urlGitHub: string;
  about: string;
};
