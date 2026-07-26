import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components /theme/Provider";
import NavBar from "./components /ui/NavBar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheMicro",
  description: "premium micro-interactions components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
      <Providers>
        <NavBar/>

        {children}
        
        </Providers>
        <Script
          src="https://page-views-api.ratneshc.com/script"
          data-site="https://the-micro.vercel.app/" // Replace with your domain
          data-path="/"
          strategy="afterInteractive"
        />
        </body>
    </html>
  );
}
