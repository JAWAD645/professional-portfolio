import { Blocks, Braces, ChartNoAxesCombined, Workflow } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

const skillIcons = [ChartNoAxesCombined, Workflow, Braces, Blocks] as const;

export function SkillsSection() {
  return (
    <section className="content-section section-shell" id="skills">
      <AnimatedSection>
        <SectionHeading
          index="02"
          eyebrow="Core competencies"
          title="A connected analytics toolkit."
          description="Skills are grouped by how they contribute to preparing, analysing, building, and communicating—not by unsupported proficiency scores."
        />
      </AnimatedSection>

      <div className="skills-grid">
        {portfolio.skillGroups.map((group, index) => {
          const Icon = skillIcons[index];
          return (
            <AnimatedSection delay={index * 0.06} key={group.title}>
              <GlowCard className="skill-card">
                <div className="skill-card-heading">
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p>Cluster / 0{index + 1}</p>
                    <h3>{group.title}</h3>
                  </div>
                </div>
                <p className="skill-description">{group.description}</p>
                <ul className="tag-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
