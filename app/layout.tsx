import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navigation from "@/components/Navigation";
import { globalGraph } from "@/lib/jsonLd";
import {
  plausibleDomain,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dinitha — Systems Engineer",
    template: "%s — Dinitha",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Dinitha" }],
  creator: "Dinitha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Dinitha — Systems Engineer",
    description: siteDescription,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinitha — Systems Engineer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={globalGraph()} />
      </head>
      <body className="min-h-full bg-background text-foreground selection:bg-slate selection:text-foreground">
        <Navigation />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" ? (
          <>
            <Script
              defer
              data-domain={plausibleDomain}
              src="https://plausible.io/js/script.js"
              strategy="afterInteractive"
            />
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
