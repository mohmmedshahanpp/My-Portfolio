import { SiElectron, SiExpress, SiGithubactions } from "react-icons/si";
import { FiCheckCircle, FiServer } from "react-icons/fi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import mysql from "@/public/icons/mysql.svg";
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: "Frontend Libraries",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "React Query",
        icon: ReactjsSvg,
      },
      {
        name: "React Hook Form",
        icon: ReactjsSvg,
      },
      {
        name: "TanStack Table",
        icon: ReactjsSvg,
      },
      {
        name: "Yup",
        icon: FiCheckCircle,
      },
      {
        name: "Zod",
        icon: FiCheckCircle,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        icon: FiServer,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
      {
        name: "Electron.js",
        icon: SiElectron,
      },
      {
        name: "AWS S3",
        icon: AwsSvg,
      },
    ],
  },
];
