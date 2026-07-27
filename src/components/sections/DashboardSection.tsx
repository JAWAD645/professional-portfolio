import { Activity, BarChart3, Database, Rows3 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { portfolio } from "@/data/portfolio";

const metricIcons = [Database, Rows3, BarChart3, Activity] as const;

export function DashboardSection() {
  return (
    <section
      className="dashboard-section section-shell"
      id="dashboard"
      aria-labelledby="dashboard-title"
    >
      <AnimatedSection className="dashboard-header">
        <div>
          <p className="eyebrow">Verified CV signals / 2023—present</p>
          <h2 id="dashboard-title">A factual snapshot, not vanity metrics.</h2>
        </div>
        <p>
          Each figure below comes directly from professional or project
          experience documented in the CV.
        </p>
      </AnimatedSection>

      <div className="metrics-grid">
        {portfolio.metrics.map((metric, index) => {
          const Icon = metricIcons[index];
          return (
            <AnimatedSection delay={index * 0.07} key={metric.label}>
              <GlowCard className="metric-card">
                <div className="metric-card-top">
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" />
                </div>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
                <i aria-hidden="true" />
              </GlowCard>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
