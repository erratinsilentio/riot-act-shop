import Link from "next/link";

const SOCIAL_URL = "https://www.instagram.com/riot.actt?igsh=MXYxMjF4d2tob2Q3ZQ==";

export default function Footer() {
  return (
    <footer
      className="w-full py-16 px-6 md:px-12"
      style={{
        background: "var(--color-surface-container-lowest)",
        borderTop: "1px solid rgba(58,57,57,0.2)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8">
        {/* Brand + address */}
        <div>
          <p
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--color-secondary)" }}
          >
            RIOT ACT
          </p>
          <div
            className="text-[10px] uppercase space-y-1"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em", color: "var(--color-secondary)" }}
          >
            <p>WORLDWIDE MOVEMENT</p>
            <p>1312</p>
          </div>
        </div>

        {/* Legal links */}
        <div
          className="flex gap-8 text-[10px] uppercase"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em" }}
        >
          <Link href="#" className="transition-colors hover:text-primary" style={{ color: "var(--color-secondary)" }}>
            Regulamin
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" style={{ color: "var(--color-secondary)" }}>
            Polityka prywatności
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" style={{ color: "var(--color-secondary)" }}>
            Kontakt
          </Link>
        </div>

        {/* Social + copyright */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <Link href={SOCIAL_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-primary" style={{ color: "var(--color-secondary)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </Link>
            {/* YouTube */}
            <Link href={SOCIAL_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-primary" style={{ color: "var(--color-secondary)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
              </svg>
            </Link>
          </div>
          <p
            className="text-[10px] uppercase text-right"
            style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.2em", color: "var(--color-primary)" }}
          >
            © 2025 RIOT ACT. WSZYSTKIE PRAWA ZASTRZEŻONE.
          </p>
        </div>
      </div>
    </footer>
  );
}
