import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("public assets and motion fallback", () => {
  it("publishes an unchanged copy of the source CV", () => {
    const source = readFileSync(resolve("references/resume.pdf"));
    const published = readFileSync(resolve("public/resume.pdf"));
    const transportCopy = readFileSync(resolve("public/resume-data.txt"));
    const digest = (content: Buffer) =>
      createHash("sha256").update(content).digest("hex");

    expect(published.byteLength).toBe(source.byteLength);
    expect(digest(published)).toBe(digest(source));
    expect(transportCopy.byteLength).toBe(source.byteLength);
    expect(digest(transportCopy)).toBe(digest(source));
    expect(published.subarray(0, 5).toString("ascii")).toBe("%PDF-");
  });

  it("contains an explicit reduced-motion stylesheet fallback", () => {
    const styles = readFileSync(resolve("src/app/globals.css"), "utf8");
    expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styles).toContain("scroll-behavior: auto");
  });
});
