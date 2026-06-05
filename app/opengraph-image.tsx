import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Michael Alejo | AI/ML Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Avatar Placeholder */}
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "75px",
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "40px",
            }}
          >
            MA
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Michael Alejo
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: "600",
              color: "#60a5fa",
              marginBottom: "30px",
            }}
          >
            AI/ML Engineer
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              color: "#cbd5e1",
              maxWidth: "900px",
              lineHeight: "1.4",
            }}
          >
            Building practical AI systems with RAG, Agentic AI, and Multi-Agent Workflows
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
