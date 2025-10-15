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
  title: "凡人 - AI技术专家 & 全栈开发者",
  description: "15年+技术开发经验，专注于AI技术与企业开发融合，全栈架构专家",
  keywords: "AI技术, 全栈开发, 架构设计, Go语言, Python, Cursor, 技术管理",
  authors: [{ name: "凡人" }],
  openGraph: {
    title: "凡人 - AI技术专家 & 全栈开发者",
    description: "15年+技术开发经验，专注于AI技术与企业开发融合",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
