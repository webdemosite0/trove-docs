import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Websites",
  description: "Build websites with Trove: describe the product and goals, get a multi-page site with live preview, then download or publish it.",
};

export default function Page() {
  return (
    <DocsShell active="/sites" title="Websites">
      <p>
        Sites is Trove’s AI website builder. Describe the product and goals — Trove plans structure, generates pages, and previews the result.
      </p>
      <h2>Flow</h2>
      <ul>
        <li>Open <a href="https://troveai.site/websites" target="_blank" rel="noreferrer">troveai.site/websites</a></li>
        <li>Describe industry, pages, tone, and must-have sections</li>
        <li>Review the plan, then iterate in preview</li>
      </ul>
      <p>
        Related: <Link href="/workspace">Workspace</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
