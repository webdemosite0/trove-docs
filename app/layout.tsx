import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trove Docs",
    template: "%s · Trove Docs",
  },
  description:
    "Official documentation for Trove — AI chat, Tros specialists, websites, documents, sheets, decks, and team workflows.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Trove Docs",
    description: "Learn Trove: chat, Tros, sites, workspace tools, and credits.",
    url: "https://docs.troveai.site",
    siteName: "Trove Docs",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
