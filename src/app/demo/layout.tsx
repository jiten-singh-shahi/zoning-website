import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Demo | See ZoningLogic in Action (Beta)",
  description:
    "Watch ZoningLogic transform zoning analysis with AI-powered 3D visualization. Interactive demo video coming soon - request early access to be among the first to see it. Currently in beta phase.",
  keywords: [
    "zoning demo",
    "zoning analysis demo",
    "3D building visualization demo",
    "zoning feasibility demo",
    "AI zoning analysis",
    "property development demo",
    "zoning software demo",
  ],
  openGraph: {
    title: "Interactive Demo | ZoningLogic - AI-Powered Zoning Analysis",
    description:
      "See ZoningLogic in action. Interactive demo video coming soon. Request early access during our beta phase.",
    url: "https://zoninglogic.com/demo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZoningLogic Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZoningLogic Demo - Coming Soon",
    description: "Interactive demo video coming soon. Request early access.",
  },
  alternates: {
    canonical: "https://zoninglogic.com/demo",
  },
};

// Static generation for layout
export const dynamic = "force-static";
export const revalidate = 3600;

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "ZoningLogic Interactive Demo",
            description:
              "See how ZoningLogic uses AI to analyze zoning feasibility with 3D visualization, unit calculations, and automated permit generation.",
            thumbnailUrl: "https://zoninglogic.com/og-image.png",
            uploadDate: new Date().toISOString(),
            contentUrl: "https://zoninglogic.com/demo",
            embedUrl: "https://zoninglogic.com/demo",
            publisher: {
              "@type": "Organization",
              name: "ZoningLogic",
              logo: {
                "@type": "ImageObject",
                url: "https://zoninglogic.com/logo.png",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
