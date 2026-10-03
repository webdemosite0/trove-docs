import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Trove workspace tools: documents, spreadspreadsheets, presentations, design, and projects — all inside the same shell.",
};

export default function Page() {
  return (
    <DocsShell active="/workspace" title="Workspace tools">
      <p>
        Documents, spreadspreadsheets, presentations, design, and projects — all inside the same Trove shell.
      </p>
      <h2>Documents</h2>
      <p>Long-form writing: specs, memos, proposals.</p>
      <h2>Spreadspreadsheets</h2>
      <p>Tables and trackers when the answer is data-shaped.</p>
      <h2>Decks</h2>
      <p>Pitch and review presentations.</p>
      <h2>Design</h2>
      <p>Visual exploration and mock-oriented workflows.</p>
      <h2>Projects</h2>
      <p>Group related work across tools.</p>
      <p>
        Related: <Link href="/sites">Sites</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
