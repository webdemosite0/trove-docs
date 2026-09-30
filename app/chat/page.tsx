import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Chat" };

export default function Page() {
  return (
    <DocsShell active="/chat">
      <h1>Chat</h1>
      <p>
        Chat is the open workspace for thinking with Trove — research, drafting,
        debugging, brainstorming, and multimodal prompts.
      </p>

      <h2>What you can do</h2>
      <ul>
        <li>Streamed answers with markdown, code, and structure</li>
        <li>Attach files for grounded responses</li>
        <li>Generate images when the prompt is clearly visual</li>
        <li>Jump back into earlier threads from Recents</li>
      </ul>

      <h2>Best practices</h2>
      <ul>
        <li>State the goal, audience, and constraints up front</li>
        <li>Iterate: refine the last answer instead of restarting from zero</li>
        <li>Use Tros when the same role should stay fixed across days</li>
      </ul>

      <div className="callout">
        Open chat at{" "}
        <a href="https://troveai.site/chat" target="_blank" rel="noreferrer">
          troveai.site/chat
        </a>
        .
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/tros">Tros</Link> · <Link href="/credits">Credits</Link>
      </p>
    </DocsShell>
  );
}
