import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Users, MessageSquare, Zap, Handshake, Clock } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { EarlyAccessForm } from "@/components/forms/EarlyAccessForm";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Beta Access | Request Early Access - Free During Beta",
  description:
    "ZoningLogic is currently in beta and free to use. Request early access and join us as a partner. We're looking for partners with use cases to help shape the platform. Get notified when we launch.",
  keywords: [
    "zoning beta",
    "early access zoning",
    "free zoning analysis",
    "zoning partnership",
    "beta access",
    "zoning software beta",
    "early access request",
  ],
  openGraph: {
    title: "Beta Access | ZoningLogic - Free During Beta",
    description:
      "Request early access to ZoningLogic. Free during beta phase. Looking for partners with use cases.",
    url: "https://zoninglogic.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/pricing",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = 3600;

const betaBenefits = [
  {
    icon: Zap,
    title: "Free Access",
    description:
      "Use ZoningLogic completely free during the beta phase. All features are available at no cost.",
  },
  {
    icon: Users,
    title: "Priority Support",
    description:
      "Beta users get direct access to our team. Your feedback shapes the product roadmap.",
  },
  {
    icon: MessageSquare,
    title: "Early Feature Access",
    description:
      "Be the first to try new features and provide input on what we build next.",
  },
  {
    icon: Handshake,
    title: "Partnership Opportunities",
    description:
      "We're looking for partners with real use cases. Let's build something great together.",
  },
];

const faqs = [
  {
    question: "When will early access be available?",
    answer:
      "We're currently in beta and preparing for early access launch. Request access above and we'll notify you via email as soon as we're ready. We expect to open early access within the next few weeks.",
  },
  {
    question: "How long will the beta phase last?",
    answer:
      "We're committed to the beta phase until we've gathered sufficient feedback and validated product-market fit. We'll provide at least 30 days notice before transitioning to paid plans.",
  },
  {
    question: "What happens after beta?",
    answer:
      "After beta, we'll introduce pricing plans. Early access users and beta partners will receive special early-bird pricing and grandfathered benefits. We'll ensure a smooth transition with clear communication.",
  },
  {
    question: "Are there any usage limits during beta?",
    answer:
      "During beta, we encourage active use! There are no strict limits, though we may reach out if usage is exceptionally high to understand your use case better.",
  },
  {
    question: "What kind of partners are you looking for?",
    answer:
      "We're looking for developers, land-use consultants, real estate investors, and organizations with interesting use cases. If you have a specific zoning analysis challenge, we'd love to work with you.",
  },
  {
    question: "Will my data be safe during beta?",
    answer:
      "Absolutely. We take data security seriously. All data is encrypted, and we follow industry best practices. Your data will never be shared with third parties.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Badge variant="default" className="text-sm px-3 py-1">
                🚀 Beta Phase - Coming Soon
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Early Access Coming Soon
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ZoningLogic is currently in beta. Request early access below and we'll
              notify you via email as soon as we launch. Help us improve and join us as
              a partner to shape the future of zoning analysis.
            </p>
          </div>
        </Container>
      </section>

      {/* Early Access Form */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <EarlyAccessForm />
          </div>
        </Container>
      </section>

      {/* Beta Benefits */}
      <section className="bg-muted/50 py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You'll Get During Beta
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {betaBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Handshake className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">
                  Looking for Partners with Use Cases
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We're actively seeking partners who have interesting zoning analysis
                challenges. Whether you're a developer, consultant, investor, or
                organization, we want to work with you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* What we're looking for */}
              <Card>
                <CardHeader>
                  <CardTitle>What we're looking for:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Developers working on multi-unit projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Land-use consultants with complex zoning challenges
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Real estate investors analyzing multiple properties
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Organizations with unique zoning analysis needs
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Partnership Benefits:</strong>{" "}
                      Direct access to our team, custom feature development,
                      co-marketing opportunities, and special pricing when we launch.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Form */}
              <PartnershipForm />
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="bg-muted/50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              What's Included During Beta
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">
                        Unlimited Analyses
                      </strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Analyze as many properties as you need during beta
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">All Features</strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        3D visualization, unit calculator, overlay detection,
                        PDF generation, and more
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">
                        Priority Support
                      </strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Direct access to our team for questions and feedback
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">
                        Early Feature Access
                      </strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Be the first to try new features as we build them
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">
                        Influence Product Roadmap
                      </strong>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your feedback directly shapes what we build next
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} title={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
