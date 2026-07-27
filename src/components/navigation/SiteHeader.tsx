"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation, portfolio } from "@/data/portfolio";
import { motionConfig } from "@/lib/motion";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-24% 0px -62%", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    const main = document.getElementById("main-content");
    const footer = document.getElementById("site-footer");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      opener?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="nav-shell">
        <a className="brand" href="#home" aria-label="Go to portfolio home">
          <span className="brand-mark" aria-hidden="true">
            {portfolio.initials}
          </span>
          <span>
            <strong>{portfolio.firstName}</strong>
            <small>data.portfolio</small>
          </span>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            const isActive = id === active;
            return (
              <a
                aria-current={isActive ? "page" : undefined}
                href={item.href}
                key={item.href}
              >
                {isActive ? (
                  <motion.span
                    className="active-nav-indicator"
                    layoutId="active-navigation"
                    transition={motionConfig.spring}
                  />
                ) : null}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="nav-actions">
          <DownloadCVButton compact />
          <button
            ref={openerRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="menu-button"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={menuRef}
            aria-label="Mobile navigation"
            aria-modal="true"
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: motionConfig.fastDuration }}
          >
            <div className="mobile-menu-topline">
              <span>Navigation</span>
              <button
                aria-label="Close navigation menu"
                onClick={closeMenu}
                type="button"
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="mobile-links">
              {navigation.map((item, index) => (
                <a
                  aria-label={item.label}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
            <DownloadCVButton className="mobile-download" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
