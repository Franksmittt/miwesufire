import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/json-ld/LocalBusinessSchema";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Miwesu Fire Wood | Heat. Redefined. | Gauteng Delivery",
    template: "%s | Miwesu Fire Wood",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Miwesu Fire Wood | Heat. Redefined.",
    description: SITE_DESCRIPTION,
    images: [{ url: "/Gemini_Generated_Image_eax31qeax31qeax3%20(2).png", width: 1200, height: 630, alt: "Miwesu Fire Wood – premium braai wood Gauteng" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miwesu Fire Wood | Heat. Redefined.",
    description: SITE_DESCRIPTION,
    images: ["/Gemini_Generated_Image_eax31qeax31qeax3%20(2).png"],
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
      <body className={`${inter.variable} font-sans antialiased selection:bg-bronze selection:text-black`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
