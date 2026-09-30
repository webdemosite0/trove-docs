import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trove Docs",
    template: "%s · Trove Docs",
  },
  description: "Documentation for Trove — chat, Tros, sites, and credits.",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/getting-started", label: "Getting started" },
  { href: "/tros", label: "Tros" },
  { href: "/credits", label: "Credits" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <div className="topbar-inner">
              <Link href="/" className="brand">
                <span className="mark" aria-hidden />
                Trove Docs
              </Link>
              <nav className="nav" aria-label="Primary">
                {NAV.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <a href="https://troveai.site" target="_blank" rel="noreferrer">
                  Open app
                </a>
              </nav>
            </div>
          </header>

          <div className="main">
            <aside className="side">
              <h2>Guide</h2>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </aside>
            <main className="content">{children}</main>
          </div>

          <footer className="footer">
            <div className="footer-inner">
              <span>© {new Date().getFullYear()} Trove</span>
              <span>
                Deployed for <code>docs.troveai.site</code>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
