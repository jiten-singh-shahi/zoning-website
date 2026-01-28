"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Brain, Zap, Network } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"
        />
      </div>
      
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-4 flex items-center justify-center lg:justify-start gap-2"
                >
                  <Badge variant="default" className="text-xs px-3 py-1">
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Beta Phase - Coming Soon
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl"
                >
                  AI-Powered Zoning{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent font-medium">
                    Analysis
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0"
                >
                  Specialized AI model with multi-agent orchestration. See what you can build in 3D, 
                  calculate units instantly, and generate permit applications automatically.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                    <Link href="/pricing" className="cursor-pointer">Request Early Access</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="/demo" className="cursor-pointer">View Demo</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - AI Features */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-primary/10"
                  >
                    <Brain className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="font-medium text-sm">Specialized AI Model</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fine-tuned specifically for zoning bylaws and building regulations
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-accent/10"
                  >
                    <Network className="h-5 w-5 text-accent-foreground" />
                  </motion.div>
                  <h3 className="font-medium text-sm">5 AI Agents</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Orchestrated agents handle intake, policy, feasibility, critique, and documentation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-primary/10"
                  >
                    <Zap className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="font-medium text-sm">3D Visualization</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Interactive building envelopes with accurate property data
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-lg bg-accent/10"
                  >
                    <Sparkles className="h-5 w-5 text-accent-foreground" />
                  </motion.div>
                  <h3 className="font-medium text-sm">Auto Permits</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Generate complete PDF permit applications automatically
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
