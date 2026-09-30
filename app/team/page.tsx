import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <DocsShell active="/team" title="Team">
      <p>
        Team runs multiple specialist roles in sequence — architecture, UX, engineering, QA — so one brief gets structured coverage.
      </p>
      <h2>How it works</h2>
      <ul>
        <li>Write a clear task with context</li>
        <li>Start the run and review each role’s output</li>
        <li>Carry the best pieces into chat, a Tro, or a doc</li>
      </ul>
      <p>
        Open{" "}
        <a href="https://troveai.site/team" target="_blank" rel="noreferrer">troveai.site/team</a>
        {" "}when your plan includes Team.
      </p>
      <p>
        Related: <Link href="/tros">Tros</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
