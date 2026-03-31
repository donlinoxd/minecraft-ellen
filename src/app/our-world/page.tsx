export default function OurWorld() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1a2e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        padding: "2rem",
      }}
    >
      {/* Dirt/grass background blocks pattern */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 31px,
              rgba(0,0,0,0.15) 31px,
              rgba(0,0,0,0.15) 32px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 31px,
              rgba(0,0,0,0.15) 31px,
              rgba(0,0,0,0.15) 32px
            )
          `,
          backgroundColor: "#2d5a1b",
          zIndex: 0,
        }}
      />

      {/* Sky gradient overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(to bottom, #87CEEB 0%, #4a9eca 40%, #2d5a1b 100%)",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Main Minecraft-style panel */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          width: "100%",
        }}
      >
        {/* Sign / book title bar */}
        <div
          style={{
            background: "#8B6914",
            border: "4px solid #5C4008",
            borderBottom: "none",
            padding: "8px 20px",
            display: "inline-block",
            boxShadow: "inset -2px -2px 0 #3a2700, inset 2px 2px 0 #c89a30",
            imageRendering: "pixelated",
          }}
        >
          <span
            style={{
              color: "#ffe97a",
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "2px",
              textShadow: "2px 2px 0px #3a2700",
              textTransform: "uppercase",
            }}
          >
            📖 Our World
          </span>
        </div>

        {/* Main content block — styled like a Minecraft book/sign */}
        <div
          style={{
            background: "#c6a84a",
            border: "4px solid #5C4008",
            boxShadow:
              "inset -4px -4px 0 #8B6914, inset 4px 4px 0 #e8cc72, 6px 6px 0 rgba(0,0,0,0.5)",
            padding: "32px 36px",
            imageRendering: "pixelated",
          }}
        >
          {/* Inner parchment */}
          <div
            style={{
              background: "#f5e6c8",
              border: "3px solid #8B6914",
              boxShadow: "inset 2px 2px 0 #fff8e8, inset -2px -2px 0 #c9a84a",
              padding: "28px 24px",
            }}
          >
            {/* Decorative top line */}
            <div
              style={{
                borderBottom: "2px solid #8B6914",
                marginBottom: "20px",
                paddingBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>⚔️</span>
              <span
                style={{
                  color: "#5C4008",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  textShadow: "1px 1px 0 #e8cc72",
                }}
              >
                About Us
              </span>
              <span style={{ fontSize: "1.2rem" }}>⚔️</span>
            </div>

            {/* Paragraph text */}
            <p
              style={{
                color: "#2c1a00",
                fontSize: "0.95rem",
                lineHeight: "1.9",
                margin: 0,
                textAlign: "justify",
                letterSpacing: "0.3px",
                textShadow: "0.5px 0.5px 0 rgba(255,255,255,0.4)",
              }}
            >
              Our group stands out for our strong sense of organization and
              teamwork. We don&apos;t just complete tasks—we carefully plan each
              step, manage our time wisely, and make sure everyone knows their
              role. Because of this, we&apos;re able to work efficiently without
              rushing or feeling overwhelmed. Our preparation and coordination
              help us produce results that are not only complete, but also
              thoughtful and high-quality.
            </p>

            {/* Decorative bottom */}
            <div
              style={{
                borderTop: "2px solid #8B6914",
                marginTop: "20px",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {["🌿", "🪨", "🌲", "🪨", "🌿"].map((icon, i) => (
                <span key={i} style={{ fontSize: "1rem" }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stone block base */}
        <div
          style={{
            background: "#808080",
            border: "4px solid #404040",
            borderTop: "none",
            height: "16px",
            boxShadow: "inset -2px -2px 0 #404040, inset 2px 2px 0 #aaaaaa, 6px 6px 0 rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}
