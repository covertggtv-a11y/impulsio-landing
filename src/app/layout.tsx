import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Impulsio — The Real Estate CRM That Moves As Fast As You Do",
  description:
    "Built for brokerages that refuse to settle. Contacts, deals, MLS listings, AI insights, and team tools — one platform, fully branded, fully yours.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Impulsio — Fueling Forward",
    description:
      "The real estate CRM built for brokerages. MLS-integrated, AI-powered, your brand.",
    type: "website",
    url: "https://impulsio.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#0F172A",
          color: "#F1F5F9",
          fontFamily:
            "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
