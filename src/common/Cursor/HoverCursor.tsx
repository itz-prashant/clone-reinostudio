// components/cursor/HoverCursor.tsx
"use client";

import React from "react";
import { useCursor } from "./CursorProvider";

type Props = {
  variant?: "default" | "menu" | "big" | "text" | "hidden" | string;
  className?: string;
  children: React.ReactNode;
};

export default function HoverCursor({
  variant = "menu",
  className,
  children,
}: Props) {
  const { setCursor } = useCursor();

  return (
    <span
      className={className}
      onMouseEnter={() => setCursor(variant)}
      onMouseLeave={() => setCursor("default")}
      style={{ display: "inline-block" }}
    >
      {children}
    </span>
  );
}
