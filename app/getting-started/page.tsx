import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Getting started" };

export default function Page() {
  return (
    <DocsShell active="/getting-started">
      <h1>Getting started</h1>
      <p>
        Go from zero to a useful result in Trove in a few minutes. You need a
        browser and an account at{" "}
        <a href="https://troveai.site" target="_blank" rel="noreferrer">
          troveai.site
        </a>
        .
      </p>

      <ol className="steps">
        <li>
          <strong>Create your account</strong>
          <p>
            Open{" "}
            <a href="https://troveai.site/login" target="_blank" rel="noreferrer">
              troveai.site/login
            </a>{" "}
            and sign in. Complete onboarding so your plan, profile, and workspace
            preferences are set.
          </p>
        </li>
        <li>
          <strong>Run your first chat</strong>
          <p>
            Click <strong>New chat</strong> in the sidebar. Ask a clear question or
            paste a brief. Attach files when the answer depends on a doc or image.
          </p>
        </li>
        <li>
          <strong>Create a Tro</strong>
          <p>
            Open{" "}
            <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">
              Tros
            </a>
            , choose <strong>New Tro</strong>, and give it a role plus instructions.
            Specialists stay consistent across sessions.
          </p>
        </li>
        <li>
          <strong>Try a site or document</strong>
          <p>
            From <strong>Sites</strong> describe a product and let Trove plan the
            build. Or open Docs / Sheets / Decks for structured work products.
          </p>
        </li>
        <li>
          <strong>Watch credits</strong>
          <p>
            Usage draws from your plan. See <Link href="/credits">Credits</Link> for
            how the pool works and when to upgrade.
          </p>
        </li>
      </ol>

      <div className="callout">
        <strong>Tip:</strong> Start with one clear outcome (“outline a landing page
        for X”) instead of a vague prompt. Trove performs best with a defined job.
      </div>

      <h2>Where things live</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Surface</th>
              <th>Path</th>
              <th>Use for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chat</td>
              <td><code>/chat</code></td>
              <td>Open-ended work and research</td>
            </tr>
            <tr>
              <td>Tros</td>
              <td><code>/tros</code></td>
              <td>Specialists with fixed briefs</td>
            </tr>
            <tr>
              <td>Sites</td>
              <td><code>/websites</code></td>
              <td>Full website builds</td>
            </tr>
            <tr>
              <td>Docs / Sheets / Decks</td>
              <td><code>/documents</code> …</td>
              <td>Structured artifacts</td>
            </tr>
            <tr>
              <td>Team</td>
              <td><code>/team</code></td>
              <td>Multi-role collaborative runs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Next</h2>
      <p>
        Read <Link href="/features">Features</Link> for the full map, or jump to{" "}
        <Link href="/tros">Tros</Link> if specialists are your priority.
      </p>
    </DocsShell>
  );
}
