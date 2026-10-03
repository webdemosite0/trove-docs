import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Help center",
  description: "Answers to the most common Trove questions: getting started, credits and plans, Tros, account and security, troubleshooting, and contacting support.",
};

export default function Page() {
  return (
    <DocsShell
      active="/help"
      title="Help center"
      lead="Answers to the most common Trove questions. Still stuck? Contact support below."
      primaryCta={{ href: "/getting-started", label: "Quickstart" }}
      secondaryCta={{ href: "/features", label: "Explore features" }}
    >
      <h2>Getting started</h2>
      <p>
        Start with a goal, idea, or task in the chat box. Trove can gather context, take action, and produce
        something useful — documents, spreadsheets, decks, websites, research, or a Tro running a job for you.
      </p>
      <ul>
        <li><Link href="/getting-started">Quickstart</Link> — your first build in minutes</li>
        <li><Link href="/overview">Overview</Link> — what Trove is and how it fits together</li>
        <li><Link href="/chat">Chat</Link> — conversations, attachments, and voice input</li>
      </ul>

      <h2>Credits & plans</h2>
      <p>
        One credit = 1,000 real tokens reported by the provider, debited after usage. The free plan includes
        200 credits, Pro includes 5,000, and Team includes 20,000.
      </p>
      <ul>
        <li><Link href="/credits">Credits</Link> — how usage is measured and what plans include</li>
        <li>Check your remaining balance anytime in the Wallet section of settings</li>
        <li>If a payment succeeded but your plan did not update, contact support with the payment time</li>
      </ul>

      <h2>Tros</h2>
      <p>
        Tros are specialist AI agents you hire for a job — planning, research, writing, building, data, design,
        operations, engineering, analysis, or communication. Give a Tro a task and it works in the background,
        saving real artifacts (documents, sheets, decks, notes, code) to your library.
      </p>
      <ul>
        <li><Link href="/tros">Meet Tros</Link> — hiring a Tro and what each role does</li>
        <li><Link href="/team">Team runs</Link> — running multiple Tros together</li>
        <li><Link href="/features">Features</Link> — everything Trove can create</li>
      </ul>

      <h2>Account & security</h2>
      <ul>
        <li>Use a strong, unique password and keep your recovery email current</li>
        <li>Sign out on shared devices; only grant team access to people you trust</li>
        <li>Never paste API keys or credentials into prompts or chat</li>
        <li><Link href="/security">Security</Link> — practical guidance for using Trove safely</li>
      </ul>

      <h2>Troubleshooting</h2>
      <ul>
        <li>Something is not working? Refresh once, retry the action, then note the page you were on and what you clicked</li>
        <li>Onboarding or profile issues? Check settings — your profile, theme, and preferences live there</li>
        <li>Mobile: the chat page works best signed in; prompts need an account to build and save</li>
        <li><Link href="/troubleshooting">Full troubleshooting guide</Link></li>
      </ul>

      <h2>Contact support</h2>
      <p>
        Email{" "}
        <a href="mailto:official@troveai.site?subject=Trove%20support">official@troveai.site</a>{" "}
        with the page you were on, what you clicked, and what happened. We never ask for your password or API keys.
      </p>
      <p>
        Related: <Link href="/getting-started">Quickstart</Link> · <Link href="/credits">Credits</Link> ·{" "}
        <Link href="/security">Security</Link>
      </p>
    </DocsShell>
  );
}
