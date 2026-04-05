import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-16 py-5 flex items-center justify-between"
      style={{ background: "rgba(19,19,19,0.8)", backdropFilter: "blur(20px)" }}
    >
      <Link
        href="/"
        className="font-display text-sm font-bold tracking-widest uppercase text-on-surface"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        MONOLITH_STREET
      </Link>

      <nav className="flex items-center gap-10">
        <Link href="/sklep" className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors">
          Sklep
        </Link>
        <Link href="/sklep" className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors">
          Produkty
        </Link>
        <Link href="/" className="text-xs tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors">
          Info
        </Link>
      </nav>

      <Link href="/koszyk" aria-label="Koszyk">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-on-surface">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      </Link>
    </header>
  );
}
