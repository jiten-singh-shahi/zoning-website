"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "../Logo";
import { Container } from "./Container";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/demo", label: "Demo" },
  ],
  Company: [
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "About" }, // Link to contact for now
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/legal", label: "Legal Disclaimer" },
  ],
};

const socialLinks: never[] = [];

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/30">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 md:col-span-1"
            >
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                AI-powered zoning feasibility analysis with multi-agent
                orchestration.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Currently in beta. Help us improve by sharing your feedback.
              </p>
            </motion.div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={`${category}-${link.label}-${index}`}>
                      <motion.div whileHover={{ x: 4 }}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary inline-block cursor-pointer"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 border-t border-border pt-8"
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ZoningLogic. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                We are committed to accessibility and strive to meet WCAG 2.0 Level AA standards. If you encounter any accessibility issues, please{" "}
                <Link href="/contact" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  contact us
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
