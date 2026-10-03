import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Trove protects your data: where it's stored, which model providers see it, training use, retention, deletion, and how to report a security issue.",
};

export default function Page() {
  return (
    <DocsShell active="/security" title="Security">
      <p>
        How Trove handles your data — where it lives, who can see it, and how to
        remove it. Only what's true today; if something isn't listed here, assume
        we haven't made that guarantee yet.
      </p>

      <h2>Where your data is stored</h2>
      <p>
        Your account, chats, Tros, projects, artifacts, and uploads are stored in
        Trove's database (hosted SQLite via Turso). Published websites are served
        from Trove's hosting. There is no self-hosting option today.
      </p>

      <h2>Which model providers see your prompts</h2>
      <p>
        To generate replies, your prompts and relevant context are sent to the
        model providers Trove uses (currently Apertis and OpenRouter, serving
        models including Gemma). Providers process your input to produce output;
        their own data-handling terms apply to that processing.
      </p>

      <h2>Training use</h2>
      <p>
        Trove does not sell your data. We don't make broad claims about provider
        training policies here — check the provider's own terms if that matters
        for your use case, and avoid pasting anything you couldn't share with a
        third-party processor.
      </p>

      <h2>Your account hygiene</h2>
      <ul>
        <li>Use a strong, unique password and keep your recovery email current</li>
        <li>Sign out on shared devices</li>
        <li>Only grant team access to people you trust</li>
        <li>Never paste API keys or credentials into prompts or chat</li>
      </ul>

      <h2>Cloud computer</h2>
      <p>
        A Tro's cloud computer is a remote browser session it drives on your
        behalf — for research, booking flows, and interacting with websites.
        Here's what that does and doesn't protect:
      </p>
      <ul>
        <li>
          Sessions run on Trove's infrastructure, not on your device — sites see
          the cloud browser's network identity, not yours.
        </li>
        <li>
          We don't guarantee isolation between your sessions and other users'
          sessions at the network level today. Treat the cloud browser as a
          shared-resource convenience, not a hardened sandbox.
        </li>
        <li>
          Anything the Tro types or submits in the browser — logins, forms,
          payment details — is visible to the Tro and passes through Trove's
          servers. Use test or non-production accounts for third-party logins,
          and never enter credentials you wouldn't hand to a contractor.
        </li>
        <li>
          The Tro asks for your explicit confirmation before consequential
          actions (purchases, bookings, submissions).
        </li>
      </ul>

      <h2>Retention and deletion</h2>
      <ul>
        <li>
          Chats, artifacts, and uploads persist until you delete them — use the
          in-app delete controls on the item.
        </li>
        <li>
          Deleting your account removes your workspace data. If you need a full
          export or deletion handled manually, contact us below.
        </li>
      </ul>

      <h2>Report a security issue</h2>
      <p>
        Email{" "}
        <a href="mailto:official@troveai.site?subject=Security%20report">
          official@troveai.site
        </a>{" "}
        with "Security report" in the subject. Include what you found and how to
        reproduce it; please don't probe other users' data.
      </p>

      <p>
        Related: <Link href="/credits">Credits &amp; plans</Link> ·{" "}
        <Link href="/getting-started">Quickstart</Link>
      </p>
    </DocsShell>
  );
}
