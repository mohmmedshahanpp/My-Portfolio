import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { PROFILE } from "@/data/profile";

export default function Projects() {
  return (
    <>
      <NextSeo
        title={`Projects by ${PROFILE.name} | Full Stack Developer`}
        description="Explore HGEC ERP, Fixbrix, and personal projects by Mohmmed Shahan PP, built with React, Node.js, MySQL, and REST APIs."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: `Projects by ${PROFILE.name} | Full Stack Developer`,
          description:
            "Explore HGEC ERP, a multi-tenant ERP desktop application, Fixbrix, a construction management web application, and personal projects.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects,Portfolio, Software Developer, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
