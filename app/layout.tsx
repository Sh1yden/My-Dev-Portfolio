import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shayden",
  description:
    "Portfolio of Kirill (Shayden & Sh1yden) — Python Backend Developer. High-performance async APIs, database optimization, network tunnels, and clean production-ready code.",
  generator: "Next.js",
  keywords: [
    "Python",
    "FastAPI",
    "Backend Developer",
    "PostgreSQL",
    "asyncio",
    "Cloudflare",
  ],
  authors: [{ name: "Kirill (Shayden & Sh1yden)" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1F1F28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
