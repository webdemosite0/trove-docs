import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";
import {
  IconBot,
  IconChat,
  IconFile,
  IconGlobe,
  IconSpark,
  IconTable,
  IconUsers,
  IconShield,
} from "@/components/icons";

export const metadata: Metadata = { title: "Features" };

const FEATURES = [
  {
    href: "/chat",
    icon: <IconChat />,
    title: "Chat",
    body: "Streaming replies, attachments, image generation, and long-form reasoning.",
  },
  {
    href: "/tros",
    icon: <IconBot />,
    title: "Tros",
    body: "Named specialists with instructions, tools, accents, and animated splashies.",
  },
  {
    href: "/sites",
    icon: <IconGlobe />,
    title: "Sites",
    body: "Plan and generate multi-page websites with preview in the builder workspace.",
  },
  {
    href: "/workspace",
    icon: <IconFile />,
    title: "Documents",
    body: "Write and refine long-form docs with the same AI quality as chat.",
  },
  {
    href: "/workspace",
    icon: <IconTable />,
    title: "Sheets & decks",
    body: "Spreadsheets and presentations when the output needs structure.",
  },
  {
    href: "/team",
    icon: <IconUsers />,
    title: "Team runs",
    body: "Architect → design → engineering → QA in a guided multi-agent flow.",
  },
  {
    href: "/credits",
    icon: <IconSpark />,
    title: "Credits & plans",
    body: "Transparent usage across chat, Tros, images, and heavy tools.",
  },
  {
    href: "/security",
    icon: <IconShield />,
    title: "Security basics",
    body: "Account access, sessions, and how to keep workspace data under control.",
  },
];

export default function Page() {
  return (
    <DocsShell active="/features">
      <h1>Features</h1>
      <p>
        Trove is a full AI workspace — not only a chatbot. Every major surface shares
        one account, one design system, and one credit pool.
      </p>

      <div className="grid-3">
        {FEATURES.map((f) => (
          <Link key={f.title} className="card" href={f.href}>
            <div className="card-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </Link>
        ))}
      </div>

      <h2>Platform principles</h2>
      <ul>
        <li>
          <strong>Craft over clutter</strong> — calm UI, clear hierarchy, intentional motion.
        </li>
        <li>
          <strong>Specialists when it matters</strong> — Tros hold briefs so quality stays high.
        </li>
        <li>
          <strong>From idea to artifact</strong> — chat can become a site, doc, sheet, or deck.
        </li>
        <li>
          <strong>One home</strong> — projects, recents, and settings stay in the same shell.
        </li>
      </ul>

      <div className="callout">
        <strong>Product URL:</strong>{" "}
        <a href="https://troveai.site" target="_blank" rel="noreferrer">
          https://troveai.site
        </a>
      </div>
    </DocsShell>
  );
}
