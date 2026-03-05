import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HG-PROM | Fasadni sistemi i stiropor Živinice",
  description:
    "Profesionalna fasadna ugradnja, stiropor izolacija i fasadni sistemi. Baumit, Rofix, Ceresit partner. Živinice.",
  keywords: [
    "fasadni sistemi",
    "stiropor",
    "fasadna izolacija",
    "termička izolacija",
    "Živinice",
    "Baumit",
    "Rofix",
    "Ceresit",
    "HG-PROM",
  ],
  openGraph: {
    title: "HG-PROM | Fasadni sistemi i stiropor Živinice",
    description:
      "Profesionalna fasadna ugradnja, stiropor izolacija i fasadni sistemi. Baumit, Rofix, Ceresit partner. Živinice.",
    locale: "bs_BA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
