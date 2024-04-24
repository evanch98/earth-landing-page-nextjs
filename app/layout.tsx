import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earth",
  description: "Journey to Earth: Where every Sunrise Is a Fresh Beginning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
