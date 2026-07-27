"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  LoaderCircle,
} from "lucide-react";

type DownloadCVButtonProps = {
  className?: string;
  label?: string;
  compact?: boolean;
};

type DownloadStatus = "idle" | "preparing" | "success" | "error";

const cvTransportPath = "/resume-data.txt";
const cvFilename = "Mohammad-Jawadul-Tashick-CV.pdf";

function isValidPdf(content: ArrayBuffer) {
  const bytes = new Uint8Array(content);
  const decoder = new TextDecoder("ascii");
  const header = decoder.decode(bytes.subarray(0, 5));
  const tail = decoder.decode(bytes.subarray(Math.max(0, bytes.length - 1024)));

  return bytes.length > 5 && header === "%PDF-" && tail.includes("%%EOF");
}

export function DownloadCVButton({
  className = "",
  label = "Download CV",
  compact = false,
}: DownloadCVButtonProps) {
  const [status, setStatus] = useState<DownloadStatus>("idle");

  const downloadCv = async () => {
    if (status === "preparing") {
      return;
    }

    setStatus("preparing");

    try {
      const response = await fetch(cvTransportPath, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("CV request failed");
      }

      const cvContent = await response.arrayBuffer();
      if (!isValidPdf(cvContent)) {
        throw new Error("CV file was invalid");
      }
      const cvBlob = new Blob([cvContent], { type: "application/pdf" });

      const blobUrl = URL.createObjectURL(cvBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = cvFilename;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);

      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch (error) {
      console.error("CV download failed", error);
      setStatus("error");
    }
  };

  const visibleLabel =
    status === "preparing"
      ? "Preparing CV..."
      : status === "success"
        ? "CV downloaded"
        : status === "error"
          ? "Try download again"
          : label;

  return (
    <button
      aria-label="Download Mohammad Jawadul Tashick's CV as a PDF"
      className={`button button-primary button-shine ${compact ? "button-compact" : ""} ${className}`}
      disabled={status === "preparing"}
      onClick={downloadCv}
      type="button"
    >
      {status === "preparing" ? (
        <LoaderCircle
          aria-hidden="true"
          className="button-spinner"
          size={compact ? 16 : 18}
        />
      ) : status === "success" ? (
        <CheckCircle2 aria-hidden="true" size={compact ? 16 : 18} />
      ) : status === "error" ? (
        <AlertCircle aria-hidden="true" size={compact ? 16 : 18} />
      ) : (
        <Download aria-hidden="true" size={compact ? 16 : 18} />
      )}
      {visibleLabel}
      <span className="sr-only" aria-live="polite">
        {status === "preparing"
          ? "Preparing the CV download"
          : status === "success"
            ? "The CV download has started"
            : status === "error"
              ? "The CV could not be downloaded. Select the button to try again."
              : ""}
      </span>
    </button>
  );
}
