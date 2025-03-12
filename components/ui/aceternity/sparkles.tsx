"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl" />
      {children}
    </div>
  );
};