import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">&larr; Back to Home</Link>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Fufong Labs</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
        ร่วมเป็นส่วนหนึ่งของศูนย์กลางนวัตกรรม ทำงานแบบยืดหยุ่น และใช้ Tech Stack ที่ทันสมัยที่สุด
      </p>

      {/* Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
          <p className="font-semibold">Flexible Hours</p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
          <p className="font-semibold">Hybrid / WFH</p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
          <p className="font-semibold">Health Insurance</p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
          <p className="font-semibold">Performance Bonus</p>
        </div>
      </div>

      {/* Open Roles */}
      <h2 className="text-3xl font-bold mb-6">Open Roles</h2>
      <div className="space-y-6">
        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">Active</span>
          </div>
          <p className="text-gray-400 mb-4">พัฒนา Web Application แบบ Hybrid โดยใช้เทคโนโลยีสมัยใหม่และการจัดการ Deployment บนคลาวด์</p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
            <span className="bg-white/10 px-2 py-1 rounded">React.js</span>
            <span className="bg-white/10 px-2 py-1 rounded">Next.js</span>
            <span className="bg-white/10 px-2 py-1 rounded">TypeScript</span>
            <span className="bg-white/10 px-2 py-1 rounded">Docker</span>
            <span className="bg-white/10 px-2 py-1 rounded">Vercel</span>
          </div>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all">
          <h3 className="text-2xl font-bold mb-4">Content Creator & Multimedia Specialist</h3>
          <p className="text-gray-400">
            สร้างสรรค์คอนเทนต์วิดีโอสั้นและ Motion Graphic สื่อสารเรื่องราวเทคโนโลยีที่ซับซ้อนให้เข้าใจง่าย บนแพลตฟอร์ม TikTok, Facebook
          </p>
        </div>
      </div>
    </div>
  );
}