import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samarth G. Nimbaragi | Mechatronics Engineer",

  description:
    "Portfolio of Samarth G. Nimbaragi — Mechatronics engineering student focused on robotics, embedded systems, motorsport engineering, Linux systems, and modern software development.",

  keywords: [
    "Samarth Nimbaragi",
    "Mechatronics Engineer",
    "Robotics",
    "Embedded Systems",
    "Motorsport",
    "Software Developer",
    "Linux",
    "Engineering Portfolio",
  ],

  authors: [
    {
      name: "Samarth G. Nimbaragi",
    },
  ],

  creator: "Samarth G. Nimbaragi",

  openGraph: {
    title: "Samarth G. Nimbaragi",
    description:
      "Mechatronics Engineer • Software Developer • Motorsport Enthusiast",

    url: "https://your-domain.com",

    siteName: "Samarth Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}
