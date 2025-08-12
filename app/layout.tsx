import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chukwu Sabastine | Nextjs Full stack developer",
  description:
    "Tech Enthusiast turned Software Engineer. I love building things and helping people. Very active on Twitter.",
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
        <div className="">{children}</div>
        <DotPattern
          className="-z-10"
          // className={cn(
          //   "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          // )}
        />
      </body>
    </html>
  );
}
