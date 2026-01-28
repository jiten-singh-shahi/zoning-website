"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark }: LogoProps) {
  return (
    <motion.div
      className={cn("flex items-center gap-2.5 group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 cursor-pointer"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          Z
        </motion.span>
        <motion.div
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"
        />
      </motion.div>
      <span className="text-xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/70 transition-all duration-300">
        ZoningLogic
      </span>
    </motion.div>
  );
}
