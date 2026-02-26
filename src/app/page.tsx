"use client";

import Link from "next/link";
import HeroPulse from "@/components/animations/HeroPulse";
import TrafficFlow from "@/components/animations/TrafficFlow"; // 👈 เพิ่มบรรทัดนี้เข้ามา

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

      {/* 2. Dynamic Bento Grid Layout (5 Boxes) - FIX GLOW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:auto-rows-[260px] mb-16">
        
        {/* กล่องที่ 1: AI & Data (Indigo Glow - คงเดิม) */}
        <Link href="/services" className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all group overflow-hidden relative flex flex-col justify-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          <div className="mb-4">
            <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full uppercase tracking-wider">AI & Data</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-wide text-white group-hover:text-indigo-200 transition-colors">Specialized AI & Chatbot Solutions</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            พัฒนาระบบ <strong>Conversational AI, RAG</strong> และ <strong>Medical ASR</strong> เพื่อสร้างโมเดลปัญญาประดิษฐ์และแชทบอทอัจฉริยะที่ดึงข้อมูลองค์กรมาใช้งานได้อย่างแม่นยำ
          </p>
        </Link>

        {/* กล่องที่ 2: E-Commerce (Emerald Glow - คงเดิม) */}
        <Link href="/services#ecommerce" className="md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-2 bg-[#0f0f0f] rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 hover:bg-[#111] transition-all flex flex-col relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
          
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-200 transition-colors">High-Concurrency <br/>E-Commerce</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
              ออกแบบระบบพาณิชย์อิเล็กทรอนิกส์ที่ทนทาน รองรับผู้ใช้งานพร้อมกันหลักล้าน
            </p>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 w-full min-h-35 relative">
             <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
             <TrafficFlow />
          </div>
          
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 mb-6 backdrop-blur-sm relative z-10 group-hover:border-emerald-500/30 transition-colors shadow-inner">
             <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] md:text-xs text-gray-500 font-mono">Peak Traffic Ready</span>
                <span className="text-[10px] md:text-xs font-bold text-emerald-400 font-mono">1M+ Req/s</span>
             </div>
             <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div className="bg-linear-to-r from-emerald-500/20 to-emerald-400 w-[92%] h-full rounded-full relative">
                   <div className="absolute top-0 right-0 w-1.5 h-full bg-white rounded-full shadow-[0_0_8px_#10b981] animate-pulse"></div>
                </div>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            <span className="text-[10px] md:text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/20">Scalable System</span>
            <span className="text-[10px] md:text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/20">Microservices</span>
          </div>
        </Link>

        {/* กล่องที่ 3: Architecture & DevOps (Blue Glow - คงเดิม) */}
        <Link href="/services#consulting" className="md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1 bg-[#111] rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 flex flex-col justify-center relative overflow-hidden group transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
          <div className="mb-4">
            <span className="text-[10px] md:text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-blue-500/20">Infrastructure</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">Architecture & DevOps</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
            เจาะลึกระดับโครงสร้าง ค้นหาคอขวด วางระบบ CI/CD เพื่อลด Technical Debt และสเกลระบบให้รองรับทราฟฟิกได้อย่างไร้รอยต่อ
          </p>
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            <span className="text-gray-300 bg-white/5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border border-white/5">System Design</span>
            <span className="text-gray-300 bg-white/5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border border-white/5">DB Optimize</span>
            <span className="text-gray-300 bg-white/5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono border border-white/5">CI/CD Pipeline</span>
          </div>
        </Link>

        {/* 💡 กล่องที่ 4: Social Media Labs (แก้ไข: เปลี่ยนพื้นหลังเป็นสีดำเทา + ย้าย Glow สีชมพูไปมุมขวาบน) */}
        <Link href="/services#socialmedia" className="md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1 bg-linear-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-fuchsia-500/30 transition-all group overflow-hidden relative flex flex-col justify-center">
          {/* ย้าย Glow มามุมขวาบน และปรับ Opacity ให้พอดี */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-fuchsia-200 transition-colors mt-2 relative z-10">Social Media Labs</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 relative z-10">
            ผสาน Data Science เข้ากับคอนเทนต์ เจาะลึกกลยุทธ์สื่อออนไลน์ทุกแพลตฟอร์ม
          </p>
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            <span className="text-[10px] font-mono text-fuchsia-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></div> Strategy</span>
            <span className="text-[10px] font-mono text-fuchsia-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></div> Ads</span>
          </div>
        </Link>

        {/* 💡 กล่องที่ 5: Academic Excellence (แก้ไข: เพิ่ม Glow สีขาวจางๆ ที่มุมซ้ายล่าง) */}
        <Link href="/academic" className="md:col-start-2 md:col-span-2 md:row-start-3 md:row-span-1 bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#111] transition-all cursor-pointer group relative overflow-hidden">
           {/* เพิ่ม White Glow จางๆ (opacity-5) */}
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-[80px] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
           
           <div className="relative z-10">
             <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-100 transition-colors text-white">Research-Backed Authority</h3>
             <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mb-6 md:mb-0">
               ผลงานวิจัยระดับสากลจากทีมวิศวกร (IEEE, Euro-Par) <br className="hidden md:block"/>และร่วมเป็นคณะกรรมการ 
               <strong className="text-gray-200 font-normal"> 16th Symposium on Software Performance 2025</strong>
             </p>
           </div>
           <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all shrink-0 md:ml-4 mt-auto md:mt-0 self-end md:self-auto relative z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
           </div>
        </Link>

      </section>

      {/* 3. Tech Stack Showcase */}
      <section className="py-12 border-t border-white/10 overflow-hidden">
        <p className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8 md:mb-10">
          Empowered by Modern Tech Stack
        </p>
        
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3 gap-y-5 md:gap-4 lg:gap-6 px-2 mx-auto w-full max-w-7xl">
          
          {/* สังเกตว่าผมเปลี่ยนจาก opacity-50 เป็น md:opacity-50 และ grayscale เป็น md:grayscale */}
          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="React">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Next.js">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto invert" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Python">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="TypeScript">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Docker">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Redis">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Vercel">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto invert" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Golang">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" alt="Go" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="C#">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="C++">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Django">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Kubernetes">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="Apache Kafka">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" alt="Apache Kafka" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

          <div className="md:opacity-50 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0" title="PyTorch">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto" />
          </div>

        </div>
      </section>

{/* =========================================
          SECTION 4: Partners / Trusted By (6 Logos)
          ========================================= */}
      <section className="py-12 px-4 md:px-0 mb-10">
        <div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col lg:flex-row items-stretch relative shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* แสง Glow พื้นหลัง */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* ฝั่งซ้าย: ข้อความเชิญชวน & ปุ่ม (40%) */}
          <div className="w-full lg:w-2/5 p-10 md:p-14 z-10 flex flex-col justify-center text-center lg:text-left relative">
            <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
              Empowering Businesses, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-emerald-400">Together</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              Dedicated to unlocking technological potential and building robust foundations alongside the businesses we partner with.
            </p>
            
            <button onClick={() => window.dispatchEvent(new Event('openContactPopup'))} className="w-fit mx-auto lg:mx-0 bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Become a Partner
            </button>
          </div>

          {/* ฝั่งขวา: ตู้กระจกแสดงโลโก้ 6 ตัว (60%) */}
          <div className="w-full lg:w-3/5 bg-black/40 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10 z-10 flex justify-center items-center backdrop-blur-sm">
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-md lg:max-w-lg">
              
              {/* Array โลโก้ 6 ตัว */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden relative">
                  
                  {/* 💡 จุดที่แก้ไข: 
                      1. opacity-80 = มือถือสว่าง 80%
                      2. md:opacity-50 = คอมพิวเตอร์ดรอปเหลือ 50% (ก่อน Hover)
                      3. group-hover:opacity-100 = สว่าง 100% ตอนเอาเมาส์ชี้ 
                  */}
                  <img 
                    src={`/logo-company-0${item}.jpg`} 
                    alt={`Partner ${item}`} 
                    className="w-full h-full object-cover opacity-80 md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10 group-hover:scale-110"
                  />
                  
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

    </>
  );
}