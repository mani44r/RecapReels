import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RecapReels | Professional Short-Form Video Content for Businesses",
  description: "Premium short-form video content services for brands, startups, agencies, and businesses. Professional reels, event highlights, and social media content that drives growth.",
  keywords: "short-form video, business video content, social media reels, event videos, B2B video production",
  authors: [
    { name: "RecapReels", url: "https://recapreels.in" },
    { name: "Amaram Rushi Vivek", url: "https://rushivivek.github.io/" },
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: { url: '/icon.png', sizes: '180x180', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Preloader />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
