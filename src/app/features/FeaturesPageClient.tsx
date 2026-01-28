"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { Brain, Network as NetworkIcon, Sparkles } from "lucide-react";
import {
  Box,
  Network,
  Calculator,
  Shield,
  Layers,
  MapPin,
  FileText,
  History,
} from "lucide-react";

const features = [
  {
    icon: Box,
    title: "3D Building Envelope Visualization",
    description:
      "See exactly what you can build with interactive 3D visualization. Property boundaries integrated for accurate analysis.",
  },
  {
    icon: Network,
    title: "Multi-Agent AI Architecture",
    description:
      "Five specialized AI agents working together: Intake, Policy, Feasibility, Critic, and Clerk. Each agent handles a specific aspect of zoning analysis.",
  },
  {
    icon: Calculator,
    title: "Unit Count Calculator",
    description:
      "Instantly calculate maximum buildable units based on envelope volume, bylaw constraints, and lot dimensions. Know your development potential at a glance.",
  },
  {
    icon: Shield,
    title: "Overlay Detection",
    description:
      "Automatically detect heritage, environmental, flood, and airport overlays from bylaw text. Get warnings about hidden constraints before you invest.",
  },
  {
    icon: Layers,
    title: "Angular Plane Calculations",
    description:
      "Handle complex geometric constraints like 45-degree angular plane setbacks. Our system automatically adjusts envelope height based on distance from boundaries.",
  },
  {
    icon: MapPin,
    title: "Real Property Data Integration",
    description:
      "Uses real property boundaries and lot dimensions for accurate 3D envelope generation and analysis.",
  },
  {
    icon: FileText,
    title: "PDF Permit Generation",
    description:
      "Generate complete permit applications automatically. Includes property details, applicable bylaws, 3D envelope specifications, and validation results.",
  },
  {
    icon: History,
    title: "Conversation History",
    description:
      "View and resume past analyses. Track progress, see completion dates, and never lose your work. Full audit trail with reasoning trace.",
  },
];

export function FeaturesPageClient() {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Complete Zoning Analysis Platform
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Everything you need to analyze zoning feasibility, visualize
              building potential, and generate permit applications with specialized AI.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* AI Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 md:p-12">
              <div className="text-center mb-10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 cursor-pointer"
                >
                  <Brain className="h-8 w-8 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-semibold mb-4">Specialized AI Model</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our AI is fine-tuned specifically for zoning bylaws and building regulations, 
                  not a generic language model. Combined with our multi-agent architecture, 
                  it delivers more accurate and comprehensive analysis.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-6 rounded-xl bg-background/50 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-3"
                  >
                    <NetworkIcon className="h-8 w-8 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="font-medium mb-2">5 Specialized Agents</h3>
                  <p className="text-sm text-muted-foreground">
                    Each agent handles a specific task: intake, policy analysis, feasibility, critique, and documentation
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-6 rounded-xl bg-background/50 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-3"
                  >
                    <Sparkles className="h-8 w-8 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="font-medium mb-2">Fine-Tuned Model</h3>
                  <p className="text-sm text-muted-foreground">
                    Trained specifically on zoning bylaws, building codes, and property development regulations
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-6 rounded-xl bg-background/50 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-3"
                  >
                    <Brain className="h-8 w-8 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="font-medium mb-2">Intelligent Orchestration</h3>
                  <p className="text-sm text-muted-foreground">
                    Agents work together seamlessly, with each step validated before proceeding to the next
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">All Features</h2>
              <p className="text-muted-foreground">
                Comprehensive tools for complete zoning analysis
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold mb-4">Why Choose ZoningLogic?</h2>
              <p className="text-muted-foreground">
                Built specifically for zoning analysis, not adapted from generic tools
              </p>
            </motion.div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-medium mb-2">
                  Interactive 3D Visualization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ZoningLogic provides interactive 3D building envelopes that make constraints
                  tangible and easy to understand.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-medium mb-2">
                  Multi-Agent AI for Deeper Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our fine-tuned AI model combined with specialized agents
                  provides more accurate and comprehensive analysis than
                  single-model approaches.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-medium mb-2">
                  End-to-End Workflow Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From address entry to permit application PDF, ZoningLogic
                  automates the entire process. No more switching between tools
                  or manual document assembly.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
