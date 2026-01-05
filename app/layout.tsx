import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Open_Sans, STIX_Two_Text } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

const libre = STIX_Two_Text({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ['400']
});


export const metadata: Metadata = {
  title: "Nubia Mining Limited",
  description: "From the fields of KPK",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/brandlogo.png" />
        <link rel="preload" as="image" href="/brandtext.png" />
      </head>
      <body className={` ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${opensans.variable} ${libre.variable} antialiased overflow-x-hidden overflow-y-scroll `}>
        <Header Selection={0}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
