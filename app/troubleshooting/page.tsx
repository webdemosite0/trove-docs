import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Troubleshooting",
  description:
    "Fix common Trove problems: generations failing, credits not updating, login issues, artifacts not saving, and mobile quirks.",
};

export default function Page() {
  return (
    <DocsShell active="/troubleshooting" title="Troubleshooting">
      <p>
        Quick fixes for the most common problems. Still stuck? Email{" "}
        <a href="mailto:official@troveai.site?subject=Trove%20support">
          official@troveai.site
        </a>{" "}
        with the page you were on, what you clicked, and what happened.
      </p>

      <h2>Something isn't working</h2>
      <ul>
        <li>Refresh once, then retry the action</li>
        <li>Note the page you were on and the exact step that failed</li>
        <li>Check your credit balance — empty allowances stop generations with an "out of credits" notice</li>
      </ul>

      <h2>Out of credits unexpectedly</h2>
      <ul>
        <li>
          Check <Link href="/credits">Credits &amp; plans</Link> — you may have
          hit the 5-hour rolling window rather than the monthly pool
        </li>
        <li>Long research runs and website generations use more credits than short replies</li>
      </ul>

      <h2>Payment succeeded but plan didn't update</h2>
      <ul>
        <li>Wait a minute and refresh — webhook delivery can lag</li>
        <li>Contact support with the payment time and email on the account</li>
      </ul>

      <h2>Artifact didn't save</h2>
      <ul>
        <li>Check the Files panel — the artifact may have saved under a different chat</li>
        <li>Ask the Tro to save it again by name</li>
      </ul>

      <h2>Login / onboarding issues</h2>
      <ul>
        <li>Use the same sign-in method you registered with (Google vs email)</li>
        <li>Profile, theme, and preferences live in Settings</li>
      </ul>

      <h2>Mobile quirks</h2>
      <ul>
        <li>The chat page works best signed in — prompts need an account to build and save</li>
        <li>If the composer misbehaves, close and reopen the tab</li>
      </ul>

      <p>
        Related: <Link href="/help">Help center</Link> ·{" "}
        <Link href="/credits">Credits &amp; plans</Link>
      </p>
    </DocsShell>
  );
}
