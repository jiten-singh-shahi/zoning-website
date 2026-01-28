"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Handshake } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { useBanner } from "./BannerContext";

export function TopBanner() {
  const { isVisible, setIsVisible } = useBanner();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-40 w-full border-b border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm supports-[backdrop-filter]:bg-primary/5"
        >
          <Container className="py-2">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="font-semibold text-foreground">
                  🚀 Coming Soon - Beta Phase
                </span>
              </motion.div>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Handshake className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Looking for partners with use cases
                </span>
              </motion.div>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs hover:bg-primary/20 transition-all"
                >
                  <Link href="/pricing" className="cursor-pointer">Request Access</Link>
                </Button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="rounded-md p-1 hover:bg-primary/10 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
