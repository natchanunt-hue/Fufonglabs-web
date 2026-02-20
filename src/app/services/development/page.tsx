import Link from "next/link";

export default function DevelopmentPage() {
  return (
    <div>
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-flex items-center gap-2 transition-colors">
        <span>&larr;</span> Back to Home
      </Link>
      
      <div className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-600/20 rounded-full blur-[80px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Custom Software Development</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          บริการพัฒนาระบบซอฟต์แวร์สั่งทำพิเศษ (Custom-built) ตั้งแต่หน้าบ้าน (Frontend) ที่ลื่นไหล ไปจนถึงระบบหลังบ้าน (Backend) และ API ที่ทรงพลัง
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Frontend & UX/UI</h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm">
            สร้างสรรค์ส่วนติดต่อผู้ใช้งานที่ทันสมัย ตอบสนองรวดเร็วระดับเสี้ยววินาที ด้วยเฟรมเวิร์กอย่าง React.js และ Next.js ผสานการออกแบบที่เน้น User Experience เป็นศูนย์กลาง
          </p>
        </div>

        <div className="bg-[#111] p-10 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Backend & API Systems</h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm">
            วางโครงสร้างระบบประมวลผลทางอินเทอร์เน็ตที่แข็งแกร่ง ปลอดภัย และพร้อมเชื่อมต่อกับเซอร์วิสภายนอกผ่าน RESTful หรือ GraphQL API ตามมาตรฐานสากล
          </p>
        </div>
      </div>
    </div>
  );
}