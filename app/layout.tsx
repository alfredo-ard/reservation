import type { Metadata } from "next";
import { Playfair, Big_Shoulders_Inline_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  variable: "--font-playfair-sans",
  subsets: ["latin"],
});
const big = Big_Shoulders_Inline_Display({
  variable: "--font-Big_Shoulders_Display-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reservation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
