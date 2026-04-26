"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state via JS so that without JS elements remain visible
    el.style.opacity = "0";
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    el.style.willChange = "opacity, transform";

    if (variant === "fade-up") el.style.transform = "translateY(32px)";
    else if (variant === "slide-left") el.style.transform = "translateX(-32px)";
    else if (variant === "slide-right") el.style.transform = "translateX(32px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0)";
          // Clean up will-change after animation settles
          const tid = setTimeout(() => { el.style.willChange = "auto"; }, 800 + delay);
          observer.unobserve(el);
          return () => clearTimeout(tid);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
