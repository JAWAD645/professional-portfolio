import { ArrowUpRight, Atom, BookOpenCheck, Network } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

const researchIcons = [Atom, BookOpenCheck, Network] as const;

export function ResearchSection() {
  return (
    <section
      className="content-section learning-section section-shell"
      id="research"
    >
      <AnimatedSection>
        <SectionHeading
          index="05"
          eyebrow="Data learning journey"
          title="Research as a bridge between theory and application."
          description="Current and ongoing work across predictive modelling, safe e-commerce, federated learning, LLMs, and quantum-enhanced machine learning."
        />
      </AnimatedSection>

      <div className="research-list">
        {portfolio.research.map((item, index) => {
          const Icon = researchIcons[index];
          return (
            <AnimatedSection delay={index * 0.07} key={item.title}>
              <article className="research-card">
                <div className="research-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="research-main">
                  <div>
                    <span>Research / 0{index + 1}</span>
                    <p>{item.period}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <ul className="tag-list" aria-label="Research fields">
                    {item.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                </div>
                <a
                  aria-label={`${item.link.label}: ${item.title}`}
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.link.label}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
