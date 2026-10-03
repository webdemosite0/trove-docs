import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Build websites with Trove: describe the product and goals, get a multi-page site with live preview, then download the HTML or publish it to a Trove subdomain.",
};

export default function Page() {
  return (
    <DocsShell active="/sites" title="Websites">
      <p>
        Websites is Trove's AI website builder. Describe the product and goals —
        Trove plans the structure, generates the pages, and shows a live preview
        you can refine in chat.
      </p>

      <h2>What it can build</h2>
      <ul>
        <li>Landing pages with hero, features, pricing, and FAQ sections</li>
        <li>Multi-page marketing sites with navigation</li>
        <li>Portfolios, roastery menus, event pages, waitlist pages</li>
        <li>Any static site describable in a brief — if you can write the sections, it can build them</li>
      </ul>

      <h2>Flow</h2>
      <ul>
        <li>Open <a href="https://troveai.site/websites" target="_blank" rel="noreferrer">troveai.site/websites</a></li>
        <li>Describe industry, pages, tone, and must-have sections</li>
        <li>Review the plan, then iterate in preview ("make the hero taller", "add testimonials")</li>
      </ul>

      <h2>Take it with you</h2>
      <ul>
        <li>
          <Link href="/publishing">Publish</Link> it to a live Trove subdomain,
          or
        </li>
        <li>
          <Link href="/exports">Download</Link> the self-contained .html file
          and host it anywhere
        </li>
      </ul>

      <p>
        Related: <Link href="/publishing">Publishing</Link> ·{" "}
        <Link href="/exports">Exports</Link> ·{" "}
        <Link href="/getting-started">Quickstart</Link>
      </p>
    </DocsShell>
  );
}
