import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with ZoningLogic",
  description:
    "Have questions about ZoningLogic? Want to become a partner? Get in touch with our team. We'd love to hear from you and discuss how we can help with your zoning analysis needs.",
  keywords: [
    "contact ZoningLogic",
    "zoning support",
    "zoning partnership",
    "zoning questions",
    "zoning help",
  ],
  openGraph: {
    title: "Contact Us | ZoningLogic",
    description: "Get in touch with ZoningLogic. Questions, partnerships, or support - we're here to help.",
    url: "https://zoninglogic.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/contact",
  },
};

// Static generation for layout
export const dynamic = "force-static";
export const revalidate = 3600;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
