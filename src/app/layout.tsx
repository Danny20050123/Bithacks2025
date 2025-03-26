import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Jersey_25, Rethink_Sans } from "next/font/google";

import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink-sans",
  weight: "400",
  subsets: ["latin"],
});

const jersey = Jersey_25({
  variable: "--font-jersey-25",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BitHacks UCI 2025",
  description: "BitHacks UCI 2025",
  icons: {
    icon: "bithacks_logo_black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/bithacks_logo_black.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body className={`${rethink.variable} ${jersey.variable} antialiased`}>
        {children}
        <Analytics />
        <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: "100px",
            minWidth: "60px",
            position: "fixed",
            right: "50px",
            top: 0,
            width: "10%",
            zIndex: 10000,
          }}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"
            alt="Major League Hacking 2025 Trust Badge"
          />
        </a>

      </body>
    </html>
  );
}
