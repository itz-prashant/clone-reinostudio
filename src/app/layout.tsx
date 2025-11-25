'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";
import CursorProvider from "@/common/Cursor/CursorProvider";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <CursorProvider>
          <Header />
        {children}
        <Footer />
        </CursorProvider>
         {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 cursor-pointer right-5 z-50 p-3 rounded-full bg-[#2b2f31] text-white shadow-lg  transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="animate-bounce" />
          </button>
        )}
        </main>
      </body>
    </html>
  );
}
