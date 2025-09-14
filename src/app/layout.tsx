import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SaveWise Nexus — Save, invest, and borrow wisely",
  description:
    "SaveWise Nexus is a mobile‑first fintech for Nigerians offering automated savings, low‑risk investments, instant collateral‑backed loans, group savings (Ajo/Esusu), and an admin dashboard for secure financial management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased relative min-h-screen text-white overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b1020] via-[#0b0f1a] to-[#0b0f14]`}
      >
        <div className="w-[98%] md:w-[90%] 2xl:w-[80%] mx-auto pt-[2rem]">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
