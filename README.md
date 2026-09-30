# Trove Docs

Documentation site for [Trove](https://troveai.site).

Intended production host: **`https://docs.troveai.site`**

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **`webdemosite0/trove-docs`**
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Project → **Settings → Domains** → add `docs.troveai.site`
6. At your DNS provider, add:

| Type | Name | Value |
|------|------|--------|
| CNAME | `docs` | `cname.vercel-dns.com` |

7. Wait until the domain shows **Valid** in Vercel

## Edit content

| Page | File |
|------|------|
| Home | `app/page.tsx` |
| Getting started | `app/getting-started/page.tsx` |
| Tros | `app/tros/page.tsx` |
| Credits | `app/credits/page.tsx` |

Push to `main` to publish.
