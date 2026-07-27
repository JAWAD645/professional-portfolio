import { IntroLoader } from "@/components/animations/IntroLoader";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { PointerGlow } from "@/components/animations/PointerGlow";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export function PortfolioPage() {
  return (
    <MotionProvider>
      <IntroLoader />
      <ScrollProgress />
      <PointerGlow />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <DashboardSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
