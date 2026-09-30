import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Credits" };

export default function Page() {
  return (
    <DocsShell active="/credits" title="Credits & plans">
      <p>
        Credits measure usage across chat, Tros, images, and heavier tools. Your plan
        grants a monthly pool. Some plans also use a short rolling window to smooth
        bursts.
      </p>

      <h2>Check balance</h2>
      <ul>
        <li>Bottom of the sidebar — remaining credits</li>
        <li>
          <a href="https://troveai.site/settings/billing" target="_blank" rel="noreferrer">
            Settings → Billing
          </a>
        </li>
        <li>
          <a href="https://troveai.site/plans" target="_blank" rel="noreferrer">
            Plans
          </a>{" "}
          to compare upgrades
        </li>
      </ul>

      <h2>What typically uses credits</h2>
      <ul>
        <li>Chat and Tro replies</li>
        <li>Image generation</li>
        <li>Larger multi-step tool runs (sites, long research)</li>
      </ul>

      <h2>Plans</h2>
      <p>
        Individual and team plans differ by monthly credits, collaboration features,
        and team seats. Open Plans in the app for current pricing.
      </p>

      <h2>Referrals &amp; credits</h2>
      <p>
        You can also earn through the affiliate program. See{" "}
        <Link href="/refer">Refer &amp; earn</Link> for how sharing Trove works.
      </p>

      <p>
        Related: <Link href="/getting-started">Quickstart</Link> ·{" "}
        <Link href="/security">Security</Link>
      </p>
    </DocsShell>
  );
}
