"use client";

import { motion } from "framer-motion";
import { scrollContainer } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollContainer}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}