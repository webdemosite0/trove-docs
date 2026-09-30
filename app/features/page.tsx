import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Features" };

export default function Page() {
  return (
    <DocsShell active="/features" title="Features">
      <p>
        Trove is a full AI workspace — chat, specialist Tros, websites, documents, sheets, decks, and team runs under one account.
      </p>
      <h2>Chat</h2>
      <p>Streaming replies, attachments, image generation, and long-form reasoning. <Link href="/chat">Learn more</Link></p>
      <h2>Tros</h2>
      <p>Named specialists with briefs, tools, splashies, and optional cloud computer. <Link href="/tros">Learn more</Link></p>
      <h2>Sites</h2>
      <p>Plan and generate multi-page websites with live preview. <Link href="/sites">Learn more</Link></p>
      <h2>Workspace</h2>
      <p>Documents, spreadsheets, presentations, design, and projects. <Link href="/workspace">Learn more</Link></p>
      <h2>Team</h2>
      <p>Multi-role runs across architecture, design, engineering, and QA. <Link href="/team">Learn more</Link></p>
      <h2>Credits</h2>
      <p>Transparent usage across tools and plans. <Link href="/credits">Learn more</Link></p>
    </DocsShell>
  );
}
