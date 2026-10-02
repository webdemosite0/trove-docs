import type { ReactNode } from "react";
import Link from "next/link";
import { TroveLogo } from "./logo";

const TOP_NAV = [
  { href: "/", label: "Home" },
  { href: "/overview", label: "Docs", match: "docs" },
  { href: "/features", label: "Use cases" },
  { href: "/getting-started", label: "Training" },
  { href: "/workspace", label: "Resources" },
];

const SUB_NAV = [
  { href: "/overview", label: "Overview" },
  { href: "/help", label: "Help" },
  { href: "/features", label: "Features" },
  { href: "/tros", label: "Tros" },
  { href: "/chat", label: "Chat" },
  { href: "/refer", label: "Refer" },
  { href: "/security", label: "Security" },
  { href: "/credits", label: "Credits" },
];

const SIDE = [
  {
    label: "Get started",
    items: [
      { href: "/getting-started", label: "Quickstart" },
      { href: "/chat", label: "Use Trove" },
      { href: "/tros", label: "Meet Tros" },
      { href: "/sites", label: "Build a site" },
      { href: "/team", label: "Team runs" },
    ],
  },
  {
    label: "Product",
    items: [
      { href: "/features", label: "Features" },
      { href: "/workspace", label: "Workspace tools" },
      { href: "/credits", label: "Credits & plans" },
      { href: "/refer", label: "Refer & earn" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    label: "Support",
    items: [{ href: "/help", label: "Help center" }],
  },
];

function isDocsSection(path: string) {
  return path !== "/";
}

export function DocsShell({
  children,
  active = "/",
  title,
  lead,
  primaryCta,
  secondaryCta,
  showMock = false,
}: {
  children?: ReactNode;
  active?: string;
  title?: string;
  lead?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showMock?: boolean;
}) {
  const docsActive = isDocsSection(active);

  return (
    <>
      <header className="top">
        <div className="top-row">
          <Link href="/" className="brand">
            <TroveLogo size={28} />
            <span className="brand-word">Trove</span>
          </Link>

          <nav className="top-nav" aria-label="Primary">
            {TOP_NAV.map((item) => {
              const on =
                item.match === "docs"
                  ? docsActive
                  : active === item.href || (item.href === "/" && active === "/");
              return (
                <Link key={item.label} href={item.href} className={on ? "active" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="top-actions">
            <a className="btn-try" href="https://troveai.site" target="_blank" rel="noreferrer">
              Try Trove →
            </a>
            <button type="button" className="icon-btn" aria-label="Search" title="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {docsActive ? (
          <nav className="subnav" aria-label="Docs sections">
            {SUB_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.href ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <div className="body">
        <aside className="sidebar">
          <Link href="/overview" className={`side-home${active === "/overview" || active === "/" ? " active" : ""}`}>
            Home
          </Link>

          {SIDE.map((group) => (
            <div key={group.label} className="side-group">
              <div className="side-label">{group.label}</div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`side-link${active === item.href ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </aside>

        <div className={showMock ? "main" : "main doc-only"}>
          <div className={showMock ? undefined : "prose"}>
            {title ? <h1 className={showMock ? "page-title" : undefined}>{title}</h1> : null}
            {lead ? <p className={showMock ? "page-lead" : undefined}>{lead}</p> : null}
            {(primaryCta || secondaryCta) && showMock ? (
              <div className="cta-row">
                {primaryCta ? (
                  <Link className="btn-primary" href={primaryCta.href}>
                    {primaryCta.label} →
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link className="btn-link" href={secondaryCta.href}>
                    {secondaryCta.label} →
                  </Link>
                ) : null}
              </div>
            ) : null}
            {children}
          </div>

          {showMock ? <ProductMock /> : null}
        </div>
      </div>

      <a className="ask-ai" href="https://troveai.site/chat" target="_blank" rel="noreferrer">
        Ask AI
      </a>
    </>
  );
}

function ProductMock() {
  return (
    <div className="mock-wrap">
      <div className="mock">
        <div className="mock-rail">
          <div className="chip">
            <TroveLogo size={16} />
            Trove
          </div>
          <div className="item" style={{ background: "#16161a", color: "#fff", borderRadius: 8, marginBottom: 8 }}>
            <strong>+ New chat</strong>
          </div>
          <div className="item"><strong>Pinned</strong></div>
          <div className="item">Launch brief</div>
          <div className="item">Site rewrite</div>
          <div className="item" style={{ marginTop: 10 }}><strong>Tros</strong></div>
          <div className="item">Research lead</div>
          <div className="item">Support voice</div>
          <div className="item" style={{ marginTop: 10 }}><strong>Recents</strong></div>
          <div className="item">Homepage outline</div>
          <div className="item">Pricing copy</div>
        </div>
        <div className="mock-main">
          <span className="mock-badge">1/6</span>
          <TroveLogo size={56} />
          <h3>What should we build?</h3>
          <p>Start with a goal — Trove can plan, write, and ship artifacts.</p>
          <div className="mock-cards">
            <div className="mock-card">
              <span>Chat</span>
              Explore and draft
            </div>
            <div className="mock-card">
              <span>Tros</span>
              Run a specialist
            </div>
            <div className="mock-card">
              <span>Sites</span>
              Generate a website
            </div>
            <div className="mock-card">
              <span>Team</span>
              Multi-role run
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
