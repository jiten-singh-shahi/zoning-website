import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { AlertTriangle, Scale, FileWarning, Shield, Info, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer | ZoningLogic - Important Legal Information",
  description:
    "Important legal disclaimers for ZoningLogic. Understand that our service provides analysis tools, not legal advice. Always consult qualified professionals for critical decisions.",
  keywords: [
    "legal disclaimer",
    "not legal advice",
    "disclaimer",
    "legal information",
    "professional advice",
    "zoning disclaimer",
  ],
  openGraph: {
    title: "Legal Disclaimer | ZoningLogic",
    description: "Important legal disclaimers and information about ZoningLogic's services.",
    url: "https://zoninglogic.com/legal",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://zoninglogic.com/legal",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = 3600;

export default function LegalPage() {
  const lastUpdated = "January 27, 2026";

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Legal Disclaimer
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Important information about the nature of our services and your responsibilities 
              when using ZoningLogic.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* Critical Disclaimer Banner */}
      <section className="py-8 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-800">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
                  ⚠️ NOT LEGAL, PROFESSIONAL, OR FINANCIAL ADVICE
                </h2>
                <p className="text-base text-red-800 dark:text-red-200 mb-2">
                  <strong>ZoningLogic provides analysis tools and information for informational 
                  purposes only.</strong> Our Service does NOT constitute:
                </p>
                <ul className="list-disc list-inside space-y-1 text-red-800 dark:text-red-200 mb-4">
                  <li>Legal advice or legal services</li>
                  <li>Architectural or engineering advice</li>
                  <li>Financial or investment advice</li>
                  <li>Real estate advice</li>
                  <li>Professional consultation of any kind</li>
                </ul>
                <p className="text-base font-semibold text-red-900 dark:text-red-100">
                  Always consult qualified professionals (lawyers licensed in Canada, architects, 
                  engineers, municipal zoning officials, financial advisors) before making critical 
                  decisions based on information provided by our Service.
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
            {/* Nature of Service */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <CardTitle>Nature of Our Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ZoningLogic is a software platform that uses artificial intelligence and 
                  automated analysis tools to assist users in understanding zoning regulations, 
                  calculating building potential, and generating preliminary analysis reports. 
                  Our Service is designed to be a <strong className="text-foreground">supplementary 
                  tool</strong> to aid in your research and decision-making process.
                </p>
                <p>
                  The Service processes publicly available zoning bylaw data, property information, 
                  and user inputs to generate analysis results, visualizations, and reports. These 
                  outputs are <strong className="text-foreground">informational in nature</strong> 
                  and should be considered as starting points for further investigation, not as 
                  definitive answers or professional recommendations.
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Think of ZoningLogic as a research assistant, 
                    not a replacement for professional expertise.</strong> Just as you would verify 
                    information from any research tool, you should verify our results with qualified 
                    professionals and official sources.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Not Legal Advice */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileWarning className="h-5 w-5 text-primary" />
                  <CardTitle>Not Legal Advice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">ZoningLogic is NOT a law firm, legal service, 
                  or legal advice provider.</strong> We do not provide legal representation, legal 
                  opinions, or legal counsel. The information, analysis, and reports generated by 
                  our Service are not substitutes for legal advice from a qualified lawyer licensed 
                  to practice law in Canada.
                </p>
                <p>
                  Zoning regulations in Canada are complex and vary significantly by province, 
                  municipality, and jurisdiction. Local interpretations, recent amendments, case 
                  law, and administrative decisions can all affect how zoning regulations apply to 
                  specific properties. Our automated analysis cannot account for all of these factors, 
                  and regulations may differ between provinces (e.g., Ontario, British Columbia) and 
                  municipalities.
                </p>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">You should consult a qualified lawyer licensed to practice law in Canada:</strong>
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Before making any property purchase decisions</li>
                    <li>• Before submitting permit applications or development proposals</li>
                    <li>• When dealing with zoning variances, appeals, or special permits</li>
                    <li>• When interpreting complex or ambiguous zoning regulations</li>
                    <li>• When facing legal disputes or compliance issues</li>
                    <li>• For any matter requiring legal interpretation or representation</li>
                    <li>• When dealing with provincial or municipal zoning compliance matters</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Not Professional Advice */}
            <Card>
              <CardHeader>
                <CardTitle>Not Professional Advice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our Service does not provide professional advice in any field, including but 
                  not limited to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">Architecture & Engineering</h4>
                    <p className="text-sm">
                      Our 3D visualizations and building envelope calculations are illustrative 
                      only. They do not constitute architectural or engineering designs, structural 
                      analysis, or construction plans.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">Real Estate</h4>
                    <p className="text-sm">
                      We do not provide real estate advice, property valuations, investment 
                      recommendations, or market analysis.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">Financial</h4>
                    <p className="text-sm">
                      Our Service does not provide financial advice, investment recommendations, 
                      or tax guidance. Always consult a financial advisor or accountant.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">Zoning Administration</h4>
                    <p className="text-sm">
                      While we analyze zoning regulations, we are not a substitute for official 
                      zoning authorities. Always verify with local zoning departments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accuracy Disclaimer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>Accuracy and Completeness</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to provide accurate and up-to-date information, we make no 
                  representations or warranties regarding the accuracy, completeness, reliability, 
                  or timeliness of any information provided through our Service.
                </p>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Factors that may affect accuracy:</strong>
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Zoning bylaws may be updated, amended, or interpreted differently by local authorities</li>
                    <li>• Property data from third-party sources may contain errors or be outdated</li>
                    <li>• Our AI models, while sophisticated, may misinterpret complex regulations</li>
                    <li>• Local administrative decisions, variances, or special permits may not be reflected</li>
                    <li>• Site-specific conditions (topography, easements, etc.) may affect buildability</li>
                    <li>• Regional coverage is limited during beta phase</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Always verify results:</strong> You are 
                    responsible for verifying all information with official sources, local 
                    authorities, and qualified professionals before making any decisions or 
                    taking any actions based on our Service.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Beta Phase Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle>Beta Phase Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ZoningLogic is currently in <strong className="text-foreground">beta phase</strong>. 
                  This means:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• The Service is still under development and may contain errors or bugs</li>
                  <li>• Features may be incomplete, modified, or removed without notice</li>
                  <li>• Regional coverage is limited (currently some parts of Ontario with increasing coverage, British Columbia coming next)</li>
                  <li>• Service availability is not guaranteed and may be interrupted</li>
                  <li>• Data accuracy and completeness are not guaranteed</li>
                  <li>• The Service is provided "as-is" with no warranties</li>
                </ul>
                <p className="mt-4">
                  By using the Service during beta, you acknowledge these limitations and agree 
                  that results should be verified with official sources and professionals.
                </p>
              </CardContent>
            </Card>

            {/* Your Responsibilities */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Your Responsibilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  When using ZoningLogic, you are responsible for:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Verifying all information with official sources, municipal authorities, and provincial regulators</li>
                  <li>• Consulting qualified professionals (lawyers licensed in Canada, architects, engineers) for critical decisions</li>
                  <li>• Understanding that our Service provides informational tools, not definitive answers</li>
                  <li>• Not relying solely on our Service for legal, financial, or professional decisions</li>
                  <li>• Ensuring compliance with all applicable Canadian federal, provincial, and municipal laws and regulations</li>
                  <li>• Using the Service in accordance with our Terms of Service</li>
                </ul>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Remember:</strong> The responsibility for 
                    decisions made based on information from our Service rests entirely with you. 
                    We are not liable for any consequences resulting from your use of the Service.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZONINGLOGIC SHALL NOT BE LIABLE FOR ANY 
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES 
                  ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Property purchase or development decisions</li>
                  <li>• Financial losses or missed opportunities</li>
                  <li>• Legal disputes or compliance issues</li>
                  <li>• Errors, inaccuracies, or omissions in Service outputs</li>
                  <li>• Service interruptions or unavailability</li>
                  <li>• Decisions made based on Service information</li>
                </ul>
                <p>
                  Our Service is provided for informational purposes only. You assume all risk 
                  associated with using the Service and making decisions based on its outputs.
                </p>
                <p>
                  For complete terms and limitations, please review our{" "}
                  <Link href="/terms" className="text-primary hover:underline font-semibold">
                    Terms of Service
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            {/* When to Consult Professionals */}
            <Card>
              <CardHeader>
                <CardTitle>When to Consult Professionals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  You should <strong className="text-foreground">always</strong> consult qualified 
                  professionals in the following situations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">🏛️ Zoning Lawyer</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Property purchases</li>
                      <li>• Permit applications</li>
                      <li>• Zoning variances and appeals</li>
                      <li>• Legal disputes</li>
                      <li>• Provincial and municipal compliance</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">🏗️ Architect/Engineer</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Building design</li>
                      <li>• Structural analysis</li>
                      <li>• Construction plans</li>
                      <li>• Site planning</li>
                      <li>• Code compliance</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">📋 Zoning Official / Municipal Planner</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Official interpretations</li>
                      <li>• Permit requirements</li>
                      <li>• Current municipal bylaws</li>
                      <li>• Administrative decisions</li>
                      <li>• Local procedures and requirements</li>
                      <li>• Provincial and municipal compliance</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-semibold mb-2 text-foreground">💰 Financial Advisor</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Investment decisions</li>
                      <li>• Financial planning</li>
                      <li>• Tax implications</li>
                      <li>• Risk assessment</li>
                      <li>• Funding strategies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Questions or Concerns?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  If you have questions about this Legal Disclaimer or our Service, please contact us:
                </p>
                <p className="mt-4">
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
                <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Related Documents:</strong> Please also 
                    review our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
