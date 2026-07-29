import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/json-ld/LocalBusinessSchema";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Miwesu Fire Wood | Premium Braai Wood Delivery Gauteng",
    template: "%s | Miwesu Fire Wood",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Miwesu Fire Wood | Premium Braai Wood Delivery Gauteng",
    description: SITE_DESCRIPTION,
    images: [{ url: "/gallery/home-gallery-01.jpg", width: 1200, height: 1200, alt: "Miwesu Fire Wood – premium braai wood Gauteng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miwesu Fire Wood | Premium Braai Wood Delivery Gauteng",
    description: SITE_DESCRIPTION,
    images: ["/gallery/home-gallery-01.jpg"],
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="scroll-smooth">
      <body className={`${outfit.variable} ${fraunces.variable} font-sans antialiased`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
