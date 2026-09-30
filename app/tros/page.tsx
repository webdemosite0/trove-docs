import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";
import { TroveLogo } from "@/components/logo";

export const metadata: Metadata = { title: "Tros" };

export default function Page() {
  return (
    <DocsShell active="/tros">
      <h1>Tros</h1>
      <p>
        Tros are AI specialists inside Trove. Each Tro has a name, role, custom
        instructions, tools, accent color, and a unique <strong>splashy</strong> — an
        animated mascot that reacts while it works.
      </p>

      <div className="feature-row">
        <div>
          <h2 style={{ marginTop: 0 }}>Why Tros exist</h2>
          <p style={{ color: "var(--ink-2)", margin: 0 }}>
            General chat is great for exploration. Tros are for jobs you repeat —
            research, support tone, code review, outbound copy — with a stable brief
            that does not drift between sessions.
          </p>
        </div>
        <div className="viz">
          <div className="viz-glow" style={{ background: "#a78bfa", top: "20%", left: "20%" }} />
          <div style={{ position: "relative", textAlign: "center", padding: 16 }}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", justifyContent: "center" }}>
              <span style={{ width: 48, height: 48, borderRadius: 16, background: "linear-gradient(135deg,#6366f1,#3b82f6)" }} />
              <span style={{ width: 48, height: 48, borderRadius: 16, background: "linear-gradient(135deg,#a78bfa,#ec4899)" }} />
              <span style={{ width: 48, height: 48, borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)" }} />
            </div>
            <p style={{ margin: "12px 0 0", color: "var(--muted)", fontSize: 13 }}>Splashy species · unique per Tro</p>
          </div>
        </div>
      </div>

      <h2>Create a Tro</h2>
      <ol className="steps">
        <li>
          <strong>Open the gallery</strong>
          <p>
            Go to{" "}
            <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">
              troveai.site/tros
            </a>
            .
          </p>
        </li>
        <li>
          <strong>New Tro</strong>
          <p>Set name, role, instructions, tools, and accent. Preview the splashy as you type.</p>
        </li>
        <li>
          <strong>Open the workspace</strong>
          <p>Chat on the left. Computer and tasks on the right.</p>
        </li>
        <li>
          <strong>Brief it like a teammate</strong>
          <p>Paste context, goals, and constraints. Reuse the same Tro for similar jobs.</p>
        </li>
      </ol>

      <h2>Workspace layout</h2>
      <ul>
        <li>
          <strong>Chat (left)</strong> — messages, streaming replies, attachments.
        </li>
        <li>
          <strong>Computer (right)</strong> — optional cloud browser session. Start it,
          paste a URL in chat, take snapshots, open live view.
        </li>
        <li>
          <strong>Tasks (right)</strong> — live activity feed as the Tro works.
        </li>
      </ul>

      <h2>Splashies</h2>
      <p>
        Each Tro is assigned a species (muse, pulse, orb, spark, nova, drift) from its
        id. While idle, the splashy gently animates. While working, it glows, focuses,
        and shows motion so status is visible without reading the task list.
      </p>

      <h2>Business defaults</h2>
      <p>
        When business onboarding analyzes your company, Trove can seed Tros with roles
        and instructions matched to that profile — so the team starts useful on day one.
      </p>

      <div className="callout">
        <strong>Note:</strong> Cloud computer requires Browserbase credentials on the
        server (<code>BROWSERBASE_API_KEY</code>). Without them, chat still works; the
        computer panel explains how to enable it.
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/chat">Chat</Link> · <Link href="/team">Team</Link> ·{" "}
        <Link href="/credits">Credits</Link>
      </p>
    </DocsShell>
  );
}
