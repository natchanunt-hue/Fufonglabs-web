"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Back Link */}
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      {/* Header Section */}
      <div className="mb-16 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-900/20 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Engineering the Future of Scalability</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          Fufong Labs คือบริษัทวิศวกรรมซอฟต์แวร์ที่ขับเคลื่อนด้วยงานวิจัย (Research-Driven) 
          เรามุ่งเน้นการแก้ปัญหาทางสถาปัตยกรรมที่ซับซ้อน เพื่อสร้างรากฐานระบบที่แข็งแกร่งและรองรับทราฟฟิกมหาศาล
        </p>
      </div>

      {/* --- ส่วนที่ 1: เน้นเนื้องานและปรัชญาของบริษัท (ย้ายขึ้นมาบนสุด) --- */}
      <section className="grid md:grid-cols-2 gap-12 items-start mb-24">
        <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Deep Tech, Real Impact</h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                เราเชื่อว่าการแก้ปัญหาที่ยั่งยืนในระบบ Enterprise หรือ E-Commerce ไม่ได้เริ่มจากการเขียนโค้ดเพื่อแก้ปัญหาเฉพาะหน้า แต่เริ่มจากการเข้าใจรากฐานของปัญหาทางคณิตศาสตร์และวิศวกรรม
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
                เรานำองค์ความรู้จากงานวิจัยระดับลึก (Deep Tech) เช่น การประมวลผลแบบขนาน (Parallel Computing) และการจัดการ Cloud Cluster มาประยุกต์ใช้กับโจทย์ธุรกิจ เพื่อสร้างระบบที่ไม่ใช่แค่ "ทำงานได้" แต่ต้อง "ทำงานได้อย่างมีประสิทธิภาพสูงสุด"
            </p>
        </div>
        
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-4">Our Core Capabilities</h3>
            <ul className="space-y-5">
                <li className="flex items-start gap-4">
                    <span className="text-indigo-400 mt-1">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    </span>
                    <div>
                      <strong className="text-gray-200 block text-sm">Performance Engineering</strong>
                      <span className="text-gray-500 text-xs">ขจัดปัญหาคอขวดและรีดประสิทธิภาพสูงสุดจากฮาร์ดแวร์</span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="text-emerald-400 mt-1">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    </span>
                    <div>
                      <strong className="text-gray-200 block text-sm">Scalable Architecture</strong>
                      <span className="text-gray-500 text-xs">ออกแบบระบบโครงสร้างพื้นฐานที่พร้อมสเกลตามการเติบโตของธุรกิจ</span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="text-blue-400 mt-1">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                    <div>
                      <strong className="text-gray-200 block text-sm">Research-Backed Solutions</strong>
                      <span className="text-gray-500 text-xs">โซลูชันที่ผ่านการพิสูจน์แล้วในระดับสากล (IEEE, Euro-Par)</span>
                    </div>
                </li>
            </ul>
        </div>
      </section>

      {/* --- ส่วนที่ 2: ผู้นำทีม (ย่อขนาดและปรับเป็นส่วนสนับสนุนความน่าเชื่อถือ) --- */}
      <section className="border-t border-white/10 pt-16">
        <h2 className="text-2xl font-bold text-white mb-8">Leadership & Expertise</h2>
        
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start hover:border-white/20 transition-colors">
          
          {/* รูปวงกลมขนาดเล็ก (32x32 = 128px) */}
          <div className="relative w-32 h-32 flex-shrink-0 group">
            <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-[20px] -z-10 group-hover:bg-indigo-500/40 transition-all duration-500"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#1a1a1a] ring-1 ring-white/10 relative">
              <Image
                src="/WSV.png" 
                alt="Wasuwee Sodsong"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* รายละเอียด */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Wasuwee Sodsong</h3>
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-wider mb-4">
              Lead Software Engineer & Researcher
            </p>
            <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
              ผู้เชี่ยวชาญด้านสถาปัตยกรรมซอฟต์แวร์ประสิทธิภาพสูงและการประมวลผลแบบขนาน (Parallel Computing) 
              อดีตนักวิจัยจาก Yonsei University (เกาหลีใต้) และเจ้าของผลงานวิจัยระดับสากลที่ได้รับการตีพิมพ์ใน 
              IEEE Xplore และงานประชุมวิชาการด้านคอมพิวเตอร์ชั้นนำ เป็นผู้กำหนดทิศทางสถาปัตยกรรมและการแก้ปัญหาทางเทคนิคเชิงลึกขององค์กร
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}