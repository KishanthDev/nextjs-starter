import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout/layout";
import classNames from "classnames";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextJs 15",
  description: "Nextjs 15 starter template",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
          <Footer />
        </ThemeProvider>
        
        <Analytics />
      </body>
    </html>
  );
}
