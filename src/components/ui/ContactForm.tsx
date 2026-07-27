"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

type FormStatus = "idle" | "sending" | "success" | "error";

type FormSubmitResponse = {
  success?: boolean;
  message?: string;
};

const formEndpoint = `https://formsubmit.co/ajax/${portfolio.email}`;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const submitMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json().catch(() => null)) as
        | FormSubmitResponse
        | null;

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "Message delivery failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <div className="contact-form-shell">
      <form
        aria-describedby="contact-form-note contact-form-status"
        className="contact-form"
        id="contact-form"
        onSubmit={submitMessage}
      >
        <input
          name="_subject"
          type="hidden"
          value="New message from Jawad's portfolio"
        />
        <input name="_template" type="hidden" value="table" />
        <input name="_captcha" type="hidden" value="false" />

        <div className="contact-form-row">
          <label>
            <span>Name</span>
            <input
              autoComplete="name"
              disabled={isSending}
              maxLength={100}
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              autoComplete="email"
              disabled={isSending}
              maxLength={254}
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
        </div>

        <label>
          <span>Message</span>
          <textarea
            disabled={isSending}
            maxLength={2000}
            minLength={10}
            name="message"
            placeholder="Tell me about the opportunity, project, or question..."
            required
            rows={7}
          />
        </label>

        <div
          aria-live="polite"
          className={`contact-form-status status-${status}`}
          id="contact-form-status"
        >
          {status === "success" ? (
            <>
              <CheckCircle2 aria-hidden="true" />
              <span>Message sent. Thank you — I&apos;ll get back to you soon.</span>
            </>
          ) : status === "error" ? (
            <>
              <AlertCircle aria-hidden="true" />
              <span>
                The message could not be sent. Please try again in a moment.
              </span>
            </>
          ) : null}
        </div>

        <button
          className="button button-primary contact-submit"
          disabled={isSending}
          type="submit"
        >
          {isSending ? (
            <LoaderCircle aria-hidden="true" className="contact-spinner" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {isSending ? "Sending..." : "Send message"}
        </button>

        <p className="contact-form-note" id="contact-form-note">
          Your name, email, and message are used only to reply to your enquiry.
        </p>
      </form>
    </div>
  );
}
