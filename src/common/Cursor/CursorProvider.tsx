"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import gsap from "gsap";

type CursorType = "default" | "hover" | "menu" | "big" | "hidden" | string;
type CursorContextValue = { setCursor: (type: CursorType) => void };

const CursorContext = createContext<CursorContextValue | undefined>(undefined);
export const useCursor = () => {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
};

export default function CursorProvider({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const xSet = useRef<any>(null);
  const ySet = useRef<any>(null);

  const variants = {
    default: { scale: 0.2, background: "#ffffff", mixBlend: "difference", opacity: 1 },
    hover: { scale: 0.6, background: "#ffffff", mixBlend: "difference", opacity: 1 },
    menu: { scale: 1.2, background: "#ffffff", mixBlend: "difference", opacity: 1 },
    big: { scale: 3.4, background: "#ffffff", mixBlend: "difference", opacity: 1 },
    hidden: { scale: 0.05, background: "#ffffff", mixBlend: "difference", opacity: 0 },
  };

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    el.style.width = "150px";
    el.style.height = "150px";
    el.style.borderRadius = "999px";
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = "9999";
    el.style.background = "#ffffff";
    el.style.mixBlendMode = "difference";
    el.style.willChange = "transform, opacity";

    xSet.current = gsap.quickSetter(el, "x", "px");
    ySet.current = gsap.quickSetter(el, "y", "px");

    const half = 75;

    const move = (e: MouseEvent) => {
    gsap.to(el, {
      x: e.clientX - half,
      y: e.clientY - half,
      duration: 1.2,
      ease: "power3.out",
    });
  };

    window.addEventListener("mousemove", move, { passive: true });

    // 👇 FIX — real cursor visible now
    document.documentElement.style.cursor = "default";

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  const setCursor = (type: CursorType) => {
    const el = cursorRef.current;
    if (!el) return;

    const v = variants[type] || variants.default;

    gsap.killTweensOf(el);

    gsap.to(el, {
      scale: v.scale,
      backgroundColor: v.background,
      opacity: v.opacity ?? 1,
      duration: 0.4,
      ease: "power3.out",
    });

    el.style.mixBlendMode = v.mixBlend;
  };

  return (
    <CursorContext.Provider value={{ setCursor }}>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      />
      {children}
    </CursorContext.Provider>
  );
}
