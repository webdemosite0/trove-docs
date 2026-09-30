import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <>
      <h1>Getting started</h1>
      <p>A short path from zero to your first useful result in Trove.</p>

      <h2>1. Create an account</h2>
      <p>
        Open{" "}
        <a href="https://troveai.site/login" target="_blank" rel="noreferrer">
          troveai.site/login
        </a>{" "}
        and sign in. Finish onboarding so your plan and workspace are ready.
      </p>

      <h2>2. Start a chat</h2>
      <p>
        From the sidebar, choose <strong>Chat</strong> or <strong>New chat</strong>.
        Ask a clear question or paste a brief. You can attach files when you need
        context from a document.
      </p>

      <h2>3. Try a Tro</h2>
      <p>
        Open{" "}
        <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">
          Tros
        </a>
        , create a specialist with a role and instructions, then give it a task.
        Each Tro keeps its own brief so repeat work stays consistent.
      </p>

      <h2>4. Watch credits</h2>
      <p>
        Heavy actions use credits from your plan. See the{" "}
        <a href="/credits">Credits</a> page for the basics.
      </p>
    </>
  );
}
