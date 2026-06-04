import { ImageResponse } from "next/og";

export const alt = "Shadman Ahnaf — high-converting websites for firms in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated Open Graph / social-share image (no binary asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1220",
          padding: 72,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              backgroundColor: "#2563EB",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            SA
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 22 }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>Shadman Ahnaf</div>
            <div style={{ fontSize: 20, color: "#94A3B8" }}>Website Designer · Dhaka, Bangladesh</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.05, maxWidth: 1010 }}>
            Websites that bring your firm more clients.
          </div>
          <div style={{ fontSize: 28, color: "#CBD5E1", marginTop: 20 }}>
            High-converting websites for firms &amp; businesses across Bangladesh.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, color: "#60A5FA", fontWeight: 700 }}>shadmanahnaf.xyz</div>
          <div style={{ fontSize: 22, color: "#94A3B8" }}>Dental · Law · Tax · Coaching · IT</div>
        </div>
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
