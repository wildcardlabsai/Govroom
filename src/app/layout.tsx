import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.govroom.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VROOM | Dealer Aftersales Software, Simplified",
    template: "%s | VROOM",
  },
  description:
    "VROOM is dealer aftersales software for UK car dealers — warranties, claims, customers and documents, brought together in one place.",
  keywords: [
    "dealer aftersales software",
    "car dealer warranty management",
    "used car dealer aftersales",
    "dealer claims management",
    "vehicle warranty management",
    "UK car dealers",
  ],
  openGraph: {
    title: "VROOM | Dealer Aftersales Software, Simplified",
    description:
      "Everything after the sale, in one place. VROOM helps UK car dealers manage warranties, claims, customers and more.",
    url: siteUrl,
    siteName: "VROOM",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VROOM | Dealer Aftersales Software, Simplified",
    description:
      "Everything after the sale, in one place. VROOM helps UK car dealers manage warranties, claims, customers and more.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-vroom-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
