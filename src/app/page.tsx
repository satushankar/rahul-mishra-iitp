import { FacultyHero } from "@/components/faculty-hero";
import { StatStrip } from "@/components/home/stat-strip";
import { ResearchPreview } from "@/components/home/research-preview";
import { FeaturedPublications } from "@/components/home/featured-publications";
import { BioBlurb } from "@/components/home/bio-blurb";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { contact } from "@/data/contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.designation,
  email: `mailto:${contact.email}`,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: profile.institution,
  },
  affiliation: profile.department,
  knowsAbout: profile.researchAreas,
  url: profile.profileUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <FacultyHero />
      <StatStrip />
      <Reveal>
        <ResearchPreview />
      </Reveal>
      <Reveal>
        <FeaturedPublications />
      </Reveal>
      <Reveal>
        <BioBlurb />
      </Reveal>
    </>
  );
}
