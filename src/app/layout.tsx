import type { Metadata } from "next";
import { Roboto_Slab } from 'next/font/google'

import Header from '@/components/Header'
import Links from '@/components/Links'
import "./globals.css";

export const metadata: Metadata = {
  title: "Приказчикова Татьяна Викторовная | Портфолио",
  description: "Портфолио Приказчикова Татьяна Викторовная, ",
};

const font_roboto = Roboto_Slab({ weight: ['400'], subsets: ['cyrillic'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`min-h-full flex flex-col ${font_roboto.className} antialiased`}
        id='body'
      >
        <Header />
        {children}
        <footer className="mt-8 flex flex-col items-center lg:items-start justify-evenly lg:flex-row gap-6 p-16 lg:px-32 lg:py-16 border-t-[1px] flex-none">
          <Links />
        </footer>
      </body>
    </html>
  );
}
