import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Refer & earn",
  description: "Share Trove and earn rewards: how the affiliate program works, where to find your invite link, and current offers.",
};

export default function Page() {
  return (
    <DocsShell active="/refer" title="Refer & earn">
      <p>
        Share Trove with people who sign up and become paying customers. Qualified
        referrals earn rewards — the sidebar promo summarizes the current offer.
      </p>

      <h2>How it works</h2>
      <ul>
        <li>Open <strong>Refer &amp; earn</strong> in the sidebar, or go to Affiliates</li>
        <li>Copy your personal invite link</li>
        <li>Share it with founders, teams, and creators who need an AI workspace</li>
        <li>When referrals qualify (for example, paid conversion), rewards apply per program rules</li>
      </ul>

      <h2>Where to find it</h2>
      <ul>
        <li>
          Sidebar card: <strong>Share Trove · get credits</strong>
        </li>
        <li>
          Full page:{" "}
          <a href="https://troveai.site/affiliates" target="_blank" rel="noreferrer">
            troveai.site/affiliates
          </a>
        </li>
      </ul>

      <h2>Current highlight</h2>
      <p>
        The in-app promo references milestones such as{" "}
        <strong>100 qualified paid → $200</strong>. Exact rates, credit bonuses, and
        payout rules are always shown in the Affiliates area for your account — use
        that as the source of truth if numbers differ from this page.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Share with people who will actually use chat, Tros, or Websites</li>
        <li>Pair the link with a short note about what you use Trove for</li>
        <li>Team and business users often convert when they see shared projects</li>
      </ul>

      <p>
        Related: <Link href="/credits">Credits &amp; plans</Link> ·{" "}
        <Link href="/getting-started">Quickstart</Link>
      </p>
    </DocsShell>
  );
}
