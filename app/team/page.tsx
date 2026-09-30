import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <DocsShell active="/team">
      <h1>Team</h1>
      <p>
        Team runs multiple specialist roles in sequence — for example product
        architecture, UX, engineering, and QA — so a single brief gets structured
        coverage from different angles.
      </p>

      <h2>How a run works</h2>
      <ol className="steps">
        <li>
          <strong>Write the task</strong>
          <p>Describe the product or problem with enough context for all roles.</p>
        </li>
        <li>
          <strong>Start the run</strong>
          <p>Each role responds in turn. You can stop a long run if priorities change.</p>
        </li>
        <li>
          <strong>Review the set</strong>
          <p>Compare outputs, then take the best pieces into chat, a Tro, or a doc.</p>
        </li>
      </ol>

      <h2>Team navigation</h2>
      <p>
        Team appears in the sidebar for accounts with team access. Business and team
        plans unlock collaboration-oriented features; individual accounts focus on solo
        workflows and Tros.
      </p>

      <div className="callout">
        Open{" "}
        <a href="https://troveai.site/team" target="_blank" rel="noreferrer">
          troveai.site/team
        </a>{" "}
        when your account includes Team.
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/tros">Tros</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
