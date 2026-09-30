import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Credits" };

export default function Page() {
  return (
    <DocsShell active="/credits">
      <h1>Credits & plans</h1>
      <p>
        Credits measure usage across Trove — chat, Tros, images, and heavier tools.
        Your plan grants a monthly pool; some plans also use a short rolling window to
        smooth bursts.
      </p>

      <h2>Where to see your balance</h2>
      <ul>
        <li>Account area in the sidebar (desktop)</li>
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
        <li>Larger multi-step tool runs</li>
      </ul>

      <h2>Referrals</h2>
      <p>
        The sidebar includes <strong>Refer & earn</strong> for sharing Trove and earning
        rewards when qualified referrals convert — see the affiliates area in the app.
      </p>

      <div className="callout">
        Exact rates and plan limits can change; the app billing page is the source of
        truth for your account.
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/getting-started">Getting started</Link> ·{" "}
        <Link href="/security">Security</Link>
      </p>
    </DocsShell>
  );
}
