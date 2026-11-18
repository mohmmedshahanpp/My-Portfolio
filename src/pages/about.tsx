import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { PROFILE } from "@/data/profile";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About ${PROFILE.name} | ${PROFILE.role}`}
        description={PROFILE.summary}
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: `About ${PROFILE.name} | ${PROFILE.role}`,
          description: PROFILE.summary,
          // images: [
          //   {
          //     url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
          //     alt: "Mohmmed Shahan - Portfolio Image",
          //   },
          // ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
      <section className="px-6 pb-20 sm:px-14 md:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-accent">Certifications</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              {PROFILE.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-accent">Languages</h2>
            <ul className="mt-4 space-y-2 text-foreground">
              {PROFILE.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
