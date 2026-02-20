import type { Metadata } from "next";
import { Prompt } from "next/font/google"; 
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin', 'thai'],
  display: 'swap',
  // ลบ variable: '--font-prompt' ออกไปได้เลยครับ ไม่ต้องใช้แล้ว
});

export const metadata: Metadata = {
  title: "Fufong Labs - Software Performance & Deep Tech R&D",
  description: "ยกระดับองค์กรด้วยระบบฐานข้อมูลขั้นสูง และวิศวกรรมประสิทธิภาพซอฟต์แวร์ระดับสากล",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> 
      {/* จุดเปลี่ยนสำคัญ: 
        1. ใส่ prompt.className เข้าไปตรงนี้เลย
        2. ลบคำว่า font-sans ของเดิมออกไป 
      */}
      <body className={`${prompt.className} bg-[#050505] text-white selection:bg-indigo-500/30 antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-6 md:px-16 pt-36 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}