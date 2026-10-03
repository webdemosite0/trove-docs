import type { Metadata } from "next";
import Link from "next/link";
import { DocsShell } from "@/components/docs-shell";

export const metadata: Metadata = {
  title: "Exports",
  description:
    "Export formats in Trove: Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Markdown, CSV, HTML, and plain text — what survives each format and known limitations.",
};

export default function Page() {
  return (
    <DocsShell active="/exports" title="Exports">
      <p>
        Everything Trove makes can leave Trove. Formats depend on where the file
        was created.
      </p>

      <h2>Studio files</h2>
      <ul>
        <li>
          <strong>Documents</strong> → Word (.docx) or Markdown (.md)
        </li>
        <li>
          <strong>Spreadsheets</strong> → Excel (.xlsx) or CSV (.csv)
        </li>
        <li>
          <strong>Decks</strong> → PowerPoint (.pptx) or Markdown (.md)
        </li>
      </ul>

      <h2>Tro artifacts</h2>
      <ul>
        <li>
          <strong>Websites</strong> → HTML (.html), a single self-contained file
        </li>
        <li>
          <strong>Documents, spreadsheets, decks, notes</strong> → Markdown (.md)
        </li>
        <li>
          <strong>Code</strong> → plain text (.txt)
        </li>
      </ul>

      <h2>What survives</h2>
      <ul>
        <li>
          Headings, lists, tables, bold/italic, and links carry over into
          .docx, .xlsx, and .pptx.
        </li>
        <li>
          Spreadsheet formulas export as values in .xlsx unless the sheet was
          built with live formulas — check the file after download for anything
          calculation-critical.
        </li>
        <li>
          Website .html files are self-contained: open in any browser, host
          anywhere.
        </li>
      </ul>

      <h2>Known limitations</h2>
      <ul>
        <li>
          Tro artifact downloads are Markdown, not native Office files — open
          the artifact in Studio first if you need .docx/.xlsx/.pptx.
        </li>
        <li>
          Complex deck layouts (overlapping elements, custom animations) may
          simplify on .pptx export.
        </li>
        <li>
          Embedded images reference their hosted URLs; downloading the file
          doesn't bundle the images.
        </li>
      </ul>

      <p>
        Related: <Link href="/publishing">Publishing</Link> ·{" "}
        <Link href="/getting-started">Quickstart</Link>
      </p>
    </DocsShell>
  );
}
