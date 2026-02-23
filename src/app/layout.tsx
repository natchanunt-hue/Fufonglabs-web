import type { Metadata } from "next";
import { Prompt } from "next/font/google"; 
import "./globals.css";

import AuthGuard from "@/components/AuthGuard";

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
        
        {/* AuthGuard จะเป็นตัวควบคุมทั้งหมดแทน */}
        <AuthGuard>
          {children}
        </AuthGuard>
        
      </body>
    </html>
  );
}