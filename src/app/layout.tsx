import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "金榜名 · AI志愿家 — 智能高考志愿填报专家",
  description: "高考愿，金榜名，人生抉择，让AI志愿家为你答疑解惑",
  keywords: "高考,志愿填报,AI志愿,大学专业,智能推荐,高考志愿",
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo_mobile.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="zh-CN"
      className="light" 
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" href="/images/logo_mobile.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon-precomposed" href="/images/logo_mobile.jpg" type="image/jpeg" />
      </head>
      <body
        className={`${inter.variable} ${notoSansSC.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
