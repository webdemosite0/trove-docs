import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Tros",
  description: "Meet Tros: specialist AI agents for planning, research, writing, building, data, design, operations, engineering, analysis, and communication.",
};

export default function Page() {
  return (
    <DocsShell active="/tros" title="Tros">
      <p>
        Tros are AI specialists inside Trove. Each has a name, role, instructions, tools, accent, and a unique animated splashy.
      </p>
      <h2>Why Tros</h2>
      <p>
        Use general chat to explore. Use a Tro when the job repeats and the brief should stay stable — research, support tone, code review, outbound copy.
      </p>
      <h2>Create a Tro</h2>
      <p>
        Open{" "}
        <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">troveai.site/tros</a>,
        click <strong>New Tro</strong>, set role and instructions, then open the workspace.
      </p>
      <h2>Workspace</h2>
      <ul>
        <li><strong>Chat</strong> on the left — brief and replies</li>
        <li><strong>Computer</strong> on the right — cloud browser when configured</li>
        <li><strong>Tasks</strong> — live activity as the Tro works</li>
      </ul>
      <h2>Splashies</h2>
      <p>
        Species (muse, pulse, orb, spark, nova, drift) are assigned per Tro. Working state adds glow and motion so status is visible at a glance.
      </p>
      <p>
        Related: <Link href="/chat">Chat</Link> · <Link href="/team">Team</Link> · <Link href="/credits">Credits</Link>
      </p>
    </DocsShell>
  );
}
