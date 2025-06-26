import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { DM_Sans, DM_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import "@/styles/base.css";

const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-regular",
  display: "swap",
  weight: "400",
});

const monoFont = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Moon Design System - Template",
  metadataBase: new URL("https://moon.io/"),
  description:
    "Moon is a complete design system built to help product teams across the world build better digital experiences. Whether you're a designer or a developer, this documentation includes all the necessary resources you'll need to start building your next great idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <meta property="og:title" content="Moon Design System" />
        <meta
          property="og:description"
          content="Moon is an open-source design system built for fast, scalable digital experiences."
        />
        <meta
          property="og:image"
          content="https://moondocs.vercel.app/og-image.png"
        />
        <meta property="og:url" content="https://moondocs.vercel.app/" />
      </head>

      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
