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
  title: "BitHacks UCI 2027",
  description:
    "BitHacks is UCI's Embedded Systems hackathon: 36 hours of building hardware projects, April 9-11 at the Doheny Beach Student Center.",
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
        {/* MLH badge link disabled until the new MLH season is confirmed.
            Re-add href / target / rel (and update the season in the URL + image) then. */}
        <div
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
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"
            alt="Major League Hacking Trust Badge"
          />
        </div>

      </body>
    </html>
  );
}
