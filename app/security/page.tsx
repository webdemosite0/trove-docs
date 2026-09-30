import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Security" };

export default function Page() {
  return (
    <DocsShell active="/security" title="Security">
      <p>
        Practical guidance for using Trove safely. Check in-app legal pages for formal terms and privacy policy.
      </p>
      <h2>Account</h2>
      <ul>
        <li>Strong unique password; keep recovery email current</li>
        <li>Sign out on shared devices</li>
        <li>Only grant team access to people you trust</li>
      </ul>
      <h2>Workspace data</h2>
      <ul>
        <li>Treat chats and uploads as sensitive when needed</li>
        <li>Never paste API keys or credentials into prompts</li>
        <li>Remove Tros and projects you no longer need</li>
      </ul>
      <h2>Cloud computer</h2>
      <p>
        Remote browser sessions are isolated when configured. Prefer non-production accounts for testing third-party logins.
      </p>
      <p>
        Related: <Link href="/credits">Credits</Link> · <Link href="/getting-started">Quickstart</Link>
      </p>
    </DocsShell>
  );
}
