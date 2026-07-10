import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mayuresh Tardekar | Software Engineer",
  description:
    "Full-Stack Developer passionate about building scalable web applications, blockchain, and AI. MCA student at SPIT Mumbai.",
  keywords: [
    "Mayuresh Tardekar",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Mayuresh Tardekar" }],
  openGraph: {
    title: "Mayuresh Tardekar | Software Engineer",
    description:
      "Full-Stack Developer passionate about building scalable web applications, blockchain, and AI.",
    url: siteUrl,
    siteName: "Mayuresh Tardekar",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mayuresh Tardekar portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayuresh Tardekar | Software Engineer",
    description:
      "Full-Stack Developer passionate about scalable web applications, blockchain, and AI.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
