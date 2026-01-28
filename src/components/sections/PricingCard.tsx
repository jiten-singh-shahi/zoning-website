"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  ctaHref,
  popular = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className={`relative h-full ${popular ? "border-primary shadow-lg" : ""}`}>
        {popular && (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <Badge>Popular</Badge>
          </motion.div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            {price !== "Free" && <span className="text-muted-foreground">/month</span>}
          </div>
          <CardDescription className="mt-4">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                </motion.div>
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant={popular ? "primary" : "outline"}
            className="w-full"
            size="lg"
          >
            <Link href={ctaHref}>{cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
