import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SlimLeaf Tea - Premium Organic Weight Management Tea | Pakistan",
  description: "Transform your wellness with SlimLeaf Tea. 100% organic ingredients including ginger, turmeric, and green tea. 70-80 cups per pack. Order now from Faisalabad, Pakistan.",
  keywords: "organic tea, weight management, slim tea, herbal tea, Pakistan, Faisalabad, green tea, turmeric tea, ginger tea",
  author: "SlimLeaf Tea",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
      { url: '/icon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'icon', url: '/icon-512x512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "SlimLeaf Tea - Premium Organic Weight Management Tea",
    description: "Transform your wellness with SlimLeaf Tea. 100% organic ingredients. Order now from Faisalabad, Pakistan.",
    type: "website",
    locale: "en_US",
    siteName: "SlimLeaf Tea",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlimLeaf Tea - Premium Organic Weight Management Tea",
    description: "Transform your wellness with SlimLeaf Tea. 100% organic ingredients. Order now from Faisalabad, Pakistan.",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
