import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Supported files",
  description:
    "Which file types you can upload to Trove chat and what happens to them: PDFs, text, Markdown, CSV, JSON, and images (PNG, JPEG, WebP).",
};

export default function Page() {
  return (
    <DocsShell active="/supported-files" title="Supported files">
      <p>
        Attach files to chat for grounded answers — Trove reads them and reasons
        over their contents.
      </p>

      <h2>Supported types</h2>
      <ul>
        <li>
          <strong>Documents</strong> — PDF (.pdf), plain text (.txt), Markdown
          (.md, .markdown)
        </li>
        <li>
          <strong>Data</strong> — CSV (.csv), JSON (.json)
        </li>
        <li>
          <strong>Images</strong> — PNG, JPEG, WebP
        </li>
      </ul>

      <h2>What happens on upload</h2>
      <ul>
        <li>Text-based files are read directly into the conversation context</li>
        <li>PDFs are parsed for their text content</li>
        <li>Images are described to the model visually — useful for mockups, screenshots, and diagrams</li>
      </ul>

      <h2>Limits</h2>
      <ul>
        <li>Very large files may be truncated to fit the model's context — for long documents, the beginning is prioritized</li>
        <li>Scanned PDFs without a text layer may not parse; use a text-based export instead</li>
        <li>Uploads count as input tokens toward your credit usage</li>
      </ul>

      <p>
        Related: <Link href="/chat">Chat</Link> ·{" "}
        <Link href="/exports">Exports</Link>
      </p>
    </DocsShell>
  );
}
