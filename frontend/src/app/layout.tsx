import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/Components/Footer";
import { ScrollToTop } from "@/Components/TopArrowButton";
import Navbar from "@/Components/Navbar";
import CursorGlow from "@/Components/CursorGlow";

export const metadata: Metadata = {
  title: "Muhammad Abrar — AI Systems Engineer",
  description: "Building agentic AI systems, RAG applications, and full-stack AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
