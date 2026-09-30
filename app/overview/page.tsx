import type { Metadata } from "next";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Overview" };

export default function Page() {
  return (
    <DocsShell
      active="/overview"
      title="Overview"
      lead="Start with a goal, idea, or task. Trove can gather context, take action, and produce something useful — chat, Tros, sites, and workspace tools in one place."
      primaryCta={{ href: "/getting-started", label: "Quickstart" }}
      secondaryCta={{ href: "/features", label: "Explore features" }}
      showMock
    />
  );
}
