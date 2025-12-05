import type { ExperienceType, Project } from "./types";

export const HERO_CONTENT = {
  es: {
    title: "Desarrolladora Frontend",
    slogan: "Empodero tu negocio con tecnologia",
    description:
      "Analizo tus necesidades y creo una estrategia digital a tu medida, que incluye: sitio web, correo corporativo, posicionamiento en Google Maps, enlaces para biografía y mucho más.",
  },
  en: {
    title: "Frontend Developer",
    slogan: "Empower your business with technology",
    description:
      "I analyze your needs and create a tailored digital strategy for you, which includes: a website, corporate email, positioning on Google Maps, bio links, and much more.",
  },
};

export const EXPERIENCE = {
  es: { title: "Experiencia" },
  en: { title: "Experience" },
};

export const ALL_EXPERIENCES: ExperienceType[] = [
  {
    name: "Grain's Taqe",
    description: {
      es: "Mejora del diseño a medida, cuyo enfoque fue el flujo de la informacion para el usuario final. En la implementacion se aprovecho uso i18n para la internacionalizacion.",
      en: "The design was improved to better suitability, focusing on the flow of information for the end user. The implementation leveraged the i18n framework for internationalization.",
    },
    processImage: "/experience/process.grainstaqe.png",
    previewImage: "/experience/preview.grainstaqe.png",
    urlProject: "https://grainstaqe.com/",
    technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
  },
  {
    name: "Pocket Budget",
    description: { es: "", en: "" },
    processImage: "",
    previewImage: "",
    urlProject: "",
    technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
  },
  {
    name: "Card Quest",
    description: { es: "", en: "" },
    processImage: "",
    previewImage: "",
    urlProject: "",
    technologies: ["Astro", "React", "Typescript", "TailwindCSS"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Diet Pixie",
    collaboration: false,
    coverImage: "/diet-pixie.png",
    technologies: [
      "Astro",
      "React",
      "Typescript",
      "Tailwind ",
      "ev-component-library",
      "Playwright",
    ],
    urlProject: "https://diet-pixie.roseny.dev/",
    urlGitHub: "",
    about:
      "A web application that allows you to calculate your nutritional values ​​based on your physical activity level to help you achieve your goals. You can also access your history and view your progress.",
  },
  {
    name: "Workout Tracker",
    collaboration: true,
    coverImage: "/workout-tracker.png",
    technologies: [
      "Astro",
      "React",
      "Typescript",
      "Tailwind ",
      "ev-component-library",
    ],
    urlProject: "https://worktrack.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Do you need to track your exercise? Implemented with ev-component-library, it stores data in IndexedDB. It allows for detailed exercise tracking based on your routine.",
  },
  {
    name: "BitSip",
    collaboration: false,
    coverImage: "/bitsip.png",
    technologies: [
      "Vite",
      "React",
      "Typescript",
      "Tailwind",
      "React Router Dom",
      "Vitest",
      "Cypress",
    ],
    urlProject: "https://bitsip.roseny.dev/",
    urlGitHub: "https://github.com/Lachicagladiadora/bitsip",
    about:
      "Don't know what to cook? Or Need recipes? Web application with integration of two APIs, along with a function to efficiently extract and render ingredients. Implemented with routes, following Clean Architecture, and including unit tests to avoid errors.",
  },
  {
    name: "Pocket Budget",
    collaboration: true,
    coverImage: "/pocket-budget.png",
    technologies: [
      "Astro",
      "React",
      "Typescript",
      "Tailwind ",
      "ev-component-library",
    ],
    urlProject: "https://pocket-budget.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Web application for recording and managing expenses. It allows users to record expenses with descriptions and view a detailed history with dates, making it easier to track and analyze monthly expenses.",
  },
  {
    name: "Card Quest",
    collaboration: true,
    coverImage: "/card-quest.png",
    technologies: [
      "Astro",
      "React",
      "Typescript",
      "Tailwind ",
      "ev-component-library",
    ],
    urlProject: "https://card-quest.jimynicanor.com/",
    urlGitHub: "",
    about:
      "Flashcards that feature dark mode, voice recognition, and fast card flipping. Each card includes a question (front) and an answer (back). You can flip the card if you forget the answer while studying.",
  },
  {
    name: "ev-component-library",
    collaboration: true,
    coverImage: "/ev-component-library.png",
    technologies: ["React", "Typescript", "Tailwind ", "Storybook"],
    urlProject:
      "https://ev-component-library.jimynicanor.com/?path=/docs/ev-component-library--docs",
    urlGitHub: "",
    about:
      "A library of reusable components with a minimalist style. Developed with React, TypeScript, and TailwindCSS, it includes detailed Storybook documentation for easy implementation.",
  },
  {
    name: "Cartago ecommerce",
    collaboration: true,
    coverImage: "/cartago-ecommerce.png",
    technologies: [
      "Nextjs",
      "React",
      "Typescript",
      "Tailwind",
      "Prisma",
      "React Form",
      "Zustand",
    ],
    urlProject: "https://cartago.vercel.app/",
    urlGitHub: "https://github.com/DevCorvus/cartago",
    about:
      "E-commerce platform designed to demonstrate skills in more complex projects and learn how to organize large-scale projects. Manage products, orders, and roles: customers place orders, sellers manage inventory, and administrators oversee categories and platform control.",
  },
  {
    name: "To Do",
    collaboration: false,
    coverImage: "/to-do.jpg",
    technologies: ["Vite", "React", "Typescript", "Tailwind"],
    urlProject: "https://to-do-list-pi-wheat-12.vercel.app/",
    urlGitHub: "https://github.com/Lachicagladiadora/to-do",
    about:
      "To-do list with react and typescript, styles with react styles. This application allows you to create to-dos to mark them once completed, and you can also delete all completed to-dos. The input is used to create new to-do and also as a search engine as you type.",
  },
  {
    name: "Chuck Norris Jokes",
    collaboration: false,
    coverImage: "/chuck-norris-jokes.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    urlProject: "https://lachicagladiadora.github.io/chuck-norris-jokes/",
    urlGitHub: "https://github.com/Lachicagladiadora/chuck-norris-jokes",
    about:
      "Project developed to practice DOM manipulation, promises, and styles. After requesting data, interface elements are dynamically updated. It also features responsive design. It also offers a Chuck Norris joke feed for fans.",
  },
  {
    name: "Social Media Dashboard",
    collaboration: false,
    coverImage: "/social-media-dashboard.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    urlProject: "https://lachicagladiadora.github.io/social-media-dashboard/",
    urlGitHub:
      "https://github.com/Lachicagladiadora/dashboard-project-html-css",
    about:
      "Project to improve interface creation skills. An interface featuring dark mode, responsive design, and well-structured HTML was implemented.",
  },
];
