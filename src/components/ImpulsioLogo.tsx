"use client";

import Image from "next/image";

export function ImpulsioLogo({ className = "", size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const height = size === "sm" ? 50 : size === "md" ? 60 : 80;

  return (
    <Image
      src="/impulsio-logo.png"
      alt="Impulsio — Fueling Forward"
      width={Math.round(height * (1208 / 432))}
      height={height}
      className={className}
      priority
      style={{ objectFit: "contain" }}
    />
  );
}

export function ImpulsioIcon({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/impulsio-logo-nav.png"
      alt="Impulsio"
      width={Math.round(size * (167 / 60))}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}
