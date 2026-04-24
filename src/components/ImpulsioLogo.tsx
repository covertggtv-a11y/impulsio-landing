"use client";

export function ImpulsioLogo({ className = "", size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const scale = size === "sm" ? 0.8 : size === "md" ? 0.9 : 1;
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
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>

      {/* === The "I" as a bold upward arrow/rocket === */}
      {/* Matches the visual weight and height of the other letters */}
      <g transform="translate(22, 6)">
        {/* Arrow shaft — bold rectangle, same weight as letter strokes */}
        <rect x="5" y="24" width="14" height="42" rx="2" fill={`url(#arrowGrad-${gradId})`} />

        {/* Arrowhead — wide triangle sitting on top of the shaft */}
        <polygon
          points="12,0 26,26 -2,26"
          fill={`url(#arrowGrad-${gradId})`}
        />

        {/* Small fins at the base — orange left, blue right */}
        <polygon points="5,58 -4,68 8,64" fill="#FF6B35" opacity="0.85" />
        <polygon points="16,64 28,68 19,58" fill="#4F46E5" opacity="0.85" />

        {/* Burst/motion lines at the tip */}
        <line x1="4" y1="5" x2="-2" y2="-4" stroke="#FF6B35" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="12" y1="0" x2="12" y2="-8" stroke="#FF8A5C" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="20" y1="5" x2="26" y2="-4" stroke="#FF6B35" strokeWidth="2.8" strokeLinecap="round" />
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
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#iconGrad)" strokeWidth="3" strokeDasharray="60 130" strokeLinecap="round" />
      <g transform="translate(32, 34)">
        {/* Bold arrow shaft */}
        <rect x="-4" y="-6" width="8" height="22" rx="1.5" fill="url(#iconGrad)" />
        {/* Arrowhead */}
        <polygon points="0,-16 9,-4 -9,-4" fill="url(#iconGrad)" />
        {/* Fins */}
        <polygon points="-4,12 -8,18 -1,14" fill="#FF6B35" opacity="0.9" />
        <polygon points="1,14 8,18 4,12" fill="#4F46E5" opacity="0.9" />
        {/* Burst lines */}
        <line x1="-5" y1="-15" x2="-8" y2="-22" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="-18" x2="0" y2="-25" stroke="#FF8A5C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="5" y1="-15" x2="8" y2="-22" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
