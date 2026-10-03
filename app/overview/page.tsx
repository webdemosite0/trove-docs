import type { Metadata } from "next";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "What Trove is: describe the work in chat and get finished files — websites, Word documents, Excel spreadsheets, PowerPoint decks, research briefs — plus specialist AI agents called Tros.",
};

export default function Page() {
  return (
    <DocsShell
      active="/overview"
      title="Overview"
      lead="Describe the work, get the files. You chat; Trove produces finished work: websites, Word documents, Excel spreadsheets, PowerPoint decks, and research briefs — plus specialist AI agents (Tros) that run bigger jobs for you."
      primaryCta={{ href: "/getting-started", label: "Quickstart" }}
      secondaryCta={{ href: "/features", label: "Explore features" }}
      showMock
    />
  );
}
