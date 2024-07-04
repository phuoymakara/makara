import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProviderTheme } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makara",
  description: "Makara-Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderTheme>
          {children}
        </ProviderTheme>
      </body>
    </html>
  );
}
