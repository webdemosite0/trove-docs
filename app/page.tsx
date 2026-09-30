import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";
import { TroveLogo } from "@/components/logo";
import {
  IconBot,
  IconChat,
  IconFile,
  IconGlobe,
  IconSpark,
  IconTable,
  IconUsers,
} from "@/components/icons";

export default function HomePage() {
  return (
    <DocsShell active="/" hideSide>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">
            <TroveLogo size={16} /> Official documentation
          </p>
          <h1>Build with Trove</h1>
          <p className="hero-lead">
            Trove is your AI workspace — chat, specialist Tros, websites, documents,
            sheets, decks, and team runs in one product. This site explains every
            surface, clearly and completely.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/getting-started">
              Get started
            </Link>
            <Link className="btn btn-ghost" href="/features">
              Explore features
            </Link>
            <a className="btn btn-ghost" href="https://troveai.site" target="_blank" rel="noreferrer">
              Open app →
            </a>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ padding: "3rem 0 4.5rem" }}>
        <div className="grid-3">
          <Link className="card" href="/chat">
            <div className="card-icon"><IconChat /></div>
            <h3>Chat</h3>
            <p>Deep conversation, files, images, and research in a clean thread.</p>
          </Link>
          <Link className="card" href="/tros">
            <div className="card-icon"><IconBot /></div>
            <h3>Tros</h3>
            <p>Specialists with briefs, tools, splashies, and optional cloud computer.</p>
          </Link>
          <Link className="card" href="/sites">
            <div className="card-icon"><IconGlobe /></div>
            <h3>Sites</h3>
            <p>Describe a product — Trove plans and builds a full website workspace.</p>
          </Link>
          <Link className="card" href="/workspace">
            <div className="card-icon"><IconFile /></div>
            <h3>Docs & decks</h3>
            <p>Documents, spreadsheets, and presentations from a single workspace.</p>
          </Link>
          <Link className="card" href="/team">
            <div className="card-icon"><IconUsers /></div>
            <h3>Team</h3>
            <p>Multi-role runs — architect, design, engineering, and QA in sequence.</p>
          </Link>
          <Link className="card" href="/credits">
            <div className="card-icon"><IconSpark /></div>
            <h3>Credits & plans</h3>
            <p>How usage is measured and how to pick the right plan.</p>
          </Link>
        </div>

        <div className="feature-row" style={{ marginTop: "2.5rem" }}>
          <div>
            <h2 style={{ marginTop: 0 }}>One workspace. Every craft.</h2>
            <p style={{ color: "var(--ink-2)" }}>
              Stop jumping between chatbots, doc tools, and site builders. Trove keeps
              conversation, production, and specialists together — with the same
              account, credits, and design language.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/features">
                See all features
              </Link>
            </div>
          </div>
          <div className="viz">
            <div className="viz-glow" style={{ background: "#3b82f6", top: "10%", left: "15%" }} />
            <div className="viz-glow" style={{ background: "#818cf8", bottom: "5%", right: "10%" }} />
            <div style={{ position: "relative", textAlign: "center" }}>
              <TroveLogo size={72} />
              <p style={{ margin: "0.85rem 0 0", color: "var(--muted)", fontSize: 13 }}>
                Chat · Tros · Sites · Docs · Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsShell>
  );
}
