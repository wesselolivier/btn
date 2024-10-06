import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"; // Import Next.js Link component
import "./globals.css";
import "@repo/ui/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Your File Transfer App",
  description: "Transfer your project in no time.",
};

const Navigation = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}