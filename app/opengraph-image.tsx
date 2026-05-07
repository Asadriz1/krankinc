import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Krank — Compete. Perform. Win Real Money.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "8px 20px",
          }}
        >
          <div
            style={{
              background: "#22c55e",
              borderRadius: "50%",
              width: "8px",
              height: "8px",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: "14px", fontWeight: 700, letterSpacing: "3px" }}>
            SKILL-BASED · NOT GAMBLING
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            ⚡
          </div>
          <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 900, letterSpacing: "8px" }}>
            KRANK
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            {["$5–$500+", "90%", "0%"].map((val, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 900 }}>{val}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "1px" }}>
                  {["Entry fees", "Prize pool paid out", "Randomness"][i]}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Compete.{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Perform.</span>
            <br />
            Win real money.
          </div>

          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "22px", lineHeight: 1.5, maxWidth: "700px" }}>
            Apple Watch · Oura Ring · Garmin · Whoop · Fitbit
            <br />
            Verified by Apple Health. Paid out via Stripe.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
