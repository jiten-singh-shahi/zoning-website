import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Shield, Lock, Eye, UserCheck, Database, Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ZoningLogic - Your Data Protection & Privacy",
  description:
    "Learn how ZoningLogic protects your privacy and handles your data. Our comprehensive privacy policy explains data collection, usage, security measures, and your rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "data security",
    "user privacy",
    "data collection",
  ],
  openGraph: {
    title: "Privacy Policy | ZoningLogic",
    description: "How we protect your privacy and handle your data at ZoningLogic.",
    url: "https://zoninglogic.com/privacy",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/privacy",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = 3600;

export default function PrivacyPage() {
  const lastUpdated = "January 27, 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ZoningLogic ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our website and services (collectively, the "Service").
                </p>
                <p>
                  This Privacy Policy is designed to comply with the Personal Information Protection 
                  and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation 
                  in Canada, including the Personal Information Protection Act (PIPA) in British 
                  Columbia and Alberta where applicable.
                </p>
                <p>
                  By using our Service, you agree to the collection and use of information in 
                  accordance with this policy. If you do not agree with our policies and practices, 
                  please do not use our Service.
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong className="text-foreground">Important:</strong> This Privacy Policy 
                      may be updated periodically. We will notify you of any material changes by 
                      posting the new Privacy Policy on this page and updating the "Last updated" 
                      date. We encourage you to review this Privacy Policy periodically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <CardTitle>Information We Collect</CardTitle>
                </div>
                <CardDescription>
                  We collect information that you provide directly to us and information that is 
                  automatically collected when you use our Service.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Information You Provide</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Account Information:</strong> Name, 
                        email address, company name, and any other information you provide when 
                        creating an account or requesting early access.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Property Information:</strong> 
                        Addresses, property details, and zoning analysis data you input into 
                        the Service.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Communication Data:</strong> 
                        Messages, feedback, support requests, and any other communications 
                        you send to us.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Payment Information:</strong> 
                        Currently, ZoningLogic is free during the beta phase. When we introduce 
                        paid plans in the future, we will collect billing information through 
                        secure payment processors. We will not store full credit card details 
                        and will use industry-standard payment processing services.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Usage Data:</strong> Information 
                        about how you access and use the Service, including pages visited, 
                        features used, and time spent on the Service.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Device Information:</strong> 
                        IP address, browser type, operating system, device identifiers, and 
                        other technical information.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Location Data:</strong> General 
                        location information derived from your IP address or provided by you 
                        when using location-based features.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Cookies and Tracking Technologies:</strong> 
                        We use cookies, web beacons, and similar technologies to collect 
                        information about your interactions with our Service.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <CardTitle>How We Use Your Information</CardTitle>
                </div>
                <CardDescription>
                  We use the information we collect for various purposes to provide, maintain, 
                  and improve our Service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To provide, maintain, and improve our Service and features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To process your requests, transactions, and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To send you updates, newsletters, and marketing communications (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To analyze usage patterns and improve user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To detect, prevent, and address technical issues and security threats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To comply with legal obligations and enforce our Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To personalize your experience and provide relevant content</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
                <CardDescription>
                  We do not sell your personal information. We may share your information only 
                  in the following circumstances:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Service Providers</h3>
                  <p>
                    We may share information with third-party service providers who perform 
                    services on our behalf, such as hosting, analytics, payment processing, 
                    and customer support. These providers are contractually obligated to 
                    protect your information and use it only for the purposes we specify.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Legal Requirements</h3>
                  <p>
                    We may disclose your information if required by law, court order, or 
                    government regulation, or if we believe disclosure is necessary to 
                    protect our rights, property, or safety, or that of our users or others.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information 
                    may be transferred to the acquiring entity, subject to the same privacy 
                    protections.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">With Your Consent</h3>
                  <p>
                    We may share your information with your explicit consent or at your direction.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle>Data Security</CardTitle>
                </div>
                <CardDescription>
                  We implement industry-standard security measures to protect your information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use administrative, technical, and physical safeguards to protect your 
                  personal information against unauthorized access, alteration, disclosure, 
                  or destruction. These measures include:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication mechanisms</li>
                  <li>• Secure data centers and infrastructure</li>
                  <li>• Employee training on data protection</li>
                </ul>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Important:</strong> While we strive 
                    to protect your information, no method of transmission over the Internet 
                    or electronic storage is 100% secure. We cannot guarantee absolute security, 
                    but we are committed to maintaining the highest standards of data protection.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <CardTitle>Your Privacy Rights</CardTitle>
                </div>
                <CardDescription>
                  Under Canadian privacy laws, including PIPEDA and applicable provincial legislation, 
                  you have certain rights regarding your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Under Canadian privacy legislation, you have the right to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong className="text-foreground">Access:</strong> Request access to your personal information that we hold</li>
                  <li>• <strong className="text-foreground">Correction:</strong> Request correction of inaccurate, incomplete, or outdated information</li>
                  <li>• <strong className="text-foreground">Withdrawal of Consent:</strong> Withdraw your consent to our collection, use, or disclosure of your personal information, subject to legal or contractual restrictions</li>
                  <li>• <strong className="text-foreground">Complaint:</strong> File a complaint with the Privacy Commissioner of Canada or your provincial privacy commissioner if you believe we have violated your privacy rights</li>
                  <li>• <strong className="text-foreground">Information:</strong> Be informed about why we collect, use, and disclose your personal information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@zoninglogic.com" className="text-primary hover:underline">
                    privacy@zoninglogic.com
                  </a>
                  . We will respond to your request within 30 days, as required by Canadian privacy 
                  legislation, or inform you if we require additional time.
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Privacy Commissioner:</strong> If you are not 
                    satisfied with our response to your privacy concerns, you may contact the Office 
                    of the Privacy Commissioner of Canada at{" "}
                    <a href="https://www.priv.gc.ca" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      www.priv.gc.ca
                    </a>
                    {" "}or 1-800-282-1376.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar tracking technologies to track activity on our 
                  Service and store certain information. Cookies are small data files stored 
                  on your device.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a 
                  cookie is being sent. However, if you do not accept cookies, you may not 
                  be able to use some portions of our Service.
                </p>
                <p>
                  We use both session cookies (which expire when you close your browser) and 
                  persistent cookies (which remain on your device until deleted or expired).
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our Service is not intended for individuals under the age of 18. We do not 
                  knowingly collect personal information from children. If you are a parent or 
                  guardian and believe your child has provided us with personal information, 
                  please contact us immediately, and we will delete such information.
                </p>
              </CardContent>
            </Card>

            {/* International Users */}
            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Your information is primarily stored and processed in Canada. However, we may 
                  transfer your information to and process it in countries other than Canada, 
                  including the United States, where our service providers may be located. These 
                  countries may have data protection laws that differ from those in Canada.
                </p>
                <p className="mt-4">
                  When we transfer personal information outside of Canada, we take appropriate 
                  safeguards to ensure your information receives an adequate level of protection 
                  in accordance with PIPEDA and this Privacy Policy. This may include contractual 
                  protections, ensuring the recipient is subject to similar privacy laws, or 
                  obtaining your explicit consent where required.
                </p>
                <p className="mt-4">
                  By using our Service, you consent to the transfer of your information to these 
                  countries for the purposes described in this Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>Contact Us</CardTitle>
                </div>
                <CardDescription>
                  If you have questions about this Privacy Policy, please contact us.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:privacy@zoninglogic.com" className="text-primary hover:underline">
                    privacy@zoninglogic.com
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
