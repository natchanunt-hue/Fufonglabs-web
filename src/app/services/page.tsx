"use client";

import Link from "next/link";
import { useEffect } from "react"; // 1. เพิ่มบรรทัดนี้
import RAGAnimation from "@/components/animations/RAGAnimation";
import DataPipeline from "@/components/animations/DataPipeline";
import MLModel from "@/components/animations/MLModel";
import TrafficFlow from "@/components/animations/TrafficFlow";
import DevOpsGrid from "@/components/animations/DevOpsGrid";

export default function ServicesMasterPage() {
  
useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // เช็คหา Element ทุกๆ 100ms จนกว่า AuthGuard จะโหลดเสร็จและประกอบร่างหน้าเว็บ
    const checkExist = setInterval(() => {
      const element = document.querySelector(hash);
      
      if (element) {
        // พอเจอ Element แล้ว ให้หยุดเช็คทันที
        clearInterval(checkExist);
        
        // หน่วงเวลาอีกนิดนึง (150ms) ให้ Next.js จัดหน้าจอและยื้อแย่ง Scroll ให้เสร็จ
        // แล้วสั่งเลื่อนแบบ Smooth แค่ "ครั้งเดียว"
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }, 100); // วนหาทุกๆ 0.1 วินาที

    // ล้าง Interval ทิ้งถ้าผู้ใช้เปลี่ยนหน้าหนีก่อน
    return () => clearInterval(checkExist);
  }, []);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      {/* Header */}
      <div className="mb-20 relative px-4 md:px-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">Our Expertise</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          ขับเคลื่อนธุรกิจด้วยสถาปัตยกรรมซอฟต์แวร์ที่แข็งแกร่งและเทคโนโลยี AI เชิงลึก 
          เราเปลี่ยนงานวิจัยระดับสากลให้เป็นระบบที่เสถียร รองรับการขยายตัว และใช้งานได้จริงในระดับ Enterprise
        </p>
      </div>

      {/* =========================================
          SECTION 1: AI & Data Analytics
          ========================================= */}
      {/* แก้ปัญหา Scroll โดนทับด้วย scroll-mt-32 (เว้นระยะจาก Navbar 8rem) */}
      <section id="ai" className="mb-24 scroll-mt-50 px-4 md:px-0">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">AI & Data Analytics</h2>
        </div>
        
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10">
          <p className="text-gray-400 leading-relaxed mb-10 text-lg max-w-4xl">
            เราสร้าง AI ที่ "รู้ลึก" ถึงข้อมูลองค์กรของคุณ ไม่ใช่แค่แชทบอททั่วไป เราวางโครงสร้าง Data Pipeline และพัฒนา Custom Models เพื่อดึงศักยภาพข้อมูลมาใช้ตัดสินใจทางธุรกิจ
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Symbolic 1: RAG */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
              <RAGAnimation />
              <div className="mb-4 text-indigo-400 bg-indigo-500/10 w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform relative z-10">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">RAG & Conversational AI</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">เชื่อมต่อ Large Language Models (LLM) เข้ากับฐานข้อมูลองค์กร สร้างบอทที่ตอบคำถามแม่นยำ ไร้อาการมั่วข้อมูล (Hallucination)</p>
            </div>
            
            {/* Symbolic 2: Data Pipeline */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
              <DataPipeline />
              <div className="mb-4 text-indigo-400 bg-indigo-500/10 w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform relative z-10">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Data Engineering</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">วางโครงสร้าง ETL/ELT จัดการข้อมูลดิบให้กลายเป็น Data Lake/Warehouse ที่พร้อมสำหรับการทำ Machine Learning</p>
            </div>

            {/* Symbolic 3: Custom Models */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
              <MLModel />
              <div className="mb-4 text-indigo-400 bg-indigo-500/10 w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform relative z-10">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Specialized ML Models</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">ฝึกสอน (Train) โมเดลเฉพาะทาง เช่น Medical ASR (แปลงเสียงทางการแพทย์) หรือ Predictive Maintenance เพื่อพยากรณ์ล่วงหน้า</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: E-Commerce
          ========================================= */}
      <section id="ecommerce" className="mb-24 scroll-mt-50 px-4 md:px-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)] border border-emerald-500/20">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">High-Concurrency E-Commerce</h2>
        </div>
        
        {/* --- ส่วนที่เพิ่มเข้ามา: คำเกริ่นนำขยี้ Pain Point ก่อนเข้าเนื้อหาเทคนิค --- */}
        <p className="text-gray-400 leading-relaxed mb-10 text-lg max-w-4xl">
          ปัญหา "เว็บล่ม" หรือ "ค้างหน้าชำระเงิน" ในช่วงแคมเปญใหญ่ (Flash Sale) คือความสูญเสียทางธุรกิจที่ประเมินค่าไม่ได้ 
          เราออกแบบสถาปัตยกรรมระบบให้ทนทานต่อผู้ใช้งานที่พุ่งทะยานแบบฉับพลัน (Spike Traffic) 
          เปลี่ยนจากการทุ่มเงินเพิ่มเซิร์ฟเวอร์แบบไร้ทิศทาง มาเป็นการบริหารทรัพยากรด้วยวิศวกรรมระบบและคณิตศาสตร์
        </p>
        
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          
          {/* ซ้าย: Little's Law */}
          <div className="col-span-12 md:col-span-5 bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <TrafficFlow /> {/* เพิ่ม TrafficFlow ตรงนี้ */}
            <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Little's Law in Action</h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm relative z-10">
              เราสเกลระบบด้วยหลักคณิตศาสตร์ (Queueing Theory) เพื่อหาจุดสมดุลของการประมวลผล ไม่ใช่การสุ่มเพิ่ม Server อย่างไร้ทิศทาง
            </p>
            <div className="bg-black/50 p-6 rounded-2xl font-mono text-center text-2xl text-white border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] mb-4 relative z-10">
              <span className="text-emerald-400">L</span> = λ × <span className="text-emerald-400">W</span>
            </div>
            <ul className="text-xs text-gray-500 space-y-2 mt-2 relative z-10">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> บริหาร Arrival Rate (λ) ทราฟฟิกขาเข้า</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> ลด Response Time (W) ระยะเวลารอ</li>
            </ul>
          </div>

          {/* ขวา: Features */}
          <div className="col-span-12 md:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col justify-center group hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Robust Checkout</h3>
              <p className="text-gray-500 text-sm leading-relaxed">แยกเซอร์วิสตะกร้าสินค้าและระบบตัดบัตร (Microservices) รับประกันว่าธุรกรรมจะไม่ล่มแม้มีพายุ Flash Sale</p>
            </div>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col justify-center group hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Auto-Scaling Nodes</h3>
              <p className="text-gray-500 text-sm leading-relaxed">วางสถาปัตยกรรม Cloud Clusters ที่ขยายและหดทรัพยากรประมวลผลได้อัตโนมัติ ตามทราฟฟิกจริงระดับวินาที</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: Consulting & DevOps
          ========================================= */}
      <section id="consulting" className="mb-24 scroll-mt-50 px-4 md:px-0">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)] border border-blue-500/20">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Architecture & DevOps</h2>
        </div>
        
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <DevOpsGrid />
          <p className="text-gray-400 leading-relaxed mb-10 text-lg max-w-4xl relative z-10">
            เจาะลึกทะลุโค้ดเพื่อแก้ปัญหาที่ฉุดรั้งองค์กร (Technical Debt) เราออกแบบสถาปัตยกรรมใหม่ให้เบา เร็ว และวางระบบส่งมอบซอฟต์แวร์ (Deploy) ที่ทำงานแทนคน
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            
            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="text-blue-500 mt-1 bg-blue-500/10 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">System Audit & Re-design</h3>
                <p className="text-gray-500 text-sm leading-relaxed">ชำแหละโครงสร้างเก่า (Monolith) ออกแบบใหม่ให้เป็น Microservices เพื่อให้สเกลง่ายและโค้ดไม่พันกัน</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="text-blue-500 mt-1 bg-blue-500/10 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Database Optimization</h3>
                <p className="text-gray-500 text-sm leading-relaxed">จูน Query, ปรับ Indexing และวางโครงสร้าง Redis Caching เพื่อรีดความเร็วการอ่าน/เขียนระดับ Big Data</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="text-blue-500 mt-1 bg-blue-500/10 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12h4l2-9 5 18 2-9h5"></path></svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">CI/CD Automation</h3>
                <p className="text-gray-500 text-sm leading-relaxed">วางท่อ Deployment Pipeline (Jenkins, Docker) ดันโค้ดขึ้น Production อัตโนมัติ ลด Human Error เป็นศูนย์</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="text-blue-500 mt-1 bg-blue-500/10 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Telemetry & Observability</h3>
                <p className="text-gray-500 text-sm leading-relaxed">ติดตั้งแดชบอร์ด Monitor สถานะ API และ Server แจ้งเตือนความผิดปกติทันทีก่อนที่ลูกค้าจะรู้ตัว</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          Call to Action (CTA)
          ========================================= */}
      <div className="mt-20 text-center bg-linear-to-r from-indigo-900/20 via-black to-emerald-900/10 py-16 px-6 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent)] pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">พร้อมยกระดับเทคโนโลยีแล้วหรือยัง?</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          ให้ทีมวิศวกรจาก Fufong Labs วางสถาปัตยกรรมที่ใช่สำหรับอนาคตองค์กร
        </p>
        <button onClick={() => window.dispatchEvent(new Event('openContactPopup'))} className="bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          ติดต่อนัดหมายพูดคุยโปรเจกต์
        </button>
      </div>
    </div>
  );
}