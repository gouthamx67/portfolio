import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Goutham | Full-Stack Developer & Applied AI Engineer",
  description: "Portfolio of Goutham — full-stack developer (MERN, TypeScript, Next.js, NestJS) building RAG pipelines, LLM fine-tuning, and agentic AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {children}
      </body>
    </html>
  );
}
