import type { Metadata } from "next";

export const metadata: Metadata = { title: "Credits" };

export default function CreditsPage() {
  return (
    <>
      <h1>Credits</h1>
      <p>
        Credits measure usage across chat, Tros, images, and other tools. Your plan
        grants a monthly pool; some plans also use a short rolling window for burst
        protection.
      </p>

      <h2>Where to check balance</h2>
      <p>
        Open the account menu in the sidebar, or go to{" "}
        <a href="https://troveai.site/settings/billing" target="_blank" rel="noreferrer">
          Billing
        </a>
        . The remaining credit count is also shown near your account on desktop.
      </p>

      <h2>What uses credits</h2>
      <ul>
        <li>Chat and Tro replies</li>
        <li>Image generation</li>
        <li>Heavier tools (varies by action)</li>
      </ul>

      <h2>Plans</h2>
      <p>
        Upgrade from{" "}
        <a href="https://troveai.site/plans" target="_blank" rel="noreferrer">
          Plans
        </a>{" "}
        when you need a larger monthly pool or team features.
      </p>
    </>
  );
}
