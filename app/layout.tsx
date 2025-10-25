import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/magicui/dot-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Strong SEO Metadata
export const metadata: Metadata = {
  title: "Chukwu Ajah Sabastine | Frontend Developer & Next.js Engineer",
  description:
    "Portfolio of Chukwu Ajah Sabastine, a frontend developer specializing in Next.js, React, and modern web technologies. I build fast, responsive, and user-friendly web applications.",
  keywords: [
    "Chukwu Ajah Sabastine",
    "Sabastine Ajah",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Engineer",
    "Web Developer Portfolio",
    "UI Engineer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Chukwu Ajah Sabastine" }],
  creator: "Chukwu Ajah Sabastine",
  openGraph: {
    title: "Chukwu Ajah Sabastine | Frontend Developer",
    description:
      "I create sleek, responsive interfaces that boost conversion rates, strengthen customer trust, and help businesses scale faster.",
    url: "https://chukwusabastine.vercel.app",
    siteName: "Sabastine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwu Ajah Sabastine | Frontend Developer",
    description:
      "Frontend developer skilled in Next.js, React, and modern web development. Check out my portfolio.",
    creator: "@ChukwuAjahsaba",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://chukwusabastine.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-full w-full`}
      >
        <main>{children}</main>
        <DotPattern className="-z-10" />
      </body>
    </html>
  );
}
