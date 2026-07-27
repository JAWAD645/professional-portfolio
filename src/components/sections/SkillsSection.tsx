import {
  Activity,
  Blocks,
  Braces,
  ChartNoAxesCombined,
  Workflow,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

const skillIcons = [ChartNoAxesCombined, Workflow, Braces, Blocks] as const;
const scrollingSkills = portfolio.skillGroups.flatMap((group) => group.skills);

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

      <AnimatedSection delay={0.08}>
        <div className="skill-marquee">
          <p className="sr-only">
            Technology highlights: {scrollingSkills.join(", ")}
          </p>
          <div aria-hidden="true" className="skill-marquee-label">
            <Activity />
            Live toolchain
          </div>
          <div aria-hidden="true" className="skill-marquee-window">
            <div className="skill-marquee-track">
              {[...scrollingSkills, ...scrollingSkills].map((skill, index) => (
                <span
                  className="skill-marquee-item"
                  data-copy={index >= scrollingSkills.length ? "true" : "false"}
                  key={`${skill}-${index}`}
                >
                  <i />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
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
