import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tros" };

export default function TrosPage() {
  return (
    <>
      <h1>Tros</h1>
      <p>
        Tros are specialists inside Trove. Each one has a name, role, instructions,
        tools, accent color, and a unique splashy mascot.
      </p>

      <h2>When to use a Tro</h2>
      <ul>
        <li>Repeated work with a stable brief (research, support, writing)</li>
        <li>Team-style handoffs where roles stay separate</li>
        <li>Tasks that may need the cloud computer (open a URL and work on the page)</li>
      </ul>

      <h2>Create a Tro</h2>
      <ol>
        <li>Go to <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">troveai.site/tros</a></li>
        <li>Click <strong>New Tro</strong></li>
        <li>Set name, role, instructions, tools, and accent</li>
        <li>Open the workspace and send a task</li>
      </ol>

      <h2>Workspace layout</h2>
      <ul>
        <li><strong>Chat</strong> on the left — brief the Tro and read replies</li>
        <li><strong>Computer + Tasks</strong> on the right — live activity and browser session</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Write instructions as if you were onboarding a new teammate</li>
        <li>Paste a URL in chat to open it on the cloud computer (when configured)</li>
        <li>Keep one Tro per job instead of overloading a single generalist</li>
      </ul>
    </>
  );
}
