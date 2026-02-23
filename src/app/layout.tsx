import type { Metadata } from "next";
import { Prompt } from "next/font/google"; 
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard"; // 1. Import AuthGuard

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin', 'thai'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Fufong Labs',
    default: 'Fufong Labs - Software Performance & Deep Tech R&D',
  },
  description: "ยกระดับองค์กรด้วยระบบฐานข้อมูลขั้นสูง และวิศวกรรมประสิทธิภาพซอฟต์แวร์ระดับสากล",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> 
      <body className={`${prompt.className} bg-[#050505] text-white selection:bg-indigo-500/30 antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        
        {/* 2. นำ AuthGuard มาครอบเนื้อหาทั้งหมด */}
        <AuthGuard>
          <Navbar />
          <main className="grow w-full max-w-6xl mx-auto px-6 md:px-16 pt-47 pb-20">
            {children}
          </main>
          <Footer />
        </AuthGuard>
        
      </body>
    </html>
  );
}