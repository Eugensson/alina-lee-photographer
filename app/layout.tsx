import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: {
    default: "Alina Lee Photographer",
    template: "%s - Alina Lee Photographer",
  },
  description:
    "Alina Lee Photographer — professional portrait, lifestyle, and wedding photographer. Capturing authentic emotions, timeless stories, and artistic photography for couples, families, and brands worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
