"use client";

import { Container } from "../layout/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "5", label: "Specialized AI Agents", suffix: "" },
  { value: "Selected Ontario Regions", label: "Coverage", suffix: "" },
  { value: "3D", label: "Visualization", suffix: "" },
  { value: "Minutes", label: "Analysis Time", suffix: "" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value);

  if (isNaN(numericValue)) {
    return (
      <div ref={ref} className="min-h-[60px] md:min-h-[72px] flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-semibold text-primary leading-tight text-center break-words">
          {value}
          {suffix}
        </span>
      </div>
    );
  }

  return (
    <div ref={ref} className="min-h-[60px] md:min-h-[72px] flex items-center justify-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-primary md:text-5xl"
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {numericValue}
            {suffix}
          </motion.span>
        )}
      </motion.span>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 auto-rows-fr">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all flex flex-col items-center justify-center h-full"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="mt-3 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
