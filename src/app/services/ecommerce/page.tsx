"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      {/* Header Section */}
      <div className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px] -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          เปลี่ยนความซับซ้อนทางเทคโนโลยีให้เป็นโซลูชันที่ใช้งานได้จริง 
          ตั้งแต่การวางโครงสร้างระบบพื้นฐาน ไปจนถึงการพัฒนาระบบ AI และ Data Analytics เฉพาะทางสำหรับองค์กร
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        
        {/* Service 1: AI & Chatbot */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col h-full">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">AI & Chatbot Solutions</h3>
          <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
            พัฒนาระบบปัญญาประดิษฐ์และแชทบอทอัจฉริยะที่โต้ตอบได้อย่างเป็นธรรมชาติ พร้อมระบบ RAG (Retrieval-Augmented Generation) ที่ช่วยให้ AI สามารถดึงข้อมูลเอกสารองค์กรมาตอบคำถามได้อย่างแม่นยำ พร้อมระบบประเมินประสิทธิภาพ (Chatbot Eval) อย่างเป็นระบบ
          </p>
          <ul className="text-gray-500 text-xs space-y-2 font-mono">
            <li>&gt; Conversational AI Development</li>
            <li>&gt; RAG Implementation</li>
            <li>&gt; AI Performance Evaluation</li>
          </ul>
        </div>

        {/* Service 2: Specialized AI & Data */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col h-full">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Specialized AI & Analytics</h3>
          <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
            สร้างโมเดล AI เฉพาะทางเพื่อแก้งานที่ซับซ้อน เช่น ระบบรู้จำเสียงและแปลงเป็นข้อความ (ASR) สำหรับทางการแพทย์ และการวิเคราะห์ข้อมูลเพื่อคาดการณ์การซ่อมบำรุงล่วงหน้า (Predictive Maintenance) เพื่อลดความเสี่ยงและเพิ่มประสิทธิภาพของอุปกรณ์
          </p>
          <ul className="text-gray-500 text-xs space-y-2 font-mono">
            <li>&gt; Medical ASR & API Integration</li>
            <li>&gt; Predictive Maintenance Analytics</li>
            <li>&gt; Custom Data Science Models</li>
          </ul>
        </div>

        {/* Service 3: Architecture & DevOps */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col h-full">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Architecture & DevOps</h3>
          <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
            ออกแบบและวางระบบโครงสร้างพื้นฐานซอฟต์แวร์ให้แข็งแกร่ง รองรับการทำงานแบบอัตโนมัติ (CI/CD) ผ่านระบบอย่าง Jenkins พร้อมการสร้าง API ประสิทธิภาพสูง และระบบ Telemetry สำหรับมอนิเตอร์สถานะระบบแบบเรียลไทม์
          </p>
          <ul className="text-gray-500 text-xs space-y-2 font-mono">
            <li>&gt; System Architecture & API Design</li>
            <li>&gt; CI/CD Pipeline Automation</li>
            <li>&gt; Telemetry & Monitoring</li>
          </ul>
        </div>

      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-indigo-900/20 to-black p-10 rounded-3xl border border-indigo-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">ให้เราช่วยยกระดับเทคโนโลยีในองค์กรของคุณ</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
          ไม่ว่าจะเป็นการสร้าง AI เฉพาะทาง, พัฒนาแชทบอท, หรือวางระบบสถาปัตยกรรมใหม่ ทีมงานของเราพร้อมให้คำปรึกษา
        </p>
        
        <button 
          onClick={() => window.dispatchEvent(new Event('openContactPopup'))}
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-block cursor-pointer text-sm"
        >
          ติดต่อนัดหมายพูดคุยโปรเจกต์
        </button>
      </div>
    </div>
  );
}