import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(145deg, #140d19, #6f32b6)",
          border: "2px solid #b978ff",
          color: "#ffffff",
          display: "flex",
          fontFamily: "sans-serif",
          fontSize: 21,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {portfolio.initials}
      </div>
    ),
    size,
  );
}
