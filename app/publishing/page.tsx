import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Publishing",
  description:
    "Publish Trove websites to a live Trove subdomain: where sites live, how to publish and unpublish, and current limits.",
};

export default function Page() {
  return (
    <DocsShell active="/publishing" title="Publishing">
      <p>
        Turn a website artifact into a live site on a Trove subdomain — no
        hosting setup, no deploy pipeline.
      </p>

      <h2>Where sites live</h2>
      <p>
        Published sites are served from Trove's hosting on a{" "}
        <code>*.troveai.site</code> subdomain. Each publish claims a subdomain
        for your project.
      </p>

      <h2>How to publish</h2>
      <ul>
        <li>Open the website in Studio or the Files panel</li>
        <li>Choose Publish and pick a subdomain name</li>
        <li>The site goes live immediately; share the URL</li>
      </ul>

      <h2>Updating and unpublishing</h2>
      <ul>
        <li>Republish after edits to push changes live</li>
        <li>Unpublish any time to take the site down; the subdomain claim is released</li>
      </ul>

      <h2>Limits</h2>
      <ul>
        <li>Custom domains are not supported today — sites live on Trove subdomains only</li>
        <li>Published sites are static snapshots of the artifact; dynamic server features aren't included</li>
        <li>Subdomain names are first-come; system-reserved names can't be claimed</li>
      </ul>

      <p>
        Related: <Link href="/exports">Exports</Link> ·{" "}
        <Link href="/security">Security</Link>
      </p>
    </DocsShell>
  );
}
