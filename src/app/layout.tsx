import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import classNames from "classnames";
import type { Metadata } from "next";
import "./globals.css";

import { SidebarWrapper } from "@/components/sidebar/SideBar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NextJs 15",
  description: "Nextjs 15 starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />
        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />
        <meta name="description" content="Nextjs 14 starter template" />
        <meta property="og:description" content="Nextjs 14 starter template" />
        <meta name="twitter:description" content="Nextjs 14 starter template" />
        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames("antialiased", {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <Providers>
          <div className="flex h-screen">
            <SidebarWrapper />
            <div className="flex flex-1 flex-col">
              <Navbar />
              <main className="flex-1 overflow-y-auto p-4">{children}</main>
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
