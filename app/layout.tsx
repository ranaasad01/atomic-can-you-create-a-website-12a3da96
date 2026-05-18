import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nexus — Digital Agency",
    template: "%s | Nexus",
  },
  description:
    "Nexus is a world-class digital agency specializing in web development, UI/UX design, cloud solutions, and AI integration. We build products that scale.",
  keywords: ["digital agency", "web development", "UI/UX design", "Next.js", "SaaS", "cloud"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexus.io",
    siteName: "Nexus",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
