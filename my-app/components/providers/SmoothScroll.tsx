"use client";

import { LenisProvider } from "./LenisContext";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  );
}

