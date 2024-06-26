import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boot-Genie",
  description: "Start your Spring projects easily and conveniently",
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    
    <html lang="en" className="dark" suppressHydrationWarning>
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <Analytics/>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
