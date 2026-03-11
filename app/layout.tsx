import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AISC Growth OS | AI SEO + Marketing for Steel Contractors",
  description: "AI growth engine for AISC fabricators and general contractors. Automate SEO, content, lead capture, and reporting.",
  metadataBase: new URL("https://aiscgrowthos.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
