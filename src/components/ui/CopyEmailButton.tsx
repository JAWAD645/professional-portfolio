"use client";

import { useState } from "react";
import { AlertCircle, Check, Copy } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function CopyEmailButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const legacyCopy = () => {
    const input = document.createElement("textarea");
    input.value = portfolio.email;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const succeeded = document.execCommand("copy");
    input.remove();
    return succeeded;
  };

  const copyEmail = async () => {
    let succeeded = false;

    try {
      if (!navigator.clipboard?.writeText) {
        succeeded = legacyCopy();
      } else {
        let timeoutId = 0;
        await Promise.race([
          navigator.clipboard.writeText(portfolio.email),
          new Promise<never>((_, reject) => {
            timeoutId = window.setTimeout(
              () => reject(new Error("Clipboard request timed out")),
              500,
            );
          }),
        ]);
        window.clearTimeout(timeoutId);
        succeeded = true;
      }
    } catch {
      succeeded = legacyCopy();
    }

    if (succeeded) {
      setStatus("copied");
    } else {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 1800);
  };

  return (
    <button className="button button-ghost" onClick={copyEmail} type="button">
      {status === "copied" ? (
        <Check aria-hidden="true" size={18} />
      ) : status === "failed" ? (
        <AlertCircle aria-hidden="true" size={18} />
      ) : (
        <Copy aria-hidden="true" size={18} />
      )}
      <span>
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? "Copy unavailable"
            : "Copy email"}
      </span>
      <span className="sr-only" aria-live="polite">
        {status === "copied"
          ? "Email address copied to clipboard"
          : status === "failed"
            ? "Clipboard access is unavailable. Use the visible email link instead."
            : ""}
      </span>
    </button>
  );
}
