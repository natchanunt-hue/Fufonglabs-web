import Link from "next/link";

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">&larr; Back to Home</Link>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Excellence</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
        ความน่าเชื่อถือทางเทคโนโลยี (Technical Authority) ผ่านการเป็นผู้นำทางความคิดด้านสถาปัตยกรรมซอฟต์แวร์
      </p>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-2">16th Symposium on Software Performance (SSP) 2025</h2>
          <p className="text-blue-400 mb-4">📍 Kiel, Germany</p>
          <p className="text-gray-300 leading-relaxed">
            ตัวแทนจาก Fufong Labs ได้รับเกียรติเป็นหนึ่งในคณะกรรมการจัดงานและประเมินผลงานวิชาการ (Program Committee) 
            ร่วมกับสถาบันชั้นนำระดับโลก เช่น มหาวิทยาลัยชตุทการ์ท เป็นเครื่องยืนยันถึงขีดความสามารถด้านวิศวกรรมประสิทธิภาพซอฟต์แวร์
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Highlight Research</h2>
          <ul className="space-y-6">
            <li className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold text-gray-200">Julia Cloud Matrix Machine</h3>
              <p className="text-gray-400 mt-2">เฟรมเวิร์กเพื่อเพิ่มประสิทธิภาพการประมวลผลเมทริกซ์แบบไดนามิกบนสถาปัตยกรรมมัลติคอร์ในระบบคลาวด์</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-200">JParEnt: Parallel Entropy Decoding</h3>
              <p className="text-gray-400 mt-2">การแก้ปัญหาความซับซ้อนในการถอดรหัสข้อมูลแบบคู่ขนานสำหรับ JPEG Decompression</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}