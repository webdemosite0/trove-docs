import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Features",
  description: "Everything Trove can create: chat, specialist Tros, websites, documents, spreadsheets, decks, team runs, and workspace tools.",
};

export default function Page() {
  return (
    <DocsShell active="/features" title="Features">
      <p>
        Trove is a full AI workspace — chat, specialist Tros, websites, documents,
        spreadsheets, decks, team runs, and referrals under one account.
      </p>

      <h2>Chat</h2>
      <p>
        Streaming replies, attachments, image generation, and long-form reasoning.{" "}
        <Link href="/chat">Learn more</Link>
      </p>

      <h2>Tros</h2>
      <p>
        Named specialists with briefs, tools, splashies, and optional cloud computer.{" "}
        <Link href="/tros">Learn more</Link>
      </p>

      <h2>Sites</h2>
      <p>
        Plan and generate multi-page websites with live preview.{" "}
        <Link href="/sites">Learn more</Link>
      </p>

      <h2>Workspace</h2>
      <p>
        Documents, spreadsheets, presentations, design, and projects.{" "}
        <Link href="/workspace">Learn more</Link>
      </p>

      <h2>Team</h2>
      <p>
        Shared projects, members, invitations, and multi-role runs.{" "}
        <Link href="/team">Learn more</Link>
      </p>

      <h2>Credits &amp; plans</h2>
      <p>
        Transparent usage across tools. <Link href="/credits">Learn more</Link>
      </p>

      <h2>Refer &amp; earn</h2>
      <p>
        Share your invite link and earn when referrals qualify.{" "}
        <Link href="/refer">Learn more</Link>
      </p>

      <h2>Security</h2>
      <p>
        Account hygiene and workspace data basics. <Link href="/security">Learn more</Link>
      </p>
    </DocsShell>
  );
}
