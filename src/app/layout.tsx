import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Providers } from "@/components/portfolio/providers";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shayden — Python Backend Developer",
  description:
    "Персональное портфолио Кирилла (Shayden). Python backend-разработка, асинхронные API, Telegram-боты, микросервисы.",
  keywords: [
    "Python",
    "Backend",
    "FastAPI",
    "Django",
    "Telegram бот",
    "портфолио",
    "Shayden",
    "Sh1yden",
  ],
  authors: [{ name: "Kirill (Shayden)" }],
  openGraph: {
    title: "Shayden — Python Backend Developer",
    description: "Персональное портфолио Кирилла (Shayden). Python backend-разработка.",
    url: "https://shayden.ru",
    siteName: "shayden.ru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={`${jetbrains.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}