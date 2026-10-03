import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Team runs",
  description: "Run multiple Tros together and collaborate in shared projects: members, invitations, roles, and the shared Team credit pool.",
};

export default function Page() {
  return (
    <DocsShell active="/team" title="Team runs">
      <p>
        Team brings collaboration into Trove: shared projects, members, invitations,
        and multi-role runs when your plan includes team features.
      </p>

      <h2>Shared work</h2>
      <p>
        Team projects appear under <strong>Shared work</strong> on the Team page.
        Open a project to continue drafts started by you or a teammate.
      </p>

      <h2>People</h2>
      <ul>
        <li>See owners and members on <strong>Your team</strong></li>
        <li>Invite people from <strong>Members &amp; invitations</strong></li>
        <li>Only grant access to people you trust with workspace content</li>
      </ul>

      <h2>Multi-role runs</h2>
      <p>
        Some Team flows run specialist roles in sequence (for example architecture,
        design, engineering, QA) so one brief gets structured coverage from different
        angles.
      </p>

      <h2>Open Team</h2>
      <p>
        <a href="https://troveai.site/team" target="_blank" rel="noreferrer">
          troveai.site/team
        </a>
        {" "}— available when your account has team access.
      </p>

      <p>
        Related: <Link href="/tros">Tros</Link> · <Link href="/features">Features</Link> ·{" "}
        <Link href="/refer">Refer &amp; earn</Link>
      </p>
    </DocsShell>
  );
}
