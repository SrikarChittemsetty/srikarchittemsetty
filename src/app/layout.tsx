import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srikar Chittemsetty",
  description:
    "Software engineer at ForkLaunch and computational & applied math + philosophy student at the University of Chicago. Projects, merged open-source contributions, and a shelf of favorites.",
  openGraph: {
    title: "Srikar Chittemsetty",
    description:
      "Software engineer at ForkLaunch and computational & applied math + philosophy student at the University of Chicago. Projects, merged open-source contributions, and a shelf of favorites.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Srikar Chittemsetty",
    description:
      "Software engineer at ForkLaunch and computational & applied math + philosophy student at the University of Chicago. Projects, merged open-source contributions, and a shelf of favorites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const saved = localStorage.getItem("theme");
              const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme = saved === "light" || saved === "dark" ? saved : (systemPrefersDark ? "dark" : "light");
              document.documentElement.classList.toggle("dark", theme === "dark");
            } catch (_) {}
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
