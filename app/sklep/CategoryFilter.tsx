"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES: { label: string; value: string }[] = [
  { label: "Wszystkie", value: "" },
  { label: "Ubrania", value: "ubrania" },
  { label: "Muzyka", value: "muzyka" },
  { label: "Dodatki", value: "dodatki" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("kategoria") ?? "";

  function select(value: string) {
    const url = value ? `/sklep?kategoria=${value}` : "/sklep";
    router.push(url);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ label, value }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            onClick={() => select(value)}
            className="px-4 py-1.5 text-xs uppercase tracking-widest transition-colors"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "0.1em",
              background: isActive ? "var(--color-primary)" : "transparent",
              color: isActive ? "var(--color-on-primary)" : "var(--color-on-surface-variant)",
              border: isActive ? "none" : "1px solid rgba(68,68,68,0.4)",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
