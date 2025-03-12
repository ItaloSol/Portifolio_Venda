"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20" />
      <div className="absolute top-0 left-0 right-0 bottom-0 [background:radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
    </div>
  );
};