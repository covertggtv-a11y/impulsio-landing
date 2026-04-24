"use client";

import { useState, useEffect, useCallback } from "react";
import { ImpulsioLogo, ImpulsioIcon } from "@/components/ImpulsioLogo";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Contact & Lead Management",
    description:
      "Every lead, buyer, and seller in one place. Track interactions, score leads with AI, and never let a prospect slip through the cracks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Visual Deal Pipeline",
    description:
      "Drag-and-drop pipeline boards customized for your workflow. See every deal at a glance — from first contact to closing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "IDX Property Search",
    description:
      "Your own MLS-powered property search — fully branded, fully yours. No iFrames, no third-party widgets. Listings displayed your way.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v10l7-7" />
      </svg>
    ),
    title: "AI-Powered Insights",
    description:
      "Automated lead scoring, smart property matching, and predictive analytics. Your AI works while you sleep — surfacing the deals that matter.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 4.354a4 4 0 1 1 0 7.292" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    title: "Team & Brokerage Tools",
    description:
      "Role-based access, shared contacts, team pipelines, and admin controls. Built for brokerages with 5 agents or 500.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Signal Flares",
    description:
      "Your agents report issues, ideas, and wins in real-time. Management sees everything — screenshots included. No more lost feedback.",
  },
];

function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agents: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("impulsio-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("impulsio-theme", next);
  }, [theme]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  const t = (cssVar: string) => `var(${cssVar})`;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: t("--bg-input"),
    border: `1px solid ${t("--border-input")}`,
    borderRadius: 10,
    color: t("--text-primary"),
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s, background-color 0.35s ease, color 0.35s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: t("--text-secondary"),
    marginBottom: 6,
    letterSpacing: "0.03em",
    transition: "color 0.35s ease",
  };

  return (
    <main
      style={{
        background: t("--bg-primary"),
        minHeight: "100vh",
        transition: "background-color 0.35s ease",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: t("--bg-nav"),
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${t("--border-subtle")}`,
          transition: "background-color 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ImpulsioLogo size="sm" variant="nav" />
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {mounted && <ThemeToggle theme={theme} onToggle={toggleTheme} />}
            <a
              href="#contact"
              style={{
                padding: "10px 28px",
                background: "linear-gradient(135deg, #FF6B35 0%, #2563EB 100%)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Request Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 160,
          paddingBottom: 120,
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${t("--glow-blue")} 0%, transparent 70%)`,
            pointerEvents: "none",
            transition: "background 0.35s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -200,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${t("--glow-orange")} 0%, transparent 70%)`,
            pointerEvents: "none",
            transition: "background 0.35s ease",
          }}
        />

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div className="animate-fade-in-up" style={{ marginBottom: 32 }}>
            <ImpulsioLogo size="lg" />
          </div>

          <h1
            className="animate-fade-in-up-delay-1"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
              color: t("--text-primary"),
              letterSpacing: "-0.02em",
              transition: "color 0.35s ease",
            }}
          >
            The CRM That Moves{" "}
            <span className="gradient-text">As Fast As You Do</span>
          </h1>

          <p
            className="animate-fade-in-up-delay-2"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: t("--text-secondary"),
              maxWidth: 640,
              margin: "0 auto 40px",
              lineHeight: 1.7,
              transition: "color 0.35s ease",
            }}
          >
            Built for real estate brokerages that refuse to settle. Impulsio brings
            your contacts, deals, listings, and team into one powerful platform —
            with AI that works while you close.
          </p>

          <div
            className="animate-fade-in-up-delay-3"
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="#features"
              style={{
                padding: "14px 36px",
                background: "linear-gradient(135deg, #FF6B35 0%, #2563EB 100%)",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(255, 107, 53, 0.25)",
              }}
            >
              See What&apos;s Inside
            </a>
            <a
              href="#contact"
              style={{
                padding: "14px 36px",
                background: "transparent",
                color: t("--outline-btn-text"),
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
                border: `1px solid ${t("--outline-btn-border")}`,
                transition: "color 0.35s ease, border-color 0.35s ease",
              }}
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section
        style={{
          borderTop: `1px solid ${t("--border-subtle")}`,
          borderBottom: `1px solid ${t("--border-subtle")}`,
          padding: "32px 24px",
          transition: "border-color 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {["MLS Integrated", "AI-Powered", "Built for Brokerages", "Your Brand, Your Data"].map((item) => (
            <span
              key={item}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: t("--text-tertiary"),
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                transition: "color 0.35s ease",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        style={{
          padding: "100px 24px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: t("--text-primary"),
              marginBottom: 16,
              letterSpacing: "-0.02em",
              transition: "color 0.35s ease",
            }}
          >
            Everything Your Brokerage Needs.{" "}
            <span className="gradient-text">Nothing It Doesn&apos;t.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: t("--text-secondary"),
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
              transition: "color 0.35s ease",
            }}
          >
            One platform. No duct tape. No Frankenstack of tools that don&apos;t talk to each other.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{
                background: t("--bg-card"),
                border: `1px solid ${t("--border-subtle")}`,
                borderRadius: 16,
                padding: 32,
                transition: "border-color 0.3s, transform 0.3s, background-color 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${t("--icon-gradient-from")} 0%, ${t("--icon-gradient-to")} 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: "#FF6B35",
                  transition: "background 0.35s ease",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: t("--text-primary"),
                  marginBottom: 10,
                  transition: "color 0.35s ease",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: t("--text-secondary"),
                  lineHeight: 1.65,
                  margin: 0,
                  transition: "color 0.35s ease",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Differentiator */}
      <section
        style={{
          padding: "80px 24px",
          background: t("--bg-differentiator"),
          borderTop: `1px solid ${t("--border-subtle")}`,
          borderBottom: `1px solid ${t("--border-subtle")}`,
          transition: "border-color 0.35s ease",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: 800,
              color: t("--text-primary"),
              marginBottom: 20,
              letterSpacing: "-0.02em",
              transition: "color 0.35s ease",
            }}
          >
            Your Listings. Your Brand. Your Data.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: t("--text-secondary"),
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 16px",
              transition: "color 0.35s ease",
            }}
          >
            Most CRMs bolt on a third-party IDX widget and call it a day. Impulsio connects directly to your MLS —
            listings render in your design, on your domain, feeding data straight into your pipeline. When a lead
            views a property, you know about it before they call.
          </p>
          <p
            style={{
              fontSize: 16,
              color: t("--text-tertiary"),
              lineHeight: 1.6,
              maxWidth: 580,
              margin: "0 auto",
              transition: "color 0.35s ease",
            }}
          >
            Built by operators who understand that real estate runs on relationships, not software subscriptions.
            Impulsio is the system you&apos;d build if you had the engineering team.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" style={{ padding: "100px 24px", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 800,
              color: t("--text-primary"),
              marginBottom: 12,
              transition: "color 0.35s ease",
            }}
          >
            Get Early Access
          </h2>
          <p
            style={{
              fontSize: 16,
              color: t("--text-secondary"),
              lineHeight: 1.6,
              transition: "color 0.35s ease",
            }}
          >
            Impulsio is rolling out to select brokerages. Tell us about yours and we&apos;ll be in touch.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: 48,
              background: t("--bg-card"),
              border: `1px solid ${t("--border-accent")}`,
              borderRadius: 16,
              transition: "background-color 0.35s ease, border-color 0.35s ease",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16, color: "#22C55E" }}>&#10003;</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: t("--text-primary"),
                marginBottom: 8,
                transition: "color 0.35s ease",
              }}
            >
              We&apos;ve got your info.
            </h3>
            <p
              style={{
                fontSize: 15,
                color: t("--text-secondary"),
                transition: "color 0.35s ease",
              }}
            >
              Expect to hear from us within 48 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              background: t("--bg-card"),
              border: `1px solid ${t("--border-subtle")}`,
              borderRadius: 16,
              padding: "40px 32px",
              transition: "background-color 0.35s ease, border-color 0.35s ease",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={labelStyle}>Brokerage Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Number of Agents</label>
                <input
                  type="text"
                  value={formData.agents}
                  onChange={(e) => setFormData({ ...formData, agents: e.target.value })}
                  placeholder="e.g. 25"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Tell us about your brokerage</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="What tools do you currently use? What's not working?"
                style={{
                  ...inputStyle,
                  resize: "vertical" as const,
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "14px 32px",
                background: submitting
                  ? t("--disabled-bg")
                  : "linear-gradient(135deg, #FF6B35 0%, #2563EB 100%)",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                marginTop: 8,
                transition: "background-color 0.35s ease",
              }}
            >
              {submitting ? "Sending..." : "Request Early Access"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${t("--border-subtle")}`,
          padding: "40px 24px",
          textAlign: "center",
          background: t("--bg-footer"),
          transition: "background-color 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <ImpulsioIcon size={28} />
          <p
            style={{
              fontSize: 13,
              color: t("--text-muted"),
              margin: 0,
              transition: "color 0.35s ease",
            }}
          >
            &copy; {new Date().getFullYear()} Impulsio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
