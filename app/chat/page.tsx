import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Chat" };

export default function Page() {
  return (
    <DocsShell active="/chat" title="Chat">
      <p>
        Chat is the open workspace for thinking with Trove — research, drafting, debugging, and multimodal prompts.
      </p>
      <h2>What you can do</h2>
      <ul>
        <li>Streamed answers with markdown and code</li>
        <li>Attach files for grounded responses</li>
        <li>Generate images from visual prompts</li>
        <li>Return to earlier threads from Recents</li>
      </ul>
      <h2>Tips</h2>
      <ul>
        <li>State goal, audience, and constraints up front</li>
        <li>Iterate on the last answer instead of restarting</li>
        <li>Use a <Link href="/tros">Tro</Link> when the role should stay fixed</li>
      </ul>
      <p>
        Open{" "}
        <a href="https://troveai.site/chat" target="_blank" rel="noreferrer">troveai.site/chat</a>.
      </p>
    </DocsShell>
  );
}
