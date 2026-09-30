import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Credits" };

export default function Page() {
  return (
    <DocsShell active="/credits" title="Credits & plans">
      <p>
        Credits measure usage across chat, Tros, images, and heavier tools. Your plan grants a monthly pool.
      </p>
      <h2>Check balance</h2>
      <ul>
        <li>Account area in the sidebar</li>
        <li>
          <a href="https://troveai.site/settings/billing" target="_blank" rel="noreferrer">Settings → Billing</a>
        </li>
        <li>
          <a href="https://troveai.site/plans" target="_blank" rel="noreferrer">Plans</a>
        </li>
      </ul>
      <h2>Referrals</h2>
      <p>
        Use <strong>Refer & earn</strong> in the app sidebar to share Trove and earn rewards on qualified referrals.
      </p>
      <p>
        Related: <Link href="/getting-started">Quickstart</Link> · <Link href="/security">Security</Link>
      </p>
    </DocsShell>
  );
}
