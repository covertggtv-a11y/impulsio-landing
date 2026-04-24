"use client";

export function ImpulsioLogo({ className = "", size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const scale = size === "sm" ? 1.15 : size === "md" ? 0.9 : 1;
  const width = 520 * scale;
  const height = 100 * scale;

  const gradId = size === "sm" ? "nav" : size === "md" ? "mid" : "hero";

  return (
    <svg
      viewBox="0 0 520 100"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`textGrad-${gradId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id={`arrowGrad-${gradId}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>

      {/* === The "I" as a clean upward arrow === */}
      {/* Simple geometric arrow: triangle arrowhead + straight rectangular shaft + 3 spark lines at tip */}
      <g transform="translate(22, 8)">
        {/* Arrow shaft — straight rectangle, no rounding, no taper */}
        <rect x="7" y="24" width="10" height="40" fill={`url(#arrowGrad-${gradId})`} />

        {/* Arrowhead — clean pointed triangle/chevron */}
        <polygon
          points="12,2 24,24 0,24"
          fill={`url(#arrowGrad-${gradId})`}
        />

        {/* 3 small spark/burst lines at the tip — subtle accent */}
        <line x1="5" y1="7" x2="0" y2="0" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="12" y1="2" x2="12" y2="-6" stroke="#FF8A5C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="19" y1="7" x2="24" y2="0" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* MPULSIO text */}
      <text
        x="52"
        y="72"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="62"
        fontStyle="italic"
        fill={`url(#textGrad-${gradId})`}
        letterSpacing="3"
      >
        MPULS
      </text>
      <text
        x="330"
        y="72"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="62"
        fontStyle="italic"
        fill={`url(#textGrad-${gradId})`}
        letterSpacing="3"
      >
        IO
      </text>

      {/* Circular emblem before tagline */}
      <g transform="translate(68, 88)">
        <circle cx="0" cy="0" r="6.5" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="13 28" />
        <polygon points="0,-3.5 2.5,1 -2.5,1" fill="#FF6B35" />
        <line x1="0" y1="1" x2="0" y2="3.5" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* FUELING FORWARD tagline */}
      <text
        x="82"
        y="93"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="#4F46E5"
        letterSpacing="4.5"
      >
        FUELING FORWARD
      </text>
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
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#iconGrad)" strokeWidth="3" strokeDasharray="60 130" strokeLinecap="round" />
      <g transform="translate(32, 34)">
        {/* Straight rectangular shaft — no rounding, no taper */}
        <rect x="-3.5" y="-4" width="7" height="20" fill="url(#iconGrad)" />
        {/* Clean pointed triangle arrowhead */}
        <polygon points="0,-14 8,-4 -8,-4" fill="url(#iconGrad)" />
        {/* 3 small spark lines at the tip */}
        <line x1="-5" y1="-11" x2="-8" y2="-18" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-14" x2="0" y2="-21" stroke="#FF8A5C" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="-11" x2="8" y2="-18" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
