import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Movie App",
    href: "/projects",
    tags: ["JavaScript", "Bootstrap", "CSS", "HTML"],
    image: {
      LIGHT: "/images/projects/movie1.png",
      DARK: "/images/projects/movie2.png",
    },
  },
  {
    index: 1,
    title: "Portfolio",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/Portfolio.png",
      DARK: "/images/projects/Portfolio2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Movie App",
    favicon: "/images/projects/movieicon.ico",
    imageUrl: ["/images/projects/movie1.png", "/images/projects/movie2.png"],
    description:
      "A responsive and interactive movie listing web application built using React.js and Bootstrap. The platform allows users to explore movies with categorized filters such as Popular Movies, Latest Movies, and Comedy Movies.",
    sourceCodeHref: "https://github.com/mohmmedshahanpp/Movie-Project",
    liveWebsiteHref: "https://movie-project-henna-three.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/images/projects/portfolioicon.png",
    imageUrl: [
      "/images/projects/portfolio.png",
      "/images/projects/portfolio2.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/mohmmedshahanpp/Portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
