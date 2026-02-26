"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('openContactPopup', handleOpenContact);
    return () => window.removeEventListener('openContactPopup', handleOpenContact);
  }, []);

  // แก้ไขประเภทของ event และเพิ่ม async
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // ดึงข้อมูลจากฟอร์ม
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // ส่งข้อมูลไปที่ Formspree
      const response = await fetch("https://formspree.io/f/xvzblbkv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsContactOpen(false);
          setIsSubmitted(false);
          form.reset(); // ล้างฟอร์มเมื่อส่งเสร็จ
        }, 2500);
      } else {
        alert("เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง");
      }
    } catch (error) {
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <>
      {/* FIX 1: ปรับ z-[120] ให้ Navbar อยู่เหนือเมนูสีดำ (z-[110]) 
         และใส่ Hardware Acceleration ป้องกันอาการกระพริบ
      */}
      <nav className="fixed top-13 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full z-120 flex items-center justify-between px-6 md:px-10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transform-gpu backface-hidden will-change-transform">
        
        <Link href="/" className="relative flex items-center group">
          <div className="absolute -left-2 -top-10 w-24 h-24 bg-linear-to-br from-[#ffffff] to-[#333333] rounded-2xl border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-all duration-300">
            <Image 
              src="/logo.png" 
              alt="Fufong Labs Logo" 
              width={120}
              height={120} 
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>
          <span className="ml-28 text-lg font-bold tracking-widest bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
            FUFONG LABS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/services" className="hover:text-white transition-colors py-2">Services</Link>
          <Link href="/academic" className="hover:text-white transition-colors py-2">R&D Center</Link>
          <Link href="/careers" className="hover:text-white transition-colors py-2">Careers</Link>
          
          <button 
            onClick={() => setIsContactOpen(true)}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] ml-2"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger / Close Button - ปรับให้เด่นและกดง่ายขึ้น */}
        <button 
          className="md:hidden text-white focus:outline-none z-130 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay - z-[110] */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-110 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="flex flex-col items-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-3xl text-gray-300 hover:text-white font-bold transition-colors">Services</Link>
              <Link href="/academic" onClick={() => setIsMenuOpen(false)} className="text-3xl text-gray-300 hover:text-white font-bold transition-colors">R&D Center</Link>
              <Link href="/careers" onClick={() => setIsMenuOpen(false)} className="text-3xl text-gray-300 hover:text-white font-bold transition-colors">Careers</Link>
              <button 
                onClick={() => { setIsMenuOpen(false); setIsContactOpen(true); }}
                className="px-10 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 mt-4 shadow-xl active:scale-95 transition-transform"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup Contact - z-[150] สูงที่สุด */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setIsContactOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#111] border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
            >
              <button onClick={() => setIsContactOpen(false)} className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Get in touch</h3>
              <p className="text-sm text-gray-400 mb-6 relative z-10">ทิ้งข้อมูลไว้ให้เราติดต่อกลับ หรือนัดหมายพูดคุยโปรเจกต์</p>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="py-12 text-center space-y-4 relative z-10"
                  >
                    <div className="text-emerald-500 text-6xl">✓</div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-400">เจ้าหน้าที่ของเราจะติดต่อกลับหาคุณทางอีเมลโดยเร็วที่สุด</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSendMessage} 
                    className="space-y-4 relative z-10"
                  >
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 ml-1">Email</label>
                      <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 ml-1">Phone Number</label>
                      <input type="tel" name="phone" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm" placeholder="08x-xxx-xxxx" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 ml-1">Message / Project Details</label>
                      <textarea rows={4} name="message" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none" placeholder="รายละเอียดเบื้องต้น..."></textarea>
                    </div>
                    
                    <input type="hidden" name="form_type" value="Contact Us" />
                    <button type="submit" className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors mt-2 text-sm">
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}