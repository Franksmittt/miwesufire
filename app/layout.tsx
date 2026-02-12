import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miwesu Thermal | Heat. Redefined.",
  description: "Premium firewood and braai wood. Certified dry. Free delivery in Gauteng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
