"use client";

import { useEffect, useState } from "react";

export function CursorInk() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const updateEnabled = () => setEnabled(!reduceMotion.matches && !coarsePointer.matches);

    updateEnabled();
    reduceMotion.addEventListener("change", updateEnabled);
    coarsePointer.addEventListener("change", updateEnabled);

    return () => {
      reduceMotion.removeEventListener("change", updateEnabled);
      coarsePointer.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/30 mix-blend-multiply transition-transform duration-75 md:block dark:mix-blend-screen"
      style={{ left: point.x, top: point.y }}
      aria-hidden="true"
    />
  );
}
