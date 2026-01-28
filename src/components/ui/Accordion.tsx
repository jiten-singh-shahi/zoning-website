"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const itemId = React.useId();
  const contentId = `${itemId}-content`;

  return (
    <div className="border-b border-border">
      <motion.button
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={itemId}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            id={contentId}
            role="region"
            aria-labelledby={itemId}
          >
            <div className="pb-4 pt-0 text-sm text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("space-y-0", className)} role="list">
      {children}
    </div>
  );
}

export { Accordion, AccordionItem };
