import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Security" };

export default function Page() {
  return (
    <DocsShell active="/security">
      <h1>Security & privacy basics</h1>
      <p>
        This page summarizes practical security guidance for Trove users. It is not a
        legal policy — check in-app legal pages for formal terms and privacy notices.
      </p>

      <h2>Account</h2>
      <ul>
        <li>Use a strong, unique password and keep recovery email current</li>
        <li>Sign out on shared devices</li>
        <li>Only grant team access to people you trust</li>
      </ul>

      <h2>Workspace data</h2>
      <ul>
        <li>Treat chats and uploads as sensitive if they contain private material</li>
        <li>Avoid pasting secrets (API keys, credentials) into prompts</li>
        <li>Delete Tros or projects you no longer need</li>
      </ul>

      <h2>Cloud computer (Tros)</h2>
      <p>
        Browser sessions run in isolated cloud infrastructure when configured. Prefer
        non-production accounts when testing logins or third-party tools inside the
        remote browser.
      </p>

      <h2>Support</h2>
      <p>
        Use in-app support under Settings when you need help with account access or
        billing.
      </p>

      <h2>Related</h2>
      <p>
        <Link href="/credits">Credits</Link> · <Link href="/getting-started">Getting started</Link>
      </p>
    </DocsShell>
  );
}
