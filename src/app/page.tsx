import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { BetaNotice } from "@/components/sections/BetaNotice";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "ZoningLogic | AI-Powered Zoning Feasibility Analysis (Beta)",
  description:
    "See what you can build in 3D. AI-powered zoning feasibility analysis with multi-agent orchestration. Get instant insights into building potential, unit calculations, overlay detection, and automated permit generation. Currently in beta - request early access.",
  keywords: [
    "zoning analysis",
    "zoning feasibility",
    "3D building visualization",
    "AI zoning",
    "zoning software",
    "property development",
    "building permits",
    "zoning calculator",
    "building envelope",
    "zoning compliance",
  ],
  openGraph: {
    title: "ZoningLogic | AI-Powered Zoning Feasibility Analysis (Beta)",
    description:
      "See what you can build in 3D. AI-powered zoning feasibility analysis with 3D visualization and multi-agent orchestration. Request early access during beta.",
    url: "https://zoninglogic.com",
    siteName: "ZoningLogic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZoningLogic - AI-Powered Zoning Analysis",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZoningLogic | AI-Powered Zoning Analysis (Beta)",
    description: "See what you can build in 3D. AI-powered zoning feasibility analysis. Request early access.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zoninglogic.com",
  },
};

// Static generation - this page has no dynamic data
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <BetaNotice />
      <HowItWorks />
      <StatsCounter />
      <CTASection />
    </>
  );
}
