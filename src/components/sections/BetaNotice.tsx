"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Info, MapPin, MessageSquare, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

export function BetaNotice() {
  return (
    <section className="bg-muted/20 py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Info className="h-5 w-5 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl">We're in Beta</CardTitle>
                </div>
                <CardDescription className="text-base">
                  ZoningLogic is currently in beta phase. We're actively improving
                  the platform based on user feedback and expanding our coverage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Limited Coverage</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Currently supporting some parts of Ontario. Coverage is increasing. British Columbia coming next.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0"
                    >
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Your Feedback Matters</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Beta users get priority support and early access to new features.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0"
                    >
                      <AlertCircle className="h-4 w-4 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Features May Change</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        We may add, remove, or modify features based on feedback.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0"
                    >
                      <Info className="h-4 w-4 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm">Not Legal Advice</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Always verify results with local authorities for critical decisions.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 rounded-lg border border-border bg-background/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Beta Benefits:</span> Free 
                    access, priority support, early feature access, and the opportunity to shape the product.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
