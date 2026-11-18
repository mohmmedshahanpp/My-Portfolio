// import Head from "next/head";
import { NextSeo } from "next-seo";
import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { PROFILE } from "@/data/profile";

export default function Home() {
  return (
    <>
      <NextSeo
        title={`${PROFILE.name} | ${PROFILE.role}`}
        description={PROFILE.summary}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: `${PROFILE.name} | ${PROFILE.role}`,
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
              "Full Stack Developer, Software Developer, React.js, Node.js, Electron.js, TypeScript, Redux, Express.js, MySQL, Bengaluru, Portfolio",
          },
        ]}
      />
      {/* <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head> */}
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
