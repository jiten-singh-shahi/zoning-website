import type { Metadata } from "next";
import { FeaturesPageClient } from "./FeaturesPageClient";

export const metadata: Metadata = {
  title: "Features | Complete Zoning Analysis Platform",
  description:
    "Explore ZoningLogic's powerful features: 3D building envelope visualization, multi-agent AI architecture, unit count calculator, overlay detection, angular plane calculations, and automated PDF permit generation.",
  keywords: [
    "zoning features",
    "3D building visualization",
    "zoning calculator",
    "overlay detection",
    "zoning analysis tools",
    "building envelope",
    "zoning software features",
    "AI zoning analysis",
  ],
  openGraph: {
    title: "Features | ZoningLogic - Complete Zoning Analysis Platform",
    description:
      "3D visualization, multi-agent AI, unit calculator, overlay detection, and automated permit generation.",
    url: "https://zoninglogic.com/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/features",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = 3600;

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
