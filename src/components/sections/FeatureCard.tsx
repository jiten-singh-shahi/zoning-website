"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={href ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:border-primary/40 border-border/50 bg-card/50 ${
        href ? "cursor-pointer" : ""
      }`}>
        <CardHeader className="pb-4">
          <motion.div
            whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 cursor-pointer"
          >
            <Icon className="h-5 w-5 text-primary" />
          </motion.div>
          <CardTitle className="text-lg font-medium leading-tight">{title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed mt-2">{description}</CardDescription>
        </CardHeader>
        {href && (
          <CardContent className="pt-0">
            <Link
              href={href}
              className="text-sm font-normal text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex items-center gap-1"
              >
                Learn more <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
              </motion.span>
            </Link>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
