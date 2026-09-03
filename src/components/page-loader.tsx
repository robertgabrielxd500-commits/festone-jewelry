"use client";

import { useEffect, useState } from "react";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 500);
    const t2 = setTimeout(() => setPhase("done"), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {phase !== "done" && (
        <div
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-void transition-all duration-700 ease-out"
          style={{
            opacity: phase === "exit" ? 0 : 1,
            transform: phase === "exit" ? "scale(1.06)" : "scale(1)",
            pointerEvents: phase === "exit" ? "none" : "auto",
          }}
        >
          <div className="font-heading text-2xl md:text-3xl tracking-[0.4em] text-gold-shimmer animate-fade-in">
            FESTONE
          </div>
          <div className="mt-4 h-px w-16 overflow-hidden">
            <div className="h-full w-full bg-gold" style={{ animation: "line-grow-loader 0.9s ease-out both" }} />
          </div>
        </div>
      )}
      <div
        className="flex flex-col flex-1 min-h-full transition-opacity duration-700"
        style={{ opacity: phase === "show" ? 0 : 1 }}
      >
        {children}
      </div>
    </>
  );
}
