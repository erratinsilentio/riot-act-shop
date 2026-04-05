import Link from "next/link";

const SOCIAL_URL = "https://www.instagram.com/riot.actt?igsh=MXYxMjF4d2tob2Q3ZQ==";

export default function Footer() {
  return (
    <footer
      className="px-16 py-10 flex items-center justify-between"
      style={{ background: "var(--color-surface-container-lowest)" }}
    >
      <p
        className="text-xs uppercase tracking-widest text-on-surface-variant"
        style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.1em" }}
      >
        RIOT ACT
      </p>

      <div className="flex items-center gap-5">
        {/* Instagram */}
        <Link
          href={SOCIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-on-surface-variant hover:text-primary transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </Link>

        {/* YouTube */}
        <Link
          href={SOCIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-on-surface-variant hover:text-primary transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
