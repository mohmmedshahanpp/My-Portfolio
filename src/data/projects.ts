import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "HGEC ERP",
    href: "/projects#hgec-erp",
    tags: ["React", "Node.js", "MySQL", "Desktop ERP"],
    description: "A multi-tenant ERP desktop application.",
  },
  {
    index: 1,
    title: "Fixbrix",
    href: "/projects#fixbrix",
    tags: ["React", "REST APIs", "Serverless"],
    description: "A multi-tenant construction management web application.",
  },
  {
    index: 2,
    title: "Movie App",
    href: "/projects",
    tags: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
    image: {
      LIGHT: "/images/projects/movie1.png",
      DARK: "/images/projects/movie2.png",
    },
  },
  {
    index: 3,
    title: "Portfolio",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "/images/projects/Portfolio.png",
      DARK: "/images/projects/Portfolio2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    id: "hgec-erp",
    name: "HGEC ERP",
    category: "Professional project",
    tags: ["React", "Node.js", "MySQL"],
    description:
      "A multi-tenant ERP desktop application built with React, Node.js, and MySQL.",
  },
  {
    id: "fixbrix",
    name: "Fixbrix",
    category: "Professional project",
    tags: ["React", "REST APIs", "Serverless backend"],
    description:
      "A multi-tenant construction management web application built with React, REST APIs, and a serverless backend.",
  },
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
      "/images/projects/Portfolio.png",
      "/images/projects/Portfolio2.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/mohmmedshahanpp/My-Portfolio",
    liveWebsiteHref: "https://my-portfolio-drab-two-8qjhvh4bxl.vercel.app/",
  },
];
