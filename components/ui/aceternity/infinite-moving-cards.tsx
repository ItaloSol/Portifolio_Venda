"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  const speedMap = {
    fast: "animate-scroll-fast",
    normal: "animate-scroll-normal",
    slow: "animate-scroll-slow",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && speedMap[speed],
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8"
            key={item.name + idx}
          >
            <blockquote>
              <p className="text-sm leading-[1.6] text-gray-100">{item.quote}</p>
              <footer className="mt-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};