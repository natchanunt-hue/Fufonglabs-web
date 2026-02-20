import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 px-6 md:px-16 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand & Professional Address */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-bold mb-4 tracking-wider text-white">FUFONG LABS CO., LTD.</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            ศูนย์กลางนวัตกรรม (Hub of Innovation) ผู้เชี่ยวชาญด้านสถาปัตยกรรมซอฟต์แวร์และการวิจัยพัฒนาเชิงทดลอง (R&D)
          </p>
          
          <div className="mt-6 space-y-3 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <span>📍</span>
              <p>
                เลขที่ 9 ซอยเฉลิมพระเกียรติ ร.9 ซ.48 แยก 15<br />
                แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250
              </p>
            </div>
            <p className="pl-6 font-mono text-xs opacity-70">
              เลขทะเบียนนิติบุคคล: 0105565099446
            </p>
            <div className="pl-6 flex gap-4 text-xs font-semibold uppercase tracking-widest text-emerald-500/80">
              <span>Active Entity</span>
              <span>Est. 2022</span>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services & R&D</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services/ecommerce" className="hover:text-white transition-colors">E-Commerce Architecture</Link></li>
            <li><Link href="/services/consulting" className="hover:text-white transition-colors">Architecture Consulting</Link></li>
            <li><Link href="/academic" className="hover:text-white transition-colors">Cloud Matrix & Research</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="https://www.linkedin.com/company/fufonglabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section - ที่หายไปกลับมาแล้วครับ */}
      <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
        <p>© {currentYear} Fufong Labs Co., Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}