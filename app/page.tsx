import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Trove documentation</h1>
      <p>
        Learn how to use Trove — chat, specialist <strong>Tros</strong>, websites,
        and credits. This site is meant to live at <code>docs.troveai.site</code>.
      </p>

      <div className="card-grid">
        <Link className="card" href="/getting-started">
          <strong>Getting started</strong>
          <span>Create an account and run your first chat.</span>
        </Link>
        <Link className="card" href="/tros">
          <strong>Tros</strong>
          <span>Specialists with their own brief, tools, and splashy.</span>
        </Link>
        <Link className="card" href="/credits">
          <strong>Credits</strong>
          <span>How usage and plans work.</span>
        </Link>
      </div>

      <h2>Quick links</h2>
      <ul>
        <li>
          Product app:{" "}
          <a href="https://troveai.site" target="_blank" rel="noreferrer">
            troveai.site
          </a>
        </li>
        <li>
          Tros workspace:{" "}
          <a href="https://troveai.site/tros" target="_blank" rel="noreferrer">
            troveai.site/tros
          </a>
        </li>
      </ul>
    </>
  );
}
