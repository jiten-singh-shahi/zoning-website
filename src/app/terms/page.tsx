import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, AlertTriangle, Scale, Shield, Users, Ban, Gavel } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | ZoningLogic - Terms & Conditions",
  description:
    "Read ZoningLogic's Terms of Service. Understand your rights and obligations when using our AI-powered zoning feasibility analysis platform. Includes beta phase terms and important disclaimers.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "beta terms",
    "legal terms",
  ],
  openGraph: {
    title: "Terms of Service | ZoningLogic",
    description: "Terms and conditions for using ZoningLogic's zoning analysis platform.",
    url: "https://zoninglogic.com/terms",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/terms",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = 3600;

export default function TermsPage() {
  const lastUpdated = "January 27, 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Please read these terms carefully before using ZoningLogic. By using our Service, 
              you agree to be bound by these terms.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* Important Disclaimer Banner */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                  Important Legal Disclaimer
                </h2>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>ZoningLogic provides analysis tools and information, NOT legal advice.</strong> 
                  Our Service is designed to assist with zoning feasibility analysis, but it does not 
                  constitute legal, architectural, engineering, or professional advice. Always consult 
                  with qualified professionals (lawyers licensed in Canada, architects, engineers, 
                  municipal zoning officials) before making critical decisions. Results are provided 
                  "as-is" and should be verified with local municipal and provincial authorities. 
                  See our{" "}
                  <Link href="/legal" className="underline font-semibold">
                    Legal Disclaimer page
                  </Link>{" "}
                  for complete details.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Agreement to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using ZoningLogic ("Service"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you do not agree to these Terms, you may not 
                  access or use the Service.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of 
                  material changes by posting the updated Terms on this page and updating the 
                  "Last updated" date. Your continued use of the Service after such modifications 
                  constitutes acceptance of the updated Terms.
                </p>
              </CardContent>
            </Card>

            {/* Description of Service */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <CardTitle>2. Description of Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ZoningLogic is an AI-powered platform that provides zoning feasibility analysis, 
                  3D building envelope visualization, unit count calculations, overlay detection, 
                  and automated permit generation tools. The Service is designed to assist users in 
                  understanding zoning regulations and building potential for properties.
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Beta Phase:</strong> The Service is 
                    currently in beta phase. Features, functionality, and availability may change 
                    without notice. We make no guarantees about Service availability, accuracy, 
                    or completeness during beta.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>3. User Accounts and Registration</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  To access certain features of the Service, you may be required to create an account. 
                  You agree to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Provide accurate, current, and complete information during registration</li>
                  <li>• Maintain and update your account information to keep it accurate</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Accept responsibility for all activities that occur under your account</li>
                  <li>• Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials. 
                  We are not liable for any loss or damage arising from your failure to protect your 
                  account information.
                </p>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>4. Acceptable Use</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You agree not to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>• Violate or infringe upon the rights of others, including intellectual property rights</li>
                  <li>• Transmit any harmful code, viruses, or malicious software</li>
                  <li>• Attempt to gain unauthorized access to the Service or related systems</li>
                  <li>• Interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>• Use automated systems (bots, scrapers) to access the Service without permission</li>
                  <li>• Reproduce, duplicate, copy, or resell any portion of the Service</li>
                  <li>• Use the Service to compete with or harm our business</li>
                  <li>• Misrepresent your identity or affiliation with any person or entity</li>
                </ul>
                <p>
                  We reserve the right to investigate violations of these Terms and may involve 
                  law enforcement authorities when appropriate.
                </p>
              </CardContent>
            </Card>

            {/* Beta Phase Terms */}
            <Card>
              <CardHeader>
                <CardTitle>5. Beta Phase Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  During the beta phase, the Service is provided "as-is" and "as-available" with 
                  no warranties or guarantees. You acknowledge that:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• The Service may contain errors, bugs, or incomplete features</li>
                  <li>• Features may be added, modified, or removed without notice</li>
                  <li>• Service availability is not guaranteed and may be interrupted</li>
                  <li>• Regional coverage is limited and may not include your area</li>
                  <li>• Data accuracy is not guaranteed and results should be verified</li>
                  <li>• The Service may be free during beta, but pricing may change</li>
                </ul>
                <p>
                  By using the Service during beta, you agree to provide feedback and report issues 
                  to help us improve the platform.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-primary" />
                  <CardTitle>6. Intellectual Property Rights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Service, including all content, features, functionality, software, and 
                  materials, is owned by ZoningLogic and protected by copyright, trademark, and 
                  other intellectual property laws.
                </p>
                <p>
                  <strong className="text-foreground">Our Rights:</strong> We retain all rights, 
                  title, and interest in and to the Service. You may not copy, modify, distribute, 
                  sell, or lease any part of the Service without our prior written consent.
                </p>
                <p>
                  <strong className="text-foreground">Your Content:</strong> You retain ownership 
                  of any data, information, or content you submit to the Service ("User Content"). 
                  By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free 
                  license to use, store, and process your User Content to provide and improve the Service.
                </p>
                <p>
                  <strong className="text-foreground">Feedback:</strong> Any feedback, suggestions, 
                  or ideas you provide about the Service may be used by us without obligation or 
                  compensation to you.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle>7. Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-4">
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">
                    NOT LEGAL, PROFESSIONAL, OR FINANCIAL ADVICE
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    The Service provides analysis tools and information for informational purposes only. 
                    It does NOT constitute legal advice, architectural advice, engineering advice, 
                    financial advice, or any other professional advice. Always consult qualified 
                    professionals (lawyers licensed in Canada, architects, engineers, municipal 
                    planners) before making decisions based on Service results.
                  </p>
                </div>
                <p>
                  <strong className="text-foreground">Service Provided "As-Is":</strong> The Service 
                  is provided on an "as-is" and "as-available" basis. We make no warranties, express 
                  or implied, including but not limited to warranties of merchantability, fitness for 
                  a particular purpose, accuracy, completeness, or non-infringement.
                </p>
                <p>
                  <strong className="text-foreground">No Guarantees:</strong> We do not guarantee 
                  that the Service will be uninterrupted, error-free, secure, or available at all 
                  times. We do not guarantee the accuracy, completeness, or reliability of any 
                  information provided through the Service.
                </p>
                <p>
                  <strong className="text-foreground">Third-Party Data:</strong> The Service may 
                  incorporate data from third-party sources. We are not responsible for the accuracy 
                  or completeness of such third-party data.
                </p>
                <p>
                  <strong className="text-foreground">AI and Algorithmic Systems:</strong> Our Service 
                  uses artificial intelligence and automated algorithms to analyze zoning regulations 
                  and generate results. These systems may contain errors, biases, or limitations. AI 
                  outputs are probabilistic and may not always be accurate. You acknowledge that AI 
                  systems are not infallible and agree not to hold us liable for errors, omissions, 
                  or inaccuracies in AI-generated analysis or recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZONINGLOGIC AND ITS AFFILIATES, OFFICERS, 
                  EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Loss of profits, revenue, data, or business opportunities</li>
                  <li>• Property damage or financial losses</li>
                  <li>• Costs of substitute services</li>
                  <li>• Decisions made based on Service results</li>
                </ul>
                <p>
                  Our total liability for any claims arising from or related to the Service shall 
                  not exceed the amount you paid us in the twelve (12) months preceding the claim, 
                  or $100, whichever is greater.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, 
                  so some of the above limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless ZoningLogic and its affiliates, 
                  officers, employees, agents, and licensors from and against any claims, damages, 
                  losses, liabilities, costs, and expenses (including reasonable legal fees and 
                  disbursements) arising from:
                </p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>• Your use of the Service</li>
                  <li>• Your violation of these Terms</li>
                  <li>• Your violation of any rights of another party</li>
                  <li>• Your User Content</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Ban className="h-5 w-5 text-primary" />
                  <CardTitle>10. Termination</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">By You:</strong> You may stop using the Service 
                  at any time. You may also request deletion of your account by contacting us.
                </p>
                <p>
                  <strong className="text-foreground">By Us:</strong> We may suspend or terminate 
                  your access to the Service at any time, with or without cause or notice, for any 
                  reason, including if you violate these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. We may 
                  delete your account and data, though we may retain certain information as required 
                  by law or for legitimate business purposes.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of 
                  the Province of Ontario and the federal laws of Canada applicable therein, 
                  without regard to its conflict of law provisions. While our Service is currently 
                  available in Ontario and we plan to expand to other provinces in the future, 
                  these Terms are governed by Ontario law regardless of where you access the Service.
                </p>
                <p>
                  Any disputes arising from or relating to these Terms or the Service shall be 
                  resolved through binding arbitration in accordance with the rules of the ADR 
                  Institute of Canada, Inc., except where prohibited by law. The arbitration 
                  shall be conducted in Kitchener, Ontario, Canada (or such other location as 
                  mutually agreed), in the English language.
                </p>
                <p>
                  You agree to waive any right to a jury trial and to participate in class action 
                  lawsuits, except where such waiver is prohibited by applicable law.
                </p>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid under 
                  applicable law, such provision shall be modified to the minimum extent necessary 
                  to make it enforceable, or if modification is not possible, it shall be severed 
                  from these Terms, and the remaining provisions shall continue in full force and effect.
                </p>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card>
              <CardHeader>
                <CardTitle>12. Force Majeure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We shall not be liable for any failure or delay in performance under these Terms 
                  which is due to circumstances beyond our reasonable control, including but not 
                  limited to: acts of God, natural disasters, war, terrorism, riots, embargoes, 
                  acts of civil or military authorities, fire, floods, accidents, pandemics, network 
                  or infrastructure failures, third-party service provider failures, or any other 
                  cause beyond our reasonable control.
                </p>
                <p>
                  In the event of such circumstances, we will use reasonable efforts to notify you 
                  and resume performance as soon as practicable.
                </p>
              </CardContent>
            </Card>

            {/* Miscellaneous */}
            <Card>
              <CardHeader>
                <CardTitle>13. Miscellaneous</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Entire Agreement:</strong> These Terms 
                  constitute the entire agreement between you and ZoningLogic regarding the Service.
                </p>
                <p>
                  <strong className="text-foreground">Severability:</strong> If any provision of 
                  these Terms is found to be unenforceable, the remaining provisions will remain 
                  in full effect.
                </p>
                <p>
                  <strong className="text-foreground">Waiver:</strong> Our failure to enforce any 
                  provision of these Terms does not constitute a waiver of that provision.
                </p>
                <p>
                  <strong className="text-foreground">Assignment:</strong> You may not assign or 
                  transfer these Terms without our prior written consent. We may assign these Terms 
                  without restriction.
                </p>
                <p>
                  <strong className="text-foreground">No Third-Party Beneficiaries:</strong> These 
                  Terms are for the benefit of you and ZoningLogic only. No third party shall have 
                  any right to enforce any provision of these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>14. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:legal@zoninglogic.com" className="text-primary hover:underline">
                    legal@zoninglogic.com
                  </a>
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">General Inquiries:</strong>{" "}
                  <a href="mailto:hello@zoninglogic.com" className="text-primary hover:underline">
                    hello@zoninglogic.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
