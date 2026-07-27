import {
  ArrowUpRight,
  Award,
  GraduationCap,
  Languages,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section className="content-section section-shell" id="education">
      <AnimatedSection>
        <SectionHeading
          index="06"
          eyebrow="Education and training"
          title="Computer Science foundations, continuously extended."
          description="Formal education and completed certificates presented exactly at the level documented in the CV."
        />
      </AnimatedSection>

      <div className="education-layout">
        <div className="education-column">
          <h3 className="column-title">
            <GraduationCap aria-hidden="true" />
            Education
          </h3>
          <div className="education-list">
            {portfolio.education.map((item, index) => (
              <AnimatedSection delay={index * 0.06} key={item.qualification}>
                <GlowCard className="education-card">
                  <span>0{index + 1}</span>
                  <div>
                    <p>{item.period}</p>
                    <h4>{item.qualification}</h4>
                    <strong>{item.institution}</strong>
                    <small>
                      {item.location}
                      {item.detail ? ` · ${item.detail}` : ""}
                    </small>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="education-column">
          <h3 className="column-title">
            <Award aria-hidden="true" />
            Certifications
          </h3>
          <div className="certificate-list">
            {portfolio.certifications.map((item, index) => (
              <AnimatedSection delay={index * 0.05} key={item.title}>
                <article className="certificate-card">
                  <div className="certificate-icon">
                    {index === 0 ? (
                      <Languages aria-hidden="true" />
                    ) : (
                      <Award aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p>{item.year}</p>
                    <h4>{item.title}</h4>
                    {item.detail ? <strong>{item.detail}</strong> : null}
                    {item.provider ? <small>{item.provider}</small> : null}
                  </div>
                  <a
                    aria-label={`${item.link.label}: ${item.title}`}
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <AnimatedSection className="leadership-strip">
        <div>
          <Users aria-hidden="true" />
          <span>Leadership and community</span>
        </div>
        <ul>
          {portfolio.leadership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
