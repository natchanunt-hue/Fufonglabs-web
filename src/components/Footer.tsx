"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 px-6 md:px-16 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-10 mb-12">
        
        {/* Brand & Professional Address */}
        <div className="col-span-2 md:col-span-2">
          <h4 className="text-xl font-bold mb-4 tracking-wider text-white">FUFONG LABS CO., LTD.</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            ศูนย์กลางนวัตกรรม (Hub of Innovation) ผู้เชี่ยวชาญด้านสถาปัตยกรรมซอฟต์แวร์และการวิจัยพัฒนาเชิงทดลอง (R&D)
          </p>
          
          <div className="mt-6 space-y-3 text-sm text-gray-500">
            {/* ที่อยู่ */}
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p>
                เลขที่ 9 ซอยเฉลิมพระเกียรติ ร.9 ซ.48 แยก 15<br />
                แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250
              </p>
            </div>

            {/* 🟢 ส่วนที่เพิ่มใหม่: อีเมล */}
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:contact@fufonglabs.com" className="hover:text-white transition-colors">
                contact@fufonglabs.com
              </a>
            </div>

            {/* สถานะบริษัท */}
            <div className="pl-7 flex gap-4 text-xs font-semibold uppercase tracking-widest text-emerald-500/80 pt-1">
              <span>Active Entity</span>
              <span>Est. 2022</span>
            </div>
          </div>
        </div>
        
        {/* คอลัมน์ EXPERTISE */}
        {/* 🟢 เพิ่ม col-span-1 เพื่อให้กินพื้นที่ครึ่งนึงในมือถือ */}
        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-6 tracking-wider text-sm uppercase">Expertise</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/academic" className="hover:text-white transition-colors">Academic Research</Link></li>
          </ul>
        </div>

        {/* คอลัมน์ COMPANY */}
        {/* 🟢 เพิ่ม col-span-1 เพื่อให้กินพื้นที่อีกครึ่งนึงในมือถือ */}
        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-6 tracking-wider text-sm uppercase">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li>
              <button 
                onClick={() => window.dispatchEvent(new Event('openContactPopup'))} 
                className="hover:text-white transition-colors text-left"
              >
                Contact Us
              </button>
            </li>
            <li>
              <a href="https://lin.ee/W9Y0CXO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LINE Official
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/fufong-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ส่วนลิขสิทธิ์และลิงก์ด้านล่างสุดของ Footer */}
      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <div>
          © {new Date().getFullYear()} Fufong Labs Co., Ltd. All rights reserved.
        </div>
        
        {/* เพิ่ม Link href="/about" เข้าไปตรงนี้ครับ */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}