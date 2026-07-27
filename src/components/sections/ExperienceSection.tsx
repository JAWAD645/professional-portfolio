import { BriefcaseBusiness, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="content-section section-shell" id="experience">
      <AnimatedSection>
        <SectionHeading
          index="03"
          eyebrow="Professional experience"
          title="Structured work in real operating environments."
          description="Experience translated into the data quality, reporting, process, documentation, and stakeholder capabilities that support a data-focused career."
        />
      </AnimatedSection>

      <div className="timeline">
        {portfolio.experience.map((experience, index) => (
          <AnimatedSection
            className="timeline-item"
            delay={index * 0.1}
            key={`${experience.role}-${experience.organisation}`}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span>{index + 1}</span>
            </div>
            <article className="experience-card">
              <div className="experience-heading">
                <div className="experience-icon">
                  <BriefcaseBusiness aria-hidden="true" />
                </div>
                <div>
                  <p>{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <strong>{experience.organisation}</strong>
                  <span>
                    <MapPin aria-hidden="true" size={14} />
                    {experience.location}
                  </span>
                </div>
              </div>
              <p className="experience-summary">{experience.summary}</p>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="signal-list" aria-label="Related capabilities">
                {experience.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
