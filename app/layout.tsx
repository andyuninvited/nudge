import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nudge — The CRM-less CRM for Founders",
  description:
    "Drop a note. Get a nudge. Close more deals. A dead-simple Gmail sidebar that reminds you to follow up — no CRM required.",
  openGraph: {
    title: "Nudge — The CRM-less CRM for Founders",
    description:
      "Drop a note. Get a nudge. Close more deals. A dead-simple Gmail sidebar that reminds you to follow up — no CRM required.",
    url: "https://nudgesidebar.com",
    siteName: "Nudge",
    type: "website",
  },
  metadataBase: new URL("https://nudgesidebar.com"),
  alternates: { canonical: "https://nudgesidebar.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
