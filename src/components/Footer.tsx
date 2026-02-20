import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 px-6 md:px-16 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <h4 className="text-xl font-bold mb-4 tracking-wider text-white">FUFONG LABS CO., LTD.</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">ศูนย์กลางนวัตกรรม (Hub of Innovation) ผู้เชี่ยวชาญด้านสถาปัตยกรรมซอฟต์แวร์และการวิจัยพัฒนาเชิงทดลอง (R&D)</p>
          
          {/* ส่วนที่อยู่ ที่เติมกลับเข้ามาครับ */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>📍 9 ซอยเฉลิมพระเกียรติ ร.9 ซ.48 แยก 15</p>
            <p>แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Services & R&D</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services/ecommerce" className="hover:text-white transition-colors">E-Commerce Architecture</Link></li>
            <li><Link href="/services/consulting" className="hover:text-white transition-colors">Architecture Consulting</Link></li>
            <li><Link href="/academic" className="hover:text-white transition-colors">Cloud Matrix & Research</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            {/* อันนี้เปลี่ยนจาก mailto เป็นให้เปิด Popup ได้เหมือนกันถ้าต้องการ แต่ขอเว้นไว้ก่อน */}
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}