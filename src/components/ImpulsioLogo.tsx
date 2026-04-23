"use client";

export function ImpulsioLogo({ className = "", size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const scale = size === "sm" ? 0.5 : size === "md" ? 0.75 : 1;
  const width = 420 * scale;
  const height = 80 * scale;

  return (
    <svg
      viewBox="0 0 420 80"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Arrow integrated into the I position */}
      <g transform="translate(52, 8)">
        {/* Arrow shaft */}
        <rect x="3" y="18" width="6" height="42" rx="2" fill="url(#arrowGrad)" />
        {/* Arrow head */}
        <polygon points="6,4 14,22 -2,22" fill="url(#arrowGrad)" />
        {/* Motion lines */}
        <line x1="1" y1="2" x2="-4" y2="-4" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="-2" x2="6" y2="-8" stroke="#FF8A5C" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="2" x2="16" y2="-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* IMPULSIO text */}
      <text
        x="20"
        y="58"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontWeight="900"
        fontSize="52"
        fontStyle="italic"
        fill="url(#textGrad)"
        letterSpacing="3"
      >
        IMPULSIO
      </text>

      {/* FUELING FORWARD tagline */}
      <text
        x="68"
        y="75"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#1E3A8A"
        letterSpacing="4"
      >
        FUELING FORWARD
      </text>

      {/* Small circular emblem before tagline */}
      <g transform="translate(52, 69)">
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
      <g transform="translate(32, 32)">
        <rect x="-4" y="-6" width="8" height="22" rx="2" fill="url(#iconGrad)" />
        <polygon points="0,-18 10,-4 -10,-4" fill="url(#iconGrad)" />
        <line x1="-3" y1="-20" x2="-7" y2="-26" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="-22" x2="0" y2="-28" stroke="#FF8A5C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3" y1="-20" x2="7" y2="-26" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
