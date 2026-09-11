import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://samshojaiefar.ir"; // replace with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sam Shojaiefar — Creative Frontend Developer",
    template: "%s | Sam Shojaiefar",
  },
  description:
    "Sam Shojaiefar is a frontend developer building fast, accessible, animated interfaces with React, Next.js, TypeScript, and Framer Motion.",
  keywords: [
    // English
    "Sam Shojaiefar",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Framer Motion",
    "web developer Iran",
    "portfolio",
    // Persian / Farsi
    "سام شجاعی‌فر",
    "برنامه نویس فرانت اند",
    "توسعه دهنده فرانت اند",
    "برنامه نویس ری‌اکت",
    "برنامه نویس نکست جی اس",
    "طراحی سایت",
    "طراح وب سایت",
    "نمونه کار برنامه نویسی",
    "وب دولوپر",
  ],
  authors: [{ name: "Sam Shojaiefar", url: siteUrl }],
  creator: "Sam Shojaiefar",
  publisher: "Sam Shojaiefar",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sam Shojaiefar — Creative Frontend Developer",
    description:
      "Frontend developer building fast, accessible, animated interfaces with React, Next.js, TypeScript, and Framer Motion.",
    siteName: "Sam Shojaiefar",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sam Shojaiefar — Creative Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sam Shojaiefar — Creative Frontend Developer",
    description:
      "Frontend developer building fast, accessible, animated interfaces with React, Next.js, TypeScript, and Framer Motion.",
    images: ["/images/og-image.png"],
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

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sam Shojaiefar",
  url: siteUrl,
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and animated web interfaces.",
  sameAs: [
    "https://github.com/samShojaiefar",
    "https://www.linkedin.com/in/sam-shojaiefar-8a752229b/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "SCSS",
    "Tailwind CSS",
    "Framer Motion",
    "WordPress",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
