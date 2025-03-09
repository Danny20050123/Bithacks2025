import type { Metadata } from "next";
import { Jersey_25, Rethink_Sans } from "next/font/google";
// import { Cabin } from "next/font/google";

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
        <link rel="icon" href="/ieee.svg" sizes="any" />
      </head>
      <body className={`${rethink.variable} ${jersey.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
