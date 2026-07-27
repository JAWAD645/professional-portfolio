import {
  ArrowUp,
  ArrowUpRight,
  ContactRound,
  GitBranch,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell" id="site-footer">
      <AnimatedSection className="footer-inner">
        <div>
          <span className="brand-mark" aria-hidden="true">
            {portfolio.initials}
          </span>
          <p>
            Designed around verified experience, analytical curiosity, and
            useful communication.
          </p>
        </div>
        <nav aria-label="Social links" className="footer-socials">
          <a
            href={portfolio.social.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactRound aria-hidden="true" />
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={portfolio.social.github.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch aria-hidden="true" />
            GitHub
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <a href="#home" aria-label="Back to top">
          Back to top
          <ArrowUp aria-hidden="true" />
        </a>
      </AnimatedSection>
    </footer>
  );
}
