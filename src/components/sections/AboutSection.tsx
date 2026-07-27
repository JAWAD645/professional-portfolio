import { ArrowRight, Layers3 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="content-section section-shell" id="about">
      <AnimatedSection>
        <SectionHeading
          index="01"
          eyebrow="Professional profile"
          title="Operations context meets analytical thinking."
          description="A Computer Science background strengthened by practical reporting, data quality, technical support, research, and communication."
        />
      </AnimatedSection>

      <div className="about-layout">
        <AnimatedSection className="about-narrative">
          <p className="lead">{portfolio.positioning}</p>
          <div className="profile-copy">
            {portfolio.profile.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="domain-note">
            <Layers3 aria-hidden="true" />
            <div>
              <span>Transferable advantage</span>
              <p>
                Maritime operations, reporting discipline, content quality, and
                stakeholder coordination provide real-world context for
                analytical work.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="direction-stack">
          {portfolio.careerDirection.map((item, index) => (
            <AnimatedSection delay={index * 0.08} key={item.label}>
              <GlowCard className="direction-card">
                <div className="direction-index">0{index + 1}</div>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
                <ArrowRight aria-hidden="true" />
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
