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

export const metadata: Metadata = {
  // 1. Core SEO
  title: {
    default: "KERTAAJI | Karang Taruna Jitar Dukuh",
    template: "%s | KERTAAJI", // Useful if you add multiple pages later (e.g., "About | KERTAAJI")
  },
  description:
    "Website resmi KERTAAJI, organisasi pemuda Karang Taruna Jitar Dukuh. Temukan profil, struktur anggota, kegiatan sosial, dan info lomba 17 Agustusan.",
  keywords: [
    "Kertaaji",
    "Karangtaruna",
    "Karang Taruna",
    "Jitar Dukuh",
    "17 agustusan",
    "lomba",
    "organisasi pemuda",
    "Sleman",
    "Yogyakarta",
    "Indonesia",
  ],
  authors: [{ name: "KERTAAJI" }],
  creator: "KERTAAJI",

  // 2. Custom Icons (SVG)
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/png" }, // Recommended fallback for iOS
    ],
  },

  // 3. Open Graph (For beautiful link previews on WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://karang-taruna-kertaaji.vercel.app/", // TODO: Replace with your actual domain
    title: "KERTAAJI | Karang Taruna Jitar Dukuh",
    description:
      "Website resmi KERTAAJI, organisasi pemuda Karang Taruna Jitar Dukuh.",
    siteName: "KERTAAJI",
    images: [
      {
        url: "/logo.svg", // TODO: Add a preview image in your public folder
        width: 1200,
        height: 630,
        alt: "Kertaaji - Karang Taruna Jitar Dukuh",
      },
    ],
  },

  // 4. Twitter Card (Also used by Discord and Telegram for previews)
  twitter: {
    card: "summary_large_image",
    title: "KERTAAJI | Karang Taruna Jitar Dukuh",
    description: "Website resmi organisasi pemuda Karang Taruna Jitar Dukuh.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" // Changed to Indonesian for better regional SEO
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
