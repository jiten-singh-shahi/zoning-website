"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { MapPin, FileSearch, Box, CheckCircle, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Property Analysis",
    description:
      "Enter an address. Our system automatically geocodes the location and retrieves accurate property data from authoritative sources.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Regulation Processing",
    description:
      "Our specialized AI analyzes zoning bylaws, identifies applicable regulations, and detects critical overlays and constraints.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Feasibility Calculation",
    description:
      "The system generates a 3D building envelope using real property boundaries and calculates maximum buildable units based on all constraints.",
    icon: Box,
  },
  {
    number: "04",
    title: "Validation & Compliance",
    description:
      "Every result is validated against all applicable regulations to ensure accuracy and compliance before finalizing the analysis.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Document Generation",
    description:
      "A complete, submission-ready permit application PDF is automatically generated with all required documentation and specifications.",
    icon: FileCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proprietary multi-agent AI system processes your property through 
            specialized analysis stages to deliver accurate, comprehensive zoning insights.
          </p>
        </motion.div>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute h-12 w-12 rounded-xl bg-primary/5"
                      />
                      <Icon className="h-6 w-6 text-primary relative z-10" />
                    </motion.div>
                    <div className="mb-1.5 text-xs font-medium text-primary">
                      {step.number}
                    </div>
                    <h3 className="mb-2 text-base font-medium">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-6 hidden h-0.5 w-full translate-x-1/2 bg-border/50 md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
