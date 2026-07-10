import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#8b5cf6",
            fontSize: "28px",
            marginBottom: "36px",
          }}
        >
          <span>{"<MT/>"}</span>
          <span style={{ color: "#94a3b8" }}>Portfolio</span>
        </div>
        <div
          style={{
            fontSize: "82px",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "0px",
            maxWidth: "920px",
          }}
        >
          Mayuresh Tardekar
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "36px",
            color: "#cbd5e1",
          }}
        >
          Software Engineer | Full-Stack Developer
        </div>
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            gap: "18px",
            fontSize: "24px",
            color: "#e2e8f0",
          }}
        >
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>AI</span>
          <span>Blockchain</span>
        </div>
      </div>
    ),
    size
  );
}
