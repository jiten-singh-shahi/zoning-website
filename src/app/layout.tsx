import type { Metadata } from "next";
import { Roboto, Playfair_Display, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { BannerProvider } from "@/components/layout/BannerContext";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const firaCode = Fira_Code({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zoninglogic.com"),
  title: {
    default: "ZoningLogic | AI-Powered Zoning Feasibility Analysis (Beta)",
    template: "%s | ZoningLogic",
  },
  description:
    "See what you can build in 3D. AI-powered zoning feasibility analysis with multi-agent orchestration. Get instant insights into building potential, unit calculations, and automated permit generation. Currently in beta - request early access.",
  keywords: [
    "zoning analysis",
    "zoning feasibility",
    "3D building visualization",
    "AI zoning",
    "zoning software",
    "real estate development",
    "building permits",
    "zoning bylaws",
    "property development",
    "land use analysis",
    "zoning calculator",
    "building envelope",
    "zoning compliance",
    "development feasibility",
    "zoning Ontario",
    "zoning British Columbia",
  ],
  authors: [{ name: "ZoningLogic", url: "https://zoninglogic.com" }],
  creator: "ZoningLogic",
  publisher: "ZoningLogic",
  applicationName: "ZoningLogic",
  category: "Real Estate Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoninglogic.com",
    siteName: "ZoningLogic",
    title: "ZoningLogic | AI-Powered Zoning Feasibility Analysis (Beta)",
    description:
      "See what you can build in 3D. AI-powered zoning feasibility analysis with multi-agent orchestration. Request early access during beta phase.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZoningLogic - AI-Powered Zoning Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZoningLogic | AI-Powered Zoning Analysis",
    description: "See what you can build in 3D. AI-powered zoning feasibility analysis. Currently in beta.",
    images: ["/og-image.png"],
    creator: "@zoninglogic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zoninglogic.com",
  },
  verification: {
    // Add when you have verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ZoningLogic",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/PreOrder",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1",
              },
              description:
                "AI-powered zoning feasibility analysis with 3D visualization, multi-agent orchestration, and automated permit generation.",
              url: "https://zoninglogic.com",
              publisher: {
                "@type": "Organization",
                name: "ZoningLogic",
                url: "https://zoninglogic.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://zoninglogic.com/logo.png",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZoningLogic",
              url: "https://zoninglogic.com",
              logo: "https://zoninglogic.com/logo.png",
              description:
                "AI-powered zoning feasibility analysis platform with 3D visualization and multi-agent orchestration.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "hello@zoninglogic.com",
                url: "https://zoninglogic.com/contact",
              },
              sameAs: [
                // Add social media links when available
                // "https://twitter.com/zoninglogic",
                // "https://linkedin.com/company/zoninglogic",
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${playfair.variable} ${firaCode.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <BannerProvider>
            <div className="flex min-h-screen flex-col">
              {/* Skip to main content link for keyboard navigation */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Skip to main content
              </a>
              <TopBanner />
              <Header />
              <main id="main-content" className="flex-1 pt-[105px]" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </BannerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
