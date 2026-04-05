import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zamówienie potwierdzone",
  robots: { index: false, follow: false },
};

export default function PotwierdzonelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
