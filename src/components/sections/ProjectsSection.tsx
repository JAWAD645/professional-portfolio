import { ArrowUpRight, GitBranch, Radio } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, type Project } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects?: readonly Project[];
};

export function ProjectsSection({
  projects = portfolio.projects,
}: ProjectsSectionProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="content-section section-shell" id="projects">
      <AnimatedSection>
        <SectionHeading
          index="04"
          eyebrow="Selected projects"
          title="Analysis, machine learning, and useful systems."
          description="Every project and destination below is taken from the CV. Outcomes stay within the documented scope."
        />
      </AnimatedSection>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <AnimatedSection delay={index * 0.07} key={project.title}>
            <GlowCard className={`project-card project-${index + 1}`}>
              <div className="project-topline">
                <span>Project / 0{index + 1}</span>
                <span
                  className={
                    project.status === "In progress"
                      ? "status-badge status-live"
                      : "status-badge"
                  }
                >
                  {project.status === "In progress" ? (
                    <Radio aria-hidden="true" size={12} />
                  ) : null}
                  {project.status}
                </span>
              </div>
              <p className="project-period">{project.period}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-outcome">
                <span>Output / result</span>
                <p>{project.outcome}</p>
              </div>
              <ul className="tag-list" aria-label={`${project.title} tools`}>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch aria-hidden="true" size={18} />
                {project.link.label}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
