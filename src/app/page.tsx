import { PortfolioPage } from "@/components/PortfolioPage";
import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    url: siteConfig.url,
    email: `mailto:${portfolio.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chattogram",
      addressCountry: "BD",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "BRAC University",
    },
    sameAs: [portfolio.social.linkedin.href, portfolio.social.github.href],
    knowsAbout: [
      "Data Analytics",
      "Business Intelligence",
      "Power BI",
      "Python",
      "SQL",
      "Machine Learning",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PortfolioPage />
    </>
  );
}
