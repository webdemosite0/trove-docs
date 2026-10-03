import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Credits & plans",
  description:
    "How Trove credits work: 1 credit = 1,000 tokens, plan allowances (Free 200, Pro 5,000, Team 20,000), rolling windows, image costs, and what happens when you run out.",
};

export default function Page() {
  return (
    <DocsShell active="/credits" title="Credits & plans">
      <p>
        Credits measure usage across chat, Tros, images, and heavier tool runs.
        Your plan grants a monthly pool plus a short rolling window to smooth bursts.
      </p>

      <h2>How credits work</h2>
      <p>
        <strong>1 credit = 1,000 tokens</strong> of model input and output, metered
        on actual usage reported by the provider and debited after the run. A
        short reply costs 1–2 credits; generating a landing page is roughly 10.
      </p>
      <ul>
        <li>
          <strong>Free</strong> — 200 credits/month, 40 credits per rolling 5-hour
          window. $0.
        </li>
        <li>
          <strong>Pro</strong> — 5,000 credits/month, 500 credits per rolling
          5-hour window. $19/month.
        </li>
        <li>
          <strong>Team</strong> — 20,000 shared credits/month, 2,000 shared credits
          per rolling 5-hour window. $99/month.
        </li>
      </ul>
      <p>
        Credits reset monthly and don't roll over.
      </p>

      <h2>The 5-hour rolling window</h2>
      <p>
        Separate from the monthly pool: inside any rolling 5 hours you can't
        spend more than your window allowance, even with monthly credits
        remaining. It smooths bursts so one long session doesn't eat the month.
      </p>
      <ul>
        <li><strong>Free</strong> — 40 credits per 5 hours</li>
        <li><strong>Pro</strong> — 500 credits per 5 hours</li>
        <li><strong>Team</strong> — 2,000 shared credits per 5 hours</li>
      </ul>
      <p>
        Hit the window but not the month? Wait for it to roll — usually under an
        hour of lighter use.
      </p>

      <h2>If you run out</h2>
      <p>
        At zero, generations stop immediately with an "out of credits" notice —
        nothing is queued or partially run. To keep working: upgrade for a bigger
        pool, or wait for the monthly reset (or the 5-hour window to roll, if
        that's the limit you hit).
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
        <li>Chat and Tro replies (metered on tokens)</li>
        <li>Image generation — metered like everything else: debited after the run on actual tokens used, so a failed generation that produces nothing costs nothing</li>
        <li>Cloud computer sessions — the browsing the Tro does on your behalf counts toward the same pool</li>
        <li>Larger multi-step tool runs (websites, long research)</li>
      </ul>

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
