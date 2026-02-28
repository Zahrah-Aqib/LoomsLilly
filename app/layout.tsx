import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: "LoomLilly | Pakistani Creative Marketplace",
  description: "Where Every Stitch, Stroke & Story Finds Its Audience. The creative marketplace for Pakistani artists and crafters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${inter.variable} antialiased selection:bg-hot-pink selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

