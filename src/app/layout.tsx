import type { Metadata } from "next";
import { NavbarDemo } from "@/components/global/header";
import data from "@/data/projectData.json"
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
  title: data.personal_info.name,
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF7F0]`}
      >
        <NavbarDemo />
        {children}
        {/* <SocialLinks /> */}
      </body>
    </html>
  );
}
