import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from 'react';
import { Toaster } from "@/components/ui/sonner";

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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
