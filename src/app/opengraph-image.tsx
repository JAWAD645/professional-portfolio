import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.name} — Data Analytics Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 74% 30%, #54238f 0%, #160f1e 28%, #0e0a08 66%)",
          color: "#f6f1ff",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "720px" }}>
          <span
            style={{
              color: "#c99aff",
              fontSize: 23,
              letterSpacing: "0.2em",
              marginBottom: 28,
              textTransform: "uppercase",
            }}
          >
            Data / BI / Engineering
          </span>
          <h1
            style={{
              fontSize: 68,
              letterSpacing: "-0.045em",
              lineHeight: 1.02,
              margin: 0,
            }}
          >
            {portfolio.name}
          </h1>
          <p
            style={{
              color: "#c9c0cf",
              fontSize: 30,
              lineHeight: 1.35,
              margin: "28px 0 0",
            }}
          >
            Data analytics-focused professional turning complex information
            into clear, decision-ready insight.
          </p>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "2px solid #8b48df",
            borderRadius: "50%",
            boxShadow: "0 0 80px #7134c766",
            display: "flex",
            fontSize: 58,
            height: 250,
            justifyContent: "center",
            width: 250,
          }}
        >
          {portfolio.initials}
        </div>
      </div>
    ),
    size,
  );
}
