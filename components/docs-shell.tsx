import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLockup } from "./logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/getting-started", label: "Getting started" },
  { href: "/features", label: "Features" },
  { href: "/tros", label: "Tros" },
  { href: "/chat", label: "Chat" },
  { href: "/sites", label: "Sites" },
  { href: "/workspace", label: "Workspace" },
  { href: "/credits", label: "Credits" },
  { href: "/team", label: "Team" },
  { href: "/security", label: "Security" },
];

export function DocsShell({
  children,
  active,
  hideSide = false,
}: {
  children: ReactNode;
  active?: string;
  hideSide?: boolean;
}) {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" style={{ textDecoration: "none" }}>
            <BrandLockup size={30} />
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/getting-started" className={active === "/getting-started" ? "active" : ""}>
              Docs
            </Link>
            <Link href="/features" className={active === "/features" ? "active" : ""}>
              Features
            </Link>
            <Link href="/tros" className={active === "/tros" ? "active" : ""}>
              Tros
            </Link>
            <a className="cta" href="https://troveai.site" target="_blank" rel="noreferrer">
              Open Trove
            </a>
          </nav>
        </div>
      </header>

      {hideSide ? (
        children
      ) : (
        <div className="layout">
          <aside className="side">
            <h2>Documentation</h2>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.href ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </aside>
          <article className="prose">{children}</article>
        </div>
      )}

      <footer className="footer">
        <div className="footer-inner">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <BrandLockup size={22} />
            <span style={{ color: "var(--muted)", fontSize: 13 }}>Docs</span>
          </span>
          <span>
            © {new Date().getFullYear()} Trove ·{" "}
            <a href="https://troveai.site" target="_blank" rel="noreferrer">
              troveai.site
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
