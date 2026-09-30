import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Quickstart" };

export default function Page() {
  return (
    <DocsShell active="/getting-started" title="Quickstart">
      <p>
        Go from zero to a useful result in Trove in a few minutes. Open{" "}
        <a href="https://troveai.site" target="_blank" rel="noreferrer">troveai.site</a>
        {" "}and sign in.
      </p>
      <h2>1. Create your account</h2>
      <p>
        Use{" "}
        <a href="https://troveai.site/login" target="_blank" rel="noreferrer">login</a>
        {" "}and finish onboarding so your plan and workspace are ready.
      </p>
      <h2>2. Start a chat</h2>
      <p>
        Click <strong>New chat</strong>. Ask a clear question or paste a brief. Attach files when you need grounded answers.
      </p>
      <h2>3. Create a Tro</h2>
      <p>
        Open{" "}
        <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">Tros</a>,
        add a specialist with role and instructions, then give it a task.
      </p>
      <h2>4. Try Sites or Docs</h2>
      <p>
        Describe a website under Sites, or open Documents, Sheets, or Decks for structured work.
      </p>
      <h2>5. Watch credits</h2>
      <p>
        Usage draws from your plan. See <Link href="/credits">Credits</Link> for details.
      </p>
    </DocsShell>
  );
}
