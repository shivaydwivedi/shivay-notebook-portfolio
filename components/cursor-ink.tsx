"use client";

import { useEffect, useState } from "react";

export function CursorInk() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/30 mix-blend-multiply transition-transform duration-75 md:block dark:mix-blend-screen"
      style={{ left: point.x, top: point.y }}
      aria-hidden="true"
    />
  );
}
