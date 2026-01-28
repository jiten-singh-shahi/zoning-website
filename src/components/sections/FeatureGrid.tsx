"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { FeatureCard } from "./FeatureCard";
import { Box, Calculator, FileText, Brain, Network, Zap } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "3D Feasibility Analysis",
    description:
      "Visualize building envelopes in interactive 3D. See exactly what you can build on any property with accurate property data.",
    href: "/features",
  },
  {
    icon: Calculator,
    title: "Unit Count Calculator",
    description:
      "Know your unit count instantly. Calculate maximum buildable units based on zoning regulations and lot dimensions.",
    href: "/features",
  },
  {
    icon: FileText,
    title: "PDF Permit Application",
    description:
      "Generate complete permit applications automatically. From address to PDF in minutes with all required documentation.",
    href: "/features",
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Specialized AI Model",
    description: "Fine-tuned specifically for zoning bylaws and building regulations",
  },
  {
    icon: Network,
    title: "Multi-Agent System",
    description: "5 orchestrated AI agents working together for comprehensive analysis",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Get instant insights without waiting for manual review",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Powerful AI-Driven Tools
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Speed up and simplify your property research with specialized AI models
          </p>
        </motion.div>
        
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* AI Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3">Why Our AI is Different</h3>
              <p className="text-muted-foreground">
                Built specifically for zoning analysis, not a generic model
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 cursor-pointer"
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
