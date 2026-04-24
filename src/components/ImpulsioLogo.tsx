"use client";

export function ImpulsioLogo({ className = "", size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const scale = size === "sm" ? 0.7 : size === "md" ? 0.85 : 1;
  const width = 440 * scale;
  const height = 90 * scale;

  // Use unique gradient IDs to avoid conflicts when multiple logos on page
  const gradId = size === "sm" ? "nav" : size === "md" ? "mid" : "hero";

  return (
    <svg
      viewBox="0 0 440 90"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`textGrad-${gradId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="45%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id={`arrowGrad-${gradId}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/*
        The "I" in IMPULSIO is replaced by an integrated arrow/rocket shape.
        The vertical stroke of the "I" tapers upward into an arrowhead.
        Small fins at the base, burst lines at the tip.
      */}

      {/* Custom "I" as arrow — positioned where the I in IMPULSIO sits */}
      <g transform="translate(18, 10)">
        {/* Arrow body — the vertical stroke of the "I", slightly tapered */}
        <path
          d="M 6,62 L 4,30 L 8,14 L 12,30 L 10,62 Z"
          fill={`url(#arrowGrad-${gradId})`}
        />
        {/* Arrowhead / rocket nose — seamless with the shaft */}
        <polygon
          points="8,2 14,18 2,18"
          fill={`url(#arrowGrad-${gradId})`}
        />
        {/* Small fins at the base */}
        <polygon points="4,58 0,66 6,62" fill="#FF6B35" opacity="0.9" />
        <polygon points="10,62 16,66 12,58" fill="#2563EB" opacity="0.9" />

        {/* Burst / motion lines at the tip — 3 small lines radiating from the arrow tip */}
        <line x1="3" y1="4" x2="-2" y2="-3" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="8" y1="0" x2="8" y2="-7" stroke="#FF8A5C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="13" y1="4" x2="18" y2="-3" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* MPULSIO text — starts after the custom I, leaving a natural gap */}
      <text
        x="38"
        y="68"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="58"
        fontStyle="italic"
        fill={`url(#textGrad-${gradId})`}
        letterSpacing="4"
      >
        MPULSIO
      </text>

      {/* FUELING FORWARD tagline */}
      <text
        x="70"
        y="84"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontWeight="700"
        fontSize="11.5"
        fill="#1E3A8A"
        letterSpacing="4.5"
      >
        FUELING FORWARD
      </text>

      {/* Small circular emblem before tagline */}
      <g transform="translate(54, 78)">
        <circle cx="0" cy="0" r="7" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="14 30" />
        <polygon points="0,-4 3,1 -3,1" fill="#FF6B35" />
        <line x1="0" y1="1" x2="0" y2="4" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function ImpulsioIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#iconGrad)" strokeWidth="3" strokeDasharray="60 130" strokeLinecap="round" />
      {/* Integrated arrow "I" icon — same design language as the full logo */}
      <g transform="translate(32, 34)">
        {/* Arrow body — tapered upward */}
        <path
          d="M 0,16 L -3,0 L -2,-8 L 0,-14 L 2,-8 L 3,0 L 0,16 Z"
          fill="url(#iconGrad)"
        />
        {/* Arrowhead */}
        <polygon points="0,-18 6,-10 -6,-10" fill="url(#iconGrad)" />
        {/* Small fins at base */}
        <polygon points="-2,12 -6,18 0,14" fill="#FF6B35" opacity="0.9" />
        <polygon points="0,14 6,18 2,12" fill="#2563EB" opacity="0.9" />
        {/* Burst lines at tip */}
        <line x1="-3" y1="-18" x2="-6" y2="-24" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="-20" x2="0" y2="-26" stroke="#FF8A5C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3" y1="-18" x2="6" y2="-24" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
