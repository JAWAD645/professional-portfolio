import { MessageSquareText } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";

export function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact">
      <AnimatedSection className="contact-card">
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-copy">
          <p className="eyebrow">Contact / open channel</p>
          <h2>Let&apos;s turn data into a clearer next decision.</h2>
          <p>
            For data analytics, business intelligence, reporting, research, or
            technology opportunities, send a message here. I&apos;ll receive it
            by email and reply to the address you provide.
          </p>
          <div className="contact-actions">
            <a className="button button-secondary" href="#contact-form">
              <MessageSquareText aria-hidden="true" size={18} />
              Send message
            </a>
            <DownloadCVButton />
          </div>
        </div>

        <ContactForm />
      </AnimatedSection>
    </section>
  );
}
