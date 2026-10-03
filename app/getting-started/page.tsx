import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Quickstart",
  description:
    "Your first Trove build in minutes: sign up, paste a brief, watch the file appear, refine it in chat, then download or publish it.",
};

const SAMPLE_BRIEF = `Landing page for "Ember & Oak", a small-batch coffee roastery in Karachi.

Sections: hero with headline and CTA, three featured roasts with prices, our story, wholesale enquiry form.
Style: warm, premium, dark. Include a menu of 6 drinks with prices.`;

export default function Page() {
  return (
    <DocsShell active="/getting-started" title="Quickstart">
      <p>
        Describe the work, get the files. Here's your first build, start to
        finish, in about five minutes.
      </p>

      <h2>1. Create your account</h2>
      <p>
        <a href="https://troveai.site/signup" target="_blank" rel="noreferrer">
          Sign up
        </a>{" "}
        and finish the short onboarding so your plan and workspace are ready.
      </p>

      <h2>2. Paste a brief</h2>
      <p>
        Open{" "}
        <a href="https://troveai.site/chat" target="_blank" rel="noreferrer">
          chat
        </a>{" "}
        and paste something like this (copy it, or write your own):
      </p>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "var(--raised, #f4f4f5)",
          border: "1px solid var(--line, #e4e4e7)",
          borderRadius: 12,
          padding: 16,
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        {SAMPLE_BRIEF}
      </pre>

      <h2>3. Watch the file appear</h2>
      <p>
        Trove builds a real website artifact — not a mockup. It opens in the
        Files panel with a live preview the moment it's saved.
      </p>

      <h2>4. Refine it in chat</h2>
      <p>
        Reply with changes in plain language: <em>"make the hero taller"</em>,{" "}
        <em>"add a testimonials section"</em>, <em>"use a serif headline"</em>.
        Each revision updates the same file.
      </p>

      <h2>5. Download or publish</h2>
      <p>
        Download the <code>.html</code> file to keep it, or publish it to a live
        Trove subdomain. See <Link href="/publishing">Publishing</Link> and{" "}
        <Link href="/exports">Exports</Link> for details.
      </p>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/chat">Chat</Link> — conversations, attachments, and voice
          input
        </li>
        <li>
          <Link href="/tros">Tros</Link> — hire a specialist agent for bigger jobs
        </li>
        <li>
          <Link href="/credits">Credits &amp; plans</Link> — what usage costs
        </li>
      </ul>
    </DocsShell>
  );
}
