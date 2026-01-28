"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EarlyAccessForm } from "@/components/forms/EarlyAccessForm";
import { 
  Play, 
  Sparkles, 
  Video, 
  Clock, 
  CheckCircle, 
  Zap,
  BarChart3,
  Layers,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Badge variant="default" className="text-sm px-3 py-1">
                🚀 Beta Phase - Coming Soon
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              See ZoningLogic{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Watch how our AI-powered platform transforms zoning analysis. 
              Interactive demo video coming soon - request early access to be among the first to see it.
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon Demo Video Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Video className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl">
                  Interactive Demo Video
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Coming Soon - Beta Phase
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Video Placeholder with Professional Design */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-muted via-muted/50 to-muted border-2 border-dashed border-primary/30">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Demo Video Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mb-6">
                      We're putting the finishing touches on our interactive demo video. 
                      It will showcase the complete ZoningLogic workflow from address entry 
                      to 3D visualization and PDF generation.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Available in Beta Launch</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span>Full Feature Walkthrough</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What You'll See in the Demo */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Property Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      See how we analyze property data and zoning bylaws
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">3D Visualization</h4>
                    <p className="text-sm text-muted-foreground">
                      Watch the interactive 3D building envelope come to life
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Results & Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      See unit calculations, overlay detection, and PDF generation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Beta Phase Details */}
      <section className="bg-muted/50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why We're in Beta
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're refining ZoningLogic based on real-world feedback. 
                Join us during beta to help shape the future of zoning analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Limited Regional Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently supporting some parts of Ontario. Coverage is increasing. We're expanding coverage based on demand and partner feedback.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Some Parts of Ontario - Coverage Increasing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">British Columbia - Coming Next</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Features May Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're actively improving based on user feedback. Features may 
                    be added, removed, or modified during beta.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Your feedback shapes the roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct access to our development team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Early access to new features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Request Early Access */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Be the First to See the Demo
              </h2>
              <p className="text-lg text-muted-foreground">
                Request early access and we'll notify you as soon as the demo video 
                is available. You'll also get priority access when we launch.
              </p>
            </div>
            <EarlyAccessForm />
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have questions?{" "}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Contact us directly
                </Link>
                {" "}or{" "}
                <Link href="/pricing" className="text-primary hover:underline font-medium">
                  learn about partnership opportunities
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
