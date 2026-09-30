import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Sites" };

export default function Page() {
  return (
    <DocsShell active="/sites">
      <h1>Sites</h1>
      <p>
        Sites (Websites) is Trove’s AI website builder. Describe the product, audience,
        and goals — Trove plans structure, generates pages, and previews the result in
        a workspace built for iteration.
      </p>

      <h2>What to expect</h2>
      <ul>
        <li>Multi-section marketing and product pages</li>
        <li>Header, footer, and varied typography (not a single repeated block)</li>
        <li>Preview pane alongside the builder conversation</li>
        <li>Project continuity so you can return and refine</li>
      </ul>

      <h2>How to start</h2>
      <ol className="steps">
        <li>
          <strong>Open Sites</strong>
          <p>
            <a href="https://troveai.site/websites" target="_blank" rel="noreferrer">
              troveai.site/websites
            </a>
          </p>
        </li>
        <li>
          <strong>Describe the site</strong>
          <p>Include industry, pages needed, tone, and any must-have sections.</p>
        </li>
        <li>
          <strong>Review the plan</strong>
          <p>Confirm structure before generation when the builder offers a plan step.</p>
        </li>
        <li>
          <strong>Iterate in preview</strong>
          <p>Ask for section-level changes rather than regenerating everything blindly.</p>
        </li>
      </ol>

      <div className="callout">
        <strong>Tip:</strong> Reference real competitors or brands for tone, but ask for
        original copy and layout — not cloned content.
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/workspace">Workspace tools</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
