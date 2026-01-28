"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Request early access to try ZoningLogic during beta, or contact us to
            get a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/pricing" className="cursor-pointer">Request Early Access</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/demo" className="cursor-pointer">Get a Demo</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
