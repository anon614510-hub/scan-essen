"use client";

import ArInterface from "@/components/ArInterface";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="w-full h-[100dvh]">
        <ArInterface />
      </main>
    </ErrorBoundary>
  );
}
