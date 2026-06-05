import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Alejo | AI/ML Engineer",
  description: "AI/ML Engineer specializing in agentic AI, RAG systems, multi-agent workflows, and predictive ML. Building practical, scalable AI solutions with Python, LangChain, LangGraph, Pydantic AI, Groq, and FastAPI.",
  keywords: ["AI Engineer", "ML Engineer", "RAG", "LangChain", "LangGraph", "Pydantic AI", "Groq", "Python", "FastAPI", "Agentic AI", "AI Agents", "Machine Learning", "Multi-Agent Workflows"],
  authors: [{ name: "Michael Alejo" }],
  creator: "Michael Alejo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://micheal-alejo.vercel.app",
    title: "Michael Alejo | AI/ML Engineer",
    description: "AI/ML Engineer specializing in agentic AI, RAG systems, and multi-agent workflows. Building practical, scalable AI solutions.",
    siteName: "Michael Alejo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Alejo | AI/ML Engineer",
    description: "AI/ML Engineer specializing in agentic AI, RAG systems, and multi-agent workflows.",
  },
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
