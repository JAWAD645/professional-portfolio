import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  ContactRound,
  GitBranch,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { HeroDataBackdrop } from "@/components/animations/HeroDataBackdrop";
import { RevealText } from "@/components/animations/RevealText";
import { RotatingRoles } from "@/components/animations/RotatingRoles";
import { HeroAnalytics } from "@/components/charts/HeroAnalytics";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { portfolio } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <HeroDataBackdrop />

      <div className="hero-layout">
        <AnimatedSection className="hero-copy">
          <p className="eyebrow">
            <span className="status-pulse" aria-hidden="true" />
            {portfolio.location} · Building toward data
          </p>

          <h1 id="hero-title" aria-label={portfolio.name}>
            <span className="hero-intro">Hello, I&apos;m</span>
            <RevealText text={portfolio.name} />
          </h1>

          <p className="hero-role">{portfolio.role}</p>
          <RotatingRoles roles={portfolio.rotatingRoles} />
          <p className="hero-summary">{portfolio.summary}</p>

          <div className="hero-actions">
            <a className="button button-secondary" href="#projects">
              Explore projects
              <ArrowDown aria-hidden="true" size={18} />
            </a>
            <DownloadCVButton />
            <a
              aria-label={`Send a message to ${portfolio.name}`}
              className="button button-ghost"
              href="#contact"
            >
              <MessageSquareText aria-hidden="true" size={18} />
              Send message
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin aria-hidden="true" size={15} />
              {portfolio.location}
            </span>
            <a
              href={portfolio.social.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactRound aria-hidden="true" size={15} />
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            <a
              href={portfolio.social.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch aria-hidden="true" size={15} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection className="hero-visual" delay={0.15}>
          <div className="identity-chip">
            <Image
              alt="MJT monogram data mark"
              height={72}
              priority
              src="/brand-mark.png"
              width={72}
            />
            <div>
              <span>Portfolio node</span>
              <strong>{portfolio.initials} / 01</strong>
            </div>
            <i>ACTIVE</i>
          </div>
          <HeroAnalytics />
          <div className="floating-tag floating-tag-one" aria-hidden="true">
            Power BI
          </div>
          <div className="floating-tag floating-tag-two" aria-hidden="true">
            Python · SQL
          </div>
        </AnimatedSection>
      </div>

      <a className="scroll-cue" href="#dashboard" aria-label="Scroll to summary">
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
