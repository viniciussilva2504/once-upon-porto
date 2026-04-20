import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: "Once Upon a Time in Porto | Guided Historical Tours",
    template: "%s | Once Upon a Time in Porto",
  },
  description:
    "Expert-led walking tours through Porto and Vila Nova de Gaia. Discover medieval history, Port wine heritage, azulejo art, and hidden stories with archaeologist Fábio Soares.",
  keywords: [
    "Porto walking tours",
    "Porto guided tours",
    "Porto history tours",
    "Vila Nova de Gaia tours",
    "Port wine tour",
    "Porto medieval tour",
    "Porto archaeologist guide",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Once Upon a Time in Porto",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
