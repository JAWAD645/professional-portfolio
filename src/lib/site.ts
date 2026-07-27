import { portfolio } from "@/data/portfolio";

export const siteConfig = {
  name: `${portfolio.name} — Data Analytics Portfolio`,
  shortName: `${portfolio.firstName} — Data Portfolio`,
  url: "http://localhost:3000",
  description:
    "The portfolio of Mohammad Jawadul Tashick, a Computer Science graduate building a career in data analytics, business intelligence, and data engineering.",
  author: portfolio.name,
} as const;
