import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = { title: "Workspace" };

export default function Page() {
  return (
    <DocsShell active="/workspace">
      <h1>Workspace tools</h1>
      <p>
        Beyond chat and Tros, Trove includes production tools for documents,
        spreadsheets, presentations, design, and projects — all inside the same shell.
      </p>

      <h2>Documents</h2>
      <p>
        Long-form writing with AI assistance. Use for briefs, specs, proposals, and
        narratives that need structure and revision.
      </p>

      <h2>Spreadsheets</h2>
      <p>
        Tables and analysis when the answer is data-shaped — plans, trackers, simple
        models.
      </p>

      <h2>Decks</h2>
      <p>
        Presentation flows for pitches and reviews. Prefer clear slide jobs over dumping
        entire reports onto slides.
      </p>

      <h2>Design</h2>
      <p>
        Visual exploration and mock-oriented workflows when the output is primarily
        visual rather than textual.
      </p>

      <h2>Projects</h2>
      <p>
        Group related work so recents and context stay organized across tools.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Sidebar</th>
              <th>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Documents</td>
              <td>Docs</td>
              <td>Specs, memos, long writing</td>
            </tr>
            <tr>
              <td>Spreadsheets</td>
              <td>Sheets</td>
              <td>Tables, trackers</td>
            </tr>
            <tr>
              <td>Presentations</td>
              <td>Decks</td>
              <td>Pitches, reviews</td>
            </tr>
            <tr>
              <td>Design</td>
              <td>Design</td>
              <td>Visual concepts</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>Projects</td>
              <td>Grouping related work</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Related</h2>
      <p>
        <Link href="/sites">Sites</Link> · <Link href="/features">Features</Link>
      </p>
    </DocsShell>
  );
}
