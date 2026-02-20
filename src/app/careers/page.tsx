"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareersPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApply = (role: string) => {
    setSelectedRole(role);
    setIsApplyOpen(true);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsApplyOpen(false);
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <div>
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Fufong Labs</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-4xl leading-relaxed">
        ร่วมเป็นส่วนหนึ่งของศูนย์กลางนวัตกรรม ทำงานแบบยืดหยุ่น และใช้ Tech Stack ที่ทันสมัย
      </p>

      {/* Benefits Section with Professional Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        
        {/* Flexible Hours */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center group hover:bg-white/[0.08] transition-colors">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <p className="font-bold text-sm text-gray-200">Flexible Hours</p>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">Result-Oriented</p>
        </div>

        {/* Hybrid / WFH */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center group hover:bg-white/[0.08] transition-colors">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <p className="font-bold text-sm text-gray-200">Hybrid / WFH</p>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">Work Anywhere</p>
        </div>

        {/* Health Insurance */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center group hover:bg-white/[0.08] transition-colors">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <p className="font-bold text-sm text-gray-200">Health Insurance</p>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">Full Coverage</p>
        </div>

        {/* Performance Bonus */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center group hover:bg-white/[0.08] transition-colors">
          <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
          </div>
          <p className="font-bold text-sm text-gray-200">Performance Bonus</p>
          <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-medium">Quarterly Reward</p>
        </div>

      </div>

      {/* Open Roles */}
      <h2 className="text-3xl font-bold mb-6">Open Roles</h2>
      <div className="space-y-6">
        {/* Role 1 */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm max-w-2xl leading-relaxed">พัฒนา Web Application แบบ Hybrid โดยใช้เทคโนโลยีสมัยใหม่และการจัดการ Deployment บนคลาวด์</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
              <span className="bg-white/10 px-2 py-1 rounded">React.js</span>
              <span className="bg-white/10 px-2 py-1 rounded">Next.js</span>
              <span className="bg-white/10 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-white/10 px-2 py-1 rounded">Vercel</span>
            </div>
          </div>
          <button onClick={() => handleApply("Frontend Developer")} className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full md:w-auto flex-shrink-0">
            Apply Now
          </button>
        </div>

        {/* Role 2 - เปลี่ยนเป็น On Hold */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 opacity-70 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">Content Creator & Multimedia</h3>
              {/* เปลี่ยนสีเป็นสีส้ม/เหลือง (Amber) หรือเทา */}
              <span className="bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                On Hold
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-4">
              สร้างสรรค์คอนเทนต์วิดีโอสั้นและ Motion Graphic สื่อสารเรื่องราวเทคโนโลยีที่ซับซ้อนให้เข้าใจง่าย บนแพลตฟอร์มโซเชียลมีเดีย
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
              <span className="bg-white/5 px-2 py-1 rounded">Short-form Video</span>
              <span className="bg-white/5 px-2 py-1 rounded">Motion Graphic</span>
            </div>
          </div>
          
          {/* ปรับปุ่มให้กดไม่ได้ (Disabled) และเปลี่ยนสีเป็นเทา */}
          <button 
            disabled 
            className="bg-white/10 text-gray-500 px-6 py-3 rounded-full font-bold cursor-not-allowed w-full md:w-auto flex-shrink-0"
          >
            Closed
          </button>
        </div>
      </div>

      {/* Application Popup */}
      <AnimatePresence>
        {isApplyOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsApplyOpen(false)} />
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
              <button onClick={() => setIsApplyOpen(false)} className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <h3 className="text-2xl font-bold mb-1 text-white relative z-10">Fast-track Apply</h3>
              <p className="text-sm text-blue-400 mb-6 relative z-10 font-mono">Role: {selectedRole}</p>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="py-12 text-center space-y-4 relative z-10">
                    <div className="text-blue-500 text-6xl">🚀</div>
                    <h3 className="text-2xl font-bold text-white">Application Sent!</h3>
                    <p className="text-gray-400 text-sm">เราได้รับข้อมูลของคุณแล้ว ทีมงานจะพิจารณาและติดต่อกลับโดยเร็วที่สุด</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} onSubmit={submitApplication} className="space-y-4 relative z-10">
                    <div>
                      <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" placeholder="Full Name" />
                    </div>
                    <div>
                      <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" placeholder="Email Address" />
                    </div>
                    <div>
                      <input type="url" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" placeholder="Portfolio / LinkedIn / GitHub URL" />
                    </div>
                    <button type="submit" className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors mt-2 text-sm">
                      Submit Application
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}