"use client";

import Link from "next/link";
import HeroPulse from "@/components/animations/HeroPulse";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="mb-15 text-center md:text-left relative">
        <div className="absolute -top-20 -left-20 w-125 h-125 bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        <HeroPulse /> {/* ก๊อปปี้บรรทัดนี้ไปวางแทรกตรงนี้ */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider mb-6 text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-gray-300 to-gray-600">
          Engineering the Future of <br /> <span className="text-indigo-400">AI & Scalability</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10">
          Fufong Labs พัฒนาโซลูชันปัญญาประดิษฐ์ (AI) และออกแบบสถาปัตยกรรมซอฟต์แวร์ระดับองค์กร 
          ขับเคลื่อนด้วยงานวิจัย (Deep Tech) เพื่อแก้ปัญหาที่ซับซ้อนและเพิ่มประสิทธิภาพระบบสูงสุด
        </p>
      </section>

      {/* 2. Bento Grid Layout - แก้ลิงก์ให้ถูกต้อง 100% */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px] mb-16">
        
        {/* Box 1 (Span 2) - AI & Data (ชี้ไปหน้ารวม Services) */}
        <Link href="/services" className="md:col-span-2 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all group overflow-hidden relative flex flex-col justify-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          <div className="mb-4">
            <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full uppercase tracking-wider">AI & Data</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-wide text-white group-hover:text-indigo-200 transition-colors">Specialized AI & Chatbot Solutions</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            พัฒนาระบบ <strong>Conversational AI, RAG</strong> และ <strong>Medical ASR</strong> เพื่อสร้างโมเดลปัญญาประดิษฐ์และแชทบอทอัจฉริยะที่ดึงข้อมูลองค์กรมาใช้งานได้อย่างแม่นยำ
          </p>
        </Link>

        {/* Box 2 - E-Commerce (ชี้ไปหน้า E-commerce เจาะลึก) */}
        <Link href="/services#ecommerce" className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 hover:bg-[#111] transition-all flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-200 transition-colors">High-Concurrency <br/>E-Commerce</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            ออกแบบระบบพาณิชย์อิเล็กทรอนิกส์ที่ทนทาน รองรับผู้ใช้งานพร้อมกันหลักล้าน
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Scalable System</span>
          </div>
        </Link>

        {/* Box 3 - Consulting & DevOps (ชี้ไปหน้า Consulting เจาะลึก) */}
        <Link href="/services#consulting" className="bg-[#111] rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 flex flex-col justify-center relative overflow-hidden group transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">Architecture & DevOps Consulting</h3>
          <p className="text-gray-400 text-sm mb-4">เจาะลึกระดับโครงสร้าง ค้นหาคอขวด และวางระบบ CI/CD</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-300 bg-white/5 px-2 py-1 rounded text-[10px] font-mono border border-white/5">System Design</span>
            <span className="text-gray-300 bg-white/5 px-2 py-1 rounded text-[10px] font-mono border border-white/5">DB Optimize</span>
          </div>
        </Link>

        {/* Box 4 (Span 2) - Academic Excellence (คงเดิม) */}
        <Link href="/academic" className="md:col-span-2 bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 flex items-center justify-between hover:bg-[#111] transition-all cursor-pointer group">
           <div>
             <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-100 transition-colors text-white">Research-Backed Authority</h3>
             <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
               ผลงานวิจัยระดับสากลจากทีมวิศวกร (IEEE, Euro-Par) และร่วมเป็นคณะกรรมการพิจารณาผลงานวิจัย <br/>
               <strong className="text-gray-200">16th Symposium on Software Performance (SSP) 2025</strong>
             </p>
           </div>
           <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
           </div>
        </Link>

      </section>

      {/* 3. Tech Stack Showcase */}
      <section className="py-12 border-t border-white/10 overflow-hidden">
        <p className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase mb-10">
          Empowered by Modern Tech Stack
        </p>
        
        {/* ปรับแก้: เอา grayscale ออกจากคอนเทนเนอร์หลัก แล้วไปใส่แยกในแต่ละโลโก้แทน */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 px-6">
          
          <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-10 md:h-12 w-auto" />
          </div>

          <div className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-10 md:h-12 w-auto invert" />
          </div>

          <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-10 md:h-12 w-auto" />
          </div>

          <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-10 md:h-12 w-auto" />
          </div>

          {/* ปรับแก้: เปลี่ยนจาก docker-plain เป็น docker-original เพื่อให้มีสี */}
          <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-10 md:h-12 w-auto" />
          </div>

          <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" className="h-10 md:h-12 w-auto" />
          </div>
          
          <div className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="h-9 md:h-10 w-auto invert" />
          </div>

        </div>
      </section>
    </>
  );
}