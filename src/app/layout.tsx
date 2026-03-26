import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@/styles/variables.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jan Vališer",
  description: "Jan Vališer portfilio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
