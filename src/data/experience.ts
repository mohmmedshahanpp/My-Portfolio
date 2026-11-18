import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer",
    organisation: {
      name: "Gitbitz Software Pvt Ltd.",
    },
    date: "May 2023 - Present",
    location: "Calicut, Kerala",
    description: [
      "Implemented automated updates for an Electron-based ERP application using electron-updater, AWS S3, and NSIS, enabling silent updates and reducing version inconsistencies across client installations.",
      "Developed and maintained React frontend components, improving load performance by 25% through optimized rendering and responsiveness.",
      "Led collaboration across stakeholders, design, QA, and development teams to deliver project releases on time.",
      "Mentored 4+ interns, accelerating onboarding by 30% and improving team delivery speed and code quality.",
      "Managed complex application state and data flow with React Hooks, and integrated RESTful APIs with asynchronous data fetching and error handling.",
      "Implemented React Query caching, reducing redundant network calls and lowering server load by 20%.",
      "Built frontend solutions with React Hook Form, React Table, TanStack Table, Yup, and Zod.",
      "Contributed to solution architecture, planning, estimation, and code reviews.",
      "Wrote advanced MySQL queries and designed database schemas for application performance and scalability.",
    ],
  },
  {
    title: "Junior Software Developer",
    organisation: {
      name: "Gitbitz Software Pvt Ltd.",
    },
    date: "Jan 2023 - Apr 2023",
    location: "Calicut, Kerala",
    description: [
      "Integrated 100+ REST APIs, improving modularity and backend communication.",
      "Transformed a React web application into a desktop application using Electron.js.",
      "Designed and implemented intuitive, responsive UI screens focused on usability.",
      "Built reusable React components, cutting frontend development time by 30% and reducing code duplication.",
    ],
  },
];
